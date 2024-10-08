import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {withRouter} from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to ={route} activeClassName = "nav-link-activate">
                    {linkText}
                </NavLink>
            </div>  

        );
    };

    const handleSignOut = () => {
        axios.delete
            ("https://api.devcamp.space/logout", 
            {withCredentials: true})
            .then(response => {
                if(response.status === 200){
                    props.history.push('/');
                    props.handleSuccessfullLogOut();
                }
                return response.data;
            }).catch(error => {
                console.log("Error signing out", error);
            })
    };

  
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

                {props.loggedInStatus === "LOGGED_IN"? dynamicLink("/portfolio-manager", "Portfolio Manager") : null}
                

            </div>

            <div className="right-side">
                JON MADARIAGA
                {props.loggedInStatus === "LOGGED_IN"? 
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt"/>
                    </a> 
                    : null}

            </div>
        </div>
    )
}

export default withRouter(NavigationComponent);
