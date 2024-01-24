import axios from "axios"
import {
    type Episode,
    episodeSchema,
    allEpisodesSchema,
    type Character,
    characterSchema,
    allCharactersSchema,
} from "./schemas"

const API_URL = import.meta.env.VITE_API_URL

if (!API_URL || typeof API_URL !== 'string') {
    throw Error('API URL is missing');
}

const API_ENDPOINTS = Object.freeze({
    characters: 'character',
    locations: 'location',
    episodes: 'episode',
});


export async function getEpisodes(): Promise<Episode[]> {

    const url = (new URL(API_ENDPOINTS.episodes, API_URL)).href;
    const { data } = await axios.get(url);
    const validatedData = allEpisodesSchema.parse(data);
    return validatedData.results;
}


export async function getEpisodeInfo(EpisodeId: number): Promise<Episode> {

    const url = (new URL(
        String(EpisodeId),
        new URL(API_ENDPOINTS.episodes, API_URL).href + '/'
    )).href;

    const { data } = await axios.get(url);
    const validatedData = episodeSchema.parse(data);
    return validatedData;
}

export async function getCharacters(): Promise<Character[]> {

    const url = (new URL(API_ENDPOINTS.characters, API_URL)).href;
    const { data } = await axios.get(url);
    const validatedData = allCharactersSchema.parse(data);
    return validatedData.results;
}


export async function getCharacterInfo(CharacterId: number): Promise<Character> {

    const url = (new URL(
        String(CharacterId),
        new URL(API_ENDPOINTS.characters, API_URL).href + '/'
    )).href;

    const { data } = await axios.get(url);
    const validatedData = characterSchema.parse(data);
    return validatedData;
}