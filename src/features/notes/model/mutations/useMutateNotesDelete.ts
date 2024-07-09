import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";

export default function useMutateNotesDelete() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();

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
    onError: handleDataAccessError,
  });

  return result;
}
