import { notesService } from "../../../dataAccess/services/notesService";

export default function useNotesModel() {
  const { data, status } = notesService.useGetNotes();

  const loading = status === "loading";

  return { notes: data, notesLoading: loading };
}
