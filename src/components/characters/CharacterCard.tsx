import { Link } from "react-router-dom"
import type { Character } from "../../requests/schemas"
import './CharacterCard.css'


export default function CharacterCard({
    name,
    image,
    id,
}: Character) {

    return (
        <Link to={`/characters/${id}`}>
            <div
                className="character-card"
                style={{ '--image': `url(${image})` } as React.CSSProperties}
            >
                <span className="character-title">
                    {name}
                </span>
            </div>
        </Link>
    );
}