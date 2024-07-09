import { Button, Grid, Stack } from "@mui/material";
import Note from "./note/Note";
import NotesToolbar from "./NotesToolbar";
import { useState } from "react";
import { useNotesViewContext } from "./NotesViewContext";
import { commonMessages } from "../../../common/commonMessages";
import { useIntl } from "react-intl";

export default function NotesView() {
  const { formatMessage: f } = useIntl();

  const [editMode, setEditMode] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);

  const { notes, onDeleteNotes, canLoadMore, loadMore } = useNotesViewContext();

  //TODO - display something else if loading or no notes found

  return (
    <Stack gap={2} alignItems="center">
      <NotesToolbar
        onDeleteClick={() => onDeleteNotes(selectedNoteIds)}
        editMode={editMode}
        setEditMode={setEditMode}
        selectedNoteIds={selectedNoteIds}
        setSelectedNoteIds={setSelectedNoteIds}
      />
      <Grid container spacing={4}>
        {notes?.map((x, index) => (
          <Grid key={x.id} item xs={3}>
            <Note
              note={x}
              editMode={editMode}
              selectedNoteIds={selectedNoteIds}
              setSelectedNoteIds={setSelectedNoteIds}
              noteIndex={index}
            />
          </Grid>
        ))}
      </Grid>
      {canLoadMore && (
        <div>
          <Button onClick={loadMore} variant="contained">
            {f(commonMessages.buttons.loadMore)}
          </Button>
        </div>
      )}
    </Stack>
  );
}
