import { Link } from "react-router-dom"


export default function MainPage() {

    return (
        <>
            <Link to="episodes">Episodes</Link>
            {' '}
            <Link to="characters">Characters</Link>
        </>
    );
}