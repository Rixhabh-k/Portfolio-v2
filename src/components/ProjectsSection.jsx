import CaseFileCard from "./Casefilecard";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const [featuredProject, ...caseFiles] = projects;

const ProjectsSection = () => {
  return (
    <div id="work" className="project-section">
      <div className="ps-top-wrapper">
        <div className="project-p-line">
          <p>The Evidence</p>
          <p>Exhibits A – D · Entered 2025 – Now</p>
        </div>
        <div className="project-h-line">
          <h1>Selected Works</h1>
        </div>
      </div>

      <div className="projects-card-wrapper">
        <div className="pc-top">
          <ProjectCard {...featuredProject} />
        </div>
        <div className="pc-bottom">
          {caseFiles.map((project) => (
            <CaseFileCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
