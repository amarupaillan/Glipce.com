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

## Key Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dark/Light Mode**: Complete theme system with customized color schemes
- **Multilingual Support**: i18n integration for Spanish and English
- **Progressive Form**: Typeform-style form with step-by-step questions
- **Make.com Integration**: Automated form processing to Google Sheets

## Progressive Form + Make.com Integration Guide

This guide explains how to use the new `ProgressiveForm` component and connect it to Make.com and Google Sheets.

### Using the Progressive Form Component

The `ProgressiveForm` component is a Typeform-style form that displays one question at a time, with smooth transitions and validation.

#### Basic Example

```tsx
import { ProgressiveForm, FormStep } from '../components/forms/ProgressiveForm';

// Define form steps
const formSteps: FormStep[] = [
  {
    id: 'name',
    label: '¿Cuál es tu nombre?',
    type: 'text',
    placeholder: 'Escribe tu nombre completo',
    required: true
  },
  {
    id: 'email',
    label: '¿Cuál es tu correo electrónico?',
    type: 'email',
    placeholder: 'correo@ejemplo.com',
    required: true,
    validation: (value) => {
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return 'Por favor ingresa un correo electrónico válido';
      }
      return null;
    }
  },
  {
    id: 'service',
    label: '¿Qué servicio te interesa?',
    type: 'select',
    options: [
      { value: 'automation', label: 'Automatización de Procesos' },
      { value: 'intelligence', label: 'Inteligencia de Negocio' },
      { value: 'support', label: 'Soporte al Cliente con IA' },
      { value: 'invoices', label: 'Gestión de Facturas' },
      { value: 'social', label: 'Social Media Viral Management' }
    ],
    required: true
  },
  {
    id: 'message',
    label: '¿En qué podemos ayudarte?',
    type: 'textarea',
    placeholder: 'Describe brevemente tu proyecto o consulta',
    required: true
  }
];

// Handle form submission
const handleSubmit = async (formData: Record<string, string | string[]>) => {
  console.log('Form submitted:', formData);
  // Custom logic if needed beyond webhook
};

// Render the form
const ContactForm = () => {
  return (
    <ProgressiveForm
      steps={formSteps}
      onSubmit={handleSubmit}
      webhookUrl="https://hook.make.com/your-webhook-id"
      className="max-w-2xl mx-auto"
    />
  );
};
```

#### Form Step Options

Each step in the form can have the following properties:

- `id` (required): Unique identifier for the field
- `label` (required): Question displayed to the user
- `type` (required): Input type ('text', 'email', 'textarea', 'select', 'tel', 'radio', 'checkbox')
- `placeholder` (optional): Placeholder text for the input
- `required` (optional): Whether the field is required
- `validation` (optional): Custom validation function
- `options` (required for 'select', 'radio', 'checkbox'): Array of options

### Setting Up n8n Integration

#### 1. Create an n8n Account

- Sign up at [n8n.io](https://www.n8n.io/) - puedes usar la versión gratuita para empezar
- Confirma tu correo electrónico y accede a tu cuenta
- Si prefieres instalación local, también puedes seguir las instrucciones de instalación en su documentación

#### 2. Create a New Workflow (Crear un Nuevo Flujo de Trabajo)

1. En el panel principal, haz clic en el botón azul "Create new workflow"
2. Escribe un nombre descriptivo como "Formulario de Contacto"
3. Haz clic en "Save" para guardar el flujo de trabajo vacío

#### 3. Set Up the Webhook (Configurar el Webhook)

1. En el área de trabajo vacía, haz clic en el botón "+" grande
2. En el panel de búsqueda, escribe "webhook" y selecciona el nodo "Webhook"
3. Haz clic en "Add Webhook" en la configuración
4. Mantén la configuración predeterminada (método HTTP: POST)
5. Verás una URL generada en la sección "Webhook URL" - cópiala (la necesitarás para tu componente de formulario)
6. Haz clic en "Save" para guardar la configuración del webhook

#### 4. Add Google Sheets Action (Añadir Acción de Google Sheets)

1. Haz clic en el pequeño círculo a la derecha del nodo Webhook y arrastra para crear una conexión
2. En el panel de búsqueda, escribe "Google Sheets" y selecciona el nodo
3. Haz clic en "Add Credential" para conectar tu cuenta de Google
4. Sigue las instrucciones para autorizar n8n a acceder a tus Google Sheets
5. Una vez conectado, selecciona "Append Row" en el menú desplegable "Operation"

#### 5. Configure Google Sheets Connection (Configurar Conexión con Google Sheets)

1. En "Spreadsheet", haz clic en el menú desplegable y selecciona tu hoja de cálculo (o crea una nueva)
2. En "Sheet", selecciona la hoja específica donde quieres que se guarden los datos
3. En la sección "Columns / Values", haz clic en "Add Value" para cada columna:
   - Escribe el nombre de la columna (por ejemplo, "Nombre", "Email", etc.)
   - Haz clic en el botón de datos (icono de llave inglesa) junto a cada campo
   - En el panel que aparece, navega a "Webhook > Output > JSON > [campo]"
   - Por ejemplo, para el nombre: selecciona "Webhook > Output > JSON > name"
4. Haz clic en "Execute Node" para probar la configuración (sin datos reales aún)

#### 6. Test the Integration (Probar la Integración)

1. Haz clic en el botón "Execute Workflow" en la parte superior
2. Ahora tu webhook está activo y listo para recibir datos
3. Actualiza tu componente de formulario con la URL del webhook copiada anteriormente
4. Completa el formulario en tu sitio web para enviar datos de prueba
5. Vuelve a n8n y verifica que el flujo de trabajo se haya ejecutado correctamente
6. Comprueba tu hoja de Google para confirmar que los datos aparecen correctamente

#### 7. Activate the Workflow (Activar el Flujo de Trabajo)

1. Una vez que hayas verificado que todo funciona, haz clic en el interruptor "Active" en la esquina superior derecha
2. Guarda el flujo de trabajo haciendo clic en "Save"
3. Tu flujo de trabajo ahora está activo y procesará automáticamente los envíos del formulario

### Webhook Data Structure (Estructura de Datos del Webhook)

El formulario envía datos a n8n en este formato:

## Technical Documentation

### Project Structure

- `src/components/forms/ProgressiveForm.tsx`: The Typeform-style form component
- `src/components/ui/theme-toggle.tsx`: Dark/light mode toggle component
- `src/lib/theme.css`: Theme variables and styling
- `src/lib/i18n.ts`: Internationalization configuration

### Theme Configuration

The project uses CSS variables for theming, defined in `src/lib/theme.css`. The main color scheme includes:

- Primary color: Purple (#8a2be2)
- Background: White (light mode) / Dark gray (dark mode)
- Text: Dark gray (light mode) / White (dark mode)

To modify the theme colors, edit the CSS variables in `src/lib/theme.css`.
