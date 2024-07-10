import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";
import { useSnackbar } from "../../../../SnackbarProvider";
import { commonMessages } from "../../../../common/commonMessages";
import { useIntl } from "react-intl";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";

export default function useMutateContent() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const result = useMutation({
    mutationFn: notesService.updateContent,
    onSuccess: (_, variables) => {
      queryClient.setQueriesData<InfiniteData<PaginatedNotesSchema>>(
        ["notes"],
        (current) => ({
          pageParams: current?.pageParams ?? [],
          pages:
            current?.pages.map((x) => ({
              items: x.items.map((xx) =>
                xx.id === variables.id
                  ? { ...xx, content: variables.content }
                  : xx
              ),
              nextCursor: x.nextCursor,
            })) ?? [],
        })
      );
    },
    onError: handleDataAccessError,
    onMutate: () => showSnackbar(f(commonMessages.toasts.updated), "success"),
  });

  return result;
}
