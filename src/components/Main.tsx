import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profilePic from "../assets/images/profile-pic.png";
import Background from "./Background";

function Main() {
  return (
    <div className="main-section" style={{ position: "relative" }}>
      <Background />
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={profilePic} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/jaybhat0212"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-bhatasana-98a0071a9/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
            <h1>Jay Bhatasana</h1>
            <p>Engineering Student</p>

            <div className="mobile_social_icons">
              <a
                href="https://github.com/jaybhat0212"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-bhatasana-98a0071a9/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
