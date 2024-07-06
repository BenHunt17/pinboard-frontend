import { Typography, useTheme } from "@mui/material";

interface InputErrorMessageProps {
  message: string;
}

export default function InputErrorMessage<T>({
  message,
}: InputErrorMessageProps) {
  const theme = useTheme();

  return (
    <Typography color={theme.palette.error.main} align="right">
      {message}
    </Typography>
  );
}
