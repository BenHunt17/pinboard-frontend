import { NoteUpdateTitleInputSchema } from "../../../dataAccess/schemas/input/noteUpdateTitleInputSchema";
import useQueryNotes from "./queries/useQueryNotes";
import useMutateTitle from "./mutations/useMutateTitle";
import useMutateContent from "./mutations/useMutateContent";
import { NoteUpdateContentInputSchema } from "../../../dataAccess/schemas/input/noteUpdateContentInputSchema";
import useMutateNotesAdd from "./mutations/useMutateNotesAdd";
import { defineMessages, useIntl } from "react-intl";

export default function useNotesModel() {
  const { formatMessage: f } = useIntl();

  const { data, status } = useQueryNotes();

  const loading = status === "loading";

  const { mutate: mutateTitle } = useMutateTitle();

  const updateTitle = (input: NoteUpdateTitleInputSchema) => mutateTitle(input);

  const { mutate: mutateContent } = useMutateContent();

  const updateContent = (input: NoteUpdateContentInputSchema) =>
    mutateContent(input);

  const { mutate: mutateNotesAdd } = useMutateNotesAdd();

  const addNote = () =>
    mutateNotesAdd({
      title: f(messages.newNote, { date: new Date().toISOString() }),
      content: "",
    });

  return {
    notes: data,
    notesLoading: loading,
    addNote,
    updateTitle,
    updateContent,
  };
}

const messages = defineMessages({
  newNote: {
    id: "notes-model.new-note",
    defaultMessage: "New note {date}",
    description:
      "The default title for a newly added note. Uses the date to ensure uniqueness",
  },
});
