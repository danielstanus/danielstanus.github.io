export interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    technologies?: string[];
}

export const experienceData: Record<string, ExperienceItem[]> = {
  es: [
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
  ],
  en: [
    {
      id: 1,
      title: "IT Department Head",
      company: "OnVentanas",
      location: "Madrid",
      period: "February 2022 - Present",
      responsibilities: [
        "Mobile applications development with Ionic to optimize internal processes.",
        "Creation of APIs in C# .NET, including a specific API for factory warehouse management.",
        "Development of a C# library for PrefGest, the software used by the company.",
        "Implementation of machinery integrations using XSLT, facilitating compatibility with the company's software.",
        "Maintenance and improvement of CRM and other internal applications, ensuring correct operation and evolution."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "TPF Ingeniería",
      location: "Madrid",
      period: "September 2020 - February 2022",
      responsibilities: [
        "Maintenance and development of modules for the company's internal website.",
        "Migration of an application from Visual Basic 6.0 to C#, improving performance and compatibility.",
        "Development and optimization of modules in PHP and C#, including reporting for management."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    },
    {
      id: 3,
      title: "Developer Intern",
      company: "Sotec Consulting",
      location: "Madrid",
      period: "February 2020 - August 2020",
      responsibilities: [
        "Maintenance and improvement of applications for banking and legal clients in ASP.NET.",
        "Frontend development of the e-Time mobile application, used for time tracking and payroll management."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    }
  ],
  ro: [
    {
      id: 1,
      title: "Șef Departament Informatică",
      company: "OnVentanas",
      location: "Madrid",
      period: "Februarie 2022 - Prezent",
      responsibilities: [
        "Dezvoltarea de aplicații mobile cu Ionic pentru optimizarea proceselor interne.",
        "Crearea de API-uri în C# .NET, inclusiv un API specific pentru gestionarea depozitului fabricii.",
        "Dezvoltarea unei librării în C# pentru PrefGest, software-ul utilizat de companie.",
        "Implementarea integrărilor cu utilajele prin XSLT, facilitând compatibilitatea acestora cu software-ul companiei.",
        "Întreținerea și îmbunătățirea CRM-ului și a altor aplicații interne, asigurând funcționarea corectă și evoluția acestora."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    },
    {
      id: 2,
      title: "Dezvoltator Full Stack",
      company: "TPF Ingeniería",
      location: "Madrid",
      period: "Septembrie 2020 - Februarie 2022",
      responsibilities: [
        "Întreținerea și dezvoltarea modulelor pentru site-ul web intern al companiei.",
        "Migrarea unei aplicații de la Visual Basic 6.0 la C#, îmbunătățind performanța și compatibilitatea.",
        "Dezvoltarea și optimizarea modulelor în PHP și C#, inclusiv generarea de rapoarte pentru conducere."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    },
    {
      id: 3,
      title: "Dezvoltator Stagiar (Intern)",
      company: "Sotec Consulting",
      location: "Madrid",
      period: "Februarie 2020 - August 2020",
      responsibilities: [
        "Întreținerea și îmbunătățirea aplicațiilor pentru clienți din sectorul bancar și juridic în ASP.NET.",
        "Dezvoltarea frontend-ului pentru aplicația mobilă e-Time, utilizată pentru gestionarea timpului și a statelor de plată ale angajaților."
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Next.js", "GraphQL", "Jest"]
    }
  ]
};

