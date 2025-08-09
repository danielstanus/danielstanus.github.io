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
    imageUrl: "/images/01.Lotes.png",
    featured: true,
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Albaranes",
    description: "Aplicación para la gestión automatizada de albaranes de entrega y recepción.",
    longDescription: "Sistema integral para la gestión de albaranes de compra con paginación, búsqueda avanzada con filtros por estado y fecha, y detalle completo de albaranes. Incluye estados de seguimiento (pendiente, procesado, cancelado) y filtros dinámicos por fecha.",
    technologies: ["C#", ".NET", "SQL Server", "Crystal Reports", "PDF Generation"],
    imageUrl: "/images/02.Albaranes.png",
    featured: true,
    date: "2024-04-20"
  },
  {
    id: 3,
    title: "Almacén ON - App Móvil Ionic",
    description: "Aplicación móvil completa para gestión de almacén con Ionic y Angular.",
    longDescription: "Aplicación móvil de gestión de almacén desarrollada con Ionic y Angular. Incluye sistema de autenticación, gestión de lotes con escaneo QR, inventario en tiempo real, gestión de albaranes con filtros avanzados, y histórico de movimientos. Funcionalidades nativas como escáner de códigos de barras, sistema de audio para confirmaciones y sincronización con API REST.",
    technologies: ["Ionic", "Angular", "TypeScript", "Capacitor", "QR Scanner", "Native Audio", "HTTP Client"],
    imageUrl: "/images/03.Inventario.png",
    featured: true,
    date: "2025-08-04"
  },
  {
    id: 4,
    title: "Sistema de Histórico y Reportes",
    description: "Plataforma para consulta de históricos y generación de reportes empresariales.",
    longDescription: "Sistema completo para la consulta de datos históricos y generación de reportes empresariales. Incluye historial de movimientos con filtrado por usuario y fecha, exportación de datos, borrado de historial con confirmación y dashboards interactivos con visualizaciones avanzadas.",
    technologies: ["C#", ".NET", "SQL Server", "Chart.js", "Bootstrap", "Export Tools"],
    imageUrl: "/images/04.Historico.png",
    date: "2024-06-05"
  },
  {
    id: 5,
    title: "API Almacén - RESTful Service",
    description: "API RESTful completa en .NET Core para gestión integral de almacenes.",
    longDescription: "API RESTful desarrollada en C# (.NET Core) que proporciona servicios completos para la gestión de almacenes. Incluye funcionalidades para manejar entradas, salidas, estanterías, códigos de barras, albaranes de compra, generación de reportes PDF, sistema de notificaciones por email, logging completo y documentación Swagger interactiva.",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Swagger", "JWT", "PDF Generation", "Email Service"],
    demoLink: "https://net.onventanas.es/API_Almacen/swagger/index.html",
    imageUrl: "/images/05.API_Almacen.png",
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
    imageUrl: "/images/06.API_OnVentanas.png",
    date: "2025-08-05"
  },
  {
    id: 7,
    title: "PrefUserCSharp - Librería PrefGest",
    description: "Librería C# para extender las funcionalidades del software empresarial PrefGest.",
    longDescription: "Proyecto inicial para el programa preference de OnVentanas desarrollado en C# con .NET Framework 4.8. Aplicación de gestión empresarial que incluye módulos completos para: gestión de clientes, ventas con recargos energéticos, compras y proveedores, materiales e inventario, proyectos y planificación, envíos y logística, precios y configuración, y producción con procesamiento XML.",
    technologies: ["C#", ".NET Framework 4.8", "COM Interop", "SQL Server", "XML Processing", "Enterprise Integration"],
    imageUrl: "/images/07.Libreria_PrefGest.png",
    date: "2025-08-01"
  },
  {
    id: 8,
    title: "Estanterías App - Gestión Web",
    description: "Aplicación web moderna para gestión de estanterías y productos con Vite y React.",
    longDescription: "Aplicación web desarrollada con Vite, React y TypeScript utilizando Tailwind CSS para el diseño. Incluye gestión completa de estanterías y productos, búsqueda y filtrado avanzado, panel de historial y estadísticas, sistema de notificaciones, autenticación básica e interfaz moderna y totalmente responsiva.",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Modern Web Stack"],
    imageUrl: "/images/08.Gestion_estanterias_almacen.png",
    featured: true,
    date: "2025-08-01"
  },
  {
    id: 9,
    title: "AlbaranesGmailKO - Servicio Windows",
    description: "Servicio Windows para automatización de descarga y procesamiento de albaranes desde Gmail.",
    longDescription: "Servicio de Windows desarrollado en .NET Framework 4.8 que automatiza la descarga y procesamiento de albaranes desde Gmail. Busca automáticamente correos electrónicos con albaranes adjuntos, descarga y procesa archivos Excel para insertar datos en SQL Server. Incluye sistema de logging completo, mapeo de referencias KO-ON, notificaciones por email y modo consola para depuración.",
    technologies: ["C#", ".NET Framework 4.8", "Gmail API", "ClosedXML", "SQL Server", "Windows Service", "JSON", "Email Notifications"],
    imageUrl: "/images/09.Descarga_albaranes_servicio.png",
    featured: true,
    date: "2025-08-03"
  },
  {
    id: 10,
    title: "LoggerColaMensajes.NET48 - Sistema de Logging",
    description: "Biblioteca de logging thread-safe con cola de mensajes para aplicaciones .NET 4.8.",
    longDescription: "Biblioteca que proporciona una clase segura para subprocesos llamada LoggerColaMensajes para poner en cola y procesar mensajes de registro. Utiliza ConcurrentQueue para manejo seguro de mensajes, procesamiento en segundo plano, múltiples niveles de registro (Info, Warning, Error), manejo de desbordamiento de cola, tiempo de espera dinámico y patrón Singleton para una sola instancia por aplicación.",
    technologies: ["C#", ".NET Framework 4.8", "ConcurrentQueue", "Threading", "Singleton Pattern", "File Logging"],
    imageUrl: "/images/10.Logger_personalizado.png",
    date: "2025-08-02"
  },
  {
    id: 11,
    title: "Radiouri Crestine - App Android",
    description: "Aplicación móvil Android para streaming de radios cristianas en rumano.",
    longDescription: "Aplicación móvil nativa para Android que permite escuchar radios cristianas en rumano en vivo. Desarrollada para la comunidad cristiana rumana, ofrece streaming de alta calidad, interfaz intuitiva y funcionalidades de reproducción optimizadas para dispositivos móviles. Disponible en Google Play Store.",
    technologies: ["Android", "Java/Kotlin", "Media Player", "Streaming", "Google Play Services"],
    demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radiouricrestine",
    imageUrl: "/images/11.Radiouri_crestine.png",
    featured: true,
    date: "2024-09-10"
  },
  {
    id: 12,
    title: "Radios Cristianas - App Android",
    description: "Aplicación móvil para streaming de múltiples radios cristianas en español.",
    longDescription: "Aplicación Android que reúne múltiples estaciones de radio cristiana en español. Permite a los usuarios acceder a una amplia variedad de contenido cristiano, música y predicaciones desde diferentes emisoras. Interfaz moderna con funcionalidades de favoritos, control de reproducción avanzado y calidad de audio optimizada.",
    technologies: ["Android", "Java/Kotlin", "Media Streaming", "Multi-Station", "Audio Optimization"],
    demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radioscristianas",
    imageUrl: "/images/12.Radios_cristianas.png",
    featured: true,
    date: "2024-10-15"
  },
  {
    id: 13,
    title: "World Christian Radios - Plataforma Web",
    description: "Plataforma web para streaming de radios cristianas de todo el mundo.",
    longDescription: "Plataforma web completa que ofrece acceso a radios cristianas de todo el mundo. Permite a los usuarios descubrir y escuchar música cristiana en vivo desde diferentes países y denominaciones. Incluye funcionalidades de búsqueda por país, género musical, idioma, reproductor web integrado, listas de favoritos y información detallada de cada emisora.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Responsive Design", "Media Streaming"],
    demoLink: "https://worldchristianradios.com",
    imageUrl: "/images/13.World_christian_radios.png",
    date: "2024-11-20"
  }
];