import React from "react";
import {
  Button,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddSensor from "./AddSensor";
import wind_speed from "../../../assets/wind-speed-black.svg";

const StyledTableHeadRow = withStyles((theme) => ({
  root: {
    "& th": {
      padding: "6px 16px",
      height: "45px",
    },
  },
}))(TableRow);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "& td": {
      padding: "6px 16px",
      height: "35px",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
  },
}));

const SansorBox = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <TableContainer className={classes.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableHeadRow>
            <TableCell>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={wind_speed} alt="" />
                <Typography variant="h4">Wind Speed @ 60m - E</Typography>
              </div>
            </TableCell>
          </StyledTableHeadRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <TableCell align="left">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" style={{ marginBottom: "0" }}>
                  NRG #40
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginBottom: "0", marginLeft: "8px" }}
                >
                  [1 Jan 2017 to 1 Jan 2018]
                </Typography>
              </div>
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell align="left">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" style={{ marginBottom: "0" }}>
                  NRG #40
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginBottom: "0", marginLeft: "8px" }}
                >
                  [1 Jan 2017 to 1 Jan 2018]
                </Typography>
              </div>
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell align="left">
              <IconButton
                open={expanded}
                onClick={handleExpandClick}
                style={{ padding: "4px" }}
              >
                <AddIcon color="primary" />
              </IconButton>
            </TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      <div style={{ background: "#f9f9f9" }}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <AddSensor />
        </Collapse>
      </div>
    </TableContainer>
  );
};

export default SansorBox;
