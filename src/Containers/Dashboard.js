import React from "react";

import { Avatar, Box, Button, Grid } from "@mui/material";
import Divider from "@mui/joy/Divider";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { connect } from "react-redux";
import StopIcon from "@mui/icons-material/Stop";

import PauseIcon from "@mui/icons-material/Pause";
import jwtDecode from "jwt-decode";

import Typography from "@mui/joy/Typography";
import { user } from "../store/user";

const Dashboard = (props) => {
  const { user, setPaidSession, setActiveSessionType } = props;
  const details = localStorage.getItem("token");
  const userDetails = jwtDecode(details);
  console.log("token values", userDetails);
  console.log(userDetails.userDetails.email);

  const firstname = localStorage.getItem("firstname");
  console.log(" dashboard user.scroll", user.scroll);

  return (
    <>
      <Box
        sx={{
          height: "88.5vh",
          background: "#FCFCFC",
          marginLeft: "3px",
          marginTop: "2px",
          overflow: user.scroll ? "auto" : "",
        }}
      >
        <Box
          sx={{
            height: "60px",

            display: "flex",

            alignItems: "center",

            marginLeft: "10px",

            marginRight: "10px",
          }}
        >
          <Typography sx={{ fontSize: "25px", margin: "10px" }}>
            Hi ,{userDetails.userDetails.firstname}
          </Typography>
        </Box>
        <Divider sx={{ margin: "10px" }} />
        <Grid container style={{ marginLeft: "20px", marginTop: "20px" }}>
          <Grid item xs={6} sm={6}>
            <Typography level="h6">1.65L</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>Margin Used</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>59.76k</Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginLeft: "20px" }}>
          <Grid item xs={6} sm={6}>
            <Typography>Margin Available</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>Opening Balance</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography>2.25L</Typography>
          </Grid>
        </Grid>
        <Typography
          level="h5"
          style={{
            margin: "20px",
          }}
        >
          Session Details
        </Typography>

        <Divider sx={{ marginLeft: "10px", marginRight: "10px" }} />

        <Grid container style={{ margin: "20px" }}>
          <Grid item xs={5} sm={5}>
            <Typography level="h6">Session Type</Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography>{user?.activeSessionType}</Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginLeft: "20px" }}>
          <Grid item xs={5} sm={5}>
            <Typography level="h6">Date</Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setPaidSession: dispatch.user.setPaidSession,
  setActiveSessionType: dispatch.user.setActiveSessionType,
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
