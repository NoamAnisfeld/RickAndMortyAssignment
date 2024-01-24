import { useEffect, useState } from 'react'
import { getCharacters } from '../../requests/requests'
import type { Character } from '../../requests/schemas'
import CharacterCard from './CharacterCard'
import './AllCharactersPage.css'


export default function AllCharactersPage() {

    const [characters, setCharacters] = useState<Character[]>();

    useEffect(() => {
        (async () => {
            setCharacters(await getCharacters());
        })()
    }, []);

    if (!characters) {
        return <>loading...</>
    }

    return (<>
        <h1>Characters</h1>
        <div className="characters">
            {characters.map(character =>
                <CharacterCard
                    key={character.id}
                    {...character}
                />
            )}
        </div>
    </>)
}