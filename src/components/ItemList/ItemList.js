import React from 'react';

import Server from './../../server';
import Loader from '../Loader';

import './style.scss';

export default class ItemList extends React.Component {
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
          idActiveItem: res[0].id
        })
      })
  }

  renderItems(list) {
    if( !list ) {
      return
    }

    const className = 'sw-item-list__item';

    return list.map((item) => {
      return <li
                key={item.id} 
                onClick={() => {this.props.onActiveItemList(item.id)}}
                className={
                  item.id === this.props.idActiveItem ? className + ' -active': className}
                >{this.props.renderFunc(item)}</li>
    })
  }

  render() {
    const { list, loading } = this.state;
    const loader = loading ? <Loader/> : null;
    const items = !loading ? this.renderItems(list) : null;

    return(
      <div className='sw-item-list'>
        <ul className='sw-item-list__list'>
          {loader}
          {items}
        </ul>
      </div>
    )
  }
}