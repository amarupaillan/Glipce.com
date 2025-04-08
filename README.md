# Glipce - Sitio Web de Consultoría de IA y Automatización

Sitio web optimizado para SEO para Glipce, una consultora de automatización e inteligencia artificial.

## Descripción

Este proyecto es un sitio web moderno y responsive para una empresa de consultoría especializada en automatización de procesos e inteligencia artificial. El sitio está estructurado en secciones modulares que facilitan su mantenimiento y actualización.

## Características

- Diseño responsive optimizado para móviles y escritorio
- Estructura modular por componentes
- Optimización para SEO
- Animaciones y transiciones fluidas
- Alto rendimiento

## Estructura del proyecto

```
/
├── public/                  # Archivos estáticos
├── src/
│   ├── assets/              # Recursos de la aplicación
│   │   ├── images/          # Imágenes e iconos
│   │   │   ├── logos/       # Logos de empresas
│   │   │   ├── icons/       # Iconos para características
│   │   │   ├── hero/        # Imágenes de sección hero
│   │   │   ├── testimonials/# Imágenes de testimonios
│   │   │   ├── interface/   # Capturas de pantalla
│   │   │   ├── cta/         # Elementos decorativos
│   │   │   └── social/      # Iconos de redes sociales
│   ├── components/          # Componentes de la interfaz
│   │   ├── ui/              # Componentes UI básicos
│   │   └── sections/        # Secciones de la página
│   ├── screens/             # Pantallas principales
│   └── lib/                 # Utilidades y ayudantes
├── tailwind.config.js       # Configuración de Tailwind CSS
├── tailwind.css             # Estilos globales
└── index.html               # Punto de entrada HTML
```

## Prerrequisitos

- Node.js 14.0.0 o superior
- npm 6.0.0 o superior

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/glipce-website.git
cd glipce-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre http://localhost:5173 para ver el sitio en el navegador.

## Imágenes

Para usar imágenes en el proyecto, consulta el archivo `src/assets/images/README.md` para ver la lista completa de imágenes necesarias y sus ubicaciones.

## Construir para producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

## Optimización para SEO

El sitio incluye las siguientes optimizaciones para SEO:

- Metaetiquetas completas con descripciones y palabras clave
- Estructura HTML semántica
- Open Graph y metadatos para compartir en redes sociales
- URLs amigables con IDs de sección
- Imágenes optimizadas con atributos alt
- Textos descriptivos y relevantes

## Licencia

[MIT](LICENSE)

## Contacto

Para cualquier consulta sobre este proyecto, por favor contacta a [tuemail@ejemplo.com](mailto:tuemail@ejemplo.com).
