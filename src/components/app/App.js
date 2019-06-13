import React from 'react';

import Server from './../../server/'

import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDatails from './../PersonDatails';
import PlanetDatails from './../PlanetDatails';
import StarshipDatails from './../StarshipDatails';
import Row from './../Row';

import './style.scss';

export default class App extends React.Component {
  server = new Server();

  state = {
    idActiveItemList: null
  }

  onActiveItemList = (id) => {
    this.setState({
      idActiveItemList: id
    })
  }

  render() {
    const { idActiveItemList } = this.state;

    // Person components 
    const personItemList = (
      <ItemList 
        idActiveItem={idActiveItemList} 
        onActiveItemList={this.onActiveItemList}
        getData={this.server.getAllPersons}
        renderFunc={ (item) => `${item.name} (${item.birthYear})`}/>
    );

    const personDatails = (
      <PersonDatails 
        idActivePerson={idActiveItemList}
        renderFunc={ (item) => `${item.name} (${item})` }/>
    );

    // Starships components 
    const starshipsItemList = (
      <ItemList 
        //idActiveItem={} 
        onActiveItemList={this.onActiveItemList}
        getData={this.server.getAllStarships}
        renderFunc={ (item) => `${item.name} ()`}/>
    );

    return(
      <div className='sw-content'>
        <Header/>
        <RandomPlanet/>
        <Row
          left={ personItemList }
          right={ personDatails }
        />
        <Row
          left={ starshipsItemList }
          right={ <PersonDatails /> }
        />
        <PlanetDatails/>
        <StarshipDatails/>
      </div>
    )
  }
}                 