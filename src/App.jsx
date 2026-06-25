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
        description= "Computer Science student and aspiring software developer."
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