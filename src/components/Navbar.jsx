//Create a component- a function that returns UI
function Navbar(props){

    return(
        <nav>
            <h2>{props.name}</h2>

            <ul>
                <li><a href="#home">{props.linkOne}</a></li>
                <li><a href="#about">{props.linkTwo}</a></li>
                <li><a href="#skills">{props.linkFour}</a></li>
                <li><a href="#projects">{props.linkFive}</a></li>
                <li><a href="#contact">{props.linkSix}</a></li>
                
            </ul>
        </nav>
    )
}

//Allow another file to use it
export default Navbar;