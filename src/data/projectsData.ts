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
    title: "Sistema de Gestión de Lotes",
    description: "Sistema para el control y seguimiento de lotes de producción en tiempo real.",
    longDescription: "Sistema completo para la gestión de lotes de producción, permitiendo el seguimiento detallado desde la creación hasta la finalización del lote. Incluye control de calidad, trazabilidad y reportes en tiempo real con escaneo de códigos de barras automático y manual.",
    technologies: ["C#", ".NET", "SQL Server", "WinForms", "Barcode Scanner"],
    imageUrl: "/images/01_lotes.png",
    featured: true,
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Albaranes",
    description: "Aplicación para la gestión automatizada de albaranes de entrega y recepción.",
    longDescription: "Sistema integral para la gestión de albaranes de compra con paginación, búsqueda avanzada con filtros por estado y fecha, y detalle completo de albaranes. Incluye estados de seguimiento (pendiente, procesado, cancelado) y filtros dinámicos por fecha.",
    technologies: ["C#", ".NET", "SQL Server", "Crystal Reports", "PDF Generation"],
    imageUrl: "/images/02_albaranes.png",
    featured: true,
    date: "2024-04-20"
  },
  {
    id: 3,
    title: "Almacén ON - App Móvil Ionic",
    description: "Aplicación móvil completa para gestión de almacén con Ionic y Angular.",
    longDescription: "Aplicación móvil de gestión de almacén desarrollada con Ionic y Angular. Incluye sistema de autenticación, gestión de lotes con escaneo QR, inventario en tiempo real, gestión de albaranes con filtros avanzados, y histórico de movimientos. Funcionalidades nativas como escáner de códigos de barras, sistema de audio para confirmaciones y sincronización con API REST.",
    technologies: ["Ionic", "Angular", "TypeScript", "Capacitor", "QR Scanner", "Native Audio", "HTTP Client"],
    imageUrl: "/images/03_inventario.png",
    featured: true,
    date: "2025-08-04"
  },
  {
    id: 4,
    title: "Sistema de Histórico y Reportes",
    description: "Plataforma para consulta de históricos y generación de reportes empresariales.",
    longDescription: "Sistema completo para la consulta de datos históricos y generación de reportes empresariales. Incluye historial de movimientos con filtrado por usuario y fecha, exportación de datos, borrado de historial con confirmación y dashboards interactivos con visualizaciones avanzadas.",
    technologies: ["C#", ".NET", "SQL Server", "Chart.js", "Bootstrap", "Export Tools"],
    imageUrl: "/images/04_historico.png",
    date: "2024-06-05"
  },
  {
    id: 5,
    title: "API Almacén - RESTful Service",
    description: "API RESTful completa en .NET Core para gestión integral de almacenes.",
    longDescription: "API RESTful desarrollada en C# (.NET Core) que proporciona servicios completos para la gestión de almacenes. Incluye funcionalidades para manejar entradas, salidas, estanterías, códigos de barras, albaranes de compra, generación de reportes PDF, sistema de notificaciones por email, logging completo y documentación Swagger interactiva.",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Swagger", "JWT", "PDF Generation", "Email Service"],
    demoLink: "https://net.onventanas.es/API_Almacen/swagger/index.html",
    imageUrl: "/images/05_API_Almacen.png",
    featured: true,
    date: "2025-08-04"
  },
  {
    id: 6,
    title: "API OnVentanas - Gestión de Ventanas",
    description: "API para gestión y administración de ventanas con integración Active Directory.",
    longDescription: "API desarrollada para gestionar y administrar ventanas de manera eficiente y segura. Incluye endpoints para consultar plazos normales y especiales, promociones activas, vidrios y materiales, detalles de usuarios desde Active Directory, y obtención de hora actual desde servidores de tiempo europeos y españoles. Seguridad mediante API Key.",
    technologies: ["C#", ".NET", "Active Directory", "Time Servers", "API Security", "Swagger"],
    demoLink: "https://net.onventanas.es/API_OnVentanas/swagger/index.html",
    imageUrl: "/images/06_API_OnVentanas.png",
    date: "2025-08-05"
  },
  {
    id: 7,
    title: "PrefUserCSharp - Librería PrefGest",
    description: "Librería C# para extender las funcionalidades del software empresarial PrefGest.",
    longDescription: "Proyecto inicial para el programa preference de OnVentanas desarrollado en C# con .NET Framework 4.8. Aplicación de gestión empresarial que incluye módulos completos para: gestión de clientes, ventas con recargos energéticos, compras y proveedores, materiales e inventario, proyectos y planificación, envíos y logística, precios y configuración, y producción con procesamiento XML.",
    technologies: ["C#", ".NET Framework 4.8", "COM Interop", "SQL Server", "XML Processing", "Enterprise Integration"],
    imageUrl: "/images/07_Libreria_prefgest.png",
    date: "2025-08-01"
  },
  {
    id: 8,
    title: "Estanterías App - Gestión Web",
    description: "Aplicación web moderna para gestión de estanterías y productos con Vite y React.",
    longDescription: "Aplicación web desarrollada con Vite, React y TypeScript utilizando Tailwind CSS para el diseño. Incluye gestión completa de estanterías y productos, búsqueda y filtrado avanzado, panel de historial y estadísticas, sistema de notificaciones, autenticación básica e interfaz moderna y totalmente responsiva.",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Modern Web Stack"],
    imageUrl: "/images/08.Estanterias_almacen.png",
    featured: true,
    date: "2025-08-01"
  }
];