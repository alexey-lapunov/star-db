import React from 'react';

import './style.scss';

export default class RandomPlanet extends React.Component {
  render() {
    return(
      <div className='sw-planet'>
        <div className='sw-planet-container'>
          <div className='sw-planet-wrap'>
            <img className='sw-planet-img' src="" alt=""/>
            <div className='sw-planet-info'>
              <h3 className='sw-planet-title'>Planet Name</h3>
                <div className='sw-planet-list'>
                  <span className='sw-planet-item'>Population</span>
                  <span className='sw-planet-item'>Rotation</span>
                  <span className='sw-planet-item'>Diameter</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}