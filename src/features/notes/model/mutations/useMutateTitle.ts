import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";
import { useSnackbar } from "../../../../SnackbarProvider";
import { useIntl } from "react-intl";
import { commonMessages } from "../../../../common/commonMessages";
import { PaginatedNotesSchema } from "../../../../dataAccess/schemas/output/paginatedNotesSchema";
import { NoteUpdateTitleInputSchema } from "../../../../dataAccess/schemas/input/noteUpdateTitleInputSchema";
import useAccessToken from "../../../../common/hooks/useAccessToken";

export default function useMutateTitle() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const getAccessToken = useAccessToken();

  const result = useMutation({
    mutationFn: async (input: NoteUpdateTitleInputSchema) => {
      const accessToken = await getAccessToken();
      return notesService.updateTitle(accessToken, input);
    },
    onSuccess: (_, variables) => {
      queryClient.setQueriesData<InfiniteData<PaginatedNotesSchema>>(
        ["notes"],
        (current) => ({
          pageParams: current?.pageParams ?? [],
          pages:
            current?.pages.map((x) => ({
              items: x.items.map((xx) =>
                xx.id === variables.id ? { ...xx, title: variables.title } : xx
              ),
              nextCursor: x.nextCursor,
            })) ?? [],
        })
      );
      showSnackbar(f(commonMessages.toasts.updated), "success");
    },
    onError: handleDataAccessError,
  });

  return result;
}
