import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() {
        super();
        
    }

    render() {
        return(
            <div className="nav-wrapper">

                <div className="left-side">

                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/" activeClassName = "nav-link-activate">
                            Home
                        </NavLink>
                    </div>
                    
                    <div className="nav-link-wrapper">
                        <NavLink to ="/about-me" activeClassName = "nav-link-activate">
                            About
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to ="/contact" activeClassName = "nav-link-activate">
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to ="/blog" activeClassName = "nav-link-activate">
                            Blog
                        </NavLink>
                    </div>
                </div>

                <div className="right-side">
                    JON MADARIAGA
                </div>
            </div>
        )
    }
}