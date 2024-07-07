import { NoteUpdateTitleInputSchema } from "../../../dataAccess/schemas/input/noteUpdateTitleInputSchema";
import useQueryNotes from "./queries/useQueryNotes";
import useMutateTitle from "./mutations/useMutateTitle";
import useMutateContent from "./mutations/useMutateContent";
import { NoteUpdateContentInputSchema } from "../../../dataAccess/schemas/input/noteUpdateContentInputSchema";

export default function useNotesModel() {
  const { data, status } = useQueryNotes();

  const loading = status === "loading";

  const { mutate: mutateTitle } = useMutateTitle();

  const updateTitle = (input: NoteUpdateTitleInputSchema) => mutateTitle(input);

  const { mutate: mutateContent } = useMutateContent();

  const updateContent = (input: NoteUpdateContentInputSchema) =>
    mutateContent(input);

  return { notes: data, notesLoading: loading, updateTitle, updateContent };
}
