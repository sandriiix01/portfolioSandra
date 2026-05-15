export const DEFAULT_LANG = "es" as const;
export const SUPPORTED_LANGS = ["es", "en"] as const;
export const LANG_STORAGE_KEY = "site-lang";

export type Lang = (typeof SUPPORTED_LANGS)[number];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "¿Hablamos?",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainNav: "Navegación principal",
      mobileNav: "Menú móvil",
      toggleLang: "Cambiar idioma",
    },
    hero: {
      title: "Diseñar con ",
      title2: "un propósito",
      viewProjects: "Ver proyectos",
      contact: "¿Hablamos?",
    },
    general: {
      selectedWorks: "Mis proyectos",
      featuredProjects: "Proyectos destacados",
      exploreMore: "Explorar más",
      ilustrations: "Ilustraciones",
      photografies: "Fotografías",
      aboutMe: "Sobre mí",
      aboutHeadline: "Narrativa visual para comunicar",
      downloadCV: "Descargar CV",
      downloadCVEn: "Descargar CV EN",
      programs: "Programas",
      programsLevelAria: "Programas y nivel de dominio",
      noPrograms: "Sin programas disponibles",
      noDescription: "Sin descripcion disponible.",
      createdBy: "Creado por",
      talk: "¿Hablamos?",
      subtalk:
        "Si tienes algún proyecto, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones.",
      seeProject: "Ver proyecto",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNav: "Main navigation",
      mobileNav: "Mobile menu",
      toggleLang: "Change language",
    },
    hero: {
      title: "Design with",
      title2: "a purpose",
      viewProjects: "View projects",
      contact: "Let's talk",
    },
    general: {
      selectedWorks: "My projects",
      featuredProjects: "Featured projects",
      exploreMore: "Explore more",
      ilustrations: "Illustrations",
      photografies: "Photographies",
      aboutMe: "About me",
      aboutHeadline: "Visual storytelling to communicate",
      downloadCV: "Download CV",
      downloadCVEn: "Download CV EN",
      programs: "Programs",
      programsLevelAria: "Programs and proficiency level",
      noPrograms: "No programs available",
      noDescription: "No description available.",
      createdBy: "Created by",
      talk: "Let's talk",
      subtalk:
        "If you have a project, feel free to contact me. I am always open to new opportunities and collaborations.",
      seeProject: "See project",
    },
  },
} as const;
