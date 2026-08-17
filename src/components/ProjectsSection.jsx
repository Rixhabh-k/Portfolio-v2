
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="project-section">
      <div className="ps-top-wrapper">
        <div className="project-p-line">
          <p>The Evidence</p>
          <p>Exhibits A – G · Entered 2023 – Now</p>
        </div>
        <div className="project-h-line">
          <h1>Selected Works</h1>
        </div>

       
      </div>

      <div className="projects-card-wrapper">
        <div className="pc-top">
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
