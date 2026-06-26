import DatathonCard from "./DatathonCard";


function Datathons(){

    const datathons = [
        {
            title: "IBM Z Datathon 2025",
            description:
            "Built a machine learning solution to analyse healthcare data.",
            technologies:
            "Python, Pandas, Machine Learning",
            image:
            "/datathon1.png"
        },

        {
            title: "DIRISA Student Datathon Challenge 2025",
            description:
            "Developed a data-driven solution for financial analysis.",
            technologies:
            "Python, Data Analysis",
            image:
            "/datathon2.png"
        }
    ];


    return (
        <section id="datathons" className="datathons">

            <h2>
                Datathon Achievements
            </h2>

            <div className="project-container">
               {datathons.map((datathon) => (
                 <article className="project-card" key={datathon.title}>

                    <h3>
                       {datathon.title} 
                    </h3>

                    <img
                        src={datathon.image}
                        alt={datathon.title}
                        className="project-image"
                    />
                    <p>
                    
                        {datathon.description}

                    </p>
                 </article>
                ))}
            </div>


        </section>
    )

}

export default Datathons;