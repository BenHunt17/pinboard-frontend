import styled from "@emotion/styled";
import { Box, Checkbox, Stack, useTheme } from "@mui/material";
import NoteContent from "./NoteContent";
import NoteTitle from "./NoteTitle";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";
import { useNotesViewContext } from "../NotesViewContext";

interface NoteProps {
  note: NoteSchema;
  editMode: boolean;
  selectedNoteIds: string[];
  setSelectedNoteIds: (value: string[]) => void;
  noteIndex: number;
}

export default function Note({
  note,
  editMode,
  selectedNoteIds,
  setSelectedNoteIds,
  noteIndex,
}: NoteProps) {
  const theme = useTheme();

  const { onTitleSave, onContentSave } = useNotesViewContext();

  const isChecked = selectedNoteIds.includes(note.id);

  return (
    <Stack
      padding={1}
      bgcolor={theme.palette.background.paper}
      boxShadow={3}
      alignItems="center"
      gap={2}
    >
      <Stack
        direction="row"
        gap={1}
        justifyContent={"space-between"}
        alignItems="center"
        width="100%"
      >
        <Checkbox
          checked={isChecked}
          onChange={() => {
            if (isChecked) {
              setSelectedNoteIds(selectedNoteIds.filter((x) => x !== note.id));
            } else {
              setSelectedNoteIds([...selectedNoteIds, note.id]);
            }
          }}
          disabled={!editMode}
          sx={{ opacity: editMode ? 1 : 0 }}
        />
        <Pin bgcolor={pinColours[noteIndex % pinColours.length]} />
        {/* //Added a dummy checkbox to fix alignment. Works better than messing around with absolute positioning */}
        <Checkbox disabled sx={{ opacity: 0 }} />{" "}
      </Stack>
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
  width: 25,
  height: 25,
  borderRadius: "50%",
});

const pinColours = ["#e45757", "#f7c844", "#4e65f7", "#f94a9d", "#64f597"];
