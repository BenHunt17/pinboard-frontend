import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";

export default function useMutateNotesAdd() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();

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
    onError: handleDataAccessError,
  });

  return result;
}
