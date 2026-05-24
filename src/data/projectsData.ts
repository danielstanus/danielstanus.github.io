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

export const projectsData: Record<string, ProjectItem[]> = {
  es: [
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
  ],
  en: [
    {
      id: 1,
      title: "ON Warehouse - Ionic Mobile App",
      description: "Complete mobile application for warehouse management using Ionic and Angular.",
      longDescription: "Mobile warehouse management application developed with Ionic and Angular. It features an authentication system, batch management with QR scanning, real-time inventory, purchase orders management with advanced filtering, and movement history. Native functionalities include barcode scanner, native audio system for confirmations, and REST API synchronization.\n🔐 **Tab 1 - Batch Management**: Automatic and manual barcode scanning, production batch management with specific dates, material entry and exit with quantities, real-time inventory adjustments.\n📋 **Tab 2 - History**: History of movements, filtering by user and date, history deletion with confirmation, movement data export.\n📦 **Tab 3 - Inventory**: Real-time stock query, material entry and exit movements, search by barcode or reference, inventory quantity adjustments.\n📊 **Tab 4 - Purchase Orders**: Purchase orders list with pagination, advanced search with filters by status and date, detailed purchase orders information (pending, processed, cancelled).",
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
      title: "Warehouse API - RESTful Service",
      description: "Complete RESTful API in .NET Core for comprehensive warehouse management.",
      longDescription: "RESTful API developed in C# (.NET Core) providing comprehensive services for warehouse management. It includes functionalities for handling entries, exits, shelving, barcodes, purchase orders, PDF report generation, email notification system, full logging, and interactive Swagger documentation.",
      technologies: ["C#", ".NET Core", "SQL Server", "Swagger", "JWT", "PDF Generation", "Email Service"],
      demoLink: "https://net.onventanas.es/API_Almacen/swagger/index.html",
      imageUrl: "/images/05.API_Almacen.png",
      featured: true,
      date: "2025-08-04"
    },
    {
      id: 6,
      title: "OnVentanas API - Window Management",
      description: "API for window management and administration with Active Directory integration.",
      longDescription: "API developed to manage and administer windows efficiently and securely. It includes endpoints to query normal and special deadlines, active promotions, glass and materials, user details from Active Directory, and obtaining the current time from European and Spanish time servers. Secured via API Key.",
      technologies: ["C#", ".NET Core", "Active Directory", "Time Servers", "API Security", "Swagger"],
      demoLink: "https://net.onventanas.es/API_OnVentanas/swagger/index.html",
      imageUrl: "/images/06.API_OnVentanas.png",
      date: "2025-08-05"
    },
    {
      id: 7,
      title: "PrefUserCSharp - PrefGest Library",
      description: "C# library to extend the functionalities of PrefGest enterprise software.",
      longDescription: "Initial project for the preference program of OnVentanas developed in C# with .NET Framework 4.8. Enterprise management application that includes comprehensive modules for: client management, sales with energy surcharges, purchases and suppliers, materials and inventory, projects and planning, shipping and logistics, pricing and configuration, and production with XML processing.",
      technologies: ["C#", ".NET Framework 4.8", "COM Interop", "SQL Server", "XML Processing", "Enterprise Integration"],
      imageUrl: "/images/07.Libreria_PrefGest.png",
      date: "2025-08-01"
    },
    {
      id: 8,
      title: "Shelving App - Web Management",
      description: "Modern web application for shelving and product management with Vite and React.",
      longDescription: "Web application developed with Vite, React, and TypeScript using Tailwind CSS for styling. It includes comprehensive management of shelves and products, advanced search and filtering, history and statistics panel, notification system, basic authentication, and a modern, fully responsive interface.",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Modern Web Stack"],
      imageUrl: "/images/08.Gestion_estanterias_almacen.png",
      featured: true,
      date: "2025-08-01"
    },
    {
      id: 9,
      title: "AlbaranesGmailKO - Windows Service",
      description: "Windows Service to automate the download and processing of delivery notes from Gmail.",
      longDescription: "Windows service developed in .NET Framework 4.8 that automates the downloading and processing of delivery notes from Gmail. It automatically scans emails for attached delivery notes, downloads and processes Excel files, and inserts data into SQL Server. Includes a full logging system, reference mapping, email notifications, and a console mode for debugging.",
      technologies: ["C#", ".NET Framework 4.8", "Gmail API", "ClosedXML", "SQL Server", "Windows Service", "JSON", "Email Notifications"],
      imageUrl: "/images/09.Descarga_albaranes_servicio.png",
      featured: true,
      date: "2025-08-03"
    },
    {
      id: 10,
      title: "LoggerColaMensajes.NET48 - Logging System",
      description: "Thread-safe logging library with a message queue for .NET 4.8 applications.",
      longDescription: "Library providing a thread-safe class called LoggerColaMensajes to queue and process log messages. It uses ConcurrentQueue for safe message handling, background processing, multiple log levels (Info, Warning, Error), queue overflow handling, dynamic timeout, and the Singleton pattern for a single instance per application.",
      technologies: ["C#", ".NET Framework 4.8", "ConcurrentQueue", "Threading", "Singleton Pattern", "File Logging"],
      imageUrl: "/images/10.Logger_personalizado.png",
      date: "2025-08-02"
    },
    {
      id: 11,
      title: "Radiouri Crestine - Android App",
      description: "Android mobile application for streaming Christian radio stations in Romanian.",
      longDescription: "Native mobile application for Android to listen to live Christian radio stations in Romanian. Developed for the Romanian Christian community, it offers high-quality streaming, intuitive interface, and playback features optimized for mobile devices. Available on Google Play Store.",
      technologies: ["Android", "Java/Kotlin"],
      demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radiouricrestine",
      imageUrl: "/images/11.Radiouri_crestine.png",
      featured: true,
      date: "2024-09-10"
    },
    {
      id: 12,
      title: "Radios Cristianas - Android App",
      description: "Mobile application for streaming multiple Christian radio stations in Spanish.",
      longDescription: "Android application gathering multiple Christian radio stations in Spanish. It allows users to access a wide variety of Christian content, music, and sermons from different stations. Modern interface with favorite options, advanced playback control, and optimized audio quality.",
      technologies: ["Android", "Java/Kotlin"],
      demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radioscristianas",
      imageUrl: "/images/12.Radios_cristianas.png",
      featured: true,
      date: "2024-10-15"
    },
    {
      id: 13,
      title: "World Christian Radios - Web Platform",
      description: "Web platform for streaming Christian radios worldwide with an advanced player.",
      longDescription: "🎵 Complete web platform to discover and listen to international Christian radio stations.\n\n✨ Features:\n• 🌍 Access to stations worldwide\n• 🔍 Search by country, language, and genre\n• 🎧 Integrated player with visualizer\n• ❤️ Favorites system\n• 📱 Responsive design\n• 🌓 Light/dark mode\n• 🎼 Real-time metadata",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Audio API", "Responsive Design", "Media Streaming"],
      demoLink: "https://worldchristianradios.com",
      imageUrl: "/images/13.World_christian_radios.png",
      date: "2024-11-20"
    },
    {
      id: 14,
      title: "YouTube Downloader",
      description: "Desktop application with a modern interface to download audio and video from YouTube with multiple quality options.",
      longDescription: "🎵 Desktop application developed in Python to download YouTube content with a modern GUI.\n\n✨ Key Features:\n• MP3 audio download with variable qualities (Maximum, 128K, 192K)\n• Video download in multiple resolutions (480p up to 4K)\n• Processing of multiple links and playlists simultaneously\n• Automatic metadata and thumbnail embedding\n• Real-time progress bar\n\n🛠️ Technical aspects:\n• Interface with tkinter and Sun Valley theme (dark/light)\n• yt-dlp download engine with automatic FFmpeg installation\n• Concurrent downloading system with threading\n• Robust error handling and logging\n• Automatic filename sanitization",
      technologies: ["Python", "tkinter", "yt-dlp", "FFmpeg", "sv_ttk", "requests", "threading"],
      demoLink: "",
      imageUrl: "/images/14.YoutubeDownloader.png",
      date: "2025-01-20"
    }
  ],
  ro: [
    {
      id: 1,
      title: "Depozit ON - Aplicație Mobilă Ionic",
      description: "Aplicație mobilă completă pentru gestionarea depozitului cu Ionic și Angular.",
      longDescription: "Aplicație mobilă pentru gestionarea depozitului dezvoltată cu Ionic și Angular. Include sistem de autentificare, gestionarea loturilor cu scanare QR, inventar în timp real, gestionarea avizelor cu filtre avansate și istoricul mișcărilor. Funcționalități native precum scaner de coduri de bare, sistem audio nativ pentru confirmări și sincronizare cu API REST.\n🔐 **Tab 1 - Gestionare Loturi**: Scanare automată și manuală a codurilor de bare, gestionarea loturilor de producție cu date specifice, intrarea și ieșirea materialelor cu cantități, regularizarea inventarului în timp real.\n📋 **Tab 2 - Istoric**: Istoricul mișcărilor efectuate, filtrare după utilizator și dată, ștergerea istoricului cu confirmare, exportul datelor de mișcare.\n📦 **Tab 3 - Inventar**: Consultarea stocului în timp real, mișcări de intrare și ieșire a materialelor, căutare după cod de bare sau referință, regularizarea cantităților din inventar.\n📊 **Tab 4 - Avize**: Listă de avize de achiziție cu paginare, căutare avansată cu filtre după stare și dată, detalii complete ale avizelor (în așteptare, procesat, anulat).",
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
      title: "API Depozit - Serviciu RESTful",
      description: "API RESTful complet în .NET Core pentru gestionarea integrală a depozitelor.",
      longDescription: "API RESTful dezvoltat în C# (.NET Core) care oferă servicii complete pentru gestionarea depozitelor. Include funcționalități pentru gestionarea intrărilor, ieșirilor, rafturilor, codurilor de bare, avizelor de achiziție, generarea de rapoarte PDF, sistem de notificări prin email, logging complet și documentație Swagger interactivă.",
      technologies: ["C#", ".NET Core", "SQL Server", "Swagger", "JWT", "PDF Generation", "Email Service"],
      demoLink: "https://net.onventanas.es/API_Almacen/swagger/index.html",
      imageUrl: "/images/05.API_Almacen.png",
      featured: true,
      date: "2025-08-04"
    },
    {
      id: 6,
      title: "API OnVentanas - Gestionare Ferestre",
      description: "API pentru gestionarea și administrarea ferestrelor cu integrare Active Directory.",
      longDescription: "API dezvoltat pentru a gestiona și administra ferestrele în mod eficient și sigur. Include endpoint-uri pentru consultarea termenelor normale și speciale, promoții active, sticle și materiale, detalii despre utilizatori din Active Directory și obținerea orei curente de la servere de timp europene și spaniole. Securizat prin API Key.",
      technologies: ["C#", ".NET Core", "Active Directory", "Time Servers", "API Security", "Swagger"],
      demoLink: "https://net.onventanas.es/API_OnVentanas/swagger/index.html",
      imageUrl: "/images/06.API_OnVentanas.png",
      date: "2025-08-05"
    },
    {
      id: 7,
      title: "PrefUserCSharp - Librărie PrefGest",
      description: "Librărie C# pentru extinderea funcționalităților software-ului de gestiune PrefGest.",
      longDescription: "Proiect inițial pentru programul preference al OnVentanas dezvoltat în C# cu .NET Framework 4.8. Aplicație de management al afacerii care include module complete pentru: managementul clienților, vânzări cu suprataxe energetice, achiziții și furnizori, materiale și inventar, proiecte și planificare, livrări și logistică, prețuri și configurare și producție cu procesare XML.",
      technologies: ["C#", ".NET Framework 4.8", "COM Interop", "SQL Server", "XML Processing", "Enterprise Integration"],
      imageUrl: "/images/07.Libreria_PrefGest.png",
      date: "2025-08-01"
    },
    {
      id: 8,
      title: "Aplicație Rafturi - Gestiune Web",
      description: "Aplicație web modernă pentru gestionarea rafturilor și a produselor cu Vite și React.",
      longDescription: "Aplicație web dezvoltată cu Vite, React și TypeScript, utilizând Tailwind CSS pentru design. Include gestionarea completă a rafturilor și produselor, căutare și filtrare avansată, panou de istoric și statistici, sistem de notificări, autentificare de bază și o interfață modernă și complet responsivă.",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Modern Web Stack"],
      imageUrl: "/images/08.Gestion_estanterias_almacen.png",
      featured: true,
      date: "2025-08-01"
    },
    {
      id: 9,
      title: "AlbaranesGmailKO - Serviciu Windows",
      description: "Serviciu Windows pentru automatizarea descărcării și procesării avizelor din Gmail.",
      longDescription: "Serviciu Windows dezvoltat în .NET Framework 4.8 care automatizează descărcarea și procesarea avizelor din Gmail. Caută automat e-mailuri cu avize atașate, descarcă și procesează fișiere Excel pentru a introduce date în SQL Server. Include sistem complet de logging, mapare de referințe, notificări prin e-mail și mod consolă pentru depanare.",
      technologies: ["C#", ".NET Framework 4.8", "Gmail API", "ClosedXML", "SQL Server", "Windows Service", "JSON", "Email Notifications"],
      imageUrl: "/images/09.Descarga_albaranes_servicio.png",
      featured: true,
      date: "2025-08-03"
    },
    {
      id: 10,
      title: "LoggerColaMensajes.NET48 - Sistem de Logging",
      description: "Librărie de logging thread-safe cu coadă de mesaje pentru aplicații .NET 4.8.",
      longDescription: "Librărie care oferă o clasă sigură pentru firele de execuție numită LoggerColaMensajes pentru a pune în coadă și a procesa mesaje de log. Utilizează ConcurrentQueue pentru manipularea sigură a mesajelor, procesare în fundal, mai multe niveluri de înregistrare (Info, Warning, Error), gestionarea depășirii cozii, timeout dinamic și modelul Singleton pentru o singură instanță per aplicație.",
      technologies: ["C#", ".NET Framework 4.8", "ConcurrentQueue", "Threading", "Singleton Pattern", "File Logging"],
      imageUrl: "/images/10.Logger_personalizado.png",
      date: "2025-08-02"
    },
    {
      id: 11,
      title: "Radiouri Creștine - Aplicație Android",
      description: "Aplicație mobilă Android pentru streaming de radiouri creștine în limba română.",
      longDescription: "Aplicație mobilă nativă pentru Android care permite ascultarea în timp real a posturilor de radio creștine în limba română. Dezvoltată pentru comunitatea creștină română, oferă streaming de înaltă calitate, interfață intuitivă și funcționalități de redare optimizate pentru dispozitive mobile. Disponibilă în Google Play Store.",
      technologies: ["Android", "Java/Kotlin"],
      demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radiouricrestine",
      imageUrl: "/images/11.Radiouri_crestine.png",
      featured: true,
      date: "2024-09-10"
    },
    {
      id: 12,
      title: "Radios Cristianas - Aplicație Android",
      description: "Aplicație mobilă pentru streaming de posturi de radio creștine în limba spaniolă.",
      longDescription: "Aplicație Android care reunește mai multe posturi de radio creștine în limba spaniolă. Permite utilizatorilor accesul la o mare varietate de conținut creștin, muzică și predici de la diferite stații. Interfaz modernă cu opțiune de favorite, control avansat al redării și calitate optimizată a sunetului.",
      technologies: ["Android", "Java/Kotlin"],
      demoLink: "https://play.google.com/store/apps/details?id=com.stanus.radioscristianas",
      imageUrl: "/images/12.Radios_cristianas.png",
      featured: true,
      date: "2024-10-15"
    },
    {
      id: 13,
      title: "World Christian Radios - Platformă Web",
      description: "Platformă web pentru streaming de radiouri creștine din întreaga lume cu player avansat.",
      longDescription: "🎵 Platformă web completă pentru a descoperi și asculta posturi de radio creștine internaționale.\n\n✨ Caracteristici:\n• 🌍 Acces la posturi din întreaga lume\n• 🔍 Căutare după țară, limbă și gen\n• 🎧 Player integrat cu vizualizator\n• ❤️ Sistem de favorite\n• 📱 Design responsive\n• 🌓 Mod clar/întunecat\n• 🎼 Metadata în timp real",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Audio API", "Responsive Design", "Media Streaming"],
      demoLink: "https://worldchristianradios.com",
      imageUrl: "/images/13.World_christian_radios.png",
      date: "2024-11-20"
    },
    {
      id: 14,
      title: "YouTube Downloader",
      description: "Aplicație desktop cu interfață modernă pentru descărcarea de fișiere audio și video de pe YouTube cu multiple opțiuni de calitate.",
      longDescription: "🎵 Aplicație desktop dezvoltată în Python pentru descărcarea de conținut de pe YouTube cu interfață grafică modernă.\n\n✨ Caracteristici principale:\n• Descărcare audio în format MP3 la calități variabile (Maximă, 128K, 192K)\n• Descărcare video în multiple rezoluții (de la 480p până la 4K)\n• Procesarea mai multor link-uri și liste de redare simultan\n• Încorporare automată a metadatelor și a miniaturilor\n• Bară de progres în timp real\n\n🛠️ Aspecte tehnice:\n• Interfață cu tkinter și temă Sun Valley (întunecat/luminos)\n• Motor de descărcare yt-dlp cu instalare automată a FFmpeg\n• Sistem de descărcări concurente cu utilizarea thread-urilor\n• Gestiune robustă a erorilor și logging\n• Sanitizare automată a numelor de fișiere",
      technologies: ["Python", "tkinter", "yt-dlp", "FFmpeg", "sv_ttk", "requests", "threading"],
      demoLink: "",
      imageUrl: "/images/14.YoutubeDownloader.png",
      date: "2025-01-20"
    }
  ]
};