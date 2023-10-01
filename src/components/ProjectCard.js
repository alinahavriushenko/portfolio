import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faReact, faPhp, faWordpressSimple, faSquareJs } from '@fortawesome/free-brands-svg-icons';
const iconMap = {faHtml5, faCss3Alt, faSass, faReact, faPhp, faWordpressSimple, faSquareJs}

export default function ProjectCard(props) {

    const tool1Icon = iconMap[props.tool1];
    const tool2Icon = iconMap[props.tool2];
    const tool3Icon = iconMap[props.tool3];


    return (
        <div>
            <div className="project--card">
                <div className="project--text">
                <div className="project--title">
                <h3>{props.title}</h3>
                <div className="project--buttons">
                <a href={props.demo} target="_blank" rel="noopener noreferrer" className="button">Demo</a>
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="button--second">GitHub</a>
                </div>
                </div>
                <div className="project--tools">
                    <FontAwesomeIcon icon={tool1Icon} className="tools--icon"/>
                    <FontAwesomeIcon icon={tool2Icon} className="tools--icon"/>
                    <FontAwesomeIcon icon={tool3Icon} className="tools--icon"/>
                </div>
                <p>{props.description}</p>
                </div>
                <img src={`images/${props.img}`} className="project--screenshot" alt="{props.title}"/>
            </div>
            </div>
    )
}
