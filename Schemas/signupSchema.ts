import {z} from 'zod'
export const userNameValidation = z
       .string()
       .min(2,"Username must be atleat 2 characters")
       .max(20,"Username must be more than 2 characters")
       .regex(/^[a-zA-Z0-9_]+$/,"Username must contain only letters, numbers and underscores")

export const signupSchema = z.object({
        username: userNameValidation,
        email: z.email({ message: "Invalid email address" }),
        password: z.string().min(8,"Password must be atleast 8 characters"),
       })
