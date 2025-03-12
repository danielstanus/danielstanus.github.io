// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: {
//           DEFAULT: 'rgb(var(--background))',
//           secondary: 'rgb(var(--background-secondary))',
//         },
//         foreground: {
//           DEFAULT: 'rgb(var(--foreground))',
//           secondary: 'rgb(var(--foreground-secondary))',
//         },
//         primary: {
//           DEFAULT: 'rgb(var(--primary))',
//           foreground: 'rgb(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'rgb(var(--secondary))',
//           foreground: 'rgb(var(--secondary-foreground))',
//         },
//         accent: {
//           DEFAULT: 'rgb(var(--accent))',
//           foreground: 'rgb(var(--accent-foreground))',
//         },
//         muted: {
//           DEFAULT: 'rgb(var(--muted))',
//           foreground: 'rgb(var(--muted-foreground))',
//         },
//         border: 'rgb(var(--border))',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         mono: ['Fira Code', 'monospace'],
//       },
//       animation: {
//         'blob-morph': 'blob-morph 8s ease-in-out infinite alternate',
//         'spin-slow': 'spin 20s linear infinite',
//         'spin-fast': 'spin 10s linear infinite',
//         'glitch': 'glitch 0.4s ease-in-out',
//         'glitch-1': 'glitch-1 0.8s ease-in-out infinite alternate',
//         'glitch-2': 'glitch-2 0.8s ease-in-out infinite alternate',
//         'particle-1': 'particle-float 3s ease-in-out infinite',
//         'particle-2': 'particle-float 3.5s ease-in-out infinite',
//         'particle-3': 'particle-float 4s ease-in-out infinite',
//         'particle-4': 'particle-float 4.5s ease-in-out infinite',
//         'particle-5': 'particle-float 5s ease-in-out infinite',
//         'fadeIn': 'fadeIn 0.3s ease-in-out',
//         'wave': 'wave 2s ease-in-out infinite',
//         'slideIn': 'slideIn 0.5s ease-out forwards',
//         'float': 'float 2s ease-in-out infinite',
//       },
//       keyframes: {
//         'blob-morph': {
//           '0%': { borderRadius: '30% 70% 70% 30% / 30% 40% 60% 70%' },
//           '25%': { borderRadius: '40% 60% 50% 50% / 60% 30% 70% 40%' },
//           '50%': { borderRadius: '50% 50% 30% 70% / 40% 50% 50% 60%' },
//           '75%': { borderRadius: '60% 40% 60% 40% / 70% 40% 60% 30%' },
//           '100%': { borderRadius: '30% 70% 70% 30% / 30% 40% 60% 70%' },
//         },
//         'glitch': {
//           '0%': { 
//             transform: 'translate(0)',
//             textShadow: '-2px 0 #ff0080, 2px 2px #0ff',
//             filter: 'hue-rotate(0deg)',
//           },
//           '10%': { 
//             transform: 'translate(-2px, 2px)',
//             textShadow: '2px -2px #ff0080, -2px 2px #0ff',
//             filter: 'hue-rotate(45deg)',
//           },
//           '20%': { 
//             transform: 'translate(2px, -2px)',
//             textShadow: '2px 0 #ff0080, -2px -2px #0ff',
//             filter: 'hue-rotate(90deg)',
//           },
//           '30%': { 
//             transform: 'translate(-2px, -2px)',
//             textShadow: '-2px 2px #ff0080, 2px -2px #0ff',
//             filter: 'hue-rotate(135deg)',
//           },
//           '40%': { 
//             transform: 'translate(2px, 2px)',
//             textShadow: '2px 0 #ff0080, -2px 2px #0ff',
//             filter: 'hue-rotate(180deg)',
//           },
//           '50%': { 
//             transform: 'translate(-2px, 2px)',
//             textShadow: '-2px -2px #ff0080, 2px 2px #0ff',
//             filter: 'hue-rotate(225deg)',
//           },
//           '60%': { 
//             transform: 'translate(2px, -2px)',
//             textShadow: '2px 2px #ff0080, -2px -2px #0ff',
//             filter: 'hue-rotate(270deg)',
//           },
//           '70%': { 
//             transform: 'translate(-2px, -2px)',
//             textShadow: '-2px 2px #ff0080, 2px -2px #0ff',
//             filter: 'hue-rotate(315deg)',
//           },
//           '80%': { 
//             transform: 'translate(2px, 2px)',
//             textShadow: '2px -2px #ff0080, -2px 2px #0ff',
//             filter: 'hue-rotate(360deg)',
//           },
//           '90%': { 
//             transform: 'translate(-2px, 2px)',
//             textShadow: '-2px -2px #ff0080, 2px 2px #0ff',
//             filter: 'hue-rotate(315deg)',
//           },
//           '100%': { 
//             transform: 'translate(0)',
//             textShadow: '2px 0 #ff0080, -2px -2px #0ff',
//             filter: 'hue-rotate(360deg)',
//           }
//         },
//         'glitch-1': {
//           '0%, 100%': { 
//             clipPath: 'inset(40% 0 61% 0)',
//             transform: 'translate(-2px, 2px)',
//           },
//           '20%': { 
//             clipPath: 'inset(92% 0 1% 0)',
//             transform: 'translate(1px, -3px)',
//           },
//           '40%': { 
//             clipPath: 'inset(43% 0 43% 0)',
//             transform: 'translate(-3px, 1px)',
//           },
//           '60%': { 
//             clipPath: 'inset(25% 0 58% 0)',
//             transform: 'translate(3px, -2px)',
//           },
//           '80%': { 
//             clipPath: 'inset(54% 0 7% 0)',
//             transform: 'translate(-2px, -1px)',
//           }
//         },
//         'glitch-2': {
//           '0%, 100%': { 
//             clipPath: 'inset(49% 0 40% 0)',
//             transform: 'translate(2px, -2px)',
//           },
//           '20%': { 
//             clipPath: 'inset(33% 0 58% 0)',
//             transform: 'translate(-3px, 1px)',
//           },
//           '40%': { 
//             clipPath: 'inset(73% 0 15% 0)',
//             transform: 'translate(1px, -3px)',
//           },
//           '60%': { 
//             clipPath: 'inset(86% 0 4% 0)',
//             transform: 'translate(-2px, 3px)',
//           },
//           '80%': { 
//             clipPath: 'inset(14% 0 77% 0)',
//             transform: 'translate(3px, -1px)',
//           }
//         },
//         'particle-float': {
//           '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: '0.8' },
//           '25%': { transform: 'translateY(-15px) scale(1.1) rotate(5deg)', opacity: '1' },
//           '50%': { transform: 'translateY(0) scale(0.9) rotate(0deg)', opacity: '0.6' },
//           '75%': { transform: 'translateY(15px) scale(1.1) rotate(-5deg)', opacity: '1' },
//         },
//         'fadeIn': {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         'wave': {
//           '0%, 100%': { 
//             transform: 'translateY(0)',
//           },
//           '25%': {
//             transform: 'translateY(-8px)',
//           },
//           '50%': {
//             transform: 'translateY(0)',
//           },
//           '75%': {
//             transform: 'translateY(8px)',
//           },
//         },
//         'slideIn': {
//           '0%': { 
//             opacity: '0',
//             transform: 'translateY(20px) rotate(10deg) scale(0.8)',
//           },
//           '100%': { 
//             opacity: '1',
//             transform: 'translateY(0) rotate(0deg) scale(1)',
//           },
//         },
//         'float': {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-5px)' },
//         },
//       },
//       perspective: {
//         'DEFAULT': '1000px',
//       },
//       rotate: {
//         'y-12': 'rotateY(12deg)',
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'rgb(var(--background))',
          secondary: 'rgb(var(--background-secondary))',
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground))',
          secondary: 'rgb(var(--foreground-secondary))',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        border: 'rgb(var(--border))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'blob-morph': 'blob-morph 8s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'spin-fast': 'spin 10s linear infinite',
        'glitch': 'glitch 0.4s ease-in-out',
        'glitch-1': 'glitch-1 0.8s ease-in-out infinite alternate',
        'glitch-2': 'glitch-2 0.8s ease-in-out infinite alternate',
        'particle-1': 'particle-float 3s ease-in-out infinite',
        'particle-2': 'particle-float 3.5s ease-in-out infinite',
        'particle-3': 'particle-float 4s ease-in-out infinite',
        'particle-4': 'particle-float 4.5s ease-in-out infinite',
        'particle-5': 'particle-float 5s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'wave': 'wave 2s ease-in-out infinite',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        'float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        'blob-morph': {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 40% 60% 70%' },
          '25%': { borderRadius: '40% 60% 50% 50% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '50% 50% 30% 70% / 40% 50% 50% 60%' },
          '75%': { borderRadius: '60% 40% 60% 40% / 70% 40% 60% 30%' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 40% 60% 70%' },
        },
        'glitch': {
          '0%': { 
            transform: 'translate(0)',
            textShadow: '-2px 0 #ff0080, 2px 2px #0ff',
            filter: 'hue-rotate(0deg)',
          },
          '10%': { 
            transform: 'translate(-2px, 2px)',
            textShadow: '2px -2px #ff0080, -2px 2px #0ff',
            filter: 'hue-rotate(45deg)',
          },
          '20%': { 
            transform: 'translate(2px, -2px)',
            textShadow: '2px 0 #ff0080, -2px -2px #0ff',
            filter: 'hue-rotate(90deg)',
          },
          '30%': { 
            transform: 'translate(-2px, -2px)',
            textShadow: '-2px 2px #ff0080, 2px -2px #0ff',
            filter: 'hue-rotate(135deg)',
          },
          '40%': { 
            transform: 'translate(2px, 2px)',
            textShadow: '2px 0 #ff0080, -2px 2px #0ff',
            filter: 'hue-rotate(180deg)',
          },
          '50%': { 
            transform: 'translate(-2px, 2px)',
            textShadow: '-2px -2px #ff0080, 2px 2px #0ff',
            filter: 'hue-rotate(225deg)',
          },
          '60%': { 
            transform: 'translate(2px, -2px)',
            textShadow: '2px 2px #ff0080, -2px -2px #0ff',
            filter: 'hue-rotate(270deg)',
          },
          '70%': { 
            transform: 'translate(-2px, -2px)',
            textShadow: '-2px 2px #ff0080, 2px -2px #0ff',
            filter: 'hue-rotate(315deg)',
          },
          '80%': { 
            transform: 'translate(2px, 2px)',
            textShadow: '2px -2px #ff0080, -2px 2px #0ff',
            filter: 'hue-rotate(360deg)',
          },
          '90%': { 
            transform: 'translate(-2px, 2px)',
            textShadow: '-2px -2px #ff0080, 2px 2px #0ff',
            filter: 'hue-rotate(315deg)',
          },
          '100%': { 
            transform: 'translate(0)',
            textShadow: '2px 0 #ff0080, -2px -2px #0ff',
            filter: 'hue-rotate(360deg)',
          }
        },
        'glitch-1': {
          '0%, 100%': { 
            clipPath: 'inset(40% 0 61% 0)',
            transform: 'translate(-2px, 2px)',
          },
          '20%': { 
            clipPath: 'inset(92% 0 1% 0)',
            transform: 'translate(1px, -3px)',
          },
          '40%': { 
            clipPath: 'inset(43% 0 43% 0)',
            transform: 'translate(-3px, 1px)',
          },
          '60%': { 
            clipPath: 'inset(25% 0 58% 0)',
            transform: 'translate(3px, -2px)',
          },
          '80%': { 
            clipPath: 'inset(54% 0 7% 0)',
            transform: 'translate(-2px, -1px)',
          }
        },
        'glitch-2': {
          '0%, 100%': { 
            clipPath: 'inset(49% 0 40% 0)',
            transform: 'translate(2px, -2px)',
          },
          '20%': { 
            clipPath: 'inset(33% 0 58% 0)',
            transform: 'translate(-3px, 1px)',
          },
          '40%': { 
            clipPath: 'inset(73% 0 15% 0)',
            transform: 'translate(1px, -3px)',
          },
          '60%': { 
            clipPath: 'inset(86% 0 4% 0)',
            transform: 'translate(-2px, 3px)',
          },
          '80%': { 
            clipPath: 'inset(14% 0 77% 0)',
            transform: 'translate(3px, -1px)',
          }
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: '0.8' },
          '25%': { transform: 'translateY(-15px) scale(1.1) rotate(5deg)', opacity: '1' },
          '50%': { transform: 'translateY(0) scale(0.9) rotate(0deg)', opacity: '0.6' },
          '75%': { transform: 'translateY(15px) scale(1.1) rotate(-5deg)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'wave': {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-8px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '75%': {
            transform: 'translateY(8px)',
          },
        },
        'slideIn': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) rotate(10deg) scale(0.8)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) rotate(0deg) scale(1)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      perspective: {
        'DEFAULT': '1000px',
      },
      rotate: {
        'y-12': 'rotateY(12deg)',
      },
    },
  },
  plugins: [],
};