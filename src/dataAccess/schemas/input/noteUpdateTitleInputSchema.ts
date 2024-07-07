import { z } from "zod";

export const noteUpdateTitleInputSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type NoteUpdateTitleInputSchema = z.infer<
  typeof noteUpdateTitleInputSchema
>;
