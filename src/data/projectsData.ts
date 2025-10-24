export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  longDescription?: string;
  imageUrl?: string;
  imageUrls?: string[]; // Para múltiples imágenes
  featured?: boolean;
  date?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Almacén ON - App Móvil Ionic",
    description: "Aplicación móvil completa para gestión de almacén con Ionic y Angular.",
    longDescription: "Aplicación móvil de gestión de almacén desarrollada con Ionic y Angular. Incluye sistema de autenticación, gestión de lotes con escaneo QR, inventario en tiempo real, gestión de albaranes con filtros avanzados, y histórico de movimientos. Funcionalidades nativas como escáner de códigos de barras, sistema de audio para confirmaciones y sincronización con API REST.\n🔐 **Tab 1 - Gestión de Lotes**: Escaneo de códigos de barras automático y manual, gestión de lotes de producción con fechas específicas, entrada y salida de materiales con cantidades, regularización de inventario en tiempo real.\n📋 **Tab 2 - Histórico**: Historial de movimientos realizados, filtrado por usuario y fecha, borrado de historial con confirmación, exportación de datos de movimientos.\n📦 **Tab 3 - Inventario**: Consulta de stock en tiempo real, movimientos de entrada y salida de materiales, búsqueda por código de barras o referencia, regularización de cantidades de inventario.\n📊 **Tab 4 - Albaranes**: Listado de albaranes de compra con paginación, búsqueda avanzada con filtros por estado y fecha, detalle de albaranes con información completa, estados: pendiente, procesado, cancelado.",
    technologies: ["Ionic", "Angular", "TypeScript", "Capacitor", "QR Scanner", "Native Audio", "HTTP Client", "Barcode Scanner","Android"],
    imageUrl: "/images/01.Lotes.png",
    imageUrls: [
      "/images/01.Lotes.png",
      "/images/02.Albaranes.png",
      "/images/03.Inventario.png",
      "/images/04.Historico.png"
    ],
    featured: true,
    date: "2025-08-04"
  },
  {
    id: 5,
    title: "API Almacén - RESTful Service",
    description: "API RESTful completa en .NET Core para gestión integral de almacenes.",
    longDescription: "API RESTful desarrollada en C# (.NET Core) que proporciona servicios completos para la gestión de almacenes. Incluye funcionalidades para manejar entradas, salidas, estanterías, códigos de barras, albaranes de compra, generación de reportes PDF, sistema de notificaciones por email, logging completo y documentación Swagger interactiva.",
    technologies: ["C#", ".NET Core", "SQL Server", "Swagger", "JWT", "PDF Generation", "Email Service"],
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
    technologies: ["C#", ".NET Core", "Active Directory", "Time Servers", "API Security", "Swagger"],
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
    technologies: ["Android", "Java/Kotlin"],
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
    technologies: ["Android", "Java/Kotlin"],
    demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radioscristianas",
    imageUrl: "/images/12.Radios_cristianas.png",
    featured: true,
    date: "2024-10-15"
  },
  {
    id: 13,
    title: "World Christian Radios - Plataforma Web",
    description: "Plataforma web para streaming de radios cristianas de todo el mundo con reproductor avanzado.",
    longDescription: "🎵 Plataforma web completa para descubrir y escuchar radios cristianas internacionales\n\n✨ Características:\n• 🌍 Acceso a emisoras de todo el mundo\n• 🔍 Búsqueda por país, idioma y género\n• 🎧 Reproductor integrado con visualizador\n• ❤️ Sistema de favoritos\n• 📱 Diseño responsive\n• 🌓 Modo claro/oscuro\n• 🎼 Metadata en tiempo real",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Audio API", "Responsive Design", "Media Streaming"],
    demoLink: "https://worldchristianradios.com",
    imageUrl: "/images/13.World_christian_radios.png",
    date: "2024-11-20"
  },
  {
    id: 14,
    title: "YouTube Downloader",
    description: "Aplicación de escritorio con interfaz moderna para descargar audio y video de YouTube con múltiples opciones de calidad.",
    longDescription: "🎵 Aplicación de escritorio desarrollada en Python para descargar contenido de YouTube con interfaz gráfica moderna.\n\n✨ Características principales:\n• Descarga de audio en MP3 con calidades variables (Máxima, 128K, 192K)\n• Descarga de video en múltiples resoluciones (480p hasta 4K)\n• Procesamiento de múltiples enlaces y playlists simultáneamente\n• Incrustación automática de metadatos y miniaturas\n• Barra de progreso en tiempo real\n\n🛠️ Aspectos técnicos:\n• Interfaz con tkinter y tema Sun Valley (dark/light)\n• Motor de descarga yt-dlp con instalación automática de FFmpeg\n• Sistema de descargas concurrentes con threading\n• Manejo robusto de errores y logging\n• Sanitización automática de nombres de archivo",
    technologies: ["Python", "tkinter", "yt-dlp", "FFmpeg", "sv_ttk", "requests", "threading"],
    demoLink: "",
    imageUrl: "/images/14.YoutubeDownloader.png",
    date: "2025-01-20"
  }
];