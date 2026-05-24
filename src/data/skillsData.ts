export interface SkillCategory {
    id: number;
    category: string;
    skills: string[];
}

export const skillsData: Record<string, SkillCategory[]> = {
  es: [
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
  ],
  en: [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["C#", "Python", "Java", "Kotlin", "Swift", "JavaScript", "TypeScript", "PHP"]
    },
    {
      id: 2,
      category: "Frameworks & Libraries",
      skills: [".NET", "React", "Angular", "Ionic", "Express", "ASP.NET"]
    },
    {
      id: 3,
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"]
    },
    {
      id: 4,
      category: "Infrastructure & DevOps",
      skills: ["Docker", "Kubernetes", "Microservicios", "Azure AI Studio", "Vercel"]
    },
    {
      id: 5,
      category: "Soft Skills",
      skills: [
        "Leadership & team management", 
        "Problem-solving capacity", 
        "Teamwork & effective communication", 
        "Self-taught & proactive", 
        "Adaptability to new technologies", 
        "Creativity"
      ]
    }
  ],
  ro: [
    {
      id: 1,
      category: "Limbaje de programare",
      skills: ["C#", "Python", "Java", "Kotlin", "Swift", "JavaScript", "TypeScript", "PHP"]
    },
    {
      id: 2,
      category: "Framework-uri și Librării",
      skills: [".NET", "React", "Angular", "Ionic", "Express", "ASP.NET"]
    },
    {
      id: 3,
      category: "Baze de Date",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"]
    },
    {
      id: 4,
      category: "Infrastructură și DevOps",
      skills: ["Docker", "Kubernetes", "Microservicios", "Azure AI Studio", "Vercel"]
    },
    {
      id: 5,
      category: "Abilități Personale",
      skills: [
        "Leadership și managementul echipelor", 
        "Abilitate de rezolvare a problemelor", 
        "Lucru în echipă și comunicare eficientă", 
        "Autodidact și proactiv", 
        "Adaptabilitate la noi tehnologii", 
        "Creativitate"
      ]
    }
  ]
};