import React, { useState } from "react";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Logout, CurrencyRupee, AccountCircle } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IconButton, ListItemDecorator } from "@mui/joy";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import StopIcon from "@mui/icons-material/Stop";
import { useNavigate } from "react-router-dom";
import PauseIcon from "@mui/icons-material/Pause";
import { Tooltip } from "@mui/material";
const Header = (props) => {
  const { user, setPaidSession } = props;
  const lastname = localStorage.getItem("lastname");
  const firstname = localStorage.getItem("firstname");
  const [Pausesession, setpausesession] = useState(true);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const details = localStorage.getItem("token");
  const userDetails = jwtDecode(details);
  console.log("token values", userDetails);
  const [showStopSessionConfirm, setShowStopSessionConfirm] = useState(false);
  const [showPauseSessionConfirm, setShowPauseSessionConfirm] = useState(false);
  const [showResumeSessionConfirm, setShowResumeSessionConfirm] =
    useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    parseInt(localStorage.getItem("selectedIndex"))
  );

  const handleButtonClick1 = () => {
    localStorage.setItem("selectedIndex", 0);
    navigate("/dashboard");
  };

  const handleButtonClick2 = () => {
    localStorage.setItem("selectedIndex", 1);
    navigate("/orders");
  };

  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handlePaymentClick = () => {
    handleMenuClose();
    navigate("/payment");
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleStopClick = () => {
    setShowStopSessionConfirm(true);
  };
  const handleCancelStopSession = () => {
    setShowStopSessionConfirm(false);
  };
  const handlePause = () => {
    setShowPauseSessionConfirm(true);
  };
  const handleCancelPauseSession = () => {
    setShowPauseSessionConfirm(false);
  };
  const handleCancelResumeSession = () => {
    setShowResumeSessionConfirm(false);
  };
  const handleresume = () => {
    setShowResumeSessionConfirm(true);
  };
  const handlecConfirmPauseSession = () => {
    setShowPauseSessionConfirm(false);
    setpausesession(false);
    toast("Your session is paused", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleConfirmCloseSession = () => {
    setPaidSession(true);
    setpausesession(true);
    setShowStopSessionConfirm(false);
    toast("your session is ended please start your sesion to trade again", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handlecConfirmResumeSession = () => {
    setShowResumeSessionConfirm(false);
    setpausesession(false);
    toast("Your session is resumed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <Box
        sx={{
          background: "#fcfcfc",
          width: "914px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "3px",
        }}
      >
        <div style={{}}></div>

        <div style={{ width: "860px" }}></div>
        {Pausesession ? (
          <Tooltip title="Pause Session">
            <Button
              sx={{
                background: "#6ddac5",
                borderRadius: "8px",
                color: "white",
                padding: "6px",
                margin: "8px",
              }}
              onClick={handlePause}
            >
              <PauseIcon />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title="start Session">
            <Button
              sx={{
                background: "#6ddac5",
                borderRadius: "8px",
                color: "white",
                padding: "6px",
                margin: "8px",
              }}
              onClick={handleresume}
            >
              <PlayArrowIcon />
            </Button>
          </Tooltip>
        )}
        <Tooltip title="Stop Session">
          <Button
            sx={{
              background: "#6ddac5",
              borderRadius: "8px",
              color: "white",
              padding: "6px",
              margin: "8px",
            }}
            onClick={handleStopClick}
          >
            <StopIcon />
          </Button>
        </Tooltip>
        <Typography
          onClick={() => handleButtonClick1()}
          sx={{
            padding: "5px",
            margin: "2px",
            cursor: "pointer",
            color: selectedIndex === 0 ? "#6ddac5" : null,
          }}
        >
          Dashboard
        </Typography>

        <Typography
          onClick={() => handleButtonClick2()}
          sx={{
            padding: "5px",
            marginLeft: "10px",
            cursor: "pointer",
            color: selectedIndex === 1 ? "#6ddac5" : null,
          }}
        >
          Orders
        </Typography>

        <Divider orientation="vertical" sx={{ height: "30px" }} />

        <Avatar
          sx={{
            marginRight: "10px",
            marginLeft: "10px",
            fontSize: "15px",
            height: "30px",
            width: "30px",
          }}
          onClick={handleAvatarClick}
        >
          {`${userDetails.userDetails.firstname
            ?.charAt(0)
            .toUpperCase()}${userDetails.userDetails.lastname
            ?.charAt(0)
            .toUpperCase()}`}
        </Avatar>

        <Menu
          placement="bottom-end"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{ width: "11em" }}
        >
          <MenuItem onClick={handleProfileClick}>
            <ListItemIcon sx={{ marginRight: "5px", fontSize: "20px" }}>
              <AccountCircle />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handlePaymentClick}>
            <ListItemIcon sx={{ marginRight: "5px", fontSize: "20px" }}>
              <CurrencyRupee />
            </ListItemIcon>
            Payment
          </MenuItem>
          <Divider sx={{ margin: "0px" }}></Divider>
          <MenuItem onClick={handleLogoutClick}>
            <ListItemIcon sx={{ marginRight: "5px", fontSize: "20px" }}>
              <Logout size="sm" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <Dialog open={showStopSessionConfirm} onClose={handleCancelStopSession}>
          <DialogTitle>Stop Session?</DialogTitle>
          <DialogContent>
            Are you sure you want to stop this session?
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handleCancelStopSession}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handleConfirmCloseSession}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={showPauseSessionConfirm}
          onClose={handleCancelPauseSession}
        >
          <DialogTitle>Pause Session?</DialogTitle>
          <DialogContent>
            Are you sure you want to Pause this session?
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handleCancelPauseSession}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handlecConfirmPauseSession}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={showResumeSessionConfirm}
          onClose={handleCancelResumeSession}
        >
          <DialogTitle>Resume Session?</DialogTitle>
          <DialogContent>
            Are you sure you want to Resume this session?
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handleCancelResumeSession}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "90px",
                borderRadius: "10px",
                background: "#6ddac5",
                color: "#FCFCFC",
                textTransform: "none",
              }}
              onClick={handlecConfirmResumeSession}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setPaidSession: dispatch.user.setPaidSession,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
