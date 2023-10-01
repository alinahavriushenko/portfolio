import React from "react";
import Skills from "./Skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function About() {
    return (
        <>
        <div className="about">
            <img id="about--image" src="images/Alina-Havriushenko.jpg" alt="Alina Havriushenko Web Developper"/>
            <div className="about--text">
                <div className="typewriter">
                <h3>👋 Привіт (Hi)!</h3>
                </div>
                <h1>I'm Alina, a web developer with Ukrainian roots, based in France</h1>
                <p>Having a background in translation, I've taken a leap into the world of programming languages 💻</p>
                <p>I started as a self-learner and have recently gained my Meta Front-End Development professional certificate on Coursera. Now I'm enrolled in a WordPress development training on OpenClassrooms, actively refining my skills.</p>
                <p>If you'd like to connect or discuss a potential project, don't hesitate to reach out to me on <a href="https://www.linkedin.com/in/alina-havriushenko/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn!</a></p>
            </div>
        </div>
            <Skills />

        </>
    )
}
