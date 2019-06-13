import React from 'react';

import './style.scss';

const Row = ({left, right}) => {
  return(
    <div className='sw-grid'>
      <div className='sw-grid__col'>
        {left}
      </div>
      <div className='sw-grid__col'>
        {right}
      </div>  
    </div>
  )
};

export default Row;