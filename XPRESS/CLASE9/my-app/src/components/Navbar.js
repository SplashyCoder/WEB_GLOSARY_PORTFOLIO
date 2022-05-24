import React from "react";
class NavBar extends React.Component {
    //constructor() {}
    render() {
        return(
            <nav>
                <h1>barra de navegacion</h1>
                <ul>
                    <li>
                        home   
                    </li>
                    <li>
                        details
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar