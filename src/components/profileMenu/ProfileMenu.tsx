import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, IconButton, Popover, Stack } from "@mui/material";
import { useRef, useState } from "react";
import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";

export default function ProfileMenu() {
  const { user } = useAuth0();
  const ref = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setOpen(true)}>
        <Avatar src={user?.picture} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={ref.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: 100,
        }}
      >
        <Stack padding={1}>
          {user?.sub !== process.env.REACT_APP_GUEST_ID && (
            <DeleteAccountButton />
          )}
          <LogoutButton />
        </Stack>
      </Popover>
    </>
  );
}
