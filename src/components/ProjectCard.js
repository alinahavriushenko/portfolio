import React from "react";

export default function ProjectCard(props) {
    return (
            <div className="project--card">
                <div className="project--text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                </div>
                <a href={props.demo} target="_blank" rel="noopener noreferrer" className="button">Demo</a>
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="button--second">GitHub</a>
                </div>
    )
}