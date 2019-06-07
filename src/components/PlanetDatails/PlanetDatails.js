import React from 'react';

import './style.scss';

export default class PlanetDetails extends React.Component {
  render() {
    return(
      <div className='sw-planet-details'>
        <div className='sw-planet-details__container'>
          <div className='sw-planet-details__wrap'>
            <img className='sw-planet-details__img' src="" alt=""/>
            <div className='sw-planet-details__info'>
              <h3 className='sw-planet-details__title'>Planet Name</h3>
                <div className='sw-planet-details__list'>
                  <span className='sw-planet-details__item'>Population</span>
                  <span className='sw-planet-details__item'>Rotation</span>
                  <span className='sw-planet-details__item'>Diameter</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}