import React from 'react';

import {withData} from './../hoc/';

import './style.scss';

const ItemList = (props) => {
  const {loader, items, children} = props;
  
  const itemsRender = items.map((item) => {
    return <li
              key={item.id}
              className='sw-item-list__item'>
                {children(item)}
            </li>
  })

  return(
    <div className='sw-item-list'>
      <ul className='sw-item-list__list'>
        {loader}
        {itemsRender}
      </ul>
    </div>
  )
}

export default withData(ItemList)