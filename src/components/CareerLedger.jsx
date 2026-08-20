const CareerLedger = () => {
  const careerData = [
    {
      period: "July 2026 — Now",
      role: "Frontend Devloper & UI/UX Designer",
      company: "Tirahut Tech",
      description:
        "After successfully completing my internship, I am now working full-time as a UI/UX Associate & Frontend Developer at Tirahut Tech. My role focuses on designing and developing company projects by creating intuitive user experiences and building responsive frontend solutions that balance visual appeal, usability, and business goals.",
    },
    {
      period: "Jun 2026 - July 2026 ",
      role: "Social Media Manager",
      company: "Radiance Luxury Salon",
      description:
        "Managing the brand's social media presence across multiple platforms, creating engaging content, designing promotional creatives, editing short-form videos, planning content calendars, and monitoring audience engagement. Collaborating with the business to enhance brand visibility, attract new clients, and promote academy programs through strategic digital marketing initiatives.",
    },
    {
      period: "Mar 2026 - Jun 2026 ",
      role: "Intern",
      company: "Tirahut Tech",
      description:
        "Worked as a Frontend Developer & UI/UX Associate on KamiGami, a real-world fashion e-commerce platform. Designed conversion-focused UI/UX, created pre-development layouts, and built responsive, reusable React components with interactive animations. Collaborated on improving navigation, user experience, accessibility, and overall visual consistency.",
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