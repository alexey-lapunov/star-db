import React from 'react';

import Header from './../Header';
import RandomPlanet from './../RandomPlanet'
import {
  PersonPage,
  PlanetPage,
  StarshipsPage
} from './../../pages';

import './style.scss';

export default class App extends React.Component {
  render() {
    return(
      <div className='sw-content'>
        <Header/>
        <RandomPlanet setInterval={3000}/>
        <PersonPage/>
        <PlanetPage/>
        <StarshipsPage/>
      </div>
    )
  }
}                 