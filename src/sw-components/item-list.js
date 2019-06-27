import ItemList from './../components/ItemList';
import Server from './../server';
import {withData} from './../components/hoc/';

const server = new Server();

const {
  getAllPersons,
  getAllPlanets,
  getAllStarships
} = server;

const PersonList = withData(ItemList, getAllPersons);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipsList = withData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipsList
}