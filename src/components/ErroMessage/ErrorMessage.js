import React from 'react';

import './style.scss';

const ErroMessage = () => {
  return(
    <div className='sw-error-message'>
      <span className='sw-error-message__title'>Boom</span>
      <span className='sw-error-message__description'>something has gone terribly wrong =(</span>
    </div>
  )
}

export default ErroMessage;