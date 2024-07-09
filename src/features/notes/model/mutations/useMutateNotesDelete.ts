import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";

export default function useMutateNotesDelete() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: notesService.deleteMany,
    onSuccess: (_, variables) => {
      const current = queryClient.getQueryData<
        InfiniteData<PaginatedNotesSchema>
      >(["notes"]);
      queryClient.setQueryData(["notes"], {
        pageParams: current?.pageParams,
        pages: current?.pages.map((x, index) => ({
          items: x.items.filter((xx) => !variables.includes(xx.id)),
          nextCursor: x.nextCursor,
        })),
      });
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
