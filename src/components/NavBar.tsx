import { NavLink } from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {

    return (
        <header className="navbar">
            <NavLink to="/episodes" end>Episodes</NavLink>
            <NavLink to="/characters" end>Characters</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </header>
    );
}