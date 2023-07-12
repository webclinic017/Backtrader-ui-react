import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Avatar, Box, Button, Divider } from "@mui/material";
import { Grid } from "@mui/joy";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Switch } from "@mui/joy";
import StopIcon from "@mui/icons-material/Stop";
import { connect } from "react-redux";
import PauseIcon from "@mui/icons-material/Pause";

import Typography from "@mui/joy/Typography";

const Payment = (props) => {
  return (
    <>
      <Box
        sx={{
          height: "88.5vh",
          background: "#FCFCFC",
          maxWidth: "914px",
          marginLeft: "3px",

          marginTop: "2px",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            height: "60px",

            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "10px",
            fontSize: "20px",
          }}
        >
          <Typography level="h5"> Payment</Typography>
        </Box>
        <Divider margin="10px" />

        <Grid
          container
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <Grid item xs={5} sm={5}>
            <Typography level="h6">Active Plan</Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography>hhhhh</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <Grid item xs={5} sm={5}>
            <Typography level="h6">Validity</Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography>hhhhh</Typography>
          </Grid>
        </Grid>
        <Typography
          level="h5"
          style={{
            margin: "20px",
          }}
        >
          Payment History
        </Typography>
        <Divider margin="10px" />
      </Box>
    </>
  );
};

export default Payment;
