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
    url: z.string().url(),
    created: z.string().datetime(),
});
export type Character = z.infer<typeof characterSchema>

export const allCharactersSchema = z.object({
    results: z.array(characterSchema),
})
export type AllCharacters = z.infer<typeof allCharactersSchema>


export const episodeSchema = z.object({
    id: z.number(),
    name: z.string(),
    air_date: z.string(),
    episode: z.string(),
    characters: z.array(z.string().url()),
    url: z.string().url(),
    created: z.string().datetime(),
});
export type Episode = z.infer<typeof episodeSchema>

export const allEpisodesSchema = z.object({
    info: z.object({
        next: z.string().url().nullable(),
    }),
    results: z.array(episodeSchema),
})
export type AllEpisodes = z.infer<typeof allEpisodesSchema>