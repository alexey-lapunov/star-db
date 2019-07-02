import React from 'react';

import Row from './../components/Row/'
import { StarhipsDatails, StarshipsList } from './../sw-components/';

export default class StarshipsPage extends React.Component {
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
        left={<StarshipsList onItemSelected={this.onItemSelected}/>}
        right={<StarhipsDatails idActiveItem={idActiveItem}/>}
      />
    )
  }
}                 