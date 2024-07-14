import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";

export default function LoginPage() {
  const { formatMessage: f } = useIntl();
  const theme = useTheme();

  const { loginWithPopup } = useAuth0();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="body1">
          Welcome to Pinboard! Click login to authenticate yourself
          <br />
          If this is your first time using this app, then you can either choose
          the signup option when directed to the login box, or sign in using the
          guest credentials which are provided below:
          <br />
          <br />
          Email: guest@example.com
          <br />
          password: Guest1234#
          <br />
          <br />
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          **IMPORTANT** If you sign in with the guest credentials then any notes
          that you create will be visible to other users
        </Typography>
      </Box>
      <Button
        onClick={() => loginWithPopup()}
        variant="contained"
        sx={{ marginTop: 12, left: "50%" }}
      >
        {f(messages.login)}
      </Button>
    </>
  );
}

const messages = defineMessages({
  login: { id: "login-page.login", defaultMessage: "Login" },
});
