//Import the component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Datathons from "./components/Datathons";
import Contact from "./components/Contact";

function App(){
  
  return(
    <>
      <Navbar
        name= "Mpho Murashiwa"
        linkOne="Home"
        linkTwo="About"
        linkThree="Resume"
        linkFour="Skills"
        linkFive="Projects"
        linkSix="Contact"
      
      />
      <Hero
        name="Hi, I'm Mpho"
        description= "Deeply passionate about life, growth, and becoming someone my Creator, my loved ones, and my future self can be proud of."
      />
      <About

      /> 
      <Skills

      />
      <Projects

      />
      <Datathons

      />
      <Contact

      />
    </>
  )


}

export default App;