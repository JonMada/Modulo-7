import React, { Component } from 'react';
import moment from "moment";

import PorfolioContainer from './Portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jon Madariaga Ortega - Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PorfolioContainer />

      </div>

    );
  }
}
