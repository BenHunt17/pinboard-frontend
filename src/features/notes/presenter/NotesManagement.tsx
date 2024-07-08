import useNotesModel from "../model/useNotesModel";
import NotesView from "../view/NotesView";
import { NotesViewContext } from "../view/NotesViewContext";

export default function NotesManagement() {
  const {
    notes,
    notesLoading,
    onSearchTextChange,
    addNote,
    updateTitle,
    updateContent,
    deleteNotes,
  } = useNotesModel();

  return (
    <NotesViewContext.Provider
      value={{
        notes,
        notesLoading,
        onSearchTextChange,
        onAddNote: addNote,
        onTitleSave: (id, title) => updateTitle({ id, title }),
        onContentSave: (id, content) => updateContent({ id, content }),
        onDeleteNotes: deleteNotes,
      }}
    >
      <NotesView />
    </NotesViewContext.Provider>
  );
}
