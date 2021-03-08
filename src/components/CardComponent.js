import {Component } from 'react';
import {  Card, CardContent, Typography, Box, Grid } from '@material-ui/core';
import vs from '../images/vs.jpg';
import {getScore} from './service/CrickApi.js'

class CardComp extends Component{
  constructor(props){
    super(props);

    this.state = {
      scoreDetail: {}
    }
  }



  componentDidMount(){
    getScore(this.props.match.unique_id)
      .then(data=>{
        this.setState({scoreDetail:data});
        console.log(data)
      }).catch(error=> console.log(error));
  }



  render(){
    return(

      <Card style={{marginTop: 20, width:1200}}>
      <Box style={{background:'#3f51b5', height:40, paddingLeft:20, paddingTop:20 , color:"#ffffff",  font:30}} >
        <Typography> {this.props.match["team-1"]}    VS    {this.props.match["team-2"]}</Typography>
      </Box>
        <CardContent>

        <Box style={{padding:5, display:'flex'}}>
          <Typography style={{marginBottom:10, fontSize:12}}> {new Date(this.props.match.dateTimeGMT).toLocaleString()}</Typography>
          <Typography style={{marginLeft:'auto', marginBottom:10, fontSize:12}}> {this.props.match.matchStarted ? "Match is Started": "Match is not yet started"}</Typography>
        </Box>

        <Grid container justify="center" alignItems="center" >
          <Typography variant="h5" style={{padding:15}}>{this.props.match["team-1"]}</Typography>
          <img src={vs} alt="vs" style={{width:100, height:100}} />
          <Typography variant="h5" style={{padding:15}}>{this.props.match["team-2"]}</Typography>
        </Grid>

        {this.props.match.matchStarted ?
            <Box justify='center' alignItems='center' style={{marginTop:10}}>
              <Typography> {this.state.scoreDetail.score}</Typography>
            </Box>
           : null
        }

        {this.props.match.winner_team ?

            <Box justifyContent="center" alignItems="center" border={1} borderRadius={10} borderColor='secondary.main' style={{marginTop:10, width:'50%', paddingTop:10,paddingBottom:10, paddingLeft: 20, paddingRight:20}}>
              <Typography style={{fontWeight:'bold'}}> {this.props.match.winner_team} Wins the Match. </Typography>
            </Box>

            : null
        }

        </CardContent>
      </Card>

    )
  }
}

export default CardComp;
