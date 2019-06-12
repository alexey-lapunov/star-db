import React from 'react';

import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDatails from './../PersonDatails';
import PlanetDatails from './../PlanetDatails';
import StarshipDatails from './../StarshipDatails';


import './style.scss';

export default class App extends React.Component {
  state = {
    idActiveItemList: null,
  }

  onActiveItemList = (id) => {
    this.setState({
      idActiveItemList: id
    })
  }

  render() {
    const {idActiveItemList} = this.state; 

    return(
      <div className='sw-content'>
        <Header/>
        <RandomPlanet/> 
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
          <ItemList idActiveItem={idActiveItemList} onActiveItemList={this.onActiveItemList}/>
          <PersonDatails idActivePerson={idActiveItemList}/>
        </div>
        <PlanetDatails/>
        <StarshipDatails/>
      </div>
    )
  }
}                 