function Skills() {
  const skills = [
    {
      category: "Languages",
      technologies: [
        "Python",
        "JavaScript",
        "SQL",
        "HTML5",
        "CSS3",
        "C++",
        "Java"
      ]
    },
    {
      category: "Frameworks & Libraries",
      technologies: [
        "React",
        "Node.js",
        "TailwindCSS",
        "Android SDK",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "TensorFlow / PyTorch"
      ]
    },
    {
      category: "Tools & Platforms",
      technologies: [
        "Git",
        "GitHub",
        "Azure",
        "Trello",
        "Visual Studio",
        "VS Code"
      ]
    },
    {
      category: "Methodologies",
      technologies: [
        "Agile / Scrum",
        "CI/CD",
        "Test-Driven Development",
        "RESTful API Design"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skillGroup) => (
          <article key={skillGroup.category} className="skills-card">
            
            <h3>{skillGroup.category}</h3>

            <ul>
              {skillGroup.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;