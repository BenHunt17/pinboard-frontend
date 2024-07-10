import { useInfiniteQuery } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { NoteSearchInputSchema } from "../../../../dataAccess/schemas/input/noteSearchInputSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";
import useAccessToken from "../../../../common/hooks/useAccessToken";

export default function useQueryNotes(input: NoteSearchInputSchema) {
  const handleDataAccessError = useHandleDataAccessError();

  const getAccessToken = useAccessToken();

  const result = useInfiniteQuery({
    queryKey: ["notes", input],
    queryFn: async ({ pageParam }) => {
      const accessToken = await getAccessToken();
      return notesService.search(accessToken, input, pageParam, 15);
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    onError: handleDataAccessError,
    refetchOnWindowFocus: false,
  });

  return result;
}
