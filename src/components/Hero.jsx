import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero(props) {

  const titles = [
    "Computer Science student!",
    "female in STEM!"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    // Typing effect
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } 
    // Pause, then switch
    else {
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
          <h1>
            <span className="intro">Hi, I'm</span>
            <span className="name"> Mpho.</span>
          </h1>

          <h2 className="typing-text">
            I'm a <span className="highlight">{displayedText}</span>
            <span className="cursor">|</span>
          </h2>

          <p>{props.description}</p>

            <div className="social-icons">
                <a href="mailto:mphomurashiwa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>

                <a href="https://www.linkedin.com/in/mpho-murashiwa/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a href="https://wa.me/2782321866" target="_blank" rel="noopener noreferrer">
                <   FaWhatsapp />
                </a>
            </div>

            <a href="#contact" className="cta">Let's get in touch</a>
        </article>

        <div className="hero-right">
          <img src="/main_picture.jpeg" alt="avatar" />
        </div>

      </div>

    </section>
  );
}

export default Hero;