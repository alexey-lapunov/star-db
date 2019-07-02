import React from 'react';

const serverContext = React.createContext();

const ServerProvider = serverContext.Provider;
const ServerConsumer = serverContext.Consumer;

export {
  ServerProvider,
  ServerConsumer
};