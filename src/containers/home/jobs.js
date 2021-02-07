import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';



const UseStyles = makeStyles((theme) => ({
    root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    margin: theme.spacing(1, 0),
  },
  root:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
     margin: theme.spacing(1, 13),

  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heading: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardtitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
 
}));

const tiers = [
  {
    jobNumber: 'job1',
    title: 'React dev',
    description: ["HTML","CSS","JAVA SCRIPT"],
    buttonText: 'edit',
    buttonVariant: 'outlined',
  },
  {
    jobNumber: 'job2',
    title: 'AWS',
    description: [ ],
    buttonText: 'edit',
    buttonVariant: 'contained',
  },
  {
    jobNumber: 'job3',
    title: 'Devops engineer',
    description: [],
    buttonText: 'edit',
    buttonVariant: 'outlined',
  },
{
jobNumber: 'job4',
    title: '.NET developer',
    description: [],
    buttonText: 'edit',
    buttonVariant: 'outlined',
  },


];



export default function jobs() {
  const classes = UseStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            NaukriTube
          </Typography>

            <Button className={classes.root}>
             <Icon style={{ fontSize: 30 }}>add_circle</Icon> <span>Create new job</span>
            </Button>
          <TextField
           id="standard-jobs"
           defaultValue="search jobs"
           margin="normal"
             InputProps={{
              endAdornment: (
               <InputAdornment position="start">
                 <SearchIcon />
               </InputAdornment>
              )
              }}
              />
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
   
      <Container maxWidth="sm" component="main" className={classes.heading}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          List of jobs
        </Typography>
        </Container>
      
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardtitle}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.jobNumber}
                    </Typography>
                    
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>
  );
}