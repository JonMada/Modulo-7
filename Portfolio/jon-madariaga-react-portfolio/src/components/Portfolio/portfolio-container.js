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
            return <PortfolioItem key={item.id} item={item}/>;
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

                <div className='portfolio-items-wrapper'>

                    <div className='btn-wrapper'>
                        <button className='btn' onClick={() => this.handleFiltro("Social Media")}>Social Media</button>
                        <button className='btn' onClick={() => this.handleFiltro("Technology")}>Technology</button>
                        <button className='btn' onClick={() => this.handleFiltro("Elearning")}>eLearning</button>
                        <button className='btn' onClick={() => this.handleFiltro("Eventos")}>Eventos</button>
                        <button className='btn' onClick={() => this.handleFiltro("eCommerce")}>eCommerce</button>
                    </div>

                    {this.portFolioItems()} 

                </div>
                

                

                
           
        )
    }
}