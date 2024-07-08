import { useQuery } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";
import { NoteSearchInputSchema } from "../../../../dataAccess/schemas/input/noteSearchInputSchema";

export default function useQueryNotes(input: NoteSearchInputSchema) {
  const result = useQuery({
    queryKey: ["notes", input],
    queryFn: () => notesService.search(input),
    onError: (e) => {
      //TODo abstract?
      if (e instanceof ZodError) {
        //Toast error
      } else if (e instanceof Error) {
        //Toast stringified error
      } else {
        //Toast stringified error
      }
    },
  });

  return result;
}
