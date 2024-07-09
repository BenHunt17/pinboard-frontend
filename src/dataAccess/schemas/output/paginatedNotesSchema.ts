import { z } from "zod";
import { noteSchema } from "./noteSchema";

export const paginatedNotesSchema = z.object({
  items: z.array(noteSchema),
  nextCursor: z.string().nullable(),
});

export type PaginatedNotesSchema = z.infer<typeof paginatedNotesSchema>;
