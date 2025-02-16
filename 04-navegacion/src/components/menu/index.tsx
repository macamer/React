import React from 'react';
import { Link } from 'react-router-dom';
import Navigator from "../navigator";

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
                <li>
                    <Navigator />
                </li>
            </ul>
        </nav>
    )
}

export default Menu;