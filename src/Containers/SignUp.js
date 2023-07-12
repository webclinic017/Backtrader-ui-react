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

const SignUp = (props) => {
  const { register, getRegisterAsync } = props;
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
    firstname: {
      value: "",
      error: false,
      errorMessage: "You must enter a first name",
    },
    lastname: {
      value: "",
      error: false,
      errorMessage: "You must enter a last name",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "Password must be at least 8 characters long",
    },
    phoneNumber: {
      value: "",
      error: false,
      errorMessage: "You must enter a valid phone number",
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
  const isPhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = formValues.email.value;
    const firstnameValue = formValues.firstname.value;
    const lastnameValue = formValues.lastname.value;
    const passwordValue = formValues.password.value;
    const phoneNumberValue = formValues.phoneNumber.value;
    let newFormValues = { ...formValues };
    let hasError = false;

    if (emailValue === "") {
      newFormValues.email = {
        ...newFormValues.email,
        error: true,
        errorMessage: "You must enter an email",
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

    if (firstnameValue === "") {
      newFormValues.firstname = {
        ...newFormValues.firstname,
        error: true,
        errorMessage: "You must enter a first name",
      };
      hasError = true;
    } else if (firstnameValue.length > 20) {
      newFormValues.firstname = {
        ...newFormValues.firstname,
        error: true,
        errorMessage: "You must enter a first name of 20 characters or less",
      };
      hasError = true;
    }

    if (lastnameValue === "") {
      newFormValues.lastname = {
        ...newFormValues.lastname,
        error: true,
        errorMessage: "You must enter a last name",
      };
      hasError = true;
    } else if (lastnameValue.length > 20) {
      newFormValues.lastname = {
        ...newFormValues.lastname,
        error: true,
        errorMessage: "You must enter a last name of 20 characters or less",
      };
      hasError = true;
    }

    if (passwordValue === "" || passwordValue.length < 6) {
      newFormValues.password = {
        ...newFormValues.password,
        error: true,
        errorMessage: "You must enter a password of at least 6 characters",
      };
      hasError = true;
    }

    if (phoneNumberValue === "") {
      newFormValues.phoneNumber = {
        ...newFormValues.phoneNumber,
        error: true,
        errorMessage: "You must enter a phone number",
      };
      hasError = true;
    } else if (!isPhoneNumber(phoneNumberValue)) {
      newFormValues.phoneNumber = {
        ...newFormValues.phoneNumber,
        error: true,
        errorMessage: "You must enter a valid phone number",
      };
      hasError = true;
    }

    if (hasError) {
      setFormValues(newFormValues);
    } else {
      try {
        setIsLoading(true);

        localStorage.setItem("Password", passwordValue);
        localStorage.setItem("Registered_Email", emailValue);
        localStorage.setItem("firstname", firstnameValue);
        localStorage.setItem("phone", phoneNumberValue);

        const payload = {
          email: emailValue,
          firstname: firstnameValue,
          lastname: lastnameValue,
          password: passwordValue,
          phone: phoneNumberValue,
        };
        const payload1 = JSON.stringify(payload);
        await getRegisterAsync(payload1);

        setIsLoading(false);
        toast.success("Registration successful!");

        navigate("/login");
      } catch (error) {
        setIsLoading(false);
        toast.error(
          error.response?.data?.ErrorMessage ||
            "user should register with new emailId"
        );
      }
    }
  };

  return (
    <>
      <div className="login_container">
        <Paper className="login_form_container">
          <Typography
            textAlign="left"
            sx={{
              marginBottom: "1em",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Typography>
          <Typography sx={{ marginBottom: "10px" }} required>
            FirstName
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            placeholder="First name"
            variant="outlined"
            name="firstname"
            sx={{
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
            value={formValues.firstname.value}
            onChange={handleChange}
            fullWidth
            error={formValues.firstname.error}
            helperText={
              formValues.firstname.error && formValues.firstname.errorMessage
            }
            inputProps={{ className: classes.input }}
          />
          <Typography sx={{ marginBottom: "10px" }} required>
            LastName
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            placeholder="Last name"
            variant="outlined"
            name="lastname"
            sx={{
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
            value={formValues.lastname.value}
            onChange={handleChange}
            fullWidth
            error={formValues.lastname.error}
            helperText={
              formValues.lastname.error && formValues.lastname.errorMessage
            }
            inputProps={{ className: classes.input }}
          />

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
          <Typography sx={{ marginBottom: "10px" }}>
            password
            <span style={{ color: "red" }}>*</span>
          </Typography>

          <TextField
            type="password"
            placeholder="Enter Password"
            value={formValues.password.value}
            name="password"
            sx={{
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
            onChange={handleChange}
            required
            error={formValues.password.error}
            helperText={
              formValues.password.error ? formValues.password.errorMessage : ""
            }
          />
          <Typography sx={{ marginBottom: "10px" }}>
            Phone Number
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            type="tel"
            placeholder="Enter Phone Number"
            value={formValues.phoneNumber.value}
            name="phoneNumber"
            sx={{
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
            onChange={handleChange}
            required
            error={formValues.phoneNumber.error}
            helperText={
              formValues.phoneNumber.error
                ? formValues.phoneNumber.errorMessage
                : ""
            }
          />

          <Box display="flex" justifyContent="center">
            <Button
              style={{
                marginTop: "1em",
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
              Verify
            </Button>
          </Box>
          <div style={{ flex: 1 }}></div>
          <Box display="flex" justifyContent="center">
            <Typography>
              Existing User? <RouterLink to="/login">SignIn</RouterLink>
            </Typography>
          </Box>
        </Paper>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  register: state.register,
});
const mapDispatchToProps = (dispatch) => ({
  getRegisterAsync: dispatch.register.getRegisterAsync,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
