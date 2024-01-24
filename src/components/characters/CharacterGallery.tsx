import { useState, useEffect } from "react"
import type { Character } from "../../requests/schemas"
import { getMultipleCharacters } from "../../requests/requests"
import CharacterCard from "./CharacterCard"
import './CharacterGallery.css'


interface CharacterGalleryProps {
    characters?: Character[],
    characterIds?: number[],
}

export default function CharacterGallery({
    characters,
    characterIds,
}: CharacterGalleryProps) {

    if (!characters?.length && !characterIds?.length) {
        return undefined;
    }

    const [charactersData, setCharactersData] = useState<Character[]>(
        characters || []
    );

    useEffect(() => {
        if (characters || !characterIds) {
            return;
        }

        getMultipleCharacters(characterIds).then(setCharactersData);
    }, [characterIds]);

    if (!charactersData) {
        return 'loading...';
    }

    return (
        <div className="characters">
            {charactersData.map(character =>
                <CharacterCard
                    key={character.id}
                    {...character}
                />
            )}
        </div>
    );
}