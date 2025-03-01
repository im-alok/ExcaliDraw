import z from 'zod';


export const createUserSchema = z.object({
    username:z.string().min(3).max(20),
    name:z.string(),
    password:z.string()
})


export const signInSchema = z.object({
    username:z.string().min(3).max(20),
    password:z.string()
})

export const createRoomSchema = z.object({
    roomName:z.string().min(3).max(20)
})