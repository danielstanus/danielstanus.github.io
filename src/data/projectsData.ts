export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  longDescription?: string;
  imageUrl?: string;
  featured?: boolean;
  date?: string;
}

export const projectsData: ProjectItem[] = [
{
  id: 1,
  title: "API para la gestión de almacén",
  description: "API en C# .NET para gestionar el almacén de la fábrica.",
  longDescription: "API en C# .NET para gestionar el almacén de la fábrica, permitiendo control de inventario en tiempo real.",
  technologies: ["C#", ".NET", "SQL Server", "REST API"],
  githubLink: "https://github.com/danielstanus/warehouse-management",
  featured: true,
  date: "2025-06-03"
},
{
  id: 2,
  title: "Aplicación movil para la gestión de almacén",
  description: "Aplicacion movil creada con Ionic para gestionar el almacén de la fábrica.",
  longDescription: "Aplicacion movil creada con Ionic para gestionar el almacén de la fábrica, permitiendo control de inventario en tiempo real.",
  technologies: ["Ionic", "Angular", "TypeScript"],
  githubLink: "https://github.com/danielstanus/warehouse-management",
  demoLink: "https://github.com/danielstanus/warehouse-management",
  imageUrl: "/images/02_app_movil_ionic.jpg",
  featured: true,
  date: "2025-06-03"
},
{
  id: 10,
  title: "Aplicación móvil para optimización de procesos",
  description: "Aplicación multiplataforma desarrollada con Ionic para optimizar procesos internos de la empresa.",
  longDescription: "Aplicación multiplataforma desarrollada con Ionic para optimizar procesos internos de la empresa.",
  technologies: ["Ionic", "Angular", "TypeScript", "Firebase"],
  githubLink: "https://github.com/danielstanus/process-optimization-app"
},
{
  id: 20,
  title: "Librería C# para PrefGest",
  description: "Librería desarrollada para extender las funcionalidades del software PrefGest utilizado en la empresa.",
  longDescription: "Librería desarrollada para extender las funcionalidades del software PrefGest utilizado en la empresa.",
  technologies: ["C#", ".NET Framework", "Library Development"],
  githubLink: "https://github.com/danielstanus/prefgest-library"
}
// Puedes agregar más proyectos según necesites
];
