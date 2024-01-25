import { Link } from "react-router-dom"
import type { Character } from "../../requests/schemas"
import { useAppSelector, useAppDispatch } from "../../global-state/store"
import { toggleFavoriteCharacter } from "../../global-state/favoriteCharacters"
import MarkFavoriteButton from "../MarkFavoriteButton"
import './CharacterCard.css'
import { useDispatch } from "react-redux"


export default function CharacterCard({
    name,
    image,
    id,
}: Character) {

    const isFavorite = useAppSelector(state => state.favoriteCharacters).includes(id);
    const dispatch = useDispatch();

    return (
        <Link to={`/characters/${id}`}>
            <div
                className="character-card"
                style={{ '--image': `url(${image})` } as React.CSSProperties}
            >
                <span className="character-title">
                    {name}
                </span>
                <div className="favorite-button-wrapper">
                    <MarkFavoriteButton
                        isFavorite={isFavorite}
                        onClick={() => dispatch(toggleFavoriteCharacter(id))}
                    />
                </div>
            </div>
        </Link>
    );
}