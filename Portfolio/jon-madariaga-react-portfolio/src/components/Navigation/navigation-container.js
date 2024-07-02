import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() {
        super();
        
    }

    render() {
        return(
            <div>
                <NavLink exact to ="/" activeClassName = "nav-link-activate">
                    Home
                </NavLink>

                <NavLink to ="/about-me" activeClassName = "nav-link-activate">
                    About
                </NavLink>

                <NavLink to ="/contact" activeClassName = "nav-link-activate">
                    Contact
                </NavLink>

                <NavLink to ="/blog" activeClassName = "nav-link-activate">
                    Blog
                </NavLink>

                
                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}