import { Grid } from "@mui/material";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";
import Note from "./note/Note";

interface NotesViewProps {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
}

export default function NotesView({
  notes,
  notesLoading,
  onTitleSave,
  onContentSave,
}: NotesViewProps) {
  //TODO - display something else if loading or no notes found

  return (
    <Grid container spacing={4}>
      {notes?.map((x) => (
        <Grid key={x.id} item xs={3}>
          <Note
            note={x}
            onTitleSave={onTitleSave}
            onContentSave={onContentSave}
          />
        </Grid>
      ))}
    </Grid>
  );
}
