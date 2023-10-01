import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
    return (
        <div className="contact--container">
        <h2>Let's connect! 👋</h2>
        <p>I'm open to new opportunities. Feel free to reach out on LinkedIn!</p>
        <a href="https://www.linkedin.com/in/alina-havriushenko/" target="_blank" rel="noopener noreferrer" className="button connect">
                    <FontAwesomeIcon icon={faLinkedin} /> Connect with Alina on LinkedIn
                </a>
        </div>
    )
}