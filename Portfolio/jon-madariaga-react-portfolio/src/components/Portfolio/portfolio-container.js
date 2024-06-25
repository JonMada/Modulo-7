import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PorfolioContainer extends Component {
    
    constructor(){
        super();
        
        this.state = {
            pageTitle : "Welcome to my portfolio",
            data : [
                {title: "Unicefar"},
                {title: "Kualitate Lantaldea"},
                {title: "ForoTech"},
                {title: "Ikerfel"} 
            ]
        };
    }

    //Función personalizada 

    portFolioItems () {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        });
    }


    render () {
        return (
            <div> 
                <h2>{this.state.pageTitle}</h2>
                {this.portFolioItems()} 
            </div>
        )
    }
}