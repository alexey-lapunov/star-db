import React from 'react';
import {NavLink} from 'react-router-dom'

import './style.scss';

export default class Header extends React.Component {
	render() {
    return(
      <div className='sw-header'>
        <div className='sw-header__container'>
          <div className='sw-header__wrap'>
            <div className='sw-header-grid'>
              <div className='sw-header-grid__col -left'>
                
              </div>
              <div className='sw-header-grid__col -right'>
                <ul className='sw-header-nav'>
                  <li className='sw-header-nav__item'>
                    <NavLink to='/people'
                             className='sw-header-nav__link'
                             activeClassName='-active'
                    >People</NavLink>
                  </li>  
                  <li className='sw-header-nav__item'>
                    <NavLink to='/planet'
                             className='sw-header-nav__link'
                             activeClassName='-active'
                    >Planets</NavLink>
                  </li>  
                  <li className='sw-header-nav__item'>
                    <NavLink to='/starships'
                             className='sw-header-nav__link'
                             activeClassName='-active'
                    >Starships</NavLink>
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