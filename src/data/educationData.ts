export interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    location: string;
    period: string;
}

export const educationData: EducationItem[] = [
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
];