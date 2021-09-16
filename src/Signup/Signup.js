import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Publish from "@material-ui/icons/Publish";
import Location from "@material-ui/icons/LocationOn";
import { red } from "@material-ui/core/colors";
import signup from "./signup.css"
import axios from "axios";

export const Signup = () => {

  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changeAdminName = (event) => {
    setAdminName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      adminName: adminName,
      email: email,
      userName: username,
      password: password,
    };

    axios
      .post("http://localhost:4000/admin/sign-up", registered)
      .then((response) => console.log(response.data));
  };

  return (
    <div >
      <CssBaseline />
      <div className="all" >
        <div className="form">
          <Typography component="h1" variant="h5">
            <h3>Registration Form</h3>
          </Typography>
          <form className="inner" noValidate onSubmit={onSubmit}>
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Pharmacy Name"
              name="text"
              autoComplete="text"
              autoFocus
              value={adminName}
              onChange={changeAdminName}
            />

            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={changeEmail}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="current-username"
              autoFocus
              value={username}
              onChange={changeUsername}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={changePassword}
            />
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className="register"
            >
              Register
            </Button>
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className="cancel"
            >
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
