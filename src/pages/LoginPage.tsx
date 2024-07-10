import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";

export default function LoginPage() {
  const { formatMessage: f } = useIntl();

  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()} variant="contained">
      {f(messages.login)}
    </Button>
  );
}

const messages = defineMessages({
  login: { id: "login-page.login", defaultMessage: "Login" },
});
