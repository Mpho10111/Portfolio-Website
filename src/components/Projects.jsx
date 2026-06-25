function Projects() {

  const projects = [
    {
      title: "Campus Marketplace",
      description: "A platform for students to buy and sell items.",
      tech: "React, Java, Spring Boot",
      image: "/project1.png"
    },
    {
      title: "Machine Learning Project",
      description: "A machine learning solution built using data analysis.",
      tech: "Python, Pandas, Scikit-learn",
      image: "/project2.png"
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project) => (
          <article className="project-card" key={project.title}>

            <h3>{project.title}</h3>

            {/* 👇 Image right under title */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />

            <p>{project.description}</p>

            <p className="tech">
              Technologies: {project.tech}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;