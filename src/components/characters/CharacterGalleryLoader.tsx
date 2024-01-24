import { useEffect, useState } from "react"
import type { Character } from "../../requests/schemas"
import { getMultipleCharacters } from "../../requests/requests";
import CharacterGallery from "./CharacterGallery";


interface CharacterGalleryLoaderProps {
    characterIds: number[],
}

export default function CharacterGalleryLoader({
    characterIds
}: CharacterGalleryLoaderProps) {

    const [charactersData, setCharactersData] = useState<Character[]>();

    useEffect(() => {
        getMultipleCharacters(characterIds).then(setCharactersData);
    }, [characterIds]);

    if (!charactersData) {
        return 'loading...';
    }

    return <CharacterGallery characters={charactersData} />;
}