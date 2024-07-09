import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { ZodError } from "zod";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";

export default function useMutateNotesAdd() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: notesService.create,
    onSuccess: (result) => {
      const current = queryClient.getQueryData<
        InfiniteData<PaginatedNotesSchema>
      >(["notes"]);
      queryClient.setQueryData(["notes"], {
        pageParams: current?.pageParams,
        pages: current?.pages.map((x, index) => {
          if (index === 0) {
            return {
              items: [result, ...(x?.items ?? [])],
              nextCursor: x.nextCursor,
            };
          }
          return x;
        }),
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
