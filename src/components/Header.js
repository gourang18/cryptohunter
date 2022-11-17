import React from 'react';
import {makeStyles} from '@material-ui/core';
import {AppBar,Container,Toolbar,Typography,Select, MenuItem,createTheme,ThemeProvider} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import {CryptoState} from '../CryptoContext';
const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer",
    },
}));
const darkTheme=createTheme({
    palette:{
         primary: {
            main:"#303030"
         },
         type:"dark"
    },

   })
const Header = () => {
   const classes=useStyles();
   const navigate=useNavigate();
   
   const {currency,setCurrency}=CryptoState();

   
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar  position="static">
    <Container>
        <Toolbar>
            <Typography className={classes.title} onClick={()=>navigate("/")} variant='h6'>Crypto Tracker</Typography>
            <Select variant="outlined" style={{
                width:100,height:40,marginRight:15
            }} value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>

            </Select>
        </Toolbar>
    </Container>
   </AppBar>
   </ThemeProvider>
  )
}

export default Header