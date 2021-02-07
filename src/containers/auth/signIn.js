import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { SignInForm } from "../actions/signIn";
import { useDispatch, useSelector } from "react-redux";
// import jobs from "../home/jobs";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    TextField: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState(null);

  const onSubmit = async() => {
    const payload = { email, password };
    console.log("onSubmit");
     const res=await dispatch(SignInForm(payload));
     console.log("res",res);
     if (res.status==200){
       const token=res.response.payload.access_token;
       const user=res.response.payload.user;
       localStorage.setItem("token",token);
       localStorage.setItem("user",user);
       props.history.push("/jobs");

     }
    // axios({
    //   method: "post",
    //   url:
    //     "https://naukritube-v3-dev.herokuapp.com/v1/api/auth/recruiter/signin",
    //   data: payload,
    // }).then((res) => {
    //   console.log("response", response);
    // });
  };

  // console.log("email", email);
  // const token=localStorage.getItem("token");
  // console.log("token",token);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            onChange={(e) => setUser(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // onClick={()=>props.history.push("/jobs")} 
            //    style={{textTransform:"none"}}
            onClick={() => onSubmit()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
               onClick={()=>props.history.push("/signUp")} 
               style={{textTransform:"none"}}
               >
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}></Box>
        </div>
      </Grid>
    </Grid>
  );
}
