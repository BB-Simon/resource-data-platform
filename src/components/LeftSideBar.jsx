import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import cog_white from "../assets/cog-white.svg";
import project_selected_dark from "../assets/project-selected-dark.svg";
import mast_clolor_white from "../assets/mast-color-white.svg";
import wind_direction_white from "../assets/wind-direction-white.svg";
import wind_speed from "../assets/wind-speed.svg";
import pressure_white from "../assets/pressure-white.svg";
import temperature_white from "../assets/temperature-white.svg";
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "#111b30",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#111b30",
  },
  drawerContainer: {
    overflow: "auto",
  },
  lists: {
    // backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subNested: {
    paddingLeft: theme.spacing(6),
  },
}));

const LeftSideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const [subOfSubMenuOpen, setSubOfSubMenuOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSubMenuOpen = () => {
    setSubMenuOpen((prevOpen) => !prevOpen);
  };
  const handleSubOfSubMenuOpen = () => {
    setSubOfSubMenuOpen((prevOpen) => !prevOpen);
  };
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
        >
          <NavigateBeforeIcon style={{ fontSize: "16px" }} />
          <Typography variant="body2" style={{ marginBottom: "0" }}>
            View Projects
          </Typography>
        </div>
        <List className={classes.root}>
          <ListItem open={open} onClick={handleClick}>
            <ListItemIcon>
              <img src={project_selected_dark} alt="" />
            </ListItemIcon>
            <ListItemText primary="Project name 1" />
            <ListItemIcon>
              <img src={cog_white} alt="" />
            </ListItemIcon>
          </ListItem>
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List>
              <ListItem
                className={classes.nested}
                open={subMenuOpen}
                onClick={handleSubMenuOpen}
              >
                <ListItemIcon>
                  <img src={mast_clolor_white} alt="" width="20" height="20" />
                </ListItemIcon>
                <ListItemText primary="Tower name 1" />
              </ListItem>
              <Collapse
                component="li"
                in={subMenuOpen}
                timeout="auto"
                unmountOnExit
              >
                <List>
                  <ListItem className={classes.subNested}>
                    <ListItemText primary="Location Properties" />
                  </ListItem>
                  <ListItem className={classes.subNested}>
                    <ListItemText primary="Logger" />
                  </ListItem>
                  <ListItem
                    className={classes.subNested}
                    open={subOfSubMenuOpen}
                    onClick={handleSubOfSubMenuOpen}
                  >
                    <ListItemText primary="Measurements" />
                  </ListItem>
                  <Collapse
                    component="li"
                    in={subOfSubMenuOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List>
                      <ListItem className={classes.subNested}>
                        <ListItemIcon>
                          <img src={wind_speed} alt="" width="20" height="20" />
                        </ListItemIcon>
                        <ListItemText primary="Wind Speed @ 60m , E" />
                      </ListItem>
                      <ListItem className={classes.subNested}>
                        <ListItemIcon>
                          <img src={wind_speed} alt="" width="20" height="20" />
                        </ListItemIcon>
                        <ListItemText primary="Wind Speed @ 50m , W" />
                      </ListItem>
                      <ListItem className={classes.subNested}>
                        <ListItemIcon>
                          <img src={wind_speed} alt="" width="20" height="20" />
                        </ListItemIcon>
                        <ListItemText primary="Wind Speed @ 30m , E" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem className={classes.subNested}>
                    <ListItemText primary="Maintenance" />
                  </ListItem>
                  <ListItem className={classes.subNested}>
                    <ListItemText primary="Calibration" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem className={classes.nested}>
                <ListItemIcon>
                  <img src={mast_clolor_white} alt="" width="20" height="20" />
                </ListItemIcon>
                <ListItemText primary="Tower name 2" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemIcon>
                  <img src={mast_clolor_white} alt="" width="20" height="20" />
                </ListItemIcon>
                <ListItemText primary="Tower name 3" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );
};

export default LeftSideBar;
