<div align="center">

# 🚀 Mi Portafolio — Daniel Stanus

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

**Portafolio personal desarrollado con Next.js 15, React 19 y TypeScript — con animaciones fluidas, modo oscuro y despliegue automático en GitHub Pages.**

[🌐 Ver en vivo](https://danielstanus.github.io/mi-portafolio) •
[📦 Instalación](#-instalación) •
[⚙️ Scripts](#️-scripts) •
[🏗️ Estructura](#️-estructura) •
[🚀 Despliegue](#-despliegue)

</div>

---

## 📖 Descripción

Portafolio personal construido desde cero con las últimas versiones de Next.js y React. Incluye animaciones con **Framer Motion**, soporte para **modo oscuro** con `next-themes`, diseño responsive con **Tailwind CSS** y despliegue continuo en **GitHub Pages** mediante `gh-pages`.

---

## ✨ Características

- ⚡ **Next.js 15** con Turbopack para desarrollo ultrarrápido
- ⚛️ **React 19** con las últimas APIs
- 🎨 **Tailwind CSS 3.4** para estilos utilitarios
- 🌙 **Modo oscuro/claro** con `next-themes`
- 🎞️ **Animaciones fluidas** con Framer Motion
- 📄 **Generación de PDF** con `pdf-lib`
- 🖼️ **Zoom de imágenes** con `react-inner-image-zoom`
- 🔤 **TypeScript 5.7** para tipado estático
- 🚀 **Despliegue automático** en GitHub Pages

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/danielstanus/danielstanus.github.io.git
cd mi-portafolio

# Instalar dependencias
npm install
```

---

## ⚙️ Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack |
| `npm run build` | Genera la build de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run deploy` | Compila y despliega en GitHub Pages |
| `npm run lint` | Ejecuta el linter de Next.js |

---

## 🏗️ Estructura

```
mi-portafolio/
├── src/
│   ├── app/           # Páginas y layouts (App Router)
│   ├── components/    # Componentes reutilizables
│   ├── data/          # Datos estáticos del portafolio
│   └── hooks/         # Custom hooks de React
├── public/            # Archivos estáticos
├── out/               # Build de producción (GitHub Pages)
└── scripts/           # Scripts auxiliares
```

---

## 🚀 Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** con el siguiente comando:

```bash
npm run deploy
```

Esto ejecuta `next build` exportando a la carpeta `out/` y luego publica el contenido con `gh-pages`.

🌐 **URL en producción:** [https://danielstanus.github.io/mi-portafolio](https://danielstanus.github.io/mi-portafolio)

---

## 🛠️ Tecnologías principales

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15 | Framework principal |
| React | 19 | UI |
| TypeScript | 5.7 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos |
| Framer Motion | 12 | Animaciones |
| next-themes | 0.4 | Modo oscuro |
| pdf-lib | 1.17 | Generación de CV en PDF |
| react-icons | 5.5 | Iconografía |
| gh-pages | 6.3 | Despliegue en GitHub Pages |

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

Hecho con ❤️ por **Daniel Stanus**

</div>
