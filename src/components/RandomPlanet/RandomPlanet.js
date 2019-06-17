import React from 'react';

import Server from './../../server/';
import ErrorMessage from './../ErroMessage/';
import Loader from './../Loader/';

import './style.scss';

export default class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.interva = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interva.clear());
  }

  server = new Server();

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17 + 2);

    this.server
      .getPlanet(id)
      .then( (planet) => {
        this.setState({
          planet: planet,
          loading: false,
        })
      })
      .catch(this.onErrorMessage)
  }

  onErrorMessage = (err) => {
    this.setState({ 
        error: true,
        loading: false,
      }
    )
  }

  render() {
    const { planet: { 
      name, 
      population, 
      rotationPeriod, 
      diameter,
      img
    }, 
      loading,
      error
    } = this.state;

    const showError = () => {
      return(
        <ErrorMessage/>
      )
    }

    const showContent = () => {
      return(
        <React.Fragment>
          <img className='sw-rand-planet__img' src={img} alt=""/>
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
        </React.Fragment>
      )
    };

    const loader = loading ? <Loader/> : null;
    const errorMessage = error ? showError() : null;
    const content = !(loading || error) ? showContent() : null;
  
    return(
      <div className='sw-rand-planet'>
        <div className='sw-rand-planet__container'>
          <div className='sw-rand-planet__wrap'>
            <div className='sw-rand-planet__content'>
              { loader }
              { errorMessage }
              { content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}