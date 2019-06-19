import React from 'react';
import Loader from '../Loader';

import Server from './../../server';

export default function withData(Component) {
  class WithData extends React.Component {
    state = {
      list: null,
      loading: true,
    };

    server = new Server();

    componentDidMount() {
      this.props.getData()
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
        <Component loader={loader} items={items} {...this.props}/>
      ) 
    }
  }

  WithData.displayName = `WithData(${Component.displayName || Component.name || 'Component'})`

  return WithData;
}