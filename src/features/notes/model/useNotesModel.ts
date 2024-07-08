import { notesUseCases } from "./notesUseCases";

export default function useNotesModel() {
  const {
    data: notes,
    loading: notesLoading,
    setSearchText: onSearchTextChange,
  } = notesUseCases.useSearchNotes();

  const addNote = notesUseCases.useAddNote();

  const updateTitle = notesUseCases.useUpdateTitle();

  const updateContent = notesUseCases.useUpdateContent();

  const deleteNotes = notesUseCases.useDeleteNotes();

  return {
    notes,
    notesLoading,
    onSearchTextChange,
    addNote,
    updateTitle,
    updateContent,
    deleteNotes,
  };
}
