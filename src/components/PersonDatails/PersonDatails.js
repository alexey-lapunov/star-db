import React from 'react';

import './style.scss';

export default class PersonDatails extends React.Component {
  render() {
    return(
      <div className='sw-person-details'>
        <div className='sw-person-details__container'>
          <div className='sw-person-details__wrap'>
            <img className='sw-person-details__img' src="" alt=""/>
            <div className='sw-person-details__info'>
              <h3 className='sw-person-details__title'>Person Name</h3>
                <div className='sw-person-details__list'>
                  <span className='sw-person-details__item'>gender</span>
                  <span className='sw-person-details__item'>Year</span>
                  <span className='sw-person-details__item'>color</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}