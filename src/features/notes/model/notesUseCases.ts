import { defineMessages, useIntl } from "react-intl";
import useQueryNotes from "./queries/useQueryNotes";
import useMutateNotesAdd from "./mutations/useMutateNotesAdd";
import { NoteUpdateTitleInputSchema } from "../../../dataAccess/schemas/input/noteUpdateTitleInputSchema";
import useMutateTitle from "./mutations/useMutateTitle";
import { NoteUpdateContentInputSchema } from "../../../dataAccess/schemas/input/noteUpdateContentInputSchema";
import useMutateContent from "./mutations/useMutateContent";
import useMutateNotesDelete from "./mutations/useMutateNotesDelete";
import { useDebounce } from "use-debounce";
import { useState } from "react";

export const notesUseCases = {
  useSearchNotes,
  useAddNote,
  useUpdateTitle,
  useUpdateContent,
  useDeleteNotes,
};

function useSearchNotes() {
  const [searchText, setSearchText] = useState("");
  const [searchTerm] = useDebounce(searchText, 300);

  const input = { searchTerm: searchTerm };

  const { data, status } = useQueryNotes(input);

  const loading = status === "loading";

  return { data, loading, setSearchText };
}

function useAddNote() {
  const { formatMessage: f } = useIntl();
  const { mutate: mutateNotesAdd } = useMutateNotesAdd();

  const addNote = () =>
    mutateNotesAdd({
      title: f(messages.newNote, { date: new Date().toISOString() }),
      content: "",
    });

  return addNote;
}

function useUpdateTitle() {
  const { mutate: mutateTitle } = useMutateTitle();

  const updateTitle = (input: NoteUpdateTitleInputSchema) => mutateTitle(input);

  return updateTitle;
}

function useUpdateContent() {
  const { mutate: mutateContent } = useMutateContent();

  const updateContent = (input: NoteUpdateContentInputSchema) =>
    mutateContent(input);

  return updateContent;
}

function useDeleteNotes() {
  const { mutate: mutateNotesDelete } = useMutateNotesDelete();

  const deleteNotes = (input: string[]) => mutateNotesDelete(input);

  return deleteNotes;
}

const messages = defineMessages({
  newNote: {
    id: "notes-model.new-note",
    defaultMessage: "New note {date}",
    description:
      "The default title for a newly added note. Uses the date to ensure uniqueness",
  },
});
