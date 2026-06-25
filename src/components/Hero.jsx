

function Hero(props){

    return(
        <section className="hero">
            <header>
                <h1>
                    {props.name}
                </h1>

                <p>
                    {props.description}
                </p>

                <button>
                    View My Work
                </button>
            </header>

            
            
        </section>
    )
}

export default Hero;