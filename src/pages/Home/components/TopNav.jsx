import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

import measurement_points from "../../../assets/measurement-points.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sub: {
    display: "flex",
    flexDirection: "column",
  },
}));

const TopNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sub}>
        <span>1 Active</span>
        <Typography variant="h2">Measurement Points</Typography>
      </div>
      <Button variant="contained" color="primary" startIcon={<AddIcon />}>
        Measurement
      </Button>
    </div>
  );
};

export default TopNav;
