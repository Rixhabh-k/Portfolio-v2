const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-wrapper">

        <div className="footer-title">
          <h1>Rishabh Kharwar</h1>
        </div>

        <div className="footer-main">

          <div className="footer-about">
            <p>
              A web developer building thoughtful web experiences,
              digital products, and interactive interfaces.
              Working across both design and development.
            </p>
          </div>


          <div className="footer-column">
            <span>Sections</span>

            <a href="#work">Selected Works</a>
            <a href="#skills">The Stack</a>
            <a href="#contact">Contact</a>
          </div>


          <div className="footer-column">
            <span>The Desk</span>

            <p>India</p>
            <p>IST · Remote-first</p>

            <a href="mailto:your@email.com">
              your@email.com
            </a>
          </div>


          <div className="footer-column">
            <span>Wire Services</span>

            <a href="https://github.com/Rixhabh-k">GitHub</a>
            <a href="https://www.linkedin.com/in/rishabh-kharwar-dev/">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>

        </div>


        <div className="footer-stamp">
          <span>CASE CLOSED</span>
        </div>


        <div className="footer-bottom">

          <p>
            © 2026 RISHABH KHARWAR · ALL RIGHTS RESERVED ·
            PRINTED IN INDIA
          </p>

          <div className="footer-socials">

            <a href="https://github.com/Rixhabh-k" aria-label="GitHub">
              GH
            </a>

            <a href="https://www.linkedin.com/in/rishabh-kharwar-dev/" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;