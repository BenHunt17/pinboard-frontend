import { useMutation, useQueryClient } from "react-query";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";

export default function useMutateNotesAdd() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: notesService.create,
    onSuccess: (result) => {
      queryClient.setQueriesData<NoteSchema[]>(["notes"], (data) => [
        result,
        ...(data ?? []),
      ]);
    },
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
