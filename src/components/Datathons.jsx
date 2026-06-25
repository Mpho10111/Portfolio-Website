import DatathonCard from "./DatathonCard";


function Datathons(){

    const datathons = [
        {
            title: "Healthcare Datathon",
            description:
            "Built a machine learning solution to analyse healthcare data.",
            technologies:
            "Python, Pandas, Machine Learning",
            certificate:
            "/certificates/datathon1.png"
        },

        {
            title: "Finance Datathon",
            description:
            "Developed a data-driven solution for financial analysis.",
            technologies:
            "Python, Data Analysis",
            certificate:
            "/certificates/datathon2.png"
        }
    ];


    return (
        <section className="datathons">

            <h2>
                Datathon Achievements
            </h2>


            {datathons.map((datathon) => (
                <DatathonCard
                    key={datathon.title}
                    title={datathon.title}
                    description={datathon.description}
                    technologies={datathon.technologies}
                    certificate={datathon.certificate}
                />
            ))}


        </section>
    )

}

export default Datathons;