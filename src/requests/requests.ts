import axios from "axios"
import {
    type Episode,
    episodeSchema,
    allEpisodesSchema,
    type Character,
    characterSchema,
    allCharactersSchema,
} from "./schemas"


const API_URL = 'https://rickandmortyapi.com/api/';

if (!API_URL || typeof API_URL !== 'string') {
    throw Error('API URL is missing');
}

const API_ENDPOINTS = Object.freeze({
    characters: 'character',
    locations: 'location',
    episodes: 'episode',
});


export async function getAllEpisodes(): Promise<Episode[]> {

    let results: Episode[] = [];
    let url: string | null = (new URL(API_ENDPOINTS.episodes, API_URL)).href;

    while (url) {
        const { data } = await axios.get(url);
        const validatedData = allEpisodesSchema.parse(data);
        results = results.concat(validatedData.results);
        url = validatedData.info.next;
    }

    return results;
}


export async function getMultipleEpisodes(episodeIds: number[]): Promise<Episode[]> {

    if (!episodeIds.length) {
        return [];
    }

    if (episodeIds.length === 1) {
        return [await getEpisodeInfo(episodeIds[0])];
    }

    const url = (new URL(
        episodeIds.join(','),
        new URL(API_ENDPOINTS.episodes, API_URL) + '/'
    )).href;
    const { data } = await axios.get(url);
    const validatedData = episodeSchema.array().parse(data);
    return validatedData;
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


export async function getAllCharacters(): Promise<Character[]> {

    let results: Character[] = [];
    let url: string | null = (new URL(API_ENDPOINTS.characters, API_URL)).href;

    while (url) {
        const { data } = await axios.get(url);
        const validatedData = allCharactersSchema.parse(data);
        results = results.concat(validatedData.results);
        url = validatedData.info.next;
    }

    return results;
}


export async function getMultipleCharacters(characterIds: number[]): Promise<Character[]> {

    if (!characterIds.length) {
        return [];
    }

    if (characterIds.length === 1) {
        return [await getCharacterInfo(characterIds[0])];
    }

    const url = (new URL(
        characterIds.join(','),
        new URL(API_ENDPOINTS.characters, API_URL) + '/'
    )).href;
    const { data } = await axios.get(url);
    const validatedData = characterSchema.array().parse(data);
    return validatedData;
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