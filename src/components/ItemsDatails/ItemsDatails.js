import React from 'react';

import './style.scss';

const RecordItem = ({ obj, field, label }) => {
  return (
    <li className='sw-item-details-list__item'>
      {label} <span>{obj[field]}</span>
    </li>
  )
}

export {
  RecordItem
}

export default class PersonDatails extends React.Component {
  state = {
    data: {},
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.idActiveItem !== prevProps.idActiveItem) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { getData, idActiveItem } = this.props;

    if(!idActiveItem) {
      return
    }
    
    getData(idActiveItem)
      .then((data) => {
        this.setState({
          data: data,
          loading: false
        })
      })
  }

  render() {
    const { data: { name, img}, loading, data} = this.state;
    const { idActiveItem } = this.props;

    const showMessage = () => {
      return <span className='sw-item-details__message'>Selected person</span>
    }

    const showContent = () => {
      return(
        <div className='sw-item-details__content'>
          <img className='sw-item-details__img' src={img} alt=""/>
          <div className='sw-item-details__info'>
            <h3 className='sw-item-details__title'>
              {name}
            </h3>
              <ul className='sw-item-details-list'>
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {obj: data})
                  })
                }
              </ul>
          </div>
        </div>
      ) 
    }

    const message = !idActiveItem ? showMessage() : null;
    const content = idActiveItem && !loading ? showContent() : null;
    
    return(
      <div className='sw-item-details'>
        <div className='sw-item-details__container'>
          <div className='sw-item-details__wrap'>
            {message}
            {content}
          </div>
        </div>
      </div>
    )
  }
}