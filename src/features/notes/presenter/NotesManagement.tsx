import useNotesModel from "../model/useNotesModel";
import NotesView from "../view/NotesView";
import { NotesViewContext } from "../view/NotesViewContext";

export default function NotesManagement() {
  const {
    notes,
    notesLoading,
    canLoadMore,
    onSearchTextChange,
    addNote,
    updateTitle,
    updateContent,
    deleteNotes,
    fetchNextPage,
  } = useNotesModel();

  return (
    <NotesViewContext.Provider
      value={{
        notes,
        notesLoading,
        canLoadMore,
        onSearchTextChange,
        onAddNote: addNote,
        onTitleSave: (id, title) => updateTitle({ id, title }),
        onContentSave: (id, content) => updateContent({ id, content }),
        onDeleteNotes: deleteNotes,
        loadMore: fetchNextPage,
      }}
    >
      <NotesView />
    </NotesViewContext.Provider>
  );
}
