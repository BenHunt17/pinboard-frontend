import axios from "axios";
import { NoteSchema, noteSchema } from "../schemas/output/noteSchema";
import { z } from "zod";
import { NoteUpdateTitleInputSchema } from "../schemas/input/noteUpdateTitleInputSchema";
import { NoteUpdateContentInputSchema } from "../schemas/input/noteUpdateContentInputSchema";
import { NoteCreateInputSchema } from "../schemas/input/noteCreateInputSchema";
import { NoteSearchInputSchema } from "../schemas/input/noteSearchInputSchema";

export const notesService = {
  search,
  create,
  updateTitle,
  updateContent,
  deleteMany,
};

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function search(input: NoteSearchInputSchema) {
  return axios
    .post(`${baseUri}/notes/search`, input)
    .then<NoteSchema[]>((result) => {
      z.array(noteSchema).parse(result.data);
      return result.data;
    });
}

function create(input: NoteCreateInputSchema) {
  return axios
    .post(`${baseUri}/notes`, input, {
      headers: { "Content-Type": "application/json" },
    })
    .then((result) => noteSchema.parse(result.data));
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

function deleteMany(input: string[]) {
  return axios.delete(`${baseUri}/notes`, {
    data: input,
    headers: { "Content-Type": "application/json" },
  });
}
