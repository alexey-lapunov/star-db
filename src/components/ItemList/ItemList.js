import React from 'react';

import './style.scss';

const ItemList = (props) => {
  const {loader, error, items, children, onItemSelected} = props;
  
  const itemsRender = items.map((item) => {
    return <li
              key={item.id}
              className='sw-item-list__item'
              onClick={() => onItemSelected(item.id)}
              >
                {children(item)} 
            </li>
  })

  return(

    <div className='sw-item-list'>
      <ul className='sw-item-list__list'>
        {loader}
        {error}
        {itemsRender}
      </ul>
    </div>
  )
}

export default ItemList;