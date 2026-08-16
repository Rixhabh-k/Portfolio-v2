import RishabhImg from "../assets/robert-portrait.webp";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-header">
        <h1>Front Page</h1>
        <h1>Filed under: Open Investigations</h1>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-left">
          <p className="hero-top-p">Case No. 43 — Findings Published</p>

          <h1>
            A developer who enjoys building things, breaking things, and
            figuring out how they work.
          </h1>

          <div class="intro-text">
            <p>
              Three years in: Robert Tran builds web apps at Pakko, and runs
              Project 43 — a small studio that takes on full application builds.
            </p>
          </div>

          <div className="small-info">
            <p>
              By <span>The Investigation Desk ·</span> Reporting from Brisbane,
              between Pakko and Project 43
            </p>
          </div>

          <div className="action-btns">
            <button className="">Read the Work </button>

            <button>Get In Touch</button>
          </div>

          <div className="hero-stats">
            <div className="stats">
              <h1>No. 43</h1>
              <p>Edition · first printing</p>
            </div>
            <div className="stats">
              <h1>21°C</h1>
              <p>Brisbane · clear winter sun</p>
            </div>
            <div className="stats">
              <h1>Global</h1>
              <p>Circulation · remote-friendly</p>
            </div>
            <div className="stats">
              <h1>Late Final</h1>
              <p>Ships when it's ready</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={RishabhImg} alt="Rishabh Potrait" />
          </div>
          <div className="image-title">
            <p>
              <span>Pictured:</span> the subject, in his natural habitat.
            </p>
          </div>

          <div class="article-body">
            <p>
              He enjoys turning ideas into things people can actually use. As a web developer, he works across the stack — from React interfaces to APIs, authentication, and databases.
            </p>

            <p>
              His work sits between design and engineering. He cares about how products look, move, and work underneath. He builds, works with clients, and keeps sharpening his craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
