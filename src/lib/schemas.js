import { z } from 'zod'

export const registerUserSchema = z.object({
    email: z
        .string({required_error: "Email is required"}).email()
        .email({ message: 'Email must be a valid email' }),
    password: z
        .string({required_error: "Password is required"})
        .min(2,{ message: 'Password must be at least 2 characters' })
  })
 