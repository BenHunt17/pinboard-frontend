import { z } from "zod";

export const noteSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  content: z.string(),
});
