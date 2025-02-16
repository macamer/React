import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/pag1"}>Página 1</Link>
                </li>
                <li>
                    <Link to={"/pag2"}>Página 2</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;