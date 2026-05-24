export interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    location: string;
    period: string;
}

export const educationData: Record<string, EducationItem[]> = {
  es: [
    {
      id: 1,
      degree: "Máster en Desarrollo Ágil de Software para la Web",
      institution: "Universidad de Alcalá",
      location: "Alcalá de Henares, Madrid (España)",
      period: "2023 - 2024"
    },
    {
      id: 2,
      degree: "Grado en Ingeniería en Sistemas de Información",
      institution: "Universidad de Alcalá",
      location: "Alcalá de Henares, Madrid (España)",
      period: "2017 - 2022"
    },
    {
      id: 3,
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "IES Alonso de Avellaneda",
      location: "Alcalá de Henares, Madrid (España)",
      period: "2014 - 2016"
    }
  ],
  en: [
    {
      id: 1,
      degree: "Master's Degree in Agile Software Development for the Web",
      institution: "University of Alcalá",
      location: "Alcalá de Henares, Madrid (Spain)",
      period: "2023 - 2024"
    },
    {
      id: 2,
      degree: "Bachelor's Degree in Information Systems Engineering",
      institution: "University of Alcalá",
      location: "Alcalá de Henares, Madrid (Spain)",
      period: "2017 - 2022"
    },
    {
      id: 3,
      degree: "Associate's Degree in Multiplatform Applications Development",
      institution: "IES Alonso de Avellaneda",
      location: "Alcalá de Henares, Madrid (Spain)",
      period: "2014 - 2016"
    }
  ],
  ro: [
    {
      id: 1,
      degree: "Master în Dezvoltare Agile de Software pentru Web",
      institution: "Universitatea din Alcalá",
      location: "Alcalá de Henares, Madrid (Spania)",
      period: "2023 - 2024"
    },
    {
      id: 2,
      degree: "Licență în Ingineria Sistemelor Informaționale",
      institution: "Universitatea din Alcalá",
      location: "Alcalá de Henares, Madrid (Spania)",
      period: "2017 - 2022"
    },
    {
      id: 3,
      degree: "Tehnician Superior în Dezvoltarea de Aplicații Multiplatformă",
      institution: "IES Alonso de Avellaneda",
      location: "Alcalá de Henares, Madrid (Spania)",
      period: "2014 - 2016"
    }
  ]
};