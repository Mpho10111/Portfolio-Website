import { useState, useEffect } from "react";

function Hero(props){

    const titles = [
        "Computer Science student",
        "female in STEM"
    ];

    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentTitle((prev) =>
                prev === titles.length - 1 ? 0 : prev + 1
            );

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return(
        <section className="hero">

            <div className="hero-content">
    
                <article className="hero-left">
                    <h1>
                        <span className="intro">Hi, I'm</span>
                        <span className="name"> Mpho.</span>
                    </h1>

                    <h2 className="typing-text">
                        I'm a {titles[currentTitle]}
                    </h2>

                    <p>{props.description}</p>

                    <button className="cta">Let's get in touch</button>
                </article>

                <div className="hero-right">
                    <img src="/avatar.svg" alt="avatar" />
                </div>

            </div>

        </section>
    );
}

export default Hero;