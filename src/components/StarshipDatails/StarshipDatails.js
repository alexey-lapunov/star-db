import React from 'react';

import './style.scss';

export default class StarshipDatails extends React.Component {
  render() {
    return(
      <div className='sw-starship-details'>
        <div className='sw-starship-details__container'>
          <div className='sw-starship-details__wrap'>
            <img className='sw-starship-details__img' src='' alt=""/>
            <div className='sw-starship-details__info'>
              <h3 className='sw-starship-details__title'>starship Name</h3>
                <div className='sw-starship-details__list'>
                  <span className='sw-starship-details__item'>item1</span>
                  <span className='sw-starship-details__item'>item1</span>
                  <span className='sw-starship-details__item'>item1</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}