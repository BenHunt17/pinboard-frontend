import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";
import { useIntl } from "react-intl";
import { useSnackbar } from "../../../../SnackbarProvider";
import { commonMessages } from "../../../../common/commonMessages";
import { NoteCreateInputSchema } from "../../../../dataAccess/schemas/input/noteCreateInputSchema";
import useAccessToken from "../../../../common/hooks/useAccessToken";

export default function useMutateNotesAdd() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const getAccessToken = useAccessToken();

  const result = useMutation({
    mutationFn: async (input: NoteCreateInputSchema) => {
      const accessToken = await getAccessToken();
      return notesService.create(accessToken, input);
    },
    onSuccess: (result) => {
      queryClient.setQueriesData<InfiniteData<PaginatedNotesSchema>>(
        ["notes"],
        (current) => ({
          pageParams: current?.pageParams ?? [],
          pages:
            current?.pages.map((x, index) => {
              if (index === 0) {
                return {
                  items: [result, ...(x?.items ?? [])],
                  nextCursor: x.nextCursor,
                };
              }
              return x;
            }) ?? [],
        })
      );
    },
    onError: handleDataAccessError,
    onMutate: () => showSnackbar(f(commonMessages.toasts.added), "success"),
  });

  return result;
}
