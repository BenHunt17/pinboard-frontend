import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { defineMessages, useIntl } from "react-intl";
import { commonMessages } from "../../common/commonMessages";
import useDeleteUser from "./useDeleteUserMutation";
import ModalWrapper from "../ModalWrapper";

export default function DeleteAccountButton() {
  const { formatMessage: f } = useIntl();

  const [open, setOpen] = useState(false);

  const { mutate } = useDeleteUser(() => setOpen(false));

  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ textTransform: "none" }}>
        {f(messages.deleteAccount)}
      </Button>
      <ModalWrapper open={open} onClose={() => setOpen(false)}>
        <Box>
          <Typography>{f(messages.warning)}</Typography>
          <br />
          <Typography>{f(messages.areYouSure)}</Typography>
          <Stack direction="row" justifyContent="center" gap={2} marginTop={4}>
            <Button onClick={() => setOpen(false)} variant="contained">
              {f(commonMessages.buttons.no)}
            </Button>
            <Button onClick={() => mutate()} variant="outlined">
              {f(commonMessages.buttons.yes)}
            </Button>
          </Stack>
        </Box>
      </ModalWrapper>
    </>
  );
}

const messages = defineMessages({
  deleteAccount: {
    id: "profile-menu.delete-account",
    defaultMessage: "Delete account",
  },
  warning: {
    id: "profile-menu.delete-account.warning",
    defaultMessage:
      "We are sorry to see you go. Please note that once you delete your account, the result will be immediate and all of your notes will be deleted. Your user details will also be removed from the system",
  },
  areYouSure: {
    id: "profile-menu.delete-account.are-you-sure",
    defaultMessage: "Are you sure you want to delete your account?",
  },
});
