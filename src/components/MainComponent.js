import { Component } from 'react';
import Header from './Header.js'
import TabCom from './TabComponent.js';

class Main extends Component{

  render(){
    return(
      <div>
        <Header />
        <TabCom />
      </div>
    )
  }
}

export default Main;
