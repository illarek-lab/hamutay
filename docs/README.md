# Hamutay for Schools - Frontend

Este proyecto contiene la aplicación web Frontend para interactuar con la Plataforma y Tenant API de Hamutay, estructurado utilizando **React + Vite** y con un diseño puro CSS inspirado en una estética moderna con colores andinos y efecto *glassmorphism*.

## Pre-requisitos
Asegúrate de contar con Node.js (versión 20 o superior).

## Instalación

1. Clona el repositorio y ubícate en la raíz del proyecto (la misma que este documento describe):
   ```bash
   cd hamutay
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Levantar Entorno Local

Para inicializar la aplicación de desarrollo con recarga en vivo (HMR), corre el siguiente comando:

```bash
npm run dev
```

Esto levantará el servidor de Vite, que por defecto corre en `http://localhost:5173`. Abre esa dirección en tu navegador para ver la *Landing Page* Premium de Hamutay en funcionamiento.

## Estructura de Directorios

- `src/index.css`: Contiene todo el sistema de diseño central, incluyendo las variables (Theme Andino), utilidades (`.glass-card`), tipografías importadas de Google Fonts, y animaciones.
- `src/App.jsx`: Componente principal que pinta la Landing Page por defecto.
- `src/main.jsx`: Punto de inicio y renderización de React en el DOM.

## Tecnologías

- **ReactJS**: Como sistema de componentes.
- **Vite**: Como empaquetador ultrarrápido (HMR).
- **lucide-react**: Para iconografía clara y profesional.
- **Vanilla CSS**: Manteniendo completa flexibilidad estilística.
