import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#355185",
    },
    secondary: {
      main: "#3d9c4c",
    },
    background: {
      default: "#dcc7b2",
      paper: "#eeeeee",
    },
    error: {
      main: "#f32e2e",
    },
    warning: {
      main: "#d6e41f",
    },
    success: {
      main: "#2fce2f",
    },
  },
});
