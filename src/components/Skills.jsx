function Skills(){

    const skills = [
        {
            category: "Frontend",
            technologies: [
                "React",
                "JavaScript",
                "HTML",
                "CSS"
            ]
        },

        {
            category: "Backend",
            technologies: [
                "Java",
                "Spring Boot"
            ]
        },

        {
            category: "Data & Machine Learning",
            technologies: [
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn"
            ]
        },

        {
            category: "Tools",
            technologies: [
                "Git",
                "GitHub",
                "Docker"
            ]
        }
    ];


    return (
        <section className="skills">

            <h2>
                Skills
            </h2>


            {skills.map((skillGroup) => (

                <article key={skillGroup.category}>

                    <h3>
                        {skillGroup.category}
                    </h3>


                    <ul>

                        {skillGroup.technologies.map((technology) => (

                            <li key={technology}>
                                {technology}
                            </li>

                        ))}

                    </ul>

                </article>

            ))}


        </section>
    )

}


export default Skills;