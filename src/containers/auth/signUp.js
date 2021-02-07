import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { SignUpForm } from "../actions/signUp";
import { useDispatch, useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [displayName, setName] = React.useState("");
  const [organization, setOrg] = React.useState("");

  const [email, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState(null);

  const onSubmit = async() => {
    const payload = { displayName, organization, email, password, isVerificationRequired:true};

    const res=await dispatch(SignUpForm(payload));
    // console.log("onSubmit",res);
    // localStorage.setItem("token",res.response.payload.token);
    }

  // console.log("displayName", displayName);



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              onChange={(e) => setName(e.target.value)}
                autoComplete="fname"
                name="displayName"
                variant="outlined"
                required
                fullWidth
                id="displayName"
                label="displayName "
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                onChange={(e) => setOrg(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="organization"
                label="organization"
                name="organization"
                autoComplete="organization"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setUser(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
           onClick={()=>onSubmit()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>

              <Button
               onClick={()=>props.history.push("/signIn")} 
               style={{textTransform:"none"}}
               >
                {"Already have an account? Sign in"}
              </Button>

            </Grid>
          </Grid>
        
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}