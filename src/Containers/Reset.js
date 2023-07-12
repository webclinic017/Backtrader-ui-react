import {
  Button,
  Grid,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import makeStyles from "@mui/styles/makeStyles";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Paper } from "@mui/material";
import Illustration1 from "../assets/image/Illustration1.svg";
import Illustration2 from "../assets/image/Illustration2.svg";
import { theme } from "../index.js";

import { ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => {
  return {};
});

const Reset = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  const [formValues, setFormValues] = useState({
    newPassword: {
      value: "",
      error: false,
      errorMessage: "You must enter a password",
    },
    confirmPassword: {
      value: "",
      error: false,
      errorMessage: "You must enter a valid email",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: {
        ...prevFormValues[name],
        value,
        error: false,
      },
    }));
  };
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPasswordValue = formValues.newPassword.value;
    const confirmPasswordValue = formValues.confirmPassword.value;

    let newFormValues = { ...formValues };
    let hasError = false;

    if (newPasswordValue === "" || newPasswordValue.length < 6) {
      newFormValues.newPassword = {
        ...newFormValues.newPassword,
        error: true,
        errorMessage: "you must enter password more than 6 digits",
      };
      hasError = true;
    }
    if (confirmPasswordValue === "" || confirmPasswordValue.length < 6) {
      newFormValues.confirmPassword = {
        ...newFormValues.confirmPassword,
        error: true,
        errorMessage: "you must enter password more than 6 digits",
      };
      hasError = true;
    }
    if (newPasswordValue !== confirmPasswordValue) {
      newFormValues.confirmPassword = {
        ...newFormValues.confirmPassword,
        error: true,
        errorMessage: "Passwords do not match",
      };
      hasError = true;
    }
    if (hasError) {
      setFormValues(newFormValues);
    } else {
      try {
        console.log(confirmPasswordValue);

        const token = new URLSearchParams(location.search).get("token");
        const data = {
          newPassword: newPasswordValue,

          confirmPassword: confirmPasswordValue,
        };
        const response = await axios.post(
          `http://localhost:9090/reset-password?token=${token}`,
          data
        );
        console.log(response.data);
        toast.success("Password reset successful!");
        navigate("/login");
        setIsLoading(true);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(
          error.response?.data?.ErrorMessage || "Something went wrong"
        );
      }
    }
  };

  return (
    <>
      <div className="signup_container">
        <Paper className="signup_form_container">
          <Typography
            textAlign="left"
            sx={{ marginBottom: "1em", fontSize: "25px", fontWeight: "bold" }}
          >
            Reset Password
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            new password
            <span style={{ color: "red" }}>*</span>
          </Typography>

          <TextField
            type="password"
            placeholder="Enter password"
            sx={{
              "& .css-1dcmvj3-MuiFormControl-root-MuiTextField-root .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  height: "5px",
                },
              "& .MuiOutlinedInput-root": {
                border: "none",
                borderRadius: "8px",
                height: "50px",
              },
              "& .MuiOutlinedInput-root:hover fieldset": {
                borderColor: "",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#6ddac5",
                borderWidth: "3px",
              },
            }}
            value={formValues.newPassword.value}
            name="newPassword"
            onChange={handleChange}
            required
            error={formValues.newPassword.error}
            helperText={
              formValues.newPassword.error
                ? formValues.newPassword.errorMessage
                : ""
            }
          />
          <Typography sx={{ marginBottom: "10px" }}>
            confirm password
            <span style={{ color: "red" }}>*</span>
          </Typography>

          <TextField
            type="password"
            placeholder="confirm password"
            sx={{
              "& .css-1dcmvj3-MuiFormControl-root-MuiTextField-root .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  height: "5px",
                },
              "& .MuiOutlinedInput-root": {
                border: "none",
                borderRadius: "8px",
                height: "50px",
              },
              "& .MuiOutlinedInput-root:hover fieldset": {
                borderColor: "",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#6ddac5",
                borderWidth: "3px",
              },
            }}
            value={formValues.confirmPassword.value}
            name="confirmPassword"
            onChange={handleChange}
            required
            error={formValues.confirmPassword.error}
            helperText={
              formValues.confirmPassword.error
                ? formValues.confirmPassword.errorMessage
                : ""
            }
          />

          <Box display="flex" justifyContent="center">
            <Button
              style={{
                marginTop: "2em",
                height: "40px",
                width: "50%",
                textTransform: "none",
                fontSize: "15px",
                background: "#6ddac5",
                color: "white",
                borderRadius: "8px",
              }}
              onClick={handleSubmit}
            >
              Reset
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" marginTop="25px">
            <Typography>
              <RouterLink to="/login">Back to Login</RouterLink>
            </Typography>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default Reset;
