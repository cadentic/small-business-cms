import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import HiddenPassword from "@material-ui/icons/RemoveRedEye";
import RemovePassword from "@material-ui/icons/RemoveRedEyeOutlined";
import {Button} from '@material-ui/core';

const styles = makeStyles({
  root: {},
  25: {
    "& .MuiLinearProgress-bar": {
      background: "rgb(220, 0, 78)"
    }
  },
  50: {
    "& .MuiLinearProgress-bar": {
      background: "#FCD10E"
    }
  },
  75: {
    "& .MuiLinearProgress-bar": {
      background: "#1976d2"
    }
  },
  100: {
    "& .MuiLinearProgress-bar": {
      background: "#43a047"
    }
  },
  passwordContainer: {
    position: "relative"
  },
  password: {
    top: 44,
    right: 16,
    position: "absolute"
  }
});

const StepOne = props => {
  const { validateStep, model, changeModel, activeStep } = props;
  const classes = styles();
  const [rating, setRating] = React.useState(0);
  const [password, setPassword] = React.useState(true);
  const [confirmPassword, setConfirmedPassword] = React.useState(true);
  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    model.email
  );
  const equalEmail = model.email === model.repeatedEmail;
  const repeatedPassword = model.password === model.repeatedPassword;

  useEffect(() => {
    if (activeStep !== 0) {
      return;
    }
    validateStep(validEmail && equalEmail && repeatedPassword);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.email, model.repeatedEmail, model.repeatedPassword, model.email]);

  const handleChange = e => {
    changeModel({
      [e.target.name]: e.target.value
    });
  };

  const handleRating = e => {
    let array = [];
    const pwd = e.target.value;
    array[0] = pwd.match(/[A-Z]/);
    array[1] = pwd.match(/[a-z]/);
    array[2] = pwd.match(/\d/);
    array[3] = pwd.match(/[!_.-]/);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i] ? 1 : 0;
    }

    if (!pwd) {
      setRating(0);
      return;
    }

    switch (sum) {
      case 0:
        setRating(0);
        break;
      case 1:
        setRating(25);
        break;
      case 2:
        setRating(50);
        break;
      case 3:
        setRating(75);
        break;
      case 4:
        setRating(100);
        break;
      default:
        setRating(0);
        break;
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          label="E-mail"
          value={model.email}
          name="email"
          margin="normal"
          variant="outlined"
          fullWidth
          error={model.email && !validEmail}
          helperText={model.email && !validEmail ? "Invalid E-mail" : null}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          label="Repeat your E-mail"
          value={model.repeatedEmail}
          name="repeatedEmail"
          margin="normal"
          variant="outlined"
          fullWidth
          error={model.repeatedEmail && !equalEmail}
          helperText={
            model.repeatedEmail && !equalEmail
              ? "The E-mail doesn't match"
              : null
          }
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} className={classes.passwordContainer}>
        <TextField
          required
          type={password ? "password" : "text"}
          label="Password"
          value={model.password}
          name="password"
          margin="normal"
          variant="outlined"
          fullWidth
          error={model.password && model.password < 50}
          helperText={
            model.password && model.password < 50
              ? "The password is too weak"
              : ""
          }
          onChange={e => {
            handleChange(e);
            handleRating(e);
          }}
        ></TextField>
        {password && (
          <HiddenPassword
            className={classes.password}
            onClick={() => setPassword(false)}
          />
        )}
        {!password && (
          <RemovePassword
            className={classes.password}
            onClick={() => setPassword(true)}
          />
        )}
        <LinearProgress
          variant="determinate"
          value={rating}
          className={`${classes[rating]} ${classes.ratingBar}`}
        />
      </Grid>
      <Grid item xs={12} className={classes.passwordContainer}>
        <TextField
          required
          type={confirmPassword ? "password" : "text"}
          label="Repeat Password"
          value={model.repeatedPassword}
          name="repeatedPassword"
          margin="normal"
          variant="outlined"
          fullWidth
          error={model.repeatedPassword && !repeatedPassword}
          helperText={
            model.repeatedPassword && !repeatedPassword
              ? "The password doesn't match"
              : null
          }
          onChange={e => handleChange(e)}
        />
        {confirmPassword && (
          <HiddenPassword
            className={classes.password}
            onClick={() => setConfirmedPassword(false)}
          />
        )}
        {!confirmPassword && (
          <RemovePassword
            className={classes.password}
            onClick={() => setConfirmedPassword(true)}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            let data = {
              'email': model.email
            }
            axios.post('/sendemail', data)
          }}
          className={classes.button}
        >
          SendOTP
        </Button>
        <TextField
          required
          label="OTP"
          value={model.emailotp}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={e => {
            changeModel({
              emailotp: e.target.value,
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default StepOne;
