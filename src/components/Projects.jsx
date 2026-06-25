import ProjectCard from "./ProjectCard";


function Projects(){

    const projects = [
        {
            title: "Campus Marketplace",
            description:
            "A platform for students to buy and sell items.",
            technologies:
            "React, Java, Spring Boot"
        },

        {
            title: "Machine Learning Project",
            description:
            "A machine learning solution built using data analysis.",
            technologies:
            "Python, Pandas, Scikit-learn"
        }
    ];


    return (
        <section className="projects">

            <h2>
                Projects
            </h2>


            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}


        </section>
    )

}


export default Projects;