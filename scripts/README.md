# Sistema de Automatización de Contenido para Blog

Este sistema permite automatizar la creación y publicación de contenido para blogs, utilizando fuentes virales de Internet y generación de texto con IA.

## Requisitos

### Software
- Python 3.8+
- Node.js 14+
- Make (para usar el Makefile)

### Dependencias de Python
```
pip install requests praw openai beautifulsoup4 markdown
```

### Dependencias de Node.js
```
npm install axios dotenv commander
```

## Configuración

### Estructura de directorios
```
/
├── Makefile               # Comandos para automatización
├── scripts/               # Scripts de automatización
│   ├── config/            # Archivos de configuración
│   │   ├── reddit_config.json
│   │   ├── openai_config.json
│   │   └── wordpress_config.json
│   ├── scrape_reddit.py   # Script para obtener contenido viral de Reddit
│   ├── generate_article.py # Script para generar artículos con IA
│   └── publish_to_wordpress.js # Script para publicar en WordPress
└── content/               # Directorio para almacenar contenido
    ├── scraped/           # Contenido viral obtenido
    ├── generated/         # Artículos generados
    └── published/         # Información de publicación
```

### Configuración de APIs

#### Reddit API
Crea un archivo `scripts/config/reddit_config.json`:
```json
{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "user_agent": "content_scraper_v1.0"
}
```

#### OpenAI API
Crea un archivo `scripts/config/openai_config.json`:
```json
{
  "api_key": "YOUR_OPENAI_API_KEY"
}
```

#### WordPress API
Crea un archivo `scripts/config/wordpress_config.json`:
```json
{
  "apiUrl": "https://tudominio.com/wp-json",
  "username": "tu_usuario",
  "password": "tu_application_password"
}
```

Nota: Para WordPress, debes generar una "Application Password" desde tu panel de administración.

## Uso

### Utilizando el Makefile

Para ver los comandos disponibles:
```
make help
```

Para ver información detallada:
```
make help-full
```

Para inicializar la estructura de directorios:
```
make init
```

Para ejecutar el flujo completo de trabajo:
```
make run-full-workflow
```

### Comandos individuales

#### Obtener contenido viral de Reddit
```
python scripts/scrape_reddit.py --subreddits technology,business,datascience \
  --min_score 1000 --time_filter week --limit 10 \
  --output content/scraped/reddit_trending.json
```

#### Generar artículos con IA
```
python scripts/generate_article.py --input content/scraped/reddit_trending.json \
  --output content/generated --lang es --max_articles 3 \
  --keywords "automatización,inteligencia artificial,transformación digital"
```

#### Publicar en WordPress
```
node scripts/publish_to_wordpress.js --input content/generated \
  --output content/published --status draft \
  --categories 5,10 --tags 15,20
```

## Automatización completa

Para generar y publicar contenido automáticamente, puedes configurar una tarea programada:

### Cron en Linux/macOS
```
0 8 * * 1 cd /ruta/a/tu/proyecto && make daily-content >> logs/content_generation.log 2>&1
```

### Tarea programada en Windows
Crea un archivo batch (.bat) que ejecute:
```
cd C:\ruta\a\tu\proyecto && make daily-content
```

Y programa su ejecución con el Programador de tareas de Windows.

## Personalización

### Ajuste de prompts para la IA
Puedes personalizar los prompts editando la función `create_prompt_for_article` en `scripts/generate_article.py`.

### Formato del artículo publicado
Puedes personalizar el formato de conversión a WordPress editando la función `convertToWordPressFormat` en `scripts/publish_to_wordpress.js`.

### Filtrado de contenido
Para ajustar el filtrado de contenido viral, modifica los criterios en `get_trending_posts` dentro de `scripts/scrape_reddit.py`.

## Solución de problemas

### Límites de API
- **Reddit**: Limita las solicitudes si haces muchas en poco tiempo.
- **OpenAI**: Tiene límites de tokens por minuto/hora.
- **WordPress**: Puede tener límites según tu hosting.

### Errores comunes
- **Credenciales inválidas**: Verifica tus archivos de configuración.
- **Formato JSON inconsistente**: Si la IA no genera JSON válido, revisa los logs.
- **Permisos en WordPress**: Asegúrate de que tu usuario tenga permisos para publicar. 