import { CircularProgress, Stack } from "@mui/material";

export default function LoadingPlaceholder() {
  return (
    <Stack alignItems="center" padding={4}>
      <CircularProgress />
    </Stack>
  );
}
