import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>
);
