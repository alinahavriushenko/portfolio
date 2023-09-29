import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faReact, faPhp, faWordpressSimple, faSquareJs } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
        <div className="skills--container">
        <div className="skill">
        <FontAwesomeIcon icon={faHtml5} className="skills--icon" />
          <span>HTML5</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faCss3Alt} className="skills--icon"/>
            <span>CSS</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faSass} className="skills--icon"/>
            <span>SCSS</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faSquareJs} className="skills--icon"/>
            <span>JavaScript</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faReact} className="skills--icon"/>
            <span>React</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faWordpressSimple} className="skills--icon"/>
            <span>WordPress</span>
        </div>
        <div className="skill">
        <FontAwesomeIcon icon={faPhp} className="skills--icon"/>
            <span>PHP</span>
        </div>
        </div>
    )
}