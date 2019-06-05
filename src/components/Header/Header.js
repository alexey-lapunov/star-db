import React from 'react';

import './style.scss';

export default class Header extends React.Component {
	render() {
    return(
      <div className='sw-header'>
        <div className='sw-header-container'>
          <div className='sw-header-wrap'>
            <div className='sw-header-grid'>
              <div className='sw-header-grid-col'>
                <span className='sw-header-logo'>Star DB</span>
              </div>
              <div className='sw-header-grid-col'>
                <div className='sw-header-nav'>
                  <a href="vk.com" className='sw-header-nav-item'>People</a>
                  <a href="vk.com" className='sw-header-nav-item'>Planets</a>
                  <a href="vk.com" className='sw-header-nav-item'>Starships</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}