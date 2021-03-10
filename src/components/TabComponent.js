import React, {Component} from 'react';
import {Tabs, Tab, Box, Grid, InputBase, Button} from '@material-ui/core';
import {getMatches} from './service/CrickApi.js';
import CardComp from './CardComponent.js';
import SearchIcon from '@material-ui/icons/Search';
import player from '../images/player.jpg';

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
      matches:[],
    };

    this.handleChange = this.handleChange.bind(this);
  }



  componentDidMount(){
    getMatches()
    .then(data =>{
      this.setState({matches: data.matches});
      console.log(data.matches);
    }).catch(error => { console.log(error)});
  }



handleChange = (e, value) => {
      this.setState({
        value: value
      });
  }


  getData(type){                                //used as props.children in TabPanel for display data based on match type

    const data =  this.state.matches.map((match) => {
        return(
        <React.Fragment key={match.unique_id}>
          {match.type === type ?
            <Box alignItems="center" display="flex" justifyContent="center">
              <CardComp match={match} />
            </Box>
             : null}
       </React.Fragment>
     )});

    return data;
}



  render(){
    return(
      <>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="T20" />
          <Tab label="One Day" />
          <Tab label="Test" />
          <Tab label="Player Stats" />
        </Tabs>


        <TabPanel index={0} value={this.state.value}>

          {this.getData("Twenty20")}

        </TabPanel>


        <TabPanel index={1} value={this.state.value} >
          {this.getData("ODI")}
        </TabPanel>

        <TabPanel index={2} value={this.state.value}>
          {this.getData("test")}
        </TabPanel>

        <TabPanel index={3} value={this.state.value} >
        <Box>
          <InputBase placeholder="Enter Player Name" style={{marginTop:30, marginLeft:30, border:"3px solid #00B4CC", width:"50%", borderRadius:"8px 0 0 8px", height:50, paddingLeft:8}}/>
          <Button variant="contained"  style={{ borderRadius:"0 8px 8px 0", backgroundColor:"#00B4CC", height:50 }}>
            <SearchIcon />
          </Button>
        </Box>
        <hr style={{marginTop: 14, weight:5}} />
        <img src={player} alt="player"style={{marginTop:10}} />
        </TabPanel>

      </>
    )
  }
}

export default TabCom;
