import { useAppSelector } from "../global-state/store"
import CharacterGallery from "./characters/CharacterGallery"
import { Link } from "react-router-dom"

export default function FavoritesPage() {

    const favoriteCharacters = useAppSelector(state => state.favoriteCharacters);

    return (<>
        <h1>Your Favorite Characters</h1>
        {favoriteCharacters.length
            ? <CharacterGallery characterIds={favoriteCharacters} />
            : <p>
                You haven't marked any favorite characters yet.
                <br />
                Go choose them on the <Link to="/characters" className="text-link">characters</Link> page!
            </p>
        }
    </>);
}