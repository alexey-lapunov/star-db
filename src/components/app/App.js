import React from 'react';

import Server from './../../server/'

import Header from './../Header';
import ItemList from './../ItemList';
import ItemDatails, {RecordItem} from '../ItemsDatails';
import Row from './../Row';

import './style.scss';

export default class App extends React.Component {
  server = new Server();

  state = {
    idActiveItemList: null
  }

  onActiveItemList = (id) => {
    this.setState({
      idActiveItemList: id
    })
  }

  render() {
    const { idActiveItemList } = this.state;

    // Person components 
    const personItemList = (
      <ItemList 
        idActiveItem={idActiveItemList} 
        onActiveItemList={this.onActiveItemList}
        getData={this.server.getAllPersons}>
          { (item) => `${item.name} (${item.birthYear})` }
        </ItemList>
    );

    const personDatails = (
      <ItemDatails 
        getData={this.server.getPerson}
        idActiveItem={13}>
          <RecordItem label='Year' field='birthYear'/>
          <RecordItem label='Color' field='skinColor'/>
          <RecordItem label='Gender' field='gender'/>
        </ItemDatails>
    );

    // Starships components 
    const starshipsDeteils = (
      <ItemDatails 
        getData={this.server.getStarships}
        idActiveItem={12}>
          <RecordItem label='Class' field='class'/>
          <RecordItem label='Speed' field='speed'/>
          <RecordItem label='Model' field='model'/>
        </ItemDatails>
    )

    return(
      <div className='sw-content'>
        <Header/>
        <Row
          left={ personDatails }
          right={ starshipsDeteils }
        />
      </div>
    )
  }
}                 