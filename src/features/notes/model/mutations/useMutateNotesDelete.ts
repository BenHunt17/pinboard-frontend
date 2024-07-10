import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";
import { useIntl } from "react-intl";
import { useSnackbar } from "../../../../SnackbarProvider";
import { commonMessages } from "../../../../common/commonMessages";
import useAccessToken from "../../../../common/hooks/useAccessToken";

export default function useMutateNotesDelete() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const getAccessToken = useAccessToken();

  const result = useMutation({
    mutationFn: async (ids: string[]) => {
      const accessToken = await getAccessToken();
      return notesService.deleteMany(accessToken, ids);
    },
    onSuccess: (_, variables) => {
      queryClient.setQueriesData<InfiniteData<PaginatedNotesSchema>>(
        ["notes"],
        (current) => ({
          pageParams: current?.pageParams ?? [],
          pages:
            current?.pages.map((x, index) => ({
              items: x.items.filter((xx) => !variables.includes(xx.id)),
              nextCursor: x.nextCursor,
            })) ?? [],
        })
      );
    },
    onError: handleDataAccessError,
    onMutate: () => showSnackbar(f(commonMessages.toasts.deleted), "success"),
  });

  return result;
}
