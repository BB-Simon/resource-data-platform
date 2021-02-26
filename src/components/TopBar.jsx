import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  makeStyles,
  IconButton,
  fade,
} from "@material-ui/core";

import logo from "../assets/logo.svg";
import resource_data_platform from "../assets/resource-data-platform.svg";
import mast_clolor_white from "../assets/mast-color-white.svg";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "#0e1625",
    color: "#ffffff",
    maxHeight: "48px",
    boxShadow: "none",
  },
  mast: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(6),
    height: "100%",
    padding: "15px 22px",
  },
  btn: {
    width: "28px",
    height: "28px",
    fontSize: "14px",
    padding: "0",
    borderRadius: "100%",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start">
          <img src={logo} alt="" />
        </IconButton>
        <Typography variant="h6" noWrap>
          <img src={resource_data_platform} alt="" />
        </Typography>
        <div className={classes.mast}>
          <img src={mast_clolor_white} alt="" width="26" height="26" />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton className={classes.btn}>A</IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
