function Skills() {
  const skills = [
    { name: "HTML", level: 80, label: "Highly Proficient" },
    { name: "CSS", level: 80, label: "Highly Proficient" },
    { name: "JavaScript", level: 70, label: "Proficient" },
    { name: "Python", level: 80, label: "Highly Proficient" },
    { name: "Java", level: 70, label: "Proficient" },
    { name: "C++", level: 70, label: "Proficient" },
    { name: "MySQL", level: 70, label: "Proficient" }
  ];

  const softSkills = [
    { name: "Leadership", level: 90, label: "Expert" },
    { name: "Problem-Solving", level: 75, label: "Highly Proficient" },
    { name: "Time Management", level: 75, label: "Highly Proficient" },
    { name: "Adaptability", level: 80, label: "Highly Proficient" },
    { name: "Critical Thinking", level: 80, label: "Highly Proficient" },
    { name: "Creativity", level: 95, label: "Expert" }
  ];

  const renderSkills = (data) =>
    data.map((skill) => (
      <div className="skill" key={skill.name}>
        
        <div className="skill-header">
          <span>{skill.name}</span>
        </div>

        <div className="bar">
          <div
            className="fill"
            style={{ width: `${skill.level}%` }}
          ></div>

          <span
            className="badge"
            style={{ left: `${skill.level}%` }}
          >
            {skill.label}
          </span>
        </div>

      </div>
    ));

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-wrapper">
        
        <div className="skills-column">
          
          {renderSkills(skills)}
        </div>

        <div className="skills-column">
          
          {renderSkills(softSkills)}
        </div>

      </div>
    </section>
  );
}

export default Skills;