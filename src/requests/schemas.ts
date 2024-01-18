import { z } from 'zod'


export const characterSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.enum(["Alive", "Dead", "unknown"]),
    species: z.string(),
    type: z.string(),
    gender: z.enum(["Female", "Male", "Genderless", "unknown"]),
    origin: z.object({
        name: z.string(),
        url: z.string(),
    }),
    location: z.object({
        name: z.string(),
        url: z.string(),
    }),
    image: z.string(),
    episode: z.array(z.string().url()),
    url: z.string(),
    created: z.string(),
});
export type Character = z.infer<typeof characterSchema>

export const allCharactersSchema = z.object({
    results: z.array(characterSchema),
})
export type AllCharacters = z.infer<typeof allCharactersSchema>