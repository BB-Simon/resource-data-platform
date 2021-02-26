import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import theme from "./theme";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppRoutes />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
