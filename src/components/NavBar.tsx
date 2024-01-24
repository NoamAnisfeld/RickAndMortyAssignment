import { NavLink } from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {

    return (
        <header className="navbar">
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/characters">Characters</NavLink>
        </header>
    );
}