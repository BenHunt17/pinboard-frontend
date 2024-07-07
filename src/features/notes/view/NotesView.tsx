import { Button, Grid, Stack } from "@mui/material";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";
import Note from "./note/Note";
import { defineMessages, useIntl } from "react-intl";

interface NotesViewProps {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
  onAddNote: () => void;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
}

export default function NotesView({
  notes,
  notesLoading,
  onAddNote,
  onTitleSave,
  onContentSave,
}: NotesViewProps) {
  const { formatMessage: f } = useIntl();
  //TODO - display something else if loading or no notes found

  return (
    <Stack gap={2}>
      <div>
        <Button
          onClick={onAddNote}
          variant="contained"
          sx={{ borderRadius: 10 }}
        >
          {f(messages.addNote)}
        </Button>
      </div>
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
    </Stack>
  );
}

const messages = defineMessages({
  addNote: {
    id: "notes.add-note",
    defaultMessage: "Add note",
  },
});
