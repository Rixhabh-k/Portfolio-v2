const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* TOP HEADER */}
        <div className="contact-heading">
          <div className="contact-heading-top">
            <p>Submit a Tip</p>
            <p>The Desk Is Open For Select Work — 2026</p>
          </div>

          <h1>Letters & Commissions</h1>
        </div>


        {/* CONTACT DESK */}
        <div className="contact-desk">

          {/* LEFT — FORM */}
          <div className="contact-form-section">

            <div className="contact-intro">
              <h2>Put it in writing</h2>

              <p>
                A project in mind, a role to fill, or just a good question -
                send it through and he’ll get back to you.
              </p>
            </div>


            <form className="contact-form">

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>

              </div>


              <div className="contact-field">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="A new product, a rebuild, a contract..."
                />
              </div>


              <div className="contact-field">
                <label htmlFor="story">The Story</label>

                <textarea
                  id="story"
                  rows="5"
                  placeholder="Tell him what you're building."
                />
              </div>


              <div className="contact-submit-row">

                <p>
                  Usually replies within 24 hours
                </p>

                <button type="submit">
                  Send the Letter
                </button>

              </div>

            </form>
          </div>


          {/* RIGHT — DETAILS */}
          <aside className="contact-info">

            <div className="contact-info-block">
              <span>Direct Line</span>

              <a href="mailto:hello@example.com">
                hello@example.com
              </a>

              <p>
                For commissions, contracts, and the occasional good
                argument about CSS.
              </p>
            </div>


            <div className="contact-info-block">
              <span>The Desk</span>

              <h3>India</h3>

              <p>
                IST · Working with teams worldwide, remote-first.
              </p>
            </div>


            <div className="contact-info-block">
              <span>Availability</span>

              <h3>Freelance & Contract</h3>

              <p>
                Available for select freelance, contract and
                product-building projects.
              </p>
            </div>


            {/* SOCIAL LINKS */}
            <div className="contact-socials">

              <a href="#" aria-label="GitHub">
                GH
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Email">
                @
              </a>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;