import { Link } from "react-router";

const CaseFileCard = ({
  image,
  exhibit,
  client,
  title,
  description,
  techStack,
  year,
  slug,
}) => {
  return (
    <div className="casefile-card">
      <p className="casefile-label">{exhibit}</p>

      <p className="casefile-client">
        {title} · {client}
      </p>

      <h2 className="casefile-title">{title}</h2>

      <div className="casefile-media">
        <div className="casefile-tape"></div>

        <div className="casefile-media-frame">
          <img src={image} alt={title} />
        </div>

        <div className="casefile-media-tags">
          <span className="casefile-exhibit-tag">
            {exhibit}
          </span>

          <span className="casefile-recovered">
            recovered from {client}
          </span>
        </div>
      </div>

      <p className="casefile-description">
        {description}
      </p>

      <div className="casefile-tech-stack">
        {techStack.map((stack, stackIdx) => (
          <span key={stackIdx}>{stack}</span>
        ))}
      </div>

      <div className="casefile-footer">
        <p className="casefile-year">{year}</p>

        <Link className="casefile-open-link" to={`/work/${slug}`}>
          Open case file
        </Link>
      </div>
    </div>
  );
};

export default CaseFileCard;