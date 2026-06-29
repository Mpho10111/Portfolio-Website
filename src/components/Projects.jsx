function Projects() {

  const projects = [
    {
      title: "Campus Marketplace",
      link: "https://github.com/your-username/campus-marketplace",
      image: "/project1.png"
    },
    {
      title: "Personal Portfolio Website",
      link: "https://github.com/your-username/portfolio",
      image: "/project2.png"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project) => (
          <div className="project-item" key={project.title}>

            {/* 🔹 Title ABOVE */}
            <h3 className="project-title">
              {project.title}
            </h3>

            {/* 🔹 Only IMAGE is clickable */}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;