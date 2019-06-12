import React from 'react';

import Server from './../../server/';

import './style.scss';

export default class PersonDatails extends React.Component {
  state = {
    person: {},
    loading: true,
  }

  server = new Server();

  componentDidMount() {

    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.idActivePerson !== prevProps.idActivePerson) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { idActivePerson } = this.props;

    if(!idActivePerson) {
      return
    }
    
    this.server
      .getPerson(idActivePerson)
      .then((person) => {
        this.setState({
          person: person,
          loading: false
        })
      })
  }

  render() {
    const { person: { id, name, skinColor, birthYear, gender}, loading} = this.state;
    const { idActivePerson } = this.props;

    const showMessage = () => {
      return <span className='sw-person-details__message'>Selected person</span>
    }

    const showContent = () => {
      return(
        <div className='sw-person-details__content'>
          <img className='sw-person-details__img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
          <div className='sw-person-details__info'>
            <h3 className='sw-person-details__title'>
              {name}
            </h3>
              <ul className='sw-person-details-list'>
                <li className='sw-person-details-list__item'>
                  Year: <span>{birthYear}</span>
                </li>
                <li className='sw-person-details-list__item'>
                  gender: <span>{gender}</span>
                </li>
                <li className='sw-person-details-list__item'>
                  color: <span>{skinColor}</span>
                </li>
              </ul>
          </div>
        </div>
      ) 
    }

    const message = !idActivePerson ? showMessage() : null;
    const content = idActivePerson && !loading ? showContent() : null;
    
    return(
      <div className='sw-person-details'>
        <div className='sw-person-details__container'>
          <div className='sw-person-details__wrap'>
            {message}
            {content}
          </div>
        </div>
      </div>
    )
  }
}