import KamiGamiImg from "../assets/kamigami.png";
import AlfaCureImg from "../assets/alfacure.png";
import WebFigmaImg from "../assets/webFigma.png";
import TattvaUIImg from "../assets/tattvaui.png";
import TattvaUI1 from "../assets/tattvaui-1.png";
import TattvaUI2 from "../assets/tattvaui-2.png";
import TattvaUI3 from "../assets/tattvaui-3.png";
import KamiGami1 from "../assets/kamigami-1.png";
import KamiGami2 from "../assets/kamigami-2.png";
import KamiGami3 from "../assets/kamigami-3.png";

/*
  Shared source of truth for the project cards AND the case-file detail page.

  `gallery` is the supporting evidence shown under the main exhibit.
  Entries are { src, caption }. Leave the array empty to hide the section.
*/
export const projects = [
  {
    slug: "tattvaui",
    caseNo: "TU-2026-001",
    image: TattvaUIImg,
    exhibit: "Exhibit A",
    client: "Tattva UI",
    title: "TattvaUI",
    description:
      "Tattva UI is a modern React animation library focused on enhancing digital experiences through expressive UI components, smooth animations, interactive effects, and seamless integration. I worked on designing and developing reusable components that help developers create visually engaging and dynamic web interfaces with ease.",
    techStack: ["React.js", "CSS", "Tailwind", "JavaScript"],
    year: "2026",
    projectUrl: "http://tattvaui.in/",

    // case-file page
    status: "Live",
    category: "Component Library",
    role: "Design & Frontend Development",
    headline: "A Component Library Built To Make The Web Move",
    standfirst:
      "Investigators examine TattvaUI, a React animation library that hands developers ready-made, expressive interface components.",
    pullQuote:
      "The goal was never decoration. Every animation had to be something a developer could drop in and trust.",
    body: [
      "TattvaUI surfaced in 2026 as a React animation library with a narrow, deliberate purpose: to give developers expressive interface components without forcing them to hand-build every transition. The library sits between a design system and an animation toolkit, offering pieces that are meant to be used rather than admired from a distance.",
      "The case centres on reusable components. Each one was designed to carry its own motion, hover behaviour and interactive effects, so that a developer can place it in a project and get a finished result. Investigators noted a consistent visual language across the collection, which suggests the pieces were built as a family rather than as isolated experiments.",
      "Integration was treated as a first-class concern. The components are written for React and styled with CSS and Tailwind, so they sit inside an existing codebase without a rewrite. Nothing in the evidence points to a heavy setup process or a proprietary build step.",
      "The subject's role covered both ends of the work: designing how each component should look and move, and then developing it in code. That overlap is visible in the finished library, where the behaviour on screen matches the intent on the drawing board.",
      "As of this filing the library is live and publicly accessible. The case remains open, with further components expected to be added.",
    ],
    findings: [
      "Built as a family of reusable components with one consistent visual language.",
      "Motion and interaction are part of each component, not added afterwards.",
      "Designed to drop into an existing React project with CSS and Tailwind.",
      "Publicly live and still being extended.",
    ],
    gallery: [
      { src: TattvaUI1, caption: "Fig. 2 — The Side Reveal Card, shown live in the documentation." },
      { src: TattvaUI2, caption: "Fig. 3 — The customize panel: every colour and label is adjustable." },
      { src: TattvaUI3, caption: "Fig. 4 — A product card demo, built entirely from library components." },
    ],
  },
  {
    slug: "kamigami",
    caseNo: "KG-2026-002",
    image: KamiGamiImg,
    exhibit: "Exhibit B",
    client: "KamiGami.in",
    title: "KamiGami",
    description:
      "Kami Gami is a modern fashion e-commerce project focused on creating a bold, immersive shopping experience through expressive visuals, clean UI, smooth interactions, and a strong brand identity. I worked on the design and frontend development, translating the concept into a responsive and engaging digital storefront.",
    techStack: ["React.js", "CSS", "GSAP", "Tailwind", "Node.js", "Figma"],
    year: "2026",
    projectUrl: "https://kamigami.in/",

    status: "Live",
    category: "Fashion E-commerce",
    role: "Design & Frontend Development",
    headline: "Fashion Storefront Trades Convention For A Bolder Look",
    standfirst:
      "In the KamiGami file, a fashion e-commerce concept goes after an immersive shopping experience with strong visuals and a clear brand voice.",
    pullQuote:
      "A storefront should feel like a brand before it feels like a catalogue.",
    body: [
      "KamiGami entered the record in 2026 as a fashion e-commerce project with a clear ambition: to make online shopping feel closer to walking into a store with a point of view. The brief called for a bold, immersive experience built on expressive visuals and a strong brand identity.",
      "Investigators found that the design leans on clean interface work to keep that boldness in check. Imagery leads, navigation stays out of the way, and the layout gives products room. The effect is a storefront that reads as styled rather than merely assembled.",
      "Motion plays a supporting role. Interactions were built with GSAP, which accounts for the smooth transitions that run through the browsing experience. They are used to guide attention rather than to show off, a restraint that is worth noting on a project this visual.",
      "The subject handled the work from concept through to code. Design was developed in Figma, then translated into a responsive React front end, with Node.js supporting the project behind it. The finished storefront adapts across screen sizes, which matters for a category where much of the shopping happens on phones.",
      "The storefront is live at the address listed in this file. The case is considered closed for its original brief.",
    ],
    findings: [
      "Brand identity drives the layout, imagery and tone throughout.",
      "GSAP animation is used to guide the shopper, not to distract.",
      "Concept designed in Figma and carried through to a responsive build.",
      "Publicly live on the address recorded in this file.",
    ],
    gallery: [
      { src: KamiGami1, caption: "Fig. 2 — “Rise of the Kami”: the collection opens on a burning shrine." },
      { src: KamiGami2, caption: "Fig. 3 — Puppeteer’s eclipse: the campaign imagery sets the brand’s tone." },
      { src: KamiGami3, caption: "Fig. 4 — “The Awakening”: the title screen before the torii gate." },
    ],
  },
  {
    slug: "alfacure",
    caseNo: "AC-2026-003",
    image: AlfaCureImg,
    exhibit: "Exhibit C",
    client: "alfacurelifescience.com",
    title: "AlfaCure",
    description:
      "Alfacure Life Science is a pharmaceutical company focused on the manufacturing and supply of IV infusion solutions and other healthcare products. The project involved creating a professional digital presence that communicates the company’s product portfolio, pharmaceutical expertise, and commitment to quality through a clean, structured, and trustworthy web experience.",
    techStack: ["React.js", "CSS", "Tailwind CSS", "Node.js"],
    year: "2026",
    projectUrl: "https://alfacurelifescience.com/",

    status: "Live",
    category: "Corporate Website",
    role: "Frontend Development",
    headline: "Pharmaceutical Maker Gets A Website Built On Trust",
    standfirst:
      "Alfacure Life Science, a manufacturer of IV infusion solutions, commissioned a web presence that puts credibility first.",
    pullQuote:
      "In healthcare, clarity is the design. Anything that doesn't build trust gets removed.",
    body: [
      "Alfacure Life Science manufactures and supplies IV infusion solutions and other healthcare products. In 2026 the company needed a digital presence to match its standing in the industry, and the project landed on the subject's desk.",
      "The challenge was one of tone. A pharmaceutical audience does not respond to spectacle. Buyers and partners want to see what is made, how it is made and why it can be relied on. The design therefore favours a clean, structured layout in which the product portfolio is easy to find and easy to read.",
      "Investigators noted that the site communicates three things in order: what the company produces, the expertise behind it, and its commitment to quality. Each is given its own space, and none competes with another for attention.",
      "The site was built with React, styled with CSS and Tailwind CSS, and supported by Node.js. The result is a professional, structured and trustworthy web experience, which was the brief from the first day.",
      "The website is live at the company's own domain. The case is considered closed.",
    ],
    findings: [
      "Structure and clarity were prioritised over visual spectacle.",
      "Product portfolio, expertise and quality commitment each have a clear place.",
      "Tone aimed at a pharmaceutical audience: professional and credible.",
      "Live on the company's own domain.",
    ],
    gallery: [],
  },
  {
    slug: "web-figma",
    caseNo: "WF-2025-004",
    image: WebFigmaImg,
    exhibit: "Exhibit D",
    client: "figma-lite.vercel.app",
    title: "Web Based Figma",
    description:
      "A browser-based design editor inspired by modern visual design tools, featuring layer management, editable properties, text controls, positioning, rotation, and JSON/HTML export. The project focuses on recreating core design-tool interactions in a lightweight web experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    projectUrl: "https://figma-lite.vercel.app/",

    status: "Live",
    category: "Web Application",
    role: "Design & Development",
    headline: "Developer Rebuilds A Design Tool Inside The Browser",
    standfirst:
      "The Web Based Figma file documents a lightweight design editor written in plain HTML, CSS and JavaScript.",
    pullQuote:
      "The point was to find out how a design tool actually works, by building one.",
    body: [
      "Web Based Figma was filed in 2025 as a personal engineering exercise: a browser-based design editor modelled on the visual design tools that many developers use every day. The aim was not to replace them. It was to understand them by recreating their core behaviour.",
      "Investigators found a working editor with the essentials in place. Elements can be managed as layers, and their properties can be edited directly. Text has its own controls. Objects can be positioned and rotated on the canvas, and the finished work can be exported as JSON or HTML.",
      "The notable feature of the case is what the project is built with. It uses plain HTML, CSS and JavaScript, with no framework involved. That choice keeps the editor lightweight and puts the focus on the hard part: handling selection, transformation and state by hand.",
      "The export options show where the project points. JSON preserves the structure of a design, and HTML turns it into something that can be opened as a page. Together they link the editor to the wider workflow of design and development.",
      "The project is live on Vercel. It remains an experiment, and the file stays open to further features.",
    ],
    findings: [
      "Layers, editable properties, text controls, positioning and rotation all work.",
      "Designs can be exported as JSON or HTML.",
      "Built without a framework, in HTML, CSS and JavaScript only.",
      "Live on Vercel and treated as an ongoing experiment.",
    ],
    gallery: [],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
