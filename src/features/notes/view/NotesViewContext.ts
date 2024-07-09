import { createContext, useContext } from "react";
import { NoteSchema } from "../../../dataAccess/schemas/output/noteSchema";

interface NotesViewContextType {
  notes: NoteSchema[] | undefined;
  notesLoading: boolean;
  canLoadMore: boolean;
  onSearchTextChange: (text: string) => void;
  onAddNote: () => void;
  onTitleSave: (id: string, title: string) => void;
  onContentSave: (id: string, content: string) => void;
  onDeleteNotes: (ids: string[]) => void;
  loadMore: () => void;
}

const NotesViewContext = createContext<NotesViewContextType>({
  notes: [],
  notesLoading: false,
  canLoadMore: false,
  onSearchTextChange: () => {},
  onAddNote: () => {},
  onTitleSave: () => {},
  onContentSave: () => {},
  onDeleteNotes: () => {},
  loadMore: () => {},
});

const useNotesViewContext = () => {
  const context = useContext(NotesViewContext);
  if (context === undefined) {
    throw new Error("useNoteView must be used within a provider");
  }
  return context;
};

export { NotesViewContext, useNotesViewContext };
