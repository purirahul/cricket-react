import React, {Component} from 'react';
import {Tabs, Tab, Box, Grid, InputBase, Button} from '@material-ui/core';
import {getMatches} from './service/CrickApi.js';
import CardComp from './CardComponent.js';
import SearchIcon from '@material-ui/icons/Search';
import player from '../images/player.jpg';
import {API_KEY} from './service/CrickApi.js'
import PlayerList from './PlayerList.js';

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
      playerName: null,
      players: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayer = this.handlePlayer.bind(this);
    this.findPlayers = this.findPlayers.bind(this);
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


  handlePlayer(e){
    this.setState({playerName: e.target.value});
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


findPlayers(e){
  fetch(`https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${this.state.playerName}`)
        .then(res => res.json())
        .then(players => {
          this.setState({players: players.data});
          console.log(players.data);
        })
        .catch(err => console.log(err));

}


    getPlayers(){

      const players = this.state.players.map((player) => {
        return(
          <Box alignItems="center" display="flex" justifyContent="center">
            <PlayerList player={player} key={player.pid}/>
          </Box>
        )});

      return players;
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
          <InputBase placeholder="Enter Player Name" style={{marginTop:30, marginLeft:30, border:"3px solid #00B4CC", width:"50%", borderRadius:"8px 0 0 8px", height:50, paddingLeft:8}} onChange={this.handlePlayer}/>
          <Button variant="contained"  style={{ borderRadius:"0 8px 8px 0", backgroundColor:"#00B4CC", height:50 }} onClick={this.findPlayers}>
            <SearchIcon />
          </Button>
        </Box>


        <hr style={{marginTop: 14, weight:5}} />

        {this.state.players.length > 0 ? this.getPlayers() :
          <img src={player} alt="player"style={{marginTop:10}} /> }
        </TabPanel>

      </>
    )
  }
}

export default TabCom;
