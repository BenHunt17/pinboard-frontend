import useNotesModel from "../model/useNotesModel";
import NotesView from "../view/NotesView";

export default function NotesManagement() {
  const {
    notes,
    notesLoading,
    addNote,
    updateTitle,
    updateContent,
    deleteNotes,
  } = useNotesModel();

  //TODO use a provider for the view?

  return (
    <NotesView
      notes={notes}
      notesLoading={notesLoading}
      onAddNote={addNote}
      onTitleSave={(id, title) => updateTitle({ id, title })}
      onContentSave={(id, content) => updateContent({ id, content })}
      onDeleteNotes={deleteNotes}
    />
  );
}
