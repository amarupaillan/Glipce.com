#!/usr/bin/env node

/**
 * Script para publicar artículos a WordPress vía API REST
 * 
 * Este script toma los artículos generados en formato JSON y los publica
 * automáticamente en un sitio WordPress utilizando su API REST.
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
const { program } = require('commander');

// Cargar variables de entorno
dotenv.config();

// Configurar opciones de línea de comandos
program
  .name('publish-to-wordpress')
  .description('Publica artículos generados en WordPress')
  .requiredOption('--input <directory>', 'Directorio con los artículos generados')
  .option('--output <directory>', 'Directorio para guardar información de los artículos publicados')
  .option('--status <status>', 'Estado de los artículos publicados (draft, publish, future)', 'draft')
  .option('--limit <number>', 'Número máximo de artículos a publicar', parseInt, 10)
  .option('--categories <ids>', 'IDs de categorías separados por comas')
  .option('--tags <ids>', 'IDs de etiquetas separados por comas')
  .option('--author <id>', 'ID del autor', parseInt, 1)
  .parse(process.argv);

const options = program.opts();

// Configuración de WordPress
const getWpConfig = () => {
  let config = {
    apiUrl: process.env.WP_API_URL,
    username: process.env.WP_USERNAME,
    password: process.env.WP_APP_PASSWORD,
  };

  // Si no hay configuración en variables de entorno, buscar en archivo de configuración
  if (!config.apiUrl || !config.username || !config.password) {
    try {
      const configPath = path.join(__dirname, 'config', 'wordpress_config.json');
      if (fs.existsSync(configPath)) {
        const configFile = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        config = { ...config, ...configFile };
      }
    } catch (error) {
      console.error('Error al cargar configuración de WordPress:', error.message);
    }
  }

  // Verificar configuración
  if (!config.apiUrl) {
    throw new Error('URL de la API de WordPress no configurada');
  }
  if (!config.username || !config.password) {
    throw new Error('Credenciales de WordPress no configuradas');
  }

  return config;
};

// Función para convertir el artículo JSON al formato de WordPress
const convertToWordPressFormat = (article, options) => {
  // Procesar las secciones para construir el contenido
  let content = '';
  
  article.sections.forEach(section => {
    if (section.type === 'introduction') {
      content += `${section.content}\n\n`;
    } else if (section.type === 'section') {
      content += `<h2>${section.heading}</h2>\n${section.content}\n\n`;
    } else if (section.type === 'conclusion') {
      content += `<h2>Conclusión</h2>\n${section.content}\n\n`;
    } else if (section.type === 'cta') {
      content += `<div class="cta-box">\n${section.content}\n</div>\n\n`;
    }
  });

  // Construir objeto para la API de WordPress
  const postData = {
    title: article.title,
    content,
    status: options.status,
    slug: article.slug,
    excerpt: article.meta_description,
    author: options.author,
    meta: {
      _yoast_wpseo_metadesc: article.meta_description,
      _yoast_wpseo_focuskw: article.keywords[0] || ''
    },
    comment_status: 'open'
  };

  // Añadir categorías si se especificaron
  if (options.categories) {
    postData.categories = options.categories.split(',').map(id => parseInt(id.trim()));
  }

  // Añadir etiquetas si se especificaron
  if (options.tags) {
    postData.tags = options.tags.split(',').map(id => parseInt(id.trim()));
  }
  
  return postData;
};

// Función para publicar un artículo en WordPress
const publishToWordPress = async (article, wpConfig) => {
  try {
    const authToken = Buffer.from(`${wpConfig.username}:${wpConfig.password}`).toString('base64');
    
    const response = await axios.post(
      `${wpConfig.apiUrl}/wp/v2/posts`,
      article,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${authToken}`
        }
      }
    );
    
    return {
      success: true,
      id: response.data.id,
      url: response.data.link,
      status: response.data.status
    };
  } catch (error) {
    console.error('Error al publicar en WordPress:', error.message);
    
    if (error.response) {
      console.error('Respuesta del servidor:', error.response.data);
    }
    
    return {
      success: false,
      error: error.message,
      details: error.response ? error.response.data : null
    };
  }
};

// Función para guardar información de publicación
const savePublicationInfo = (articleFile, publicationInfo, outputDir) => {
  try {
    const articleFileName = path.basename(articleFile);
    const infoFileName = articleFileName.replace('.json', '-published.json');
    const infoFilePath = path.join(outputDir, infoFileName);
    
    // Crear directorio de salida si no existe
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Cargar artículo original
    const article = JSON.parse(fs.readFileSync(articleFile, 'utf8'));
    
    // Combinar información
    const publishData = {
      ...article,
      publication: {
        ...publicationInfo,
        publishedAt: new Date().toISOString()
      }
    };
    
    // Guardar archivo con información de publicación
    fs.writeFileSync(infoFilePath, JSON.stringify(publishData, null, 2));
    
    return infoFilePath;
  } catch (error) {
    console.error('Error al guardar información de publicación:', error.message);
    return null;
  }
};

// Función principal
const main = async () => {
  try {
    // Verificar directorio de entrada
    if (!fs.existsSync(options.input)) {
      console.error(`El directorio de entrada ${options.input} no existe.`);
      process.exit(1);
    }
    
    // Configurar directorio de salida
    const outputDir = options.output || path.join(options.input, 'published');
    
    // Obtener configuración de WordPress
    const wpConfig = getWpConfig();
    console.log(`Configuración de WordPress cargada para: ${wpConfig.apiUrl}`);
    
    // Obtener lista de archivos JSON en el directorio de entrada
    const files = fs.readdirSync(options.input)
      .filter(file => file.endsWith('.json') && !file.includes('-published'));
    
    console.log(`Se encontraron ${files.length} artículos para publicar.`);
    
    // Limitar número de archivos a procesar
    const filesToProcess = options.limit ? files.slice(0, options.limit) : files;
    
    console.log(`Se procesarán ${filesToProcess.length} artículos.`);
    
    // Procesar cada archivo
    let successCount = 0;
    let failureCount = 0;
    
    for (const [index, file] of filesToProcess.entries()) {
      const filePath = path.join(options.input, file);
      console.log(`\nProcesando (${index + 1}/${filesToProcess.length}): ${file}`);
      
      try {
        // Leer y parsear el archivo
        const article = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Convertir al formato de WordPress
        const wpArticle = convertToWordPressFormat(article, options);
        
        // Publicar en WordPress
        console.log(`Publicando "${article.title}"...`);
        const result = await publishToWordPress(wpArticle, wpConfig);
        
        if (result.success) {
          console.log(`✅ Publicado correctamente. ID: ${result.id}`);
          console.log(`   URL: ${result.url}`);
          console.log(`   Estado: ${result.status}`);
          
          // Guardar información de publicación
          const infoPath = savePublicationInfo(filePath, result, outputDir);
          if (infoPath) {
            console.log(`   Información guardada en: ${path.basename(infoPath)}`);
          }
          
          successCount++;
        } else {
          console.log(`❌ Error al publicar: ${result.error}`);
          failureCount++;
        }
        
        // Pausa para evitar límites de rate
        if (index < filesToProcess.length - 1) {
          console.log('Esperando antes de la siguiente publicación...');
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        console.error(`Error al procesar ${file}:`, error.message);
        failureCount++;
      }
    }
    
    console.log(`\nProceso completado.`);
    console.log(`✅ Artículos publicados correctamente: ${successCount}`);
    console.log(`❌ Artículos con errores: ${failureCount}`);
  } catch (error) {
    console.error('Error en el proceso de publicación:', error.message);
    process.exit(1);
  }
};

// Ejecutar función principal
main().catch(error => {
  console.error('Error fatal:', error);
  process.exit(1);
}); 