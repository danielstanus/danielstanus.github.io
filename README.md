<div align="center">

# 🚀 Portafolio — Daniel Calin Stanus

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

**Portafolio personal desarrollado con Next.js 16, React 19 y TypeScript — con animaciones fluidas, soporte multiidioma, modo oscuro y despliegue automático en GitHub Pages.**

[🌐 Ver en vivo](https://danielstanus.github.io) •
[📦 Instalación](#-instalación) •
[⚙️ Scripts](#️-scripts) •
[🏗️ Estructura](#️-estructura) •
[🚀 Despliegue](#-despliegue)

</div>

---

## 📖 Descripción

Portafolio profesional construido desde cero con las últimas versiones de Next.js y React. Incluye animaciones de scroll con **Framer Motion**, soporte completo para **modo oscuro/claro** con `next-themes`, diseño totalmente responsive con **Tailwind CSS**, **internacionalización en 3 idiomas** (Español, Inglés, Rumano) y despliegue continuo en **GitHub Pages** mediante `gh-pages`.

---

## ✨ Características

- ⚡ **Next.js 16** con Turbopack para desarrollo ultrarrápido
- ⚛️ **React 19** con las últimas APIs
- 🎨 **Tailwind CSS 3.4** para estilos utilitarios y diseño responsive
- 🌙 **Modo oscuro/claro** con persistencia en `localStorage`
- 🌍 **Multiidioma** — Español, Inglés y Rumano con detección automática del navegador
- 🎞️ **Animaciones de scroll** con Framer Motion (`whileInView`, stagger, `easeInOutCubic`)
- 📊 **Contadores animados** de estadísticas en la sección Hero
- 🖱️ **Cursor personalizado** con efecto de seguimiento suave
- 📜 **Scroll suave premium** con easing cúbico al navegar entre secciones
- 🖼️ **Zoom de imágenes** con `react-inner-image-zoom`
- 🔤 **TypeScript 5.7** para tipado estático
- 🔍 **SEO completo** — meta tags, OpenGraph, Twitter Cards, sitemap.xml y datos estructurados JSON-LD
- 🚀 **Despliegue automático** en GitHub Pages

---

## 📋 Prerrequisitos

- **Node.js** >= 18.x
- **npm** >= 9.x

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/danielstanus/danielstanus.github.io.git
cd danielstanus.github.io

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ⚙️ Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack |
| `npm run build` | Genera la build de producción |
| `npm run start` | Inicia el servidor de producción local |
| `npm run deploy` | Compila y despliega en GitHub Pages |
| `npm run lint` | Ejecuta el linter de Next.js |
| `node scripts/generate-favicons.js` | Regenera todos los tamaños de favicon desde `public/favicon.png` |

---

## 🏗️ Estructura

```
mi-portafolio/
├── src/
│   ├── app/            # Páginas, layout y estilos globales (App Router)
│   │   ├── layout.tsx  # Layout raíz con metadatos SEO y proveedores
│   │   ├── page.tsx    # Página principal con todas las secciones
│   │   └── globals.css # Variables CSS y estilos base
│   ├── components/     # Componentes reutilizables
│   │   ├── Hero.tsx         # Sección de presentación + contadores animados
│   │   ├── Stats.tsx        # Contadores de estadísticas con Framer Motion
│   │   ├── About.tsx        # Sección "Sobre mí"
│   │   ├── Experience.tsx   # Trayectoria profesional
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   ├── Education.tsx    # Formación académica
│   │   ├── Projects.tsx     # Proyectos realizados
│   │   ├── Contact.tsx      # Formulario de contacto
│   │   ├── Header.tsx       # Navegación con scroll suave
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── ScrollReveal.tsx # Animaciones de entrada al hacer scroll
│   │   └── CustomCursor.tsx # Cursor personalizado
│   ├── context/        # Contextos de React
│   │   └── LanguageContext.tsx  # Gestión del idioma activo
│   ├── data/           # Datos estáticos del portafolio
│   │   ├── personalData.ts   # Información personal y de contacto
│   │   ├── experienceData.ts # Historial profesional
│   │   ├── projectsData.ts   # Proyectos en los 3 idiomas
│   │   ├── skillsData.ts     # Habilidades técnicas
│   │   ├── educationData.ts  # Formación académica
│   │   └── translations.ts   # Cadenas de texto para ES/EN/RO
│   ├── hooks/          # Custom hooks de React
│   │   └── useAudio.ts # Gestión del audio de fondo
│   └── utils/          # Utilidades
│       └── smoothScroll.ts  # Función de scroll suave con easing cúbico
├── public/             # Archivos estáticos
│   ├── favicon.png          # Favicon fuente (origen para generar variantes)
│   ├── favicon.ico          # Favicon generado (32x32)
│   ├── favicon-16x16.png    # Favicon 16px
│   ├── favicon-32x32.png    # Favicon 32px
│   ├── apple-touch-icon.png # Icono Apple (180x180)
│   ├── site.webmanifest     # Manifiesto PWA
│   ├── images/              # Imágenes del portafolio
│   ├── pdf/                 # CV descargable en PDF
│   └── audio/               # Audio de fondo del Hero
├── scripts/
│   └── generate-favicons.js # Generador de variantes de favicon con Sharp
└── out/                # Build de producción (generado con npm run build)
```

---

## 🚀 Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** con el siguiente comando:

```bash
npm run deploy
```

Esto ejecuta `next build` exportando el sitio estático a la carpeta `out/` y luego publica el contenido con `gh-pages`.

🌐 **URL en producción:** [https://danielstanus.github.io](https://danielstanus.github.io)

---

## 🛠️ Tecnologías principales

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 | Framework principal (App Router, SSG) |
| React | 19 | Librería de UI |
| TypeScript | 5.7 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos y diseño responsive |
| Framer Motion | 12 | Animaciones de scroll y contadores |
| next-themes | 0.4 | Modo oscuro/claro |
| react-scroll | 1.9 | Scroll suave entre secciones |
| react-icons | 5.5 | Iconografía |
| react-inner-image-zoom | 4.0 | Zoom de imágenes de proyectos |
| sharp | 0.33 | Generación de variantes de favicon |
| gh-pages | 6.3 | Despliegue en GitHub Pages |

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

Hecho con ❤️ por **Daniel Calin Stanus**

[🌐 danielstanus.github.io](https://danielstanus.github.io) · [💼 LinkedIn](https://www.linkedin.com/in/daniel-calin-stanus-1aa6a0b5) · [💻 GitHub](https://github.com/danielstanus)

</div>
