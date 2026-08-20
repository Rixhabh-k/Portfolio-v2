const Forensics = () => {
  const skills = [
    {
      substance: "React.js",
      code: "JSX",
      detected: "Most days",
      finding: "PRIMARY TOOL",
      type: "primary",
    },
    {
      substance: "JavaScript",
      code: "JS",
      detected: "Most days",
      finding: "PRIMARY TOOL",
      type: "primary",
    },
    {
      substance: "CSS",
      code: "CSS",
      detected: "Most days",
      finding: "PRIMARY TOOL",
      type: "primary",
    },
    {
      substance: "Sass",
      code: "scss",
      detected: "In projects",
      finding: "PRIMARY TOOL",
      type: "primary",
    },
    {
      substance: "Figma",
      code: "FIG",
      detected: "Most days",
      finding: "PRIMARY TOOL",
      type: "primary",
    },
    {
      substance: "MongoDb",
      code: "MD",
      detected: "In projects",
      finding: "COMFORTABLE",
      type: "comfortable",
    },
    {
      substance: "Express.js",
      code: "EXP",
      detected: "In Projects",
      finding: "COMFORTABLE",
      type: "comfortable",
    },
    {
      substance: "AWS",
      code: "AWS",
      detected: "Amplify, S3",
      finding: "IN TRAINING",
      type: "training",
    },
    {
      substance: "Vercel",
      code: "VRCL",
      detected: "Most days",
      finding: "COMFORTABLE",
      type: "comfortable",
    },
    {
      substance: "Docker",
      code: "DCKR",
      detected: "Learning",
      finding: "TRACE AMOUNT",
      type: "trace",
    },
    {
      substance: "TanStack Start",
      code: "TNK",
      detected: "Learning",
      finding: "TRACE AMOUNT",
      type: "trace",
    },
  ];

  return (
    <div id="stack" className="skills-section">
      <div className="skills-top-wrapper">
        <div className="skills-p-line">
          <p>Forensics</p>
          <p>Substances detected</p>
        </div>

        <div className="skills-h-line">
          <h1>The Lab Report</h1>
        </div>
      </div>

      <div className="lab-report">
        <div className="lab-report-header">
          <div>SUBSTANCE</div>
          <div>CODE</div>
          <div>DETECTED</div>
          <div>FINDING</div>
        </div>

        {skills.map((skill, index) => (
          <div className="lab-report-row" key={index}>
            <div className="lab-substance">{skill.substance}</div>

            <div className="lab-code">{skill.code}</div>

            <div className="lab-detected">{skill.detected}</div>

            <div className="lab-finding">
              <span className={`finding-tag ${skill.type}`}>
                {skill.finding}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forensics;