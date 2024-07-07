import styled from "@emotion/styled";
import { Box, Stack, useTheme } from "@mui/material";
import NoteContent from "./NoteContent";
import NoteTitle from "./NoteTitle";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";

interface NoteProps {
  note: NoteSchema;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
}

export default function Note({ note, onTitleSave, onContentSave }: NoteProps) {
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
        bgcolor={pinColours[Math.floor(Math.random() * pinColours.length)]} //TODO - Make these deterministic. I forgot that react rerenders which was amateurish of me
      />
      <Stack width="100%" gap={1}>
        <NoteTitle
          key={`${note.id}${note.title}`}
          title={note.title}
          onTitleSave={(title) => onTitleSave(note.id, title)}
        />
        <NoteContent
          key={`${note.id}${note.content}`}
          content={note.content}
          onContentSave={(content) => onContentSave(note.id, content)}
        />
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
