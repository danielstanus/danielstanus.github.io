// src/data/constants.ts
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const SITE = {
  name: 'Daniel Stanus',
  title: 'Daniel Stanus | Full Stack Developer',
  description: 'Full Stack Developer with more than 8 years of experience specializing in .NET, PHP, React and Angular technologies.',
  url: 'https://danielstanus.github.io',
};

export const SOCIALS = [
  {
    name: 'Email',
    url: 'mailto:stanusdaniel@gmail.com',
    icon: FaEnvelope,
    title: 'Email',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/danielstanus', // Adjust to your actual LinkedIn URL
    icon: FaLinkedin,
    title: 'LinkedIn',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/danielstanus',
    icon: FaGithub,
    title: 'GitHub',
  },
  {
    name: 'CV',
    url: '/CV-DanielStanus.pdf', // This assumes you'll put your CV in the public folder
    icon: FaFileAlt,
    title: 'Download CV',
  },
];

// src/data/portfolio.ts
export type Job = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  techStack?: string[];
};

export type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  techStack: string[];
};

export type Skill = {
  category: string;
  items: string[];
};

export const EXPERIENCE: Job[] = [
  {
    title: 'Responsable del Departamento de Informática',
    company: 'OnVentanas',
    location: 'Madrid',
    date: 'Feb 2022 - Presente',
    description: [
      'Desarrollo de aplicaciones móviles con Ionic para optimizar procesos internos.',
      'Creación de APIs en C# .NET, incluyendo una API específica para la gestión del almacén de la fábrica.',
      'Desarrollo de una librería en C# para PrefGest, el software utilizado por la empresa.',
      'Implementación de integraciones con maquinaria mediante XSLT, facilitando su compatibilidad con el software de la compañía.',
      'Mantenimiento y mejora del CRM y otras aplicaciones internas, asegurando su correcto funcionamiento y evolución.',
    ],
    techStack: ['C#', '.NET', 'Ionic', 'XSLT', 'API Development'],
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'TPF Ingeniería',
    location: 'Madrid',
    date: 'Sep 2020 - Feb 2022',
    description: [
      'Mantenimiento y desarrollo de módulos de la web interna de la empresa.',
      'Migración de una aplicación de Visual Basic 6.0 a C#, mejorando su rendimiento y compatibilidad.',
      'Desarrollo y optimización de módulos en PHP y C#, incluyendo la generación de informes para la dirección.',
    ],
    techStack: ['C#', 'PHP', 'Visual Basic', 'Web Development'],
  },
  {
    title: 'Becario como desarrollador',
    company: 'Sotec Consulting',
    location: 'Madrid',
    date: 'Feb 2020 - Ago 2020',
    description: [
      'Mantenimiento y mejora de aplicaciones para clientes del sector bancario y legal en ASP.NET.',
      'Desarrollo del frontend de la aplicación móvil e-Time, utilizada para la gestión del tiempo y nóminas de los trabajadores.',
    ],
    techStack: ['ASP.NET', 'Mobile Development', 'Frontend'],
  },
];

export const EDUCATION = [
  {
    degree: 'Máster en Desarrollo Ágil de Software para la Web',
    institution: 'Universidad de Alcalá',
    location: 'Alcalá de Henares, Madrid (España)',
    date: '2023 - 2024',
  },
  {
    degree: 'Grado en Ingeniería en Sistemas de Información',
    institution: 'Universidad de Alcalá',
    location: 'Alcalá de Henares, Madrid (España)',
    date: '2017 - 2022',
  },
  {
    degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'IES Alonso de Avellaneda',
    location: 'Alcalá de Henares, Madrid (España)',
    date: '2014 - 2016',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Lenguajes de programación',
    items: ['C#', 'Python', 'Java', 'Kotlin', 'Swift', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    category: 'Frameworks y Librerías',
    items: ['.NET', 'React', 'Angular', 'Ionic', 'Express', 'ASP.NET'],
  },
  {
    category: 'Bases de Datos',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'],
  },
  {
    category: 'Infraestructura y DevOps',
    items: ['Docker', 'Kubernetes', 'Microservicios', 'Azure AI Studio', 'Vercel'],
  },
];

export const LANGUAGES = [
  { language: 'Español', level: 'Nativo' },
  { language: 'Inglés', level: 'Intermedio' },
  { language: 'Rumano', level: 'Nativo' },
];

export const PROJECTS: Project[] = [
  {
    title: 'OnVentanas Mobile App',
    description: 'Aplicación móvil desarrollada con Ionic para optimizar procesos internos de la empresa.',
    techStack: ['Ionic', 'Angular', 'TypeScript', 'REST API'],
  },
  {
    title: 'Warehouse Management API',
    description: 'API en C# .NET para la gestión del almacén de la fábrica de OnVentanas.',
    techStack: ['C#', '.NET', 'SQL Server', 'REST API'],
  },
  {
    title: 'PrefGest Integration Library',
    description: 'Biblioteca en C# para integrar y extender las funcionalidades del software PrefGest.',
    techStack: ['C#', '.NET', 'XSLT'],
  },
  {
    title: 'e-Time Mobile Frontend',
    description: 'Frontend de la aplicación móvil e-Time para gestión del tiempo y nóminas de trabajadores.',
    techStack: ['React Native', 'JavaScript', 'REST API'],
  },
];

export const SOFT_SKILLS = [
  'Liderazgo y gestión de equipos',
  'Capacidad de resolución de problemas de manera eficiente',
  'Trabajo en equipo y comunicación efectiva',
  'Autodidacta y proactivo',
  'Adaptabilidad a nuevas tecnologías',
  'Creatividad',
];