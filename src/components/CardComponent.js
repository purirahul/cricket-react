import {Component } from 'react';
import {  Card, CardContent, Typography, Box, Grid } from '@material-ui/core';
import vs from '../images/vs.jpg';

class CardComp extends Component{

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

        </CardContent>
      </Card>

    )
  }
}

export default CardComp;
