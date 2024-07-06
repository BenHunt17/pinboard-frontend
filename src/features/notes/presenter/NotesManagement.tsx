import useNotesModel from "../model/useNotesModel";
import NotesView from "../view/NotesView";

export default function NotesManagement() {
  const { notes, notesLoading } = useNotesModel();

  return <NotesView notes={notes} notesLoading={notesLoading} />;
}
