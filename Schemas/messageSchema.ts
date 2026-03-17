import {z} from 'zod'
export const messageSchema=z.object({
    content: z.string()
    .min(10,{message: "content must be of 10 charachters"})
    .max(300,{message : "Content Must be at least no longer than 300 charachters"}),
})