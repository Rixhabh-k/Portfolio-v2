import CaseFileCard from "./Casefilecard ";
import ProjectCard from "./ProjectCard";
import KamiGamiImg from "../assets/kamigami.png";
import AlfaCureImg from "../assets/alfacure.png";
import WebFigmaImg from "../assets/webFigma.png";
import BigSparkCoImg from "../assets/bigSparkCo.png";

const project = {
  image: KamiGamiImg,
  exhibit: "Exhibit A",
  client: "KamiGami.in",
  title: "KamiGami",
  description:
    "Kami Gami is a modern fashion e-commerce project focused on creating a bold, immersive shopping experience through expressive visuals, clean UI, smooth interactions, and a strong brand identity. I worked on the design and frontend development, translating the concept into a responsive and engaging digital storefront.",
  techStack: ["React.js", "CSS", "GSAP", "Tailwind", "Node.js", "Figma"],
  year: "2026",
  projectUrl: "https://kamigami.onrender.com/",
};

const caseFiles = [
  {
    image: AlfaCureImg,
    exhibit: "Exhibit B",
    client: "alfacurelifescience.com",
    title: "AlfaCure",
    description:
      "Alfacure Life Science is a pharmaceutical company focused on the manufacturing and supply of IV infusion solutions and other healthcare products. The project involved creating a professional digital presence that communicates the company’s product portfolio, pharmaceutical expertise, and commitment to quality through a clean, structured, and trustworthy web experience.",
    techStack: ["React.js", "CSS", "Tailwind CSS", "Node.js"],
    year: "2026",
    projectUrl: "https://alfacurelifescience.com/",
  },

  {
    image: WebFigmaImg,
    exhibit: "Exhibit C",
    client: "figma-lite.vercel.app",
    title: "Web Based Figma",
    description:
      "A browser-based design editor inspired by modern visual design tools, featuring layer management, editable properties, text controls, positioning, rotation, and JSON/HTML export. The project focuses on recreating core design-tool interactions in a lightweight web experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    projectUrl: "https://figma-lite.vercel.app/",
  },

  {
    image: BigSparkCoImg,
    exhibit: "Exhibit D",
    client: "bigsparkco.rixhabh.in",
    title: "Big Spark Co",
    description:
      "BigSparkCo is a modern IT consultancy website built to present the company’s expertise across cloud architecture, custom software engineering, AI integration, DevOps, digital transformation, and enterprise applications. The project focuses on creating a premium, enterprise-oriented digital experience with structured service sections, selected case studies, a clear methodology, and strong visual hierarchy.",
    techStack: ["React.js", "CSS", "Gsap"],
    year: "2026",
    projectUrl: "https://bigsparkco.rixhabh.in/",
  },
];

const ProjectsSection = () => {
  return (
    <div id="work" className="project-section">
      <div className="ps-top-wrapper">
        <div className="project-p-line">
          <p>The Evidence</p>
          <p>Exhibits A – D · Entered 2024 – Now</p>
        </div>
        <div className="project-h-line">
          <h1>Selected Works</h1>
        </div>
      </div>

      <div className="projects-card-wrapper">
        <div className="pc-top">
          <ProjectCard {...project} />
        </div>
        <div className="pc-bottom">
          {caseFiles.map((project, index) => (
            <CaseFileCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
