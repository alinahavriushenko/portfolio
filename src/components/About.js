import React from "react";
import Skills from "./Skills";


export default function About() {
    return (
        <>
        <div className="about">
            <img id="about--image" src="images/unnamed.jpg"/>
            <div className="about--text">
                <div className="typewriter">
                <h3>👋 Привіт (Hi)!</h3>
                </div>
                <h1>I'm Alina, a web developer with Ukrainian roots, based in France</h1>
                <p>Having a background in translation, I've taken a leap into the world of programming languages 💻</p>
                <p>I started as a self-learner and have recently gained my Meta Front-End Development professional certificate on Coursera. Now I'm enrolled in a WordPress development training on OpenClassrooms, actively refining my skills.</p>
            </div>
        </div>
            <Skills />

        </>
    )
}