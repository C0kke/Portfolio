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
    title: "Catálogo Maranatha",
    description: "Catálogo de productos para ferretería local",
    tech: ["React", "Supabase", "Cloudinary", "Cloudflare", "Vercel"],
    size: "large",
    githubUrl: "",
    liveUrl: "https://ferremaranatha.cl",
    previewImage: "/previews/ferremaranatha.png",
  },
  {
    title: "Fit Fashion",
    description:
      "E-commerce de moda con arquitectura basada en microservicios y k8s",
    tech: ["JavaScript", "React", "Go", "Python", "API REST", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ", "Kafka"],
    size: "large",
    githubUrl: "https://github.com/C0kke/FitFashion",
    previewImage: "/previews/default.png",
  },
  {
    title: "Encriptador de Texto",
    description:
      "Página web interactiva que encripta y desencripta mensajes usando un algoritmo de sustitución de letras.",
    tech: ["HTML", "CSS", "JavaScript"],
    size: "medium",
    githubUrl: "https://github.com/C0kke/Encriptador",
    previewImage: "/previews/encriptador.png",
    liveUrl: "https://c0kke.github.io/Encriptador/",
  },
  {
    title: "Screenmatch",
    description: "Catálogo de series y películas con API externa",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    size: "medium",
    githubUrl: "https://github.com/C0kke/Screenmatch",
    previewImage: "/previews/screenmatch.png",
  },
  {
    title: "Sistema de Gestión de Incidencias",
    description:
      "Aplicación full-stack para registrar, asignar y resolver incidencias internas de una organización, permite generar reportes.",
    tech: ["JavaScript", "Node.js", "Express", "MySQL", "Cloudinary", "SSH"],
    size: "medium",
    githubUrl: "https://github.com/C0kke/FrontendGestionIncidencias",
    previewImage: "/previews/default.png",
  },
  {
    title: "ForoHub",
    description:
      "API REST de foro de discusión con autenticación JWT y operaciones CRUD completas sobre tópicos.",
    tech: ["Java", "Spring Boot", "MySQL"],
    size: "small",
    githubUrl: "https://github.com/C0kke/ForoHub",
    previewImage: "/previews/default.png",
  },
  {
    title: "Breakout",
    description:
      "Videojuego clásico de romper bloques con una paleta y una pelota.",
    tech: ["HTML", "Javascript"],
    size: "small",
    githubUrl: "https://github.com/C0kke/ProyectBreakout",
    previewImage: "/previews/breakout.png",
    liveUrl: "https://c0kke.github.io/ProyectBreakout/",
  },
  {
    title: "Coquimbo VR - Nivel 1",
    description:
      "Experiencia de realidad virtual del Coquimbo histórico, desarrollada en conjunto con el proyecto RLCA de la Municipalidad de Coquimbo.",
    tech: ["Unity", "C#", "VR"],
    size: "small",
    githubUrl: "https://github.com/C0kke/Coquimbo_VR_LVL1",
    previewImage: "/previews/default.png",
  },
];
