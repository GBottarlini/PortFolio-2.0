import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type HackathonLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

type Hackathon = {
  title: string;
  dates?: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }> | null;
  logoUrl: string;
};

export const DATA = {
  name: "Gena Emmanuel Bottarlini",
  initials: "GB",
  url: "https://www.linkedin.com/in/genarobottarlini/",
  location: "Santa Fe, Argentina",
  locationLink: "https://maps.app.goo.gl/WSasfQ4tvMKpFsJb6",
  description:
    "Desarrollador Frontend & Full Stack con experiencia real solucionando problemas críticos de negocio. Construyo e implemento desde plataformas e-commerce rentables hasta CRMs internos complejos empleando React y Node.js en entornos de producción reales.",
  summary:
    "Desarrollador de software con fuerte orientación al Frontend y capacidad Full Stack probada desarrollando aplicaciones para clientes reales.\n\nMi trayectoria en canales de e-commerce corporativo y ventas digitales me permite aportar un valor único al equipo: entiendo la interacción entre código, retención de usuarios y resultados de negocio.\n\nHe diseñado un CRM in-house de uso diario, así como sistemas automatizados de stock MERN cross-plataforma. Busco sumarme a un equipo dinámico donde pueda impactar el roadmap de producto y el código base desde el día 1.",
  avatarUrl: "/me2.jpeg",
  skills: [
    {
      name: "React",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "JavaScript (ES6+)",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "HTML",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "CSS",
      icon: null,
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Git",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/git/F05032",
    },
    {
      name: "Node.js",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933",
    },
    {
      name: "Express",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/express/8A8A8A",
    },
    {
      name: "MongoDB",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/mongodb/47A248",
    },
    {
      name: "Supabase",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/supabase/3FCF8E",
    },
    {
      name: "SQL",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
      name: "GitHub",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/github/181717",
    },
    {
      name: "GitLab",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/gitlab/FC6D26",
    },
    {
      name: "Figma",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/figma/F24E1E",
    },
    {
      name: "Postman",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/postman/FF6C37",
    },
    {
      name: "Vitest",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/vitest/6E9F18",
    },
    {
      name: "WordPress",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/wordpress/21759B",
    },
    {
      name: "WooCommerce",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/woocommerce/96588A",
    },
    {
      name: "APIs REST",
      icon: null,
      logoUrl: "https://cdn.simpleicons.org/swagger/85EA2D",
    },
  ] as Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    {
      href: "/Genaro_Bottarlini_CV.pdf",
      icon: FileTextIcon,
      label: "Curriculum",
    },
  ],
  contact: {
    email: "bottarlini.99@outlook.com",
    tel: "+54 9 3447 459495",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GBottarlini",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/genarobottarlini/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work:
    [
      {
        company: "Concesionario Nation",
        badges: [],
        location: "Santa Fe, Argentina",
        title: "Analista de E-commerce",
        logoUrl: "/logoNation.jpeg",
        start: "Octubre 2024",
        end: "Actualidad",
        description:
          "Lidero la gestión y optimización continua de publicaciones en MercadoLibre mediante estrategias orgánicas SEO, incrementando mediblemente la visibilidad del catálogo digital y la facturación de repuestos e-commerce.",
      },
      {
        company: "KOL Accesorios",
        badges: [],
        location: "Santa Fe, Argentina",
        title: "Encargado de tienda",
        logoUrl: "/logoKol.png",
        start: "Mayo 2024",
        end: "Noviembre 2024",
        description:
          "Dirigí las operaciones de stock de la sucursal, estandarizando los procesos de inventario y facturación para lograr un aumento interanual del 30% en métricas de venta de electrónica B2C.",
      },
      {
        company: "MAPFRE Asistencia",
        badges: [],
        location: "Santa Fe, Argentina",
        title: "Operador Telefónico",
        logoUrl:
          "https://www.mawdy.com.ar/media/mawdy-mapfre-worldwide-digital-assitance.png",
        start: "Noviembre 2023",
        end: "Febrero 2024",
        description:
          "Gestioné remotamente reportes e incidencias críticas documentando el 100% de los casos en un sistema CRM, acelerando significativamente los tiempos de resolución técnica.",
      },
    ],
  education: [
    {
      school: "Universidad Tecnológica Nacional (UTN) - FRBA",
      href: "https://www.frba.utn.edu.ar/",
      degree: "Tecnicatura Universitaria en Programación",
      logoUrl:
        "https://assets.utnba.centrodeelearning.com/public-api/files/c7b6961eb748aa3e91586c9b83ca540b/images",
      start: "2025",
      end: "Actualidad",
    },
    {
      school: "Coderhouse",
      href: "https://www.coderhouse.com/ar/",
      degree: "Desarrollador Web Full Stack",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHy-rUushLaa7whsic-6agzKzK6CAN-Mbow&s",
      start: "2024",
      end: "2025",
    },
    {
      school: "EET N°1 \"Dr. Herminio J. Quirós\"",
      href: "",
      degree: "Técnico Mecánico",
      logoUrl: "/logo escuela tecnica.png",
      start: "2012",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Integrador de Stock - Nation",
      href: "https://github.com/GBottarlini/IntegradorML",
      dates: "En curso",
      active: true,
      description:
        "Diseñé y desarrollé una aplicación de sincronización bidireccional entre Tiendanube y MercadoLibre, mitigando discrepancias de catálogo y garantizando un control centralizado del inventario empresarial.\n\n- Arquitectura: React, Node.js y Supabase para asegurar resiliencia en tiempo real y comunicación robusta B2B.\n- Liderazgo: Frontend, backend, webhooks transaccionales y despliegue in-house en Render y Netlify.\n- Impacto Final: Erradicación del 100% de quiebres de stock y sobreventas, optimizando drásticamente la cadena de operaciones diaria.",
      technologies: [
        "React",
        "Node.js",
        "Supabase",
        "API de Tiendanube",
        "API de MercadoLibre",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/IntegradorML",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/integrador nation.png",
      video: "",
    },
    {
      title: "CRM Interno - Nation",
      href: "https://gestionclientessa.netlify.app",
      dates: "Junio 2025",
      active: true,
      description:
        "Diseñé un CRM administrativo y dashboard analítico inyectando una base de datos distribuida con MERN para digitalizar la cartera de clientes y canal de leads.\n\n- Tecnología: Optimización con WebSockets logrando actualizaciones automáticas asíncronas.\n- Ejecución: Desarrollo Full Stack, persistencia segura en MongoDB y modelado de estados de venta dinámicos.\n- Impacto: Actualmente utilizado cotidianamente por el departamento comercial, mejorando drásticamente el embudo de oportunidades.",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/frontNation",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/backNation",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://gestionclientessa.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/21d6kPfT/nationSA.png",
      video: "",
    },
    {
      title: "Jamabag - Sitio Web & E-commerce",
      href: "https://jamabag.com.ar/",
      dates: "2024",
      active: false,
      description:
        "Construí la presencia digital integral para una marca emergente implementando una solución B2B2C de e-commerce centrada en métricas comerciales, visibilidad de portfolio y flujo de consultas personalizadas.\n\n- Ingeniería B2C: Implementación modular en WordPress/WooCommerce superando restricciones directas de pasarelas de pago.\n- Emprendedurismo IT: Gestión integral SDLC freelance desde la toma de requerimientos, diseño conceptual y métricas SEO fundacionales hasta despliegue de DNS y hosting de alta disponibilidad.",
      technologies: ["WordPress", "WooCommerce", "SEO", "Dominio y hosting"],
      links: [
        {
          type: "Web",
          href: "https://jamabag.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://vimeo.com/1157919302?share=copy&fl=sv&fe=ci",
    },
    {
      title: "Festival de Música - Sitio Web",
      href: "https://github.com/GBottarlini/festivalMus",
      dates: "Junio 2025",
      active: false,
      description:
        "Codifiqué una landing page inmersiva para un evento de festival masivo integrando elementos visuales atractivos. Desplegué galerías multimedia de recarga progresiva optimizando el viewport mediante scripts Gulp nativos de minificación (HTML5/SCSS).",
      technologies: ["HTML5", "SCSS (SASS)", "JavaScript", "Gulp"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/festivalMus",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://festivapr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/JWyXqQxh/festival-Mus.png",
      video: "",
    },
    {
      title: "Ipoint E-commerce SPA",
      href: "https://github.com/GBottarlini/ipoint-ecommerce",
      dates: "Febrero 2024 - Actualidad",
      active: true,
      description:
        "SPA de e-commerce con catálogo, carrito y pasarela de pagos usando React.js y Node.js.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Material-UI",
        "Sweetalert",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/ipoint-ecommerce",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://ipoint.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/G4YzBqfZ/Ipointstr.png",
      video: "",
    },
    {
      title: "Blog de Café",
      href: "https://github.com/GBottarlini/blog-cafe",
      dates: "Marzo 2024",
      active: false,
      description: "Maquetación responsive con HTML5 y CSS3 enfocada en UI/UX.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/blog-cafe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://blogdecafepractice1.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/WWfz8dQs/blogCafe.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
