import {
  Button,
  Grid,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";

import makeStyles from "@mui/styles/makeStyles";

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

const Forget = (props) => {
  const { forgot, getForgotAsync } = props;

  const classes = useStyles();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [formValues, setFormValues] = useState({
    email: {
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

    const emailValue = formValues.email.value;

    let newFormValues = { ...formValues };

    let hasError = false;

    if (emailValue === "") {
      newFormValues.email = {
        ...newFormValues.email,

        error: true,

        errorMessage: "You must enter a  email",
      };

      hasError = true;
    } else if (!isEmail(emailValue)) {
      newFormValues.email = {
        ...newFormValues.email,

        error: true,

        errorMessage: "You must enter a valid email",
      };

      hasError = true;
    }

    if (hasError) {
      setFormValues(newFormValues);
    } else {
      try {
        setIsLoading(true);
    
     
        
          console.log(emailValue);
    
          const payload = {
            email: emailValue,
          };
    
          await getForgotAsync(payload);
    toast.success("link send to registered email");
          setIsLoading(false);
        
      } catch (error) {
        setIsLoading(false);
    
       
       toast.error(error.response?.data?.ErrorMessage || "User should enter registered email");
      
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
            Forget Password
          </Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            Email Id
            <span style={{ color: "red" }}>*</span>
          </Typography>

          <TextField
            type="email"
            placeholder="Enter Email"
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
            value={formValues.email.value}
            name="email"
            onChange={handleChange}
            required
            error={formValues.email.error}
            helperText={
              formValues.email.error ? formValues.email.errorMessage : ""
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
              Send Link
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

const mapStateToProps = (state) => ({
  forgot: state.forgot,
});

const mapDispatchToProps = (dispatch) => ({
  getForgotAsync: dispatch.forgot.getForgotAsync,
});

export default connect(mapStateToProps, mapDispatchToProps)(Forget);
