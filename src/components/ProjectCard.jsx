import { Link } from "react-router";

const ProjectCard = ({
  image,
  exhibit,
  client,
  title,
  description,
  techStack,
  year,
  projectUrl,
}) => {
  return (
    <div className="main-card-wrapper">
      <div className="card-image">
        <div className="card-main-container">
          <div className="card-tape"></div>

          <div className="card-img-container">
            <img src={image} alt={title} />
          </div>

          <div className="card-img-content">
            <p>{exhibit}</p>

            <a href={projectUrl} target="_blank" rel="noreferrer">
              recovered from {projectUrl}
            </a>
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="card-content-top">
          <p>{exhibit}</p>

          <p>Client · {client}</p>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="card-content-tech-stack">
            {techStack.map((stack, stackIdx) => (
              <span key={stackIdx}>{stack}</span>
            ))}
          </div>

          <div className="card-content-open">
            <p>{year}</p>

            <Link to="/work">
              Open case file
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;