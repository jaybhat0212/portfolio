import React from "react";
import '../assets/styles/Project.scss';
import tClips from '../assets/images/tClips.png';
import nba from '../assets/images/nbaPredict.png';

function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/your-github/nba-salary-predictor" target="_blank" rel="noreferrer">
                        <img src={nba} className="zoom" alt="NBA Salary Predictor" width="100%" height="400px"/>
                    </a>
                    <a href="https://github.com/your-github/nba-salary-predictor" target="_blank" rel="noreferrer">
                        <h2>NBA Salary Predictor</h2>
                    </a>
                    <p>
                        Developed a multi-regression supervised learning model to predict NBA player salaries, achieving 83% accuracy.
                        <br />
                        <strong>Technologies:</strong> PyTorch, NumPy, Pandas, Matplotlib
                    </p>
                </div>
                
                <div className="project">
                    <a href="https://t-clips.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={tClips} className="zoom" alt="T-Clips" width="100%" height="400px"/>
                    </a>
                    <a href="https://t-clips.netlify.app/" target="_blank" rel="noreferrer">
                        <h2>T-Clips</h2>
                    </a>
                    <p>
                        Developed and deployed a web application to streamline the ability to download Twitch clips based on search parameters.
                        <br />
                        <strong>Technologies:</strong> React, Netlify
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Project;
