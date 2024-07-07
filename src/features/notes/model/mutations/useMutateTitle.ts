import { useMutation, useQueryClient } from "react-query";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";

export default function useMutateTitle() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: notesService.updateTitle,
    onSuccess: (_, variables) => {
      const current: NoteSchema[] | undefined = queryClient.getQueryData([
        "notes",
      ]);
      queryClient.setQueryData(
        ["notes"],
        current?.map((x) =>
          x.id === variables.id ? { ...x, title: variables.title } : x
        )
      );
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
