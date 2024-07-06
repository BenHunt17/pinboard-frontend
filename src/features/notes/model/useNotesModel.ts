import { notesService } from "../../../dataAccess/services/notesService";

export default function useNotesModel() {
  const { data: notes, loading: notesLoading } = notesService.useGetNotes();

  return { notes, notesLoading };
}
