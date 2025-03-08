export interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    technologies?: string[];
  }
  

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Responsable del Departamento de Informática",
    company: "OnVentanas",
    location: "Madrid",
    period: "Febrero 2022 - Presente",
    responsibilities: [
      "Desarrollo de aplicaciones móviles con Ionic para optimizar procesos internos.",
      "Creación de APIs en C# .NET, incluyendo una API específica para la gestión del almacén de la fábrica.",
      "Desarrollo de una librería en C# para PrefGest, el software utilizado por la empresa.",
      "Implementación de integraciones con maquinaria mediante XSLT, facilitando su compatibilidad con el software de la compañía.",
      "Mantenimiento y mejora del CRM y otras aplicaciones internas, asegurando su correcto funcionamiento y evolución."
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
  },
  {
    id: 2,
    title: "Desarrollador Full Stack",
    company: "TPF Ingeniería",
    location: "Madrid",
    period: "Septiembre 2020 - Febrero 2022",
    responsibilities: [
      "Mantenimiento y desarrollo de módulos de la web interna de la empresa.",
      "Migración de una aplicación de Visual Basic 6.0 a C#, mejorando su rendimiento y compatibilidad.",
      "Desarrollo y optimización de módulos en PHP y C#, incluyendo la generación de informes para la dirección."
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
  },
  {
    id: 3,
    title: "Becario como desarrollador",
    company: "Sotec Consulting",
    location: "Madrid",
    period: "Febrero 2020 - Agosto 2020",
    responsibilities: [
      "Mantenimiento y mejora de aplicaciones para clientes del sector bancario y legal en ASP.NET.",
      "Desarrollo del frontend de la aplicación móvil e-Time, utilizada para la gestión del tiempo y nóminas de los trabajadores."
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
  }
];
