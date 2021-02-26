import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import calendar from "../../../assets/calendar.svg";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    background: "#f9f9f9",
    width: "100%",
    padding: "15px",
  },
  btn: {
    borderRadius: "4px",
    padding: "6px 32px",
    fontSize: "12px",
    margin: "12.5px 10px 12.5px 0;",
  },
}));

const AddSensor = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.form}>
      <Typography variant="h5">Add Sensor</Typography>
      <Grid container>
        <Grid item xs={12} sm={6} style={{ paddingRight: "12.5px" }}>
          <Typography variant="body2">OEM</Typography>
          <TextField
            fullWidth
            defaultValue="12332442"
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "12.5px" }}>
          <Typography variant="body2">Date From</Typography>
          <KeyboardDatePicker
            disableToolbar
            inputVariant="filled"
            variant="filled"
            format="MM-dd-yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputProps={{
              disableUnderline: true,
            }}
            keyboardIcon={
              <img src={calendar} alt="calendar" width="13" height="13" />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingRight: "12.5px" }}>
          <Typography variant="body2">Sensor Model</Typography>
          <TextField
            fullWidth
            defaultValue="Theis #4A"
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "12.5px" }}>
          <Typography variant="body2">Date To</Typography>
          <KeyboardDatePicker
            disableToolbar
            inputVariant="filled"
            variant="filled"
            format="MM-dd-yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputProps={{
              disableUnderline: true,
            }}
            keyboardIcon={
              <img src={calendar} alt="calendar" width="13" height="13" />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingRight: "12.5px" }}>
          <Typography variant="body2"> Sensor Type</Typography>
          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            size="small"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Create
          </Button>
          <Button
            size="small"
            type="submit"
            variant="contained"
            color="secondery"
            className={classes.btn}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddSensor;
