import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Main extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <h1>Main Component</h1>
                {/* <NavLink activeClassName="active" to="/individual">Individual</NavLink> */}
                <Link to="./individual">Individual</Link>
            </React.Fragment>
        );
    }
}
 
export default Main;