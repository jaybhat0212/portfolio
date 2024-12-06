import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Waterloo President’s Scholarship",
    "Dean’s Honours List",
    "NSERC Scholarship",
    "Computing Option",
];

function Education() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Education</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>University of Waterloo</h3>
                    <h5>B. Applied Science. Management Engineering</h5>
                    
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Education;