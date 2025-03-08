export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    imageUrl?: string;
  }

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Aplicación de gestión de almacén",
    description: "API en C# .NET para gestionar el almacén de la fábrica, permitiendo control de inventario en tiempo real y generación de informes.",
    technologies: ["C#", ".NET", "SQL Server", "REST API"],
    githubLink: "https://github.com/danielstanus/warehouse-management"
  },
  {
    id: 2,
    title: "Aplicación móvil para optimización de procesos",
    description: "Aplicación multiplataforma desarrollada con Ionic para optimizar procesos internos de la empresa.",
    technologies: ["Ionic", "Angular", "TypeScript", "Firebase"],
    githubLink: "https://github.com/danielstanus/process-optimization-app"
  },
  {
    id: 3,
    title: "Librería C# para PrefGest",
    description: "Librería desarrollada para extender las funcionalidades del software PrefGest utilizado en la empresa.",
    technologies: ["C#", ".NET Framework", "Library Development"],
    githubLink: "https://github.com/danielstanus/prefgest-library"
  }
  // Puedes agregar más proyectos según necesites
];
