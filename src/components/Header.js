import React from "react";
import { Link } from 'react-scroll'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='about' smooth={true}>About</Link></li>
                    <li><Link to='projects' smooth={true}>Projects</Link></li>
                    <li><Link to='contact' smooth={true}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}