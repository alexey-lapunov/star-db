import React from 'react';

import Row from './../components/Row/'
import { PlanetList, PlanetDatails } from './../sw-components/';

export default class PlanetPage extends React.Component {
  state = {
    idActiveItem: null
  }

  render() {
    const {idActiveItem} = this.state;
    
    return(
      <React.Fragment>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected}/>}
          right={<PlanetDatails idActiveItem={idActiveItem}/> }
        />        
      </React.Fragment>
    )
  }
}                 