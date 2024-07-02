import React, { Component } from 'react';
import moment from "moment";
import axios from "axios";

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";


import NavigationContainer from './Navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './Portfolio/portfolio-detail';
import NoMatch from './pages/no-match';

export default class App extends Component {
  constructor() {
    super();
    this.getPorfolioItems = this.getPorfolioItems.bind(this);
  }

  getPorfolioItems () {
    axios.get('https://jonmadariaga.devcamp.space/portfolio/portfolio_items')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  }

  
  render() {
    this.getPorfolioItems();
    return (
      <div className='app'>

        <Router>
          
          <div>
            
            <h1>Jon Madariaga Ortega - Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>

            <NavigationContainer />
            

            <Switch>
              <Route exact path ='/' component = {Home}/>
              <Route  path ='/about-me' component = {About}/>
              <Route  path ='/contact' component = {Contact}/>
              <Route  path ='/blog' component = {Blog}/>
              <Route exact path = '/portfolio/:slug' component = {PortfolioDetail}/>
              <Route component = {NoMatch} /> 
            </Switch>
          </div>
        </Router>
        
        
        

      </div>

    );
  }
}
