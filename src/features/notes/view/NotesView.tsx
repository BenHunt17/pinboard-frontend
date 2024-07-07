import { Grid } from "@mui/material";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";
import Note from "./note/Note";

interface NotesViewProps {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
}

export default function NotesView({ notes, notesLoading }: NotesViewProps) {
  //TODO - display something else if loading or no notes found

  return (
    <Grid container spacing={4}>
      {notes?.map((x) => (
        <Grid key={x.id} item xs={3}>
          <Note
            title={x.title}
            content={x.content}
            onTitleSave={() => {}}
            onContentSave={() => {}}
          />
        </Grid>
      ))}
    </Grid>
  );
}
