import React from 'react';

import Header from './../Header';
import RandomPlanet from './../RandomPlanet';

import './style.scss';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <RandomPlanet/>
        
      </div>
    )
  }
}                 