import { useMutation, useQueryClient } from "react-query";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";
import { notesService } from "../../../../dataAccess/services/notesService";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";

export default function useMutateTitle() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();

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
    onError: handleDataAccessError,
  });

  return result;
}
