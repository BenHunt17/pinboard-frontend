import styled from "@emotion/styled";
import { Box, Stack, useTheme } from "@mui/material";
import NoteContent from "./NoteContent";
import NoteTitle from "./NoteTitle";

interface NoteProps {
  title: string;
  content: string;
  onTitleSave: (content: string) => void;
  onContentSave: (content: string) => void;
}

export default function Note({
  title,
  content,
  onTitleSave,
  onContentSave,
}: NoteProps) {
  const theme = useTheme();

  return (
    <Stack
      padding={1}
      bgcolor={theme.palette.background.paper}
      boxShadow={3}
      alignItems="center"
      gap={2}
    >
      <Pin
        bgcolor={pinColours[Math.floor(Math.random() * pinColours.length)]}
      />
      <Stack width="100%" gap={1}>
        <NoteTitle title={title} onTitleSave={onTitleSave} />
        <NoteContent content={content} onContentSave={onContentSave} />
      </Stack>
    </Stack>
  );
}

const Pin = styled(Box)({
  width: "5%",
  aspectRatio: 1,
  borderRadius: "50%",
});

const pinColours = ["#e45757", "#f7c844", "#4e65f7", "#f94a9d", "#64f597"];
