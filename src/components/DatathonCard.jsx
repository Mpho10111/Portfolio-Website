function DatathonCard(props){

    return (
        <article className="datathon-card">

            <h3>
                {props.title}
            </h3>


            <img
                src={props.certificate}
                alt={`${props.title} certificate`}
            />


            <p>
                {props.description}
            </p>


            <p>
                Technologies: {props.technologies}
            </p>


        </article>
    )

}

export default DatathonCard;