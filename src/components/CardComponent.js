import {Component } from 'react';
import {  Card, CardContent, Typography } from '@material-ui/core';

class CardComp extends Component{

  render(){
    return(
      <Card style={{marginTop: 20}}>
        <CardContent>
          <Typography>
            {this.props.match["team-1"]}
            {this.props.match["team-2"]}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default CardComp;
