import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    story: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("YOUR_SHEETDB_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setMessage("Your letter has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        story: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
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

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="A new product, a rebuild, a contract..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="story">The Story</label>

                <textarea
                  id="story"
                  rows="5"
                  placeholder="Tell him what you're building."
                  value={formData.story}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-submit-row">

                <p>
                  Usually replies within 24 hours
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send the Letter"}
                </button>

              </div>

              {message && (
                <p className="form-message">
                  {message}
                </p>
              )}

            </form>
          </div>

          {/* RIGHT — DETAILS */}
          <aside className="contact-info">

            <div className="contact-info-block">
              <span>Direct Line</span>

              <a href="mailto:hello@example.com">
                rixhabhk@gmail.com
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

              <a href="https://github.com/Rixhabh-k" aria-label="GitHub">
                GH
              </a>

              <a href="https://www.linkedin.com/in/rishabh-kharwar-dev/" aria-label="LinkedIn">
                in
              </a>

              <a href="rixhabhk@gmail.com" aria-label="Email">
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