import useNotesModel from "../model/useNotesModel";
import NotesView from "../view/NotesView";

export default function NotesManagement() {
  const { notes, notesLoading, updateTitle, updateContent } = useNotesModel();

  //TODO use a provider for the view?

  return (
    <NotesView
      notes={notes}
      notesLoading={notesLoading}
      onTitleSave={(id, title) => updateTitle({ id, title })}
      onContentSave={(id, content) => updateContent({ id, content })}
    />
  );
}
