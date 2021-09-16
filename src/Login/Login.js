import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import login from "./login.css"
export const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      userName: username,
      password: password,
    };

    axios
      .post("http://localhost:4000/admin/sign-in", registered)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data);
        history.push(`/home/${response.data}`);
      });
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={onSubmit} >
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter Username " value={username}
          onChange={changeUsername}

        />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter Password"
          value={password}
          onChange={changePassword} />
        <button className="button loginButton" type="submit" >
          Login</button>
        <p style={{ justifyContent: 'center' }}> ------------- Don't have an account -------------</p>
        <Link className="link" to="/signup"><button className="button loginButton another" style={{ textDecoration: 'none' }}>
          Register</button> </Link>
      </form>
      {/* <Link className="link" to="/"><button className="button loginRegisterButton">
        Home   </button></Link> */}
    </div>
  );
}
export default Login

// import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// //import Link from "@material-ui/core/Link";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import axios from "axios";
// import { useHistory } from "react-router";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },
//   image: {
//     backgroundImage:
//       "url(https://retailpharmacymagazine.com.au/wp-content/uploads/2020/05/dexamethasone-retail-pharmacy.jpg)",
//     backgroundRepeat: "no-repeat",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   link: {
//     textDecoration: "none",
//     color: "inherit",
//   },
// }));

// export const Login = () => {
//   const history = useHistory();
//   const classes = useStyles();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const changeUsername = (event) => {
//     setUsername(event.target.value);
//   };

//   const changePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const registered = {
//       userName: username,
//       password: password,
//     };

//     axios
//       .post("http://localhost:4000/admin/sign-in", registered)
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("token", response.data);
//         history.push(`/home/${response.data}`);
//       });
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>

//       <Grid container component="main" className={classes.root}>
//         <CssBaseline />
//         <Grid item xs={false} sm={4} md={7} className={classes.image} />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <div className={classes.paper}>
//             <Avatar className={classes.avatar} alt="pl" />
//             <Typography component="h1" variant="h5">
//               WELCOME
//             </Typography>
//             <form className={classes.form} noValidate onSubmit={onSubmit}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="text"
//                 label="User name"
//                 name="text"
//                 autoComplete="text"
//                 autoFocus
//                 value={username}
//                 onChange={changeUsername}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={changePassword}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//               >
//                 Login
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//               </Grid>

//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

