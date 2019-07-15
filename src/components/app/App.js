import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './../Header';
import RandomElem, {RecordItem} from './../../components/RandomElem';
import {
  PersonPage,
  PlanetPage,
  StarshipsPage
} from './../../pages';

import Server from './../../server';

import './style.scss';

export default class App extends React.Component {
  server = new Server();

  onItemSelected = (id) => {
    this.setState({
      idActiveItem: id
    })
  }

  render() {
    return(
      <div className='sw-content'>
        <BrowserRouter>
          <Header/>
          <RandomElem getData={this.server.getPlanet}>
            <RecordItem label='Population: ' field='population'/>
            <RecordItem label='Rotation Period: ' field='rotationPeriod'/>
            <RecordItem label='Diameter: ' field='diameter'/>
          </RandomElem>
          <Route path='/people' component={PersonPage}/>
          <Route path='/planet' component={PlanetPage}/>
          <Route path='/starships' component={StarshipsPage}/>
        </BrowserRouter>
      </div>
    )
  }
}                 