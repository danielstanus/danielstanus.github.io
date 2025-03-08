export interface SkillCategory {
    id: number;
    category: string;
    skills: string[];
  }

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: "Lenguajes de programación",
    skills: ["C#", "Python", "Java", "Kotlin", "Swift", "JavaScript", "TypeScript", "PHP"]
  },
  {
    id: 2,
    category: "Frameworks y Librerías",
    skills: [".NET", "React", "Angular", "Ionic", "Express", "ASP.NET"]
  },
  {
    id: 3,
    category: "Bases de Datos",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"]
  },
  {
    id: 4,
    category: "Infraestructura y DevOps",
    skills: ["Docker", "Kubernetes", "Microservicios", "Azure AI Studio", "Vercel"]
  },
  {
    id: 5,
    category: "Soft Skills",
    skills: [
      "Liderazgo y gestión de equipos", 
      "Capacidad de resolución de problemas", 
      "Trabajo en equipo y comunicación efectiva", 
      "Autodidacta y proactivo", 
      "Adaptabilidad a nuevas tecnologías", 
      "Creatividad"
    ]
  }
];