// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#0066CC", // Color principal, un tono de azul profesional
//           light: "#3399FF",
//           dark: "#004C99",
//         },
//         secondary: {
//           DEFAULT: "#2E2E2E", // Color secundario, un gris oscuro
//           light: "#545454",
//           dark: "#1A1A1A",
//         },
//         accent: {
//           DEFAULT: "#FF6B00", // Color de acento, un naranja
//           light: "#FF8C33",
//           dark: "#CC5500",
//         },
//         background: {
//           DEFAULT: "#F5F7FA", // Color de fondo, un gris muy claro
//           dark: "#0F172A", // Para modo oscuro
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "ui-sans-serif", "system-ui"],
//         heading: ["Montserrat", "ui-sans-serif", "system-ui"],
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066CC", // Color principal, un tono de azul profesional
          light: "#3399FF",
          dark: "#004C99",
        },
        secondary: {
          DEFAULT: "#2E2E2E", // Color secundario, un gris oscuro
          light: "#545454",
          dark: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#FF6B00", // Color de acento, un naranja
          light: "#FF8C33",
          dark: "#CC5500",
        },
        background: {
          DEFAULT: "#F5F7FA", // Color de fondo claro
          dark: "#0F172A",   // Color de fondo oscuro
        },
        light: "#FFFFFF",    // Color para texto en modo oscuro
        dark: "#121212",     // Color para fondos en modo oscuro
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      backgroundColor: {
        primary: "#0066CC",
        dark: "#0F172A",
      },
      textColor: {
        primary: "#0066CC",
        secondary: "#2E2E2E",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;