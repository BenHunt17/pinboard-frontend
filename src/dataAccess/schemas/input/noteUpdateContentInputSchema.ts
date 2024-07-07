import { z } from "zod";

export const noteUpdateContentInputSchema = z.object({
  id: z.string(),
  content: z.string(),
});

export type NoteUpdateContentInputSchema = z.infer<
  typeof noteUpdateContentInputSchema
>;
