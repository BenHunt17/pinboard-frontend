import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";

export default function LogoutButton() {
  const { formatMessage: f } = useIntl();
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout()} sx={{ textTransform: "none" }}>
      {f(messages.logout)}
    </Button>
  );
}

const messages = defineMessages({
  logout: {
    id: "profile-menu.logout",
    defaultMessage: "Logout",
  },
});
