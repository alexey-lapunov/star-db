import React from 'react';
import Server from './../../server/';

import './style.scss';

export default class RandomPlanet extends React.Component {
  state = {
    id: 3,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  constructor() {
    super();
    this.intervalPlanet();
  }

  server = new Server();

  updatePlanet() {
    const id = Math.floor(Math.random() * 17 + 2);

    this.server
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          name: planet.name,
          id: id,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        })
      }) 
  }

  intervalPlanet() {
    setInterval( () => {this.updatePlanet()}, 3000);
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;
  
    return(
      <div className='sw-rand-planet'>
        <div className='sw-rand-planet__container'>
          <div className='sw-rand-planet__wrap'>
          <div className='sw-rand-planet__content'>
              <img className='sw-rand-planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
              <div className='sw-rand-planet__info'>
                <h3 className='sw-rand-planet__title'>{name}</h3>
                  <ul className='sw-rand-planet-list'>
                    <li className='sw-rand-planet-list__item'>
                      Population: 
                      <span>{population}</span>
                    </li>
                    <li className='sw-rand-planet-list__item'>
                      RotationPeriod:
                      <span>{rotationPeriod}</span>
                    </li>
                    <li className='sw-rand-planet-list__item'>
                      Diameter: 
                      <span>{diameter}</span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}