import * as React from 'react';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { SocialIcon } from 'react-social-icons';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bigAvatar: {
      width: 275,
      height: 275,
    },
  }));

export const App = (props): JSX.Element => {
    const classes = useStyles(props);

    return (
        <BrowserRouter>
        <React.Fragment>
            <Grid justify="center" item xs={ 12 }>
            <Card>
                <Grid alignItems="center" justify="center" container>
                    <Box component="span" m={1}>
                        <Avatar src={require('../public/assets/mtc.jpg')} className={ classes.bigAvatar } />                        
                    </Box>
                </Grid>
                <Grid justify="center" container>
                    <Typography variant="h5">Mathias T. Christensen</Typography>
                </Grid>
                <Grid justify="center" container>
                    <Typography variant="h6">IT & Software development</Typography>
                </Grid>             
                <Grid justify="center" container>                                  
                    <Box component="span" m={1}>
                        <SocialIcon url="https://www.linkedin.com/in/mathias-t-christensen" style={{ height: 50, width: 50 }}/>
                    </Box>
                    <Box component="span" m={1}>
                        <SocialIcon url="https://github.com/MathiasTC" style={{ height: 50, width: 50 }}/>  
                    </Box> 
                    <Box component="span" m={1}>        
                        <SocialIcon url="https://www.facebook.com/mathias.t.christensen" style={{ height: 50, width: 50 }}/>
                    </Box>                    
                </Grid> 
            </Card>
            </Grid>
        </React.Fragment>
        </BrowserRouter>
    );
};