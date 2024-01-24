import { useEffect, useState } from 'react'
import { getAllCharacters } from '../../requests/requests'
import type { Character } from '../../requests/schemas'
import CharacterGallery from './CharacterGallery'


export default function AllCharactersPage() {

    const [characters, setCharacters] = useState<Character[]>();

    useEffect(() => {
        (async () => {
            setCharacters(await getAllCharacters());
        })()
    }, []);

    if (!characters) {
        return <>loading...</>
    }

    return (<>
        <h1>All Rick and Morty Characters</h1>
        <CharacterGallery characters={characters} />
    </>)
}