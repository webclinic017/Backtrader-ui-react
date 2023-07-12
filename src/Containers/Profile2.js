import React from "react";
import { useState } from "react";
import { Button, Typography,} from "@mui/material";
import { Box, Grid, } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TextField } from "@mui/material";
import WebStoriesIcon from '@mui/icons-material/WebStories';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { connect } from "react-redux";

import { ClassNames } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import Orders1 from "../Containers/Orders1";
import { SessionTypes } from "../utils/sessionUtils";
import moment from "moment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect } from "react";
import Favourite from "../Favourites/Favourite";
import Payment1 from "./Payment1";
import Profile1 from "./Profile1";
const useStyles = makeStyles((theme) => {
  return {
app:{
 
    height: "100vh",
    width: "100vw",
   
   
    display: "flex",
    flexdirection: "column"
  }
  

  };
});


//px, em, rem
//vh,

const Profile2 = (props) => {
  const classes = useStyles();
 
 
  return (
    <>
   <div className={ClassNames.app}>
      <Grid container style={{ height: "100vh" }}>
          <Box
            component={Grid}
            item
          
           
            display={{ xs: "none", sm: "none", md: "block" }}
            sx={{borderRight:"red",background:"#fcfcfc" }}
          >
          <Favourite/>
          </Box>
         <Box>
            <Profile1/>
            </Box>
          </Grid>
          
          </div>
    </>
  );
};




export default Profile2;