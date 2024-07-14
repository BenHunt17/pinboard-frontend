import axios from "axios";
import { noteSchema } from "../schemas/output/noteSchema";
import { NoteUpdateTitleInputSchema } from "../schemas/input/noteUpdateTitleInputSchema";
import { NoteUpdateContentInputSchema } from "../schemas/input/noteUpdateContentInputSchema";
import { NoteCreateInputSchema } from "../schemas/input/noteCreateInputSchema";
import { NoteSearchInputSchema } from "../schemas/input/noteSearchInputSchema";
import {
  paginatedNotesSchema,
  PaginatedNotesSchema,
} from "../schemas/output/paginatedNotesSchema";

export const notesService = {
  search,
  create,
  updateTitle,
  updateContent,
  deleteMany,
};

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function search(
  accessToken: string,
  input: NoteSearchInputSchema,
  cursor: string,
  limit: number
) {
  return axios
    .post(
      `${baseUri}/notes/search`,
      { ...input, cursor, limit },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then<PaginatedNotesSchema>((result) => {
      paginatedNotesSchema.parse(result.data);
      return result.data;
    });
}

function create(accessToken: string, input: NoteCreateInputSchema) {
  return axios
    .post(`${baseUri}/notes`, input, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((result) => noteSchema.parse(result.data));
}

function updateTitle(accessToken: string, input: NoteUpdateTitleInputSchema) {
  return axios.patch(
    `${baseUri}/notes/${input.id}/title`,
    JSON.stringify(input.title),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

function updateContent(
  accessToken: string,
  input: NoteUpdateContentInputSchema
) {
  return axios.patch(
    `${baseUri}/notes/${input.id}/content`,
    JSON.stringify(input.content),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

function deleteMany(accessToken: string, input: string[]) {
  return axios.delete(`${baseUri}/notes`, {
    data: input,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
