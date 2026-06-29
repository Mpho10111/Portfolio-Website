function Datathons(){

    const datathons = [
        {
            title: "IBM Z Datathon 2025",
            image: "/datathon1.png"
        },
        {
            title: "DIRISA Student Datathon Challenge 2025",
            image: "/datathon2.png"
        }
    ];

    return (
        <section id="datathons" className="datathons">

            <h2>Datathon Achievements</h2>

            <div className="project-container datathon-stack">
               {datathons.map((datathon) => (
                 <article className="project-card" key={datathon.title}>

                    <h3>{datathon.title}</h3>

                    <img
                        src={datathon.image}
                        alt={datathon.title}
                        className="project-image"
                    />

                 </article>
                ))}
            </div>

        </section>
    )
}

export default Datathons;