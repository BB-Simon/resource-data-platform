import { indigo, blue } from "@material-ui/core/colors";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colorPrimary: {
    "&:hover": {
      backgroundColor: indigo[100],
      color: indigo[400],
    },
    "&$checked": {
      color: indigo[400],
    },
  },
  colorSecondary: {
    "&:hover": {
      backgroundColor: blue[100],
      color: blue[700],
    },
    "&$checked": {
      color: blue[700],
    },
  },
};
