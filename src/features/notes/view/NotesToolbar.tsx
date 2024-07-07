import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  useTheme,
} from "@mui/material";
import { defineMessages, useIntl } from "react-intl";
import ModeEdit from "@mui/icons-material/ModeEdit";
import CloseIcon from "@mui/icons-material/Close";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";

interface NotesToolbarProps {
  notes: NoteSchema[];
  onAddNote: () => void;
  onDeleteNotes: () => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  selectedNoteIds: string[];
  setSelectedNoteIds: (value: string[]) => void;
}

export default function NotesToolbar({
  notes,
  onAddNote,
  onDeleteNotes,
  editMode,
  setEditMode,
  selectedNoteIds,
  setSelectedNoteIds,
}: NotesToolbarProps) {
  const { formatMessage: f } = useIntl();
  const theme = useTheme();

  const allNotesSelected = notes.every((x) => selectedNoteIds.includes(x.id));

  const handleExitEditMode = () => {
    setSelectedNoteIds([]);
    setEditMode(false);
  };

  return (
    <Toolbar disableGutters>
      {!editMode ? (
        <TextField
          sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            marginRight: 12,
          }}
          placeholder={f(messages.searchPlaceholder)}
        />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Checkbox
            checked={allNotesSelected}
            onChange={() => {
              if (allNotesSelected) {
                setSelectedNoteIds([]);
              } else {
                setSelectedNoteIds(notes.map((x) => x.id));
              }
            }}
          />
          {f(messages.notesSelected, { count: selectedNoteIds.length })}
        </Box>
      )}
      <Stack direction="row" gap={1}>
        {!editMode ? (
          <Button
            onClick={onAddNote}
            variant="contained"
            sx={{ borderRadius: 10 }}
          >
            {f(messages.addNote)}
          </Button>
        ) : (
          <Button
            onClick={() => {
              onDeleteNotes();
              handleExitEditMode();
            }}
            variant="contained"
            sx={{ borderRadius: 10 }}
            disabled={selectedNoteIds.length === 0}
          >
            {f(messages.deleteNotes, { count: selectedNoteIds.length })}
          </Button>
        )}
        {!editMode ? (
          <IconButton onClick={() => setEditMode(!editMode)}>
            {<ModeEdit />}
          </IconButton>
        ) : (
          <IconButton onClick={handleExitEditMode}>{<CloseIcon />}</IconButton>
        )}
      </Stack>
    </Toolbar>
  );
}

const messages = defineMessages({
  searchPlaceholder: {
    id: "notes.search-placeholder",
    defaultMessage: "Search notes by title or content",
  },
  addNote: {
    id: "notes.add-note",
    defaultMessage: "Add note",
  },
  notesSelected: {
    id: "notes.selected-count-label",
    defaultMessage:
      "{count} {count, plural, one {note} other {notes}} selected",
  },
  deleteNotes: {
    id: "notes.delete-notes",
    defaultMessage: "Delete {count, plural, one {note} other {notes}}",
  },
});
