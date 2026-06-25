function ProjectCard(props){

    return (

        <article className ="project-card">

            <h3>
                {props.title}
            </h3>

            <p>
                {props.description}
            </p>

            <p>
                Technologies : {props.technologies}
            </p>
        </article>
    )
}


export default ProjectCard;