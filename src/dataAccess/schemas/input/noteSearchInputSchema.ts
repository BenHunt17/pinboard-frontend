import { z } from "zod";

export const noteSearchInputSchema = z.object({
  searchTerm: z.string(),
});

export type NoteSearchInputSchema = z.infer<typeof noteSearchInputSchema>;
