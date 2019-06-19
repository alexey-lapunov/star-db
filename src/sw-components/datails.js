import React from 'react';

import Server from './../server';
import ItemDatails, {RecordItem} from './../components/ItemsDatails';

const server = new Server();

const {
  getStarships,
  getPerson,
  getPlanet,
} = server;

const PersonDatails = ({idActiveItem}) => {
  return(
    <ItemDatails 
      getData={getPerson}
      idActiveItem={idActiveItem}>
        <RecordItem label='Name' field='name'/>
        <RecordItem label='Color' field='skinColor'/>
        <RecordItem label='Birth Year' field='birthYear'/>
    </ItemDatails>
  )
}

const StarhipsDatails = ({idActiveItem}) => {
  return(
    <ItemDatails 
      getData={getStarships}
      idActiveItem={idActiveItem}>
        <RecordItem label='Class' field='class'/>
        <RecordItem label='Speed' field='speed'/>
        <RecordItem label='Model' field='model'/>
    </ItemDatails>
  )
}

const PlanetDatails = ({idActiveItem}) => {
  return(
    <ItemDatails 
      getData={getPlanet}
      idActiveItem={9}>
        <RecordItem label='Name' field='name'/>
        <RecordItem label='Population' field='population'/>
        <RecordItem label='Diameter' field='diameter'/>
    </ItemDatails>
  ) 
}

export {
  StarhipsDatails,
  PersonDatails,
  PlanetDatails
}
