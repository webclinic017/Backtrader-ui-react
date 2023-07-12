import React from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TextField } from "@mui/material";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { connect } from "react-redux";
import Header1 from "./Header1";
import { ClassNames } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import Orders1 from "../Containers/Orders1";
import { Dashboard } from "@mui/icons-material";
import { SessionTypes } from "../utils/sessionUtils";
import moment from "moment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect } from "react";
import Favourite from "../Favourites/Favourite";
const useStyles = makeStyles((theme) => {
  return {
    app: {
      height: "100vh",
      width: "100vw",

      display: "flex",
      flexdirection: "column",
    },
  };
});

//px, em, rem
//vh,

const Dashboard1 = (props) => {
  const classes = useStyles();
  const { user, setPaidSession, setActiveSessionType } = props;
  const [selectedBox, setSelectedBox] = useState(0);
  const [selectedSessionType, setSelectedSessionType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());
  useEffect(() => {
    console.log("selectedBox", setActiveSessionType);
  }, [selectedBox]);
  const handleBoxClick = (boxIndex) => {
    // Update the selectedSessionType based on the selected box
    let sessionType;
    switch (boxIndex) {
      case 0:
        sessionType = SessionTypes.SELECT_DATE;
        break;
      case 1:
        sessionType = SessionTypes.SYSTEM_PICKED;
        break;
      case 2:
        sessionType = SessionTypes.MARKET_PATTERN;
        break;
      default:
        sessionType = null;
        break;
    }
    setSelectedBox(boxIndex);
    setSelectedSessionType(sessionType);
    setActiveSessionType(sessionType);
  };
  const handleContinue = () => {
    setPaidSession(false);
  };
  return (
    <>
      <div className={ClassNames.app}>
        <Grid container style={{ height: "100vh" }}>
          <Box
            component={Grid}
            item
            display={{ xs: "none", sm: "none", md: "block" }}
            sx={{ borderRight: "red", background: "#fcfcfc" }}
          >
            <Favourite></Favourite>
          </Box>
          <Box>
            <Header1 />
          </Box>
        </Grid>
        <Dialog
          open={user.paidSession}
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle>Start your Session</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                sx={{
                  border:
                    selectedBox === 0 ? "2px solid #6ddac5" : "1px solid grey",
                  height: "100px",
                  borderRadius: "10px",
                  width: "100px",
                  margin: "8px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onClick={() => handleBoxClick(0)}
              >
                <CalendarMonthIcon sx={{ fontSize: 32 }} />
                <Typography>{SessionTypes.SELECT_DATE}</Typography>
              </Box>
              <Box
                sx={{
                  border:
                    selectedBox === 1 ? "2px solid #6ddac5" : "1px solid grey",
                  height: "100px",
                  width: "100px",
                  margin: "8px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onClick={() => handleBoxClick(1)}
              >
                <WebStoriesIcon sx={{ fontSize: 32 }} />
                {SessionTypes.SYSTEM_PICKED}
              </Box>
              <Box
                sx={{
                  border:
                    selectedBox === 2 ? "2px solid #6ddac5" : "1px solid grey",
                  height: "100px",
                  width: "110px",
                  margin: "8px 8px 0",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onClick={() => handleBoxClick(2)}
              >
                <WaterfallChartIcon sx={{ fontSize: 32 }} />
                <Typography>{SessionTypes.MARKET_PATTERN}</Typography>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ flexDirection: "column", alignItems: "center" }}>
            {selectedBox === 0 && (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Box
                  sx={{
                    marginBottom: "1em",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <DesktopDatePicker
                    value={selectedDate}
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        sx={{
                          marginBottom: "40px",
                          "& .MuiInputLabel-root": {
                            textAlign: "center",
                          },
                          "& .MuiOutlinedInput-root": {
                            height: "50px",
                          },
                        }}
                        {...params}
                        InputProps={{
                          endAdornment: <CalendarMonthIcon />,
                        }}
                      />
                    )}
                  />
                </Box>
              </LocalizationProvider>
            )}
            {selectedBox === 1 && (
              <Typography sx={{ marginBottom: "50px" }}>
                System will randomly pick a session for you.
              </Typography>
            )}
            {selectedBox === 2 && <h1> hhh</h1>}

            <Button
              fullWidth
              sx={{
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard1);
