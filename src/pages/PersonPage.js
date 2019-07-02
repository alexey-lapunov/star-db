import React from 'react';

import Row from '../components/Row'
import { PersonDatails, PersonList } from '../sw-components';

export default class PersonPage extends React.Component {
  state = {
    idActiveItem: null
  }

  onItemSelected = (id) => {
    this.setState({
      idActiveItem: id
    })
  }

  render() {
    const {idActiveItem} = this.state;
    
    return(
      <Row
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDatails idActiveItem={idActiveItem}/>}
      />
    )
  }
}                 