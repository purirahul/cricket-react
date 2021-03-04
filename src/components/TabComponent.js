import {Component} from 'react';
import {Tabs, Tab, Box} from '@material-ui/core';
import {getMatches} from './service/CrickApi.js';

function TabPanel(props){                             // it is for panel matching purpose

  return(
        <Box>
          {props.index === props.value ?
            <Box>
            {props.children}
            </Box>
           : null}
        </Box>
  )
}




class TabCom extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: 0,
      matches: null
    };

    this.handleChange = this.handleChange.bind(this);
  }



  componentDidMount(){
    getMatches()
    .then(data =>{
      this.setState({matches: data});
      console.log(data.matches);
    });
  }



handleChange = (e, value) => {
      this.setState({
        value: value
      });
  }


  getData(type){                         //used as props.children in TabPanel for display data based on match type
    if(type==="Twenty20"){
      return (
        <h1> Hello </h1>
      )
  }

  else if (type === "") {
    return (
      <h1> Hello ODI </h1>
    )
  }

  else if (type === "Test") {
    return (
      <h1> Hello Test </h1>
    )
  }
}



  render(){
    return(
      <>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="T20" />
          <Tab label="One Day" />
          <Tab label="Test" />
        </Tabs>


        <TabPanel index={0} value={this.state.value}>
          {this.getData("Twenty20")}
        </TabPanel>

        <TabPanel index={1} value={this.state.value} >
          {this.getData("")}
        </TabPanel>

        <TabPanel index={2} value={this.state.value}>
          {this.getData("Test")}
        </TabPanel>
      </>
    )
  }
}

export default TabCom;
