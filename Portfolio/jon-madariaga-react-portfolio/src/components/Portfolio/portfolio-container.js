import React, { Component } from 'react';
import axios from "axios";

import PortfolioItem from './portfolio-item';

export default class PorfolioContainer extends Component {
    
    constructor(){
        super();
        
        this.state = {
            pageTitle : "Welcome to my portfolio",
            isLoading: false,
            data : []
        };

        this.handleFiltro = this.handleFiltro.bind(this);
        
    }

    //Función personalizada 

    portFolioItems () {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} title={item.name} url = {item.url} slug = {item.id}/>;
        });
    }

    getPorfolioItems () {
        axios.get('https://jonmadariaga.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState ({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      });
      }

   
    handleFiltro (filter) {
        this.setState({
            data: this.state.data.filter( item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount(){
        this.getPorfolioItems();
    }

    render () {
        //Introducimos nuestro condicional de carga
        if(this.state.isLoading) {
            return(
                <div>Loading...</div>
            )
        }

        return (
            <div> 
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFiltro("Estudios de Mercado")}>Estudios de Mercado</button>
                <button onClick={() => this.handleFiltro("Farmacía")}>Farmacia</button>
                <button onClick={() => this.handleFiltro("Eventos")}>Eventos</button>


                {this.portFolioItems()} 

                

                
            </div>
        )
    }
}