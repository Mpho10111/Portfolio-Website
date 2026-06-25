//Create a component- a function that returns UI
function Navbar(props){

    return(
        <nav>
            <h2>{props.name}</h2>

            <ul>
                <li>{props.linkOne}</li>
                <li>{props.linkTwo}</li>
                <li>{props.linkThree}</li>
                <li>{props.linkFour}</li>
                <li>{props.linkFive}</li>
                <li>{props.linkSix}</li>
                
            </ul>
        </nav>
    )
}

//Allow another file to use it
export default Navbar;