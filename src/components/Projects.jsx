function Projects() {

  const projects = [
    {
      title: "Campus Marketplace",
      image: "/project1.png"
    },
    {
      title: "Personal Portfolio Website",
      image: "/project2.png"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project) => (
          <div className="project-item" key={project.title}>

            {/* Title above */}
            <h3 className="project-title">
              {project.title}
            </h3>

            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;
