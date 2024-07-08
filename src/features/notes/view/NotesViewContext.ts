import { createContext, useContext } from "react";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";

interface NotesViewContextType {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
  onAddNote: () => void;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
  onDeleteNotes: (ids: string[]) => void;
}

const NotesViewContext = createContext<NotesViewContextType>({
  notes: [],
  notesLoading: false,
  onAddNote: () => {},
  onTitleSave: () => {},
  onContentSave: () => {},
  onDeleteNotes: () => {},
});

const useNotesViewContext = () => {
  const context = useContext(NotesViewContext);
  if (context === undefined) {
    throw new Error("useNoteView must be used within a provider");
  }
  return context;
};

export { NotesViewContext, useNotesViewContext };
