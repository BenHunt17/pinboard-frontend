import { useMutation, useQueryClient } from "react-query";
import { NoteSchema } from "../../../../dataAccess/schemas/output/noteSchema";
import { notesService } from "../../../../dataAccess/services/notesService";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";

export default function useMutateContent() {
  const queryClient = useQueryClient();
  const handleDataAccessError = useHandleDataAccessError();

  const result = useMutation({
    mutationFn: notesService.updateContent,
    onSuccess: (_, variables) => {
      const current: NoteSchema[] | undefined = queryClient.getQueryData([
        "notes",
      ]);
      queryClient.setQueryData(
        ["notes"],
        current?.map((x) =>
          x.id === variables.id ? { ...x, content: variables.content } : x
        )
      );
    },
    onError: handleDataAccessError,
  });

  return result;
}
