import React from "react";
import Skills from "./Skills";

export default function About() {
    return (
        <div className="about">
            <div className="about--text">
                <h1>Hi!</h1>
                <h2>Welcome</h2>
            </div>
            <img className="about--image"/>
            <Skills />
        </div>
    )
}