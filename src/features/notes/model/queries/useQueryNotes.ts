import { useInfiniteQuery } from "react-query";
import { notesService } from "../../../../dataAccess/services/notesService";
import { NoteSearchInputSchema } from "../../../../dataAccess/schemas/input/noteSearchInputSchema";
import useHandleDataAccessError from "../../../../dataAccess/common/useHandleDataAccessError";

export default function useQueryNotes(input: NoteSearchInputSchema) {
  const handleDataAccessError = useHandleDataAccessError();

  const result = useInfiniteQuery({
    queryKey: ["notes"],
    queryFn: ({ pageParam }) => notesService.search(input, pageParam, 15),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    onError: handleDataAccessError,
    refetchOnWindowFocus: false,
  });

  return result;
}
