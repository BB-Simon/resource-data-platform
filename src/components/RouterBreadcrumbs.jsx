import {
  Button,
  makeStyles,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    height: "42px",
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  btn: {
    borderRadius: "25px",
    padding: "5px 20px 5px",
    fontSize: "12px",
    boxShadow: "-3px 0 7px 3px rgba(0, 0, 0, 0.06)",
  },
}));

const RouterBreadcrumbs = (props) => {
  const classes = useStyles();
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div className={classes.root}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon style={{ fontSize: "14px", margin: "0 -8px" }} />
        }
      >
        {pathnames.length > 0 ? (
          <Link onClick={() => history.push("/")}>Home</Link>
        ) : (
          <Typography variant="body2"> Home </Typography>
        )}
        {pathnames.map((name, index) => {
          const splitedName = name.split("-").filter((x) => x);
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography
              variant="body2"
              key={name}
              style={{ marginBottom: "0" }}
            >
              {splitedName.map((item) => (
                <span
                  style={{ textTransform: "capitalize", marginRight: "3px" }}
                >
                  {item}
                </span>
              ))}
            </Typography>
          ) : (
            <Link key={name} onClick={() => history.push(routeTo)}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
      <div className={classes.grow} />
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          style={{ marginRight: "-15px", zIndex: 1 }}
        >
          List View
        </Button>
        <Button variant="contained" color="secondery" className={classes.btn}>
          Timeline
        </Button>
      </div>
    </div>
  );
};

export default withRouter(RouterBreadcrumbs);
