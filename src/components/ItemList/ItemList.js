import React from 'react';

import './style.scss';

export default class ItemList extends React.Component {
  render() {
    return(
      <ul className='sw-list'>
        <li className='sw-list__item'>Luke</li>
        <li className='sw-list__item'>r2d2</li>
        <li className='sw-list__item'>r2d2</li>
      </ul>
    )
  }
}