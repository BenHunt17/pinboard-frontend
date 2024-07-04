import { Typography } from "@mui/material";
import { defineMessages, useIntl } from "react-intl";

export default function NotFound() {
  const { formatMessage: f } = useIntl();

  return (
    <Typography color="red" fontWeight="bold" sx={{ padding: 1 }}>
      {f(messages.notFound)}
    </Typography>
  );
}

const messages = defineMessages({
  notFound: {
    id: "not-found-page.not-found",
    defaultMessage: "404 Not found",
  },
});
