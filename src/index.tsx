import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import SnackbarProvider from "./SnackbarProvider";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider>
            <RouterProvider router={router} />
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>
);
