function Projects() {

  const projects = [
    {
      title: "Campus Marketplace",
      description: "A platform for Wits students to securely buy and sell items.",
      tech: "React, JavaScript, Express (Node.js), Azure",
      image: "/project1.png"
    },
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio that showcases my personal and professional skills"             ,
      tech: "React, JavaScript",
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

            {/*  Image right under title */}
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