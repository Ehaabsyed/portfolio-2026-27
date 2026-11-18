import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email is too long."),
  subject: z.string().trim().min(3, "Add a short subject.").max(160, "Subject must be under 160 characters.").refine((value) => !/[\r\n]/.test(value), "Subject must fit on one line."),
  message: z.string().trim().min(10, "Your message needs at least 10 characters.").max(5000, "Message must be under 5,000 characters."),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
