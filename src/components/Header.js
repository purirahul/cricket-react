import {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

class Header extends Component{
  render(){
    return(
  <AppBar position="static">
  <Toolbar>
    <IconButton style={{color:"#fff000"}}>
      <SportsCricketIcon></SportsCricketIcon>
    </IconButton>
    <Typography >
        CRICK-SHOTS
    </Typography>

  </Toolbar>
</AppBar>
)
}
}

export default Header;
