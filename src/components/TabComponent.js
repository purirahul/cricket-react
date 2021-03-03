import {Component} from 'react';
import {Tabs, Tab } from '@material-ui/core';

class TabCom extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: 0
    }
  }

  render(){
    const handleChange = (e, value) =>{
      this.setState = {
        value: value
      };
    }
    return(

        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="T20" />
          <Tab label="One Day" />
          <Tab label="Test" />
        </Tabs>

    )
  }
}

export default TabCom;
