import React from 'react';

import Server from './../../server/'

import Header from './../Header';
import RandomPlanet from './../RandomPlanet'
import {
  PersonPage,
  PlanetPage,
  StarshipsPage
} from './../../pages';

import './style.scss';

export default class App extends React.Component {
  server = new Server();

  render() {
    return(
      <div className='sw-content'>
        <Header/>
        <RandomPlanet/>
        <PersonPage/>
        <PlanetPage/>
        <StarshipsPage/>
      </div>
    )
  }
}                 