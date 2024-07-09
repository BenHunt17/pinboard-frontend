import { useInfiniteQuery } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";
import { NoteSearchInputSchema } from "../../../../dataAccess/schemas/input/noteSearchInputSchema";

export default function useQueryNotes(input: NoteSearchInputSchema) {
  const result = useInfiniteQuery({
    queryKey: ["notes"],
    queryFn: ({ pageParam }) => notesService.search(input, pageParam, 15),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
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
    refetchOnWindowFocus: false,
  });

  return result;
}
