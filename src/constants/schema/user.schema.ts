import { z } from "zod";

const userSchema = z.object({
    fullName: z
      .string()
      .min(3, 'Full name must be at least 3 characters')
      .max(25, 'Full name must be less than 35 characters'),
    email: z
      .string()
      .email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be less than 20 characters')
      .regex(/\d/, 'Password must contain at least one number'),
})

export type UserSchemaType = z.infer<typeof userSchema>

export default userSchema;