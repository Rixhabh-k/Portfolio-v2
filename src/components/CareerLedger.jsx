const CareerLedger = () => {
  const careerData = [
    {
      period: "Apr 2026 — Now",
      role: "Founder & Web Developer",
      company: "Project 43",
      description:
        "Subject last seen founding a small studio to take on more than standard websites — he looks after the web work while the team handles fuller application builds for clients.",
    },
    {
      period: "2023 — Now",
      role: "Web Developer",
      company: "Pakko (Brisbane)",
      description:
        "Observed daily, building web applications — the storefront, quoting engine and an interactive 3D design platform — working across both front-end and back-end.",
    },
    {
      period: "2016 — 2023",
      role: "Supervisor",
      company: "Star Seafood, Moorooka",
      description:
        "First recorded appearance. Ran shifts at the fish & chip shop — leading a team, keeping service tight under pressure, and learning the trade before the code.",
    },
  ];

  return (
    <section className="career-section">
      <div className="career-wrapper">

        <div className="career-heading">
          <div className="career-heading-top">
            <p>Known Whereabouts</p>
            <p>Movements on record since 2016</p>
          </div>

          <h1>The Career Ledger</h1>
        </div>

        <div className="career-list">
          {careerData.map((item, index) => (
            <div className="career-row" key={index}>

              <div className="career-period">
                <p>{item.period}</p>
              </div>

              <div className="career-role">
                <h2>{item.role}</h2>
                <p>{item.company}</p>
              </div>

              <div className="career-description">
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareerLedger;