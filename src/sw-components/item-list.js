import React from 'react';
import ItemList from './../components/ItemList';
import Server from './../server'

const server = new Server();

const {
  getAllPersons,
  getAllPlanets,
  getAllStarships
} = server;

const PersonList = () => {
  return(
    <ItemList getData={getAllPersons}>
      { (item) => `${item.name} (${item.birthYear})` }
    </ItemList>
  )
}

const PlanetList = () => {
  return(
    <ItemList getData={getAllPlanets}>
      { (item) => `${item.name} (${item.population})` }
    </ItemList>
  )
}

const StarshipsList = () => {
  return(
    <ItemList getData={getAllStarships}>
      { (item) => `${item.name} (${item.speed})` }
    </ItemList>
  )
}

export {
  PersonList,
  PlanetList,
  StarshipsList
}