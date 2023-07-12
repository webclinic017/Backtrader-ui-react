import React, { useState } from "react";

import { Typography, Box, Paper } from "@mui/material";

import { Link } from "react-router-dom";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../index.js";

import OtpInput from "react-otp-input";

const Verify = () => {
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState("");

  const registeredEmail = localStorage.getItem("Registered_Email");

  const handleVerificationCodeChange = (code) => {
    setVerificationCode(code);

    if (code.length === 6) {
      navigate("/fullpane");
    }
  };

  const handleRestartClick = () => {
    navigate("/Login");
  };

  const renderInput = (inputProps) => (
    <input
      {...inputProps}
      style={{
        width: "2rem",

        height: "2rem",

        margin: "0 0.5rem",

        fontSize: "1.5rem",

        borderRadius: "4px",

        border: "1px solid #ccc",

        textAlign: "center",
      }}
    />
  );

  return (
    <div className="verify_container">
      <Paper className="verify_form_container">
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", textAlign: "left" }}
        >
          Verification Code
        </Typography>

        <Typography sx={{ color: "#5a5a72" }}>
          A verification code has been sent to the registered email{" "}
          <b> {registeredEmail}.</b> Kindly check the code and enter below.
        </Typography>

        <div style={{ flex: 1 }}></div>

        <Box display="flex" justifyContent="center">
          <OtpInput
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            numInputs={6}
            separator={<span></span>}
            inputStyle="inputStyle"
            isInputSecure={false}
            renderInput={renderInput}
          />
        </Box>

        <div style={{ flex: 1 }}></div>

        <Box display="flex" justifyContent="center">
          <Typography>
            New User? <RouterLink to="/signup">Signup</RouterLink>
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          style={{ marginTop: "0.5em" }}
        >
          <RouterLink to="/">Start over</RouterLink>
        </Box>
      </Paper>
    </div>
  );
};

export default Verify;
