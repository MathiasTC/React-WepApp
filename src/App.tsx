import * as React from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import 'normalize.css';
import { SocialIcon } from 'react-social-icons';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './App.routes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const basicTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#124116'
    },
    background: {
      default: "#303030"
    },    
  }
})

export const App = (theme) => {
  const classes = useStyles(theme);

    return ( 
      <BrowserRouter>
      <div className={classes.root}>    
      <MuiThemeProvider theme={basicTheme}> 
      <CssBaseline />
        <AppBar position="static">
            <ToolBar>              
                <MenuItem component={Link} to="/" className={classes.menuButton}>
                <Typography variant="h6" className={classes.title}>
                  <Home />
                </Typography>
                </MenuItem>
                <MenuItem component={Link} to="/about">
                <Typography variant="h6" className={classes.title}>
                  About me
                </Typography>
                </MenuItem>
                <Grid justify="flex-end" container>
                  <Box component="span" m={1}>        
                  <SocialIcon url="https://www.facebook.com/mathias.t.christensen" style={{ height: 25, width: 25}}/>
                  </Box>
                  <Box component="span" m={1}>
                  <SocialIcon url="https://www.linkedin.com/in/mathias-t-christensen" style={{ height: 25, width: 25}}/>
                  </Box>
                  <Box component="span" m={1}>
                  <SocialIcon url="https://twitter.com/theDeviiant" style={{ height: 25, width: 25}}/>
                  </Box>
                  <Box component="span" m={1}>
                  <SocialIcon url="https://github.com/MathiasTC" style={{ height: 25, width: 25}}/>  
                  </Box> 
                </Grid> 
            </ToolBar>
        </AppBar>    
        <AppRoutes />       
        </MuiThemeProvider>        
      </div>
      </BrowserRouter>
    )
}