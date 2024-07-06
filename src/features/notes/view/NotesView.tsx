import { Grid, Typography } from "@mui/material";
import Note from "./note/Note";
import { z } from "zod";
import { noteSchema } from "../../../dataAccess/schemas/output/noteSchema";

interface NotesViewProps {
  notes: z.infer<typeof noteSchema>[];
  notesLoading: boolean;
}

export default function NotesView({ notes, notesLoading }: NotesViewProps) {
  //TODO - display something else if loading or no notes found

  return (
    <Grid container spacing={4}>
      {notes.map((x) => (
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
