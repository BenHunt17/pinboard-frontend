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
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain={process.env.REACT_APP_DOMAIN ?? ""}
          clientId={process.env.REACT_APP_CLIENT_ID ?? ""}
          authorizationParams={{
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: "read:current_user update:current_user_metadata",
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </ThemeProvider>
        </Auth0Provider>
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>
);
