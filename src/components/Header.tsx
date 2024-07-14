import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import ProfileMenu from "./profileMenu/ProfileMenu";

interface HeaderProps {
  isLandingPage?: boolean;
}

export default function Header({ isLandingPage }: HeaderProps) {
  const { formatMessage: f } = useIntl();

  return (
    <AppBar position="sticky" sx={{ padding: 2 }}>
      <Toolbar disableGutters>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Pinboard
        </Typography>
        {isLandingPage !== true && (
          <Stack direction="row" alignItems="center" gap={1}>
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
            <ProfileMenu />
          </Stack>
        )}
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
  { title: messages.notes, path: "/notes" },
  { title: messages.about, path: "/about" },
];
