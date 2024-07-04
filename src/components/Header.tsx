import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { formatMessage: f } = useIntl();

  return (
    <AppBar position="static" sx={{ padding: 1 }}>
      <Toolbar disableGutters>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Pinboard
        </Typography>
        <Stack direction="row" gap={1}>
          {navigationItems.map((x) => (
            <NavLink
              key={x.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              to={x.path}
            >
              <Button sx={{ color: "#fff", fontWeight: "inherit" }}>
                {f(x.title)}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

//TODO - move these localisations to their respective feature message files once added
const messages = defineMessages({
  notes: {
    id: "header.notes",
    defaultMessage: "Notes",
  },
  about: {
    id: "header.about",
    defaultMessage: "about",
  },
});

const navigationItems = [
  { title: messages.notes, path: "/" },
  { title: messages.about, path: "/about" },
];
