import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";
import type { ReactNode } from "react";

export const DATA = {
  name: "Gena Emmanuel Bottarlini",
  initials: "GB",
  url: "https://www.linkedin.com/in/genarobottarlini/",
  location: "Santa Fe, Argentina",
  locationLink: "https://maps.app.goo.gl/WSasfQ4tvMKpFsJb6",
  description:
    "Desarrollador Frontend / Full Stack orientado a productos reales. Construyo aplicaciones web que resuelven problemas reales de negocio: desde e-commerce hasta sistemas internos e integraciones entre plataformas. Experiencia con React, Node.js y APIs en producción.",
  summary:
    "Soy desarrollador web con fuerte orientación al Frontend, pero con experiencia real en Full Stack y desarrollo de productos en entornos reales.\n\nMi background en e-commerce y ventas digitales me permite entender no solo el código, sino también al usuario, el negocio y el impacto real de cada decisión técnica.\n\nTrabajé tanto en entornos empresariales como en proyectos freelance, desarrollando CRMs internos, integraciones entre plataformas de venta y sitios e-commerce que hoy están en uso.\n\nActualmente busco sumarme a un equipo como Frontend o Full Stack Jr, donde pueda aportar valor desde el primer día y seguir creciendo profesionalmente.",
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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    {
      href: "/BOTTARLNI-GENARO-CV.pdf",
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
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Analista de E-commerce",
      logoUrl: "/logoNation.jpeg",
      start: "Octubre 2024",
      end: "Actualidad",
      description:
        "Gestiono y optimizo publicaciones en MercadoLibre, mejorando visibilidad y facturación mediante SEO y contenido visual.",
    },
    {
      company: "KOL Accesorios",
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Encargado de tienda",
      logoUrl: "/logoKol.png",
      start: "Mayo 2024",
      end: "Noviembre 2024",
      description:
        "Lideré operaciones de sucursal, incrementando ventas en productos electrónicos en un 30 % y optimizando procesos de inventario y facturación.",
    },
    {
      company: "MAPFRE Asistencia",
      href: "",
      badges: [],
      location: "Santa Fe, Argentina",
      title: "Operador Telefónico",
      logoUrl:
        "https://www.mawdy.com.ar/media/mawdy-mapfre-worldwide-digital-assitance.png",
      start: "Noviembre 2023",
      end: "Febrero 2024",
      description:
        "Atendí consultas y reclamos de clientes de manera remota, documentando casos en CRM y mejorando tiempos de resolución.",
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
        "Aplicación web que sincroniza el stock entre Tiendanube y MercadoLibre, evitando sobreventas y permitiendo un control centralizado del inventario.\n\n- Stack: React, Node.js, Supabase, API de Tiendanube y API de MercadoLibre.\n- Responsabilidades: frontend, backend, integraciones, base de datos y despliegue en Render y Netlify.\n- Impacto: eliminación de sobreventas y mejora en la eficiencia operativa.",
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
        "CRM interno desarrollado a medida para gestionar clientes, estados de venta y actualizaciones en tiempo real para el equipo comercial.\n\n- Stack: React, Node.js, MongoDB y WebSockets.\n- Responsabilidades: frontend, backend, lógica de negocio, estados de venta y tiempo real.\n- Impacto: uso diario, mejor organización y optimización del proceso de ventas.",
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
        "Sitio web y solución de e-commerce desarrollados desde cero, enfocados en visibilidad de productos y ventas basadas en consultas.\n\n- Contexto: necesitaba profesionalizar su presencia digital y mostrar el catálogo sin compras directas.\n- Responsabilidades: WordPress y WooCommerce, flujo de compra basado en consultas, SEO básico, dominio y hosting.\n- Resultado: presencia digital profesional y primer proyecto freelance gestionado de punta a punta.",
      technologies: ["WordPress", "WooCommerce", "SEO", "Dominio y hosting"],
      links: [
        {
          type: "Web",
          href: "https://jamabag.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video jamabag.mp4",
    },
    {
      title: "Festival de Música - Sitio Web",
      href: "https://github.com/GBottarlini/festivalMus",
      dates: "Junio 2025",
      active: false,
      description:
        "Landing page moderna para un festival musical. Diseño responsivo, galería interactiva, navegación fija y automatización con Gulp.",
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
    {
      title: "Portfolio Web (Versión anterior)",
      href: "https://github.com/GBottarlini/Portfolio-Genaro-Bottarlini",
      dates: "Abril 2024",
      active: false,
      description:
        "Primera versión de mi portfolio personal, desarrollada con HTML, CSS y JavaScript vanilla. Incluye animaciones, sección de proyectos y contacto.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/GBottarlini/Portfolio-Genaro-Bottarlini",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web",
          href: "https://gbottarlini.github.io/Portfolio-Genaro-Bottarlini/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/1tHHBthN/cvViejo.png",
      video: "",
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    links: {
      icon: ReactNode;
      title: string;
      href: string;
    }[];
  }[],
} as const;
