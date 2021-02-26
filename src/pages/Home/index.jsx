import React, { useEffect } from "react";
import { Grid, CssBaseline, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TopBar from "../../components/TopBar";
import LeftSideBar from "../../components/LeftSideBar";
import RightSiderBar from "../../components/RightSiderBar";
import RouterBreadcrumbs from "../../components/RouterBreadcrumbs";
import TopNav from "./components/TopNav";
import SansorBox from "./components/SansorBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    padding: "30px 35px",
  },
}));

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  });

  // Fetch Json Data
  const fetchData = async () => {
    const res = await fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftSideBar />
      <main className={classes.content}>
        <Toolbar />
        <RouterBreadcrumbs />
        <div className={classes.main}>
          <TopNav />
          <div style={{ margin: "40px 0" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <SansorBox />
              </Grid>
              <Grid item xs={6}>
                <SansorBox />
              </Grid>
              <Grid item xs={6}>
                <SansorBox />
              </Grid>
              <Grid item xs={6}>
                <SansorBox />
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
      <RightSiderBar />
    </div>
  );
};

export default Home;
