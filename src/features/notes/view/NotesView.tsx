import { Grid, Stack } from "@mui/material";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";
import Note from "./note/Note";
import NotesToolbar from "./NotesToolbar";
import { useState } from "react";

interface NotesViewProps {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
  onAddNote: () => void;
  onDeleteNotes: (ids: string[]) => void;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
}

export default function NotesView({
  notes,
  notesLoading,
  onAddNote,
  onDeleteNotes,
  onTitleSave,
  onContentSave,
}: NotesViewProps) {
  const [editMode, setEditMode] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);

  //TODO - display something else if loading or no notes found

  return (
    <Stack gap={2}>
      <NotesToolbar
        notes={notes ?? []}
        onAddNote={onAddNote}
        onDeleteNotes={() => onDeleteNotes(selectedNoteIds)}
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
              onTitleSave={onTitleSave}
              onContentSave={onContentSave}
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
