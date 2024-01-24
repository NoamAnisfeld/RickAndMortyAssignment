import { Character } from "../../requests/schemas"
import CharacterCard from "./CharacterCard"
import './CharacterGallery.css'


interface CharacterGalleryProps {
    characters: Character[],
}

export default function CharacterGallery({
    characters,
}: CharacterGalleryProps) {

    return (
        <div className="characters">
            {characters.map(character =>
                <CharacterCard
                    key={character.id}
                    {...character}
                />
            )}
        </div>
    );
}