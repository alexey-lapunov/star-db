import React from 'react';
import Loader from '../Loader';
import ErroMessage from '../ErroMessage';

export default function withData(Component, getData) {
  class WithData extends React.Component {
    state = {
      list: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      getData()
        .then((res) => {
          this.setState({
            loading: false,
            list: res,
          })
        })
        .catch( () => {
            this.setState({
                error: true
            })
        });
    }

    render() {
      const { list, loading, error } = this.state;
      const loader = loading && !error ? <Loader/> : null;
      const errorMessage = error ? <ErroMessage/> : null;
      const items = !loading && !error ? list : [];

      return(
        <Component 
            getData={getData} 
            loader={loader} 
            error={errorMessage}
            items={items} 
            {...this.props}/>
      ) 
    }
  }

  WithData.displayName = `WithData(${Component.displayName || Component.name || 'Component'})`

  return WithData;
}