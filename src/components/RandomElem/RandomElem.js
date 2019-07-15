import React from 'react';
import PropTypes from 'prop-types';

import Server from '../../server';
import ErrorMessage from '../ErroMessage';
import Loader from '../Loader';

import './style.scss';

const RecordItem = ({obj, label, field}) => {
  return(
    <li className='sw-rand-elem-list__item'>
      {label}
      <span>
        {obj[field]}
      </span>
    </li>
  )
};

export {
  RecordItem
}

export default class RandomElem extends React.Component {
  state = {
    elem: {},
    loading: true,
    error: false
  }

  static propTypes = {
    setInterval: PropTypes.number,
  }

  static defaultProps = {
    setInterval: 3000
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.updateElem();
    this.interva = setInterval(this.updateElem, this.props.setInterval);
  }

  componentWillUnmount() {
    this._isMounted = false; 
    clearInterval(this.interva.clear);
  }

  server = new Server();

  updateElem = () => {
    const id = Math.floor(Math.random() * 17 + 2);

    this.props.getData(id)
      .then( (elem) => {
        if(this._isMounted) {
          this.setState({
            elem: elem,
            loading: false,
          })
        }
      })
      .catch(this.onErrorMessage)
  }

  onErrorMessage = (err) => {
    this.setState({ 
        error: true,
        loading: false,
      }
    )
  }

  render() {
    const { elem: { 
      name,
      img
    },
      elem,
      loading,
      error
    } = this.state;

    const showError = () => {
      return(
        <ErrorMessage/>
      )
    }

    const showContent = () => {
      return(
        <React.Fragment>
          <img className='sw-rand-elem__img' src={img} alt=""/>
          <div className='sw-rand-elem__info'>
            <h3 className='sw-rand-elem__title'>{name}</h3>
              <ul className='sw-rand-elem-list'>
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {obj: elem})
                  })
                }
              </ul>
          </div>
        </React.Fragment>
      )
    };

    const loader = loading ? <Loader/> : null;
    const errorMessage = error ? showError() : null;
    const content = !(loading || error) ? showContent() : null;
  
    return(
      <div className='sw-rand-elem'>
        <div className='sw-rand-elem__container'>
          <div className='sw-rand-elem__wrap'>
            <div className='sw-rand-elem__content'>
              { loader }
              { errorMessage }
              { content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}