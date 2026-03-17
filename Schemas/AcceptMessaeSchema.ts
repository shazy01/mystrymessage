import {boolean, z} from 'zod'
export const AccpetMessageSchema=z.object({
    acceptMessage: boolean(),
})