import React from 'react';
import ItemList from './../components/ItemList';
import Server from './../server';
import {withData} from './../components/hoc/';

const server = new Server();

const {
  getAllPersons,
  getAllPlanets,
  getAllStarships
} = server;

const withChildrenFunction = (Wrapper, renderFunc) => {
  return (props) => {
      return(
          <Wrapper {...props}>
              {renderFunc}
          </Wrapper>
      )
  }  
};

const renderFuncPerson = (item) => `${item.name} (${item.birthYear})`;
const renderFuncPlanet = (item) => `${item.name} (${item.population})`;
const renderFuncStarships = (item) => `${item.name} (${item.speed})`;

const PersonList = withData(
                        withChildrenFunction(ItemList, renderFuncPerson), 
                        getAllPersons);
const PlanetList = withData(
                        withChildrenFunction(ItemList, renderFuncPlanet),
                        getAllPlanets);
const StarshipsList = withData(
                        withChildrenFunction(ItemList, renderFuncStarships),
                        getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipsList
}