import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL

if (!API_URL || typeof API_URL !== 'string') {
    throw Error('API URL is missing');
}

const API_ENDPOINTS = Object.freeze({
    characters: 'character',
    locations: 'location',
    episodes: 'episode',
});


export async function getCharacters() {

    const url = (new URL(API_ENDPOINTS.characters, API_URL)).href;

    return axios.get(url);
}