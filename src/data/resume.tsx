import { Icons } from "@/components/icons";
import { SITE_URL } from "@/lib/site";
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
  name: "Genaro Emmanuel Bottarlini",
  initials: "GB",
  url: SITE_URL,
  location: "Santa Fe, Argentina",
  locationLink: "https://maps.app.goo.gl/WSasfQ4tvMKpFsJb6",
  description:
    "Desarrollador Full Stack con experiencia en Frontend y Backend. Creo aplicaciones web, APIs, automatizaciones e integraciones con React y Node.js para resolver necesidades reales de negocio.",
  summary:
    "Desarrollador de software con experiencia construyendo soluciones Full Stack para empresas, organismos públicos y clientes independientes. Trabajo tanto en frontend como en backend, desde el diseño de interfaces y APIs hasta integraciones, automatizaciones y despliegues.\n\nEn Concesionario Nation desarrollé un integrador de stock entre Mercado Libre y Tiendanube y un CRM interno para el equipo comercial. También participé como desarrollador frontend en PriCut junto a Viavervit y soy cofundador de CodingFlash, una agencia de software y soluciones digitales.\n\nBusco oportunidades como desarrollador Full Stack, Frontend o Backend donde pueda combinar criterio técnico, conocimiento de negocio y foco en productos utilizados en contextos reales.",
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
  work: [
    {
      company: "Concesionario Nation",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Analista de E-commerce & Desarrollador",
      href: "",
      logoUrl: "/logoNation.jpeg",
      start: "Octubre 2024",
      end: "Actualidad",
      description:
        "Gestiono y optimizo las operaciones de Mercado Libre y Tiendanube: publicaciones, SEO de catálogo, campañas de Product Ads y compra de mercadería a fábrica. También analizo procesos para detectar oportunidades de automatización. Como desarrollador Full Stack diseñé e implementé el integrador de stock multicanal y el CRM interno que utiliza el equipo comercial.",
    },
    {
      company: "CodingFlash",
      badges: [],
      location: "Argentina · Remoto",
      title: "Co-Fundador & Full Stack Developer",
      href: "https://codingflash.com/",
      logoUrl:
        "https://res.cloudinary.com/deagvpc2p/image/upload/v1770486714/Logotipo_Fondo_bgk6ah.png",
      start: "Abril 2025",
      end: "Actualidad",
      description:
        "Cofundé CodingFlash para desarrollar soluciones que ayuden a empresas y emprendimientos a mejorar su presencia digital y optimizar procesos. Participo en la planificación y ejecución técnica de sitios web, aplicaciones a medida, APIs, automatizaciones, integraciones e infraestructura, trabajando principalmente con React, JavaScript y Node.js.",
    },
    {
      company: "Viavervit",
      badges: [],
      location: "Argentina · Remoto",
      title: "Desarrollador Frontend (React.js) · Freelance",
      href: "",
      logoUrl: "/logoViavervit.svg",
      start: "Marzo 2025",
      end: "Agosto 2025",
      description:
        "Trabajé en el frontend de PriCut, una plataforma de cotización online para piezas de MDF, acrílico y acero. Construí componentes reutilizables con React y CSS a partir de Figma, implementé funcionalidades, corregí errores y sumé pruebas con Vitest. Colaboré en un equipo remoto de seis desarrolladores usando Trello, Git Flow, GitHub y GitLab.",
    },
    {
      company: "KOL Accesorios",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Encargado de tienda",
      href: "",
      logoUrl: "/logoKol.png",
      start: "Mayo 2024",
      end: "Noviembre 2024",
      description:
        "Coordiné la operación diaria de la sucursal, el control de inventario, la facturación y la atención comercial en un entorno B2C.",
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
      title: "Dashboard de Consumo · Fiscalía de Estado",
      href: "https://github.com/GBottarlini/Fiscalia",
      dates: "Proyecto institucional",
      active: true,
      description:
        "Desarrollé una plataforma para la Fiscalía de Estado de la Provincia de Santa Fe que permite visualizar y administrar el consumo de resmas por oficina. Incluye autenticación, carga mensual protegida, indicadores, comparaciones entre períodos y trazabilidad de la información.\n\n**Rol:** desarrollo Full Stack del frontend en React y la API en Express.\n\n**Disponibilidad:** el repositorio contiene código y datos de demostración; la información operativa no se publica.",
      technologies: ["React", "Express", "JWT", "Netlify", "Recharts"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/Fiscalia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fiscalia-dashboard.svg",
      video: "",
    },
    {
      title: "Integrador de Stock Multicanal · Nation",
      href: "https://github.com/GBottarlini/Multi-Channel-Inventory-Sync",
      dates: "2025 - Actualidad",
      active: true,
      description:
        "Diseñé y desarrollé para Concesionario Nation un sistema que centraliza el inventario de Mercado Libre y Tiendanube. Cada venta o modificación actualiza el stock y lo refleja en ambos canales mediante APIs y webhooks, evitando inconsistencias y tareas manuales.\n\n**Rol:** desarrollo Full Stack completo, arquitectura, integraciones, modelo de datos y flujo operativo.\n\n**Disponibilidad:** el código puede consultarse; la integración productiva y sus credenciales son privadas.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Supabase",
        "PostgreSQL",
        "Webhooks",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/Multi-Channel-Inventory-Sync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/integrador nation.png",
      video: "",
    },
    {
      title: "CRM Interno · Nation",
      href: "https://github.com/GBottarlini/crm-frontend",
      dates: "2025",
      active: true,
      description:
        "Construí una aplicación interna para que el equipo comercial pueda buscar clientes con mayor rapidez, cruzar información de clientes y vehículos, gestionar estados de seguimiento en tiempo real y prevenir contactos duplicados.\n\n**Rol:** desarrollo Full Stack completo con React, Node.js, Express, MongoDB y WebSockets.\n\n**Disponibilidad:** no hay demo pública; la imagen es ilustrativa y no contiene datos productivos.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/GBottarlini/crm-frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/GBottarlini/backNation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crm-dashboard.svg",
      video: "",
    },
    {
      title: "Jamabag · E-commerce",
      href: "https://jamabag.com.ar/",
      dates: "2024",
      active: true,
      description:
        "Creé un e-commerce para un cliente utilizando WordPress y WooCommerce, adaptando catálogo, navegación, consultas y operación comercial a sus requerimientos concretos. También trabajé en dominio, hosting, configuración y bases de SEO.\n\n**Rol:** relevamiento, implementación, personalización y puesta en producción.\n\n**Disponibilidad:** el sitio público puede visitarse; la operación administrativa del cliente es privada.",
      technologies: ["WordPress", "WooCommerce", "SEO", "Hosting"],
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
      title: "PriCut · Cotización de cortes industriales",
      href: "https://www.pricut.com",
      dates: "Marzo - Agosto 2025",
      active: true,
      description:
        "Participé junto a Viavervit en el desarrollo de PriCut, una plataforma que genera cotizaciones de corte para MDF, acrílico y acero a partir del diseño que carga el usuario.\n\n**Rol:** desarrollo frontend con React y CSS, componentes reutilizables desde Figma, nuevas funcionalidades, corrección de errores, organización del proyecto y pruebas con Vitest dentro de un equipo remoto de seis desarrolladores.\n\n**Disponibilidad:** el producto es público; el código y la información interna del cliente son privados.",
      technologies: ["React", "JavaScript", "CSS", "Vitest", "Git Flow"],
      links: [
        {
          type: "Web",
          href: "https://www.pricut.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pricut.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
