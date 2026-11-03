import { Link } from "react-router";
import { projects } from "../data/projects";

const ProjectDetail = ({
  slug,
  caseNo,
  image,
  exhibit,
  client,
  title,
  techStack,
  year,
  projectUrl,
  status,
  category,
  role,
  headline,
  standfirst,
  pullQuote,
  body,
  findings,
  gallery,
}) => {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  const sheet = [
    ["Case No.", caseNo],
    ["Subject", title],
    ["Client", client],
    ["Category", category],
    ["Role", role],
    ["Filed", year],
    ["Status", status],
  ];

  return (
    <article className="case-detail">
      <div className="case-detail-wrapper">
        {/* BREADCRUMB */}
        <div className="case-crumbs">
          <Link to="/#work">← Back to The Evidence</Link>
          <p>
            {exhibit} · Case File No. {caseNo}
          </p>
        </div>

        {/* HEADLINE */}
        <header className="case-headline">
          <p className="case-kicker">
            {exhibit} · {category}
          </p>

          <h1>{headline}</h1>

          <p className="case-standfirst">{standfirst}</p>

          <div className="case-byline">
            <span>By the Desk</span>
            <span>Filed {year}</span>
            <span>Subject: {title}</span>
            <span className="case-status">
              <i></i>
              {status}
            </span>
          </div>
        </header>

        {/* MAIN EXHIBIT + CASE SHEET */}
        <section className="case-lead">
          <figure className="case-figure case-figure-main">
            <div className="case-tape"></div>

            <div className="case-figure-frame">
              <img src={image} alt={`${title} — main exhibit`} />
            </div>

            <figcaption>
              <span className="case-exhibit-tag">{exhibit}</span>
              <span>Fig. 1 — The subject as recovered from {client}.</span>
            </figcaption>

            <div className="case-stamp" aria-hidden="true">
              Case {status === "Live" ? "Open" : status}
            </div>
          </figure>

          <aside className="case-sheet">
            <h2>Case Sheet</h2>

            <dl>
              {sheet.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="case-sheet-tags">
              <span>Tools recovered</span>

              <div>
                {techStack.map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
            </div>

            <a
              className="case-visit"
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              Inspect the live evidence ↗
            </a>
          </aside>
        </section>

        {/* THE REPORT */}
        <section className="case-report">
          <div className="case-section-label">
            <p>The Report</p>
            <p>Full account</p>
          </div>

          <div className="case-report-body">
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="case-pullquote">“{pullQuote}”</blockquote>

          <div className="case-findings">
            <h3>Key Findings</h3>

            <ol>
              {findings.map((finding, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {finding}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FURTHER EVIDENCE */}
        {gallery.length > 0 && (
          <section className="case-evidence">
            <div className="case-section-label">
              <p>Further Evidence</p>
              <p>{gallery.length} additional exhibits</p>
            </div>

            <div className="case-evidence-grid">
              {gallery.map((item) => (
                <figure className="case-figure" key={item.caption}>
                  <div className="case-tape"></div>

                  <div className="case-figure-frame">
                    <img src={item.src} alt={item.caption} loading="lazy" />
                  </div>

                  <figcaption>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* END MARK + NAVIGATION */}
        <p className="case-endmark">— 30 —</p>

        <nav className="case-pager" aria-label="Other case files">
          {previous ? (
            <Link to={`/work/${previous.slug}`}>
              <span>← Previous file · {previous.exhibit}</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <div></div>
          )}

          {next ? (
            <Link to={`/work/${next.slug}`} className="case-pager-next">
              <span>Next file · {next.exhibit} →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </article>
  );
};

export default ProjectDetail;
