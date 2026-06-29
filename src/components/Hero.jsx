import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero(props) {

  const titles = [
    "Computer Science student!",
    "female in STEM!", 
    "data science enthusiast!", 
    "web designer!"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTitleIndex((prev) =>
          prev === titles.length - 1 ? 0 : prev + 1
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }

  }, [charIndex, currentTitleIndex]);

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <article className="hero-left">

          {/* TEXT AREA */}
          <div className="hero-text">
            <h1>
              <span className="intro">Hi, I'm</span>
              <span className="name"> Mpho.</span>
            </h1>

            <h2 className="typing-text">
              I'm a{" "}
              <span className="highlight">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>

            <p>{props.description}</p>
          </div>

          {/* ACTIONS AREA */}
          <div className="hero-actions">

            <div className="social-icons">
              <a href="mailto:mphomurashiwa@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>

              <a href="https://www.linkedin.com/in/mpho-murashiwa/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>

              <a href="https://wa.me/2782321866" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>

            <a href="#contact" className="cta">
              Let's get in touch
            </a>

          </div>

        </article>

        {/* IMAGE */}
        <div className="hero-right">
          <img src="/main_picture.jpeg" alt="avatar" />
        </div>

      </div>

    </section>
  );
}

export default Hero;