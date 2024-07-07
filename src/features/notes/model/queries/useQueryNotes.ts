import { useQuery } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";

export default function useQueryNotes() {
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: notesService.getAll,
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
