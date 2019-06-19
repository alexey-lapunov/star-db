import React from 'react';

import Server from './../../server/'

import Header from './../Header';
import {
  PersonDatails,
  StarhipsDatails,
  PlanetDatails,
  PersonList,
  StarshipsList,
  PlanetList
} from './../../sw-components';

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

    return(
      <div className='sw-content'>
        <Header/>
        <StarhipsDatails idActiveItem={12}/>
        <PersonDatails idActiveItem={9}/>
        <PlanetDatails idActiveItem={8}/>
        <PersonList/>
        <PlanetList/>
        <StarshipsList/>
      </div>
    )
  }
}                 