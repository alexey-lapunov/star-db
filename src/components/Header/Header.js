import React from 'react';

import './style.scss';

export default class Header extends React.Component {
	render() {
    return(
      <div className='sw-header'>
        <div className='sw-header__container'>
          <div className='sw-header__wrap'>
            <div className='sw-header-grid'>
              <div className='sw-header-grid__col -left'>
                <span className='sw-header__logo'>Star DB</span>
              </div>
              <div className='sw-header-grid__col -right'>
                <ul className='sw-header-nav'>
                  <li className='sw-header-nav__item'>
                    <a href="vk.com" className='sw-header-nav__link'>People</a>  
                  </li>  
                  <li className='sw-header-nav__item'>
                    <a href="vk.com" className='sw-header-nav__link'>Planets</a>
                  </li>  
                  <li className='sw-header-nav__item'>
                    <a href="vk.com" className='sw-header-nav__link'>Starships</a>
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