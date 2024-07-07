import { z } from "zod";

export const noteCreateInputSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type NoteCreateInputSchema = z.infer<typeof noteCreateInputSchema>;
