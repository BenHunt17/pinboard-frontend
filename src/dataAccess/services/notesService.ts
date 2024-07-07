import { useQuery } from "react-query";
import axios from "axios";
import { NoteSchema, noteSchema } from "../schemas/output/noteSchema";
import { z, ZodError } from "zod";

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function useGetNotes() {
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      axios.get(`${baseUri}/notes`).then<NoteSchema[]>((result) => {
        z.array(noteSchema).parse(result.data);
        return result.data;
      }),
    onError: (e) => {
      //TODo abstract?
      if (e instanceof ZodError) {
        //Toast error
      } else if (e instanceof Error) {
        //Toast stringified error
      } else {
        //Toast stringified error
      }
    },
  });

  return result;
}

export const notesService = { useGetNotes };
