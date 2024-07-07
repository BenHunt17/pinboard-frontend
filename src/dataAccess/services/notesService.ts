import axios from "axios";
import { NoteSchema, noteSchema } from "../schemas/output/noteSchema";
import { z } from "zod";
import { NoteUpdateTitleInputSchema } from "../schemas/input/noteUpdateTitleInputSchema";
import { NoteUpdateContentInputSchema } from "../schemas/input/noteUpdateContentInputSchema";

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function getAll() {
  return axios.get(`${baseUri}/notes`).then<NoteSchema[]>((result) => {
    z.array(noteSchema).parse(result.data);
    return result.data;
  });
}

function updateTitle(input: NoteUpdateTitleInputSchema) {
  return axios.patch(`${baseUri}/notes/${input.id}/title`, input.title, {
    headers: { "Content-Type": "application/json" },
  });
}

function updateContent(input: NoteUpdateContentInputSchema) {
  return axios.patch(`${baseUri}/notes/${input.id}/content`, input.content, {
    headers: { "Content-Type": "application/json" },
  });
}

export const notesService = { getAll, updateTitle, updateContent };
