import {  Card, CardContent, Typography, Box} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PlayerList = (props) => {
 return(
  <Card style={{marginTop:20, width:1100}}>
    <CardContent>
      <Box display="flex" alignItems="center">
        <Box style={{marginRight: 30}}>
        <AccountCircleIcon> </AccountCircleIcon>
        </Box>

        <Box>
        <Typography variant='h6'> {props.player.name} </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
)
}


export default PlayerList;
