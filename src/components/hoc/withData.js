import React from 'react';
import Loader from '../Loader';

import Server from './../../server';

export default function withData(Component, getData) {
  class WithData extends React.Component {
    state = {
      list: null,
      loading: true,
    };

    server = new Server();

    componentDidMount() {
      getData()
        .then((res) => {
          this.setState({
            loading: false,
            list: res,
          })
        })
    }

    render() {
      const { list, loading } = this.state;
      const loader = loading ? <Loader/> : null;
      const items = !loading ? list : []; 

      return(
        <Component getData={getData} loader={loader} items={items} {...this.props}/>
      ) 
    }
  }

  WithData.displayName = `WithData(${Component.displayName || Component.name || 'Component'})`

  return WithData;
}