import { z } from "zod";
import useFetch from "../../common/hooks/useFetch";
import { noteSchema } from "../schemas/output/noteSchema";

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function useGetNotes() {
  const result = useFetch(`${baseUri}/notes`, z.array(noteSchema));

  return result;
}

export const notesService = { useGetNotes };
