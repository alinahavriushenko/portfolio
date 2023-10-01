import React from "react";
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
        <header>
            <div className="sticky">
            <nav>
  <ul>
    <li><Link to='about' smooth={true}>About</Link></li>
    <li><Link to='projects' smooth={true}>Projects</Link></li>
    <li><Link to='connect' smooth={true}>Contact</Link></li>
  </ul>
</nav>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/alina-havriushenko/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/alinahavriushenko" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
                </div>
        </header>
    )
}