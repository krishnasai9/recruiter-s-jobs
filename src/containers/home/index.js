import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Button, Card } from "@material-ui/core";

import { getAlbums } from "../actions/home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: { textTransform: "none", marginLeft: 15 },
  main: { display: "flex" },
}));

function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getAlbums());
  // }, []);

  const data = useSelector((state) => state.home.albums);

  const albums =
    data && data.response && data.response.data ? data.response.data : [];

  return (
    <div style={{ height: "100%", background: "whitesmoke" }}>
      <div className={classes.root}>
        <h1>Welcome to NaukriTube</h1>
        <div className={classes.main}>
          <Button
            className={classes.button}
            onClick={() => props.history.push("/signIn")}
          >
            <h2> Sign In </h2>
          </Button>

          <Button
            className={classes.button}
            onClick={() => props.history.push("/signUp")}
          >
            Sign Up
          </Button>
        </div>
      </div>

      <center>
        <div>
          {albums.map((i, index) => (
            <Card
              key={index}
              style={{ width: 300, padding: 15, marginTop: 15 }}
            >
              {i.email}
            </Card>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Home;
