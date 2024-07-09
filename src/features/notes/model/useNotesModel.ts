import { notesUseCases } from "./notesUseCases";

export default function useNotesModel() {
  const {
    notes,
    canLoadMore,
    fetchNextPage,
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
    canLoadMore,
    fetchNextPage,
    onSearchTextChange,
    addNote,
    updateTitle,
    updateContent,
    deleteNotes,
  };
}
