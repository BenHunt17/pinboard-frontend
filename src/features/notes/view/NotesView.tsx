import { Grid, Stack } from "@mui/material";
import Note from "./note/Note";
import NotesToolbar from "./NotesToolbar";
import { useState } from "react";
import { useNotesViewContext } from "./NotesViewContext";

export default function NotesView() {
  const [editMode, setEditMode] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);

  const { notes, onDeleteNotes } = useNotesViewContext();

  //TODO - display something else if loading or no notes found

  return (
    <Stack gap={2}>
      <NotesToolbar
        onDeleteClick={() => onDeleteNotes(selectedNoteIds)}
        editMode={editMode}
        setEditMode={setEditMode}
        selectedNoteIds={selectedNoteIds}
        setSelectedNoteIds={setSelectedNoteIds}
      />
      <Grid container spacing={4}>
        {notes?.map((x) => (
          <Grid key={x.id} item xs={3}>
            <Note
              note={x}
              editMode={editMode}
              selectedNoteIds={selectedNoteIds}
              setSelectedNoteIds={setSelectedNoteIds}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
