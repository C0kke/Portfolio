export interface Project {
  /** Display name shown on the card */
  title: string;
  /** Short description shown on the card */
  description: string;
  /** Link to the GitHub repository */
  githubUrl: string;
  /** Optional live / demo URL */
  liveUrl?: string;
  /** Technologies used (shown as badges) */
  tech: string[];
  /**
   * Bento-grid size:
   * - "large"  → 2 columns × 2 rows
   * - "medium" → 2 columns × 1 row
   * - "small"  → 1 column × 1 row (default)
   */
  size?: "large" | "medium" | "small";
  /**
   * Path to a preview image inside /public (e.g. "/previews/ecommerce.png").
   * Leave undefined if no image is available.
   */
  previewImage?: string;
}

/**
 * Curated list of C0kke's public GitHub projects.
 * Edit this file to update the portfolio project cards.
 */
export const projects: Project[] = [
  {
    title: "Fit Fashion",
    description:
      "Tienda de ropa deportiva con catálogo de productos, carrito de compras y panel administrativo.",
    tech: ["JavaScript", "React", "NestJS", "PostgreSQL"],
    size: "large",
    githubUrl: "https://github.com/C0kke/FitFashion",
    previewImage: "/previews/ecommerce.png",
  },
  {
    title: "Sistema de Gestión de Incidencias",
    description:
      "Aplicación full-stack para registrar, asignar y resolver incidencias internas de una organización.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    size: "medium",
    githubUrl: "https://github.com/C0kke/FrontendGestionIncidencias",
    previewImage: "/previews/management.png",
  },
  {
    title: "Encriptador de Texto",
    description:
      "Página web interactiva que encripta y desencripta mensajes usando un algoritmo de sustitución de letras.",
    tech: ["HTML", "CSS", "JavaScript"],
    size: "medium",
    githubUrl: "https://github.com/C0kke/Encriptador",
    previewImage: "/previews/landing.png",
  },
  {
    title: "ForoHub",
    description:
      "API REST de foro de discusión con autenticación JWT y operaciones CRUD completas sobre tópicos.",
    tech: ["Java", "Spring Boot", "MySQL"],
    size: "small",
    githubUrl: "https://github.com/C0kke/ForoHub",
  },
  {
    title: "Literalura",
    description:
      "Aplicación de catálogo de libros que consume la API Gutendex y persiste datos en PostgreSQL.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    size: "small",
    githubUrl: "https://github.com/C0kke/Literalura",
  },
  {
    title: "Coquimbo VR - Nivel 1",
    description:
      "Experiencia de realidad virtual del Coquimbo histórico, desarrollada en conjunto con el proyecto RLCA de la Municipalidad de Coquimbo.",
    tech: ["Unity", "C#", "VR"],
    size: "small",
    githubUrl: "https://github.com/C0kke/Coquimbo_VR_LVL1",
  },
];
