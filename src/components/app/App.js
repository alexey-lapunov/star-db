import React from 'react';

import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDatails from './../PersonDatails';
import PlanetDatails from './../PlanetDatails';
import StarshipDatails from './../StarshipDatails';


import './style.scss';

export default class App extends React.Component {
  render() {
    return(
      <div className='sw-content'>
        <Header/>
        <RandomPlanet/>
        <ItemList/>
        <PersonDatails/>
        <PlanetDatails/>
        <StarshipDatails/>

        
      </div>
    )
  }
}                 