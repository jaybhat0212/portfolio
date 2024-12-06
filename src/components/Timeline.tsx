import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import Chip from "@mui/material/Chip";

import ericssonLogo from '../assets/images/ericsson-logo.png';  // Replace with actual path to logos
import arcticWolfLogo from '../assets/images/arctic-wolf-logo.png';
import grantmatchLogo from '../assets/images/grantmatch-logo.png';
import penserLogo from '../assets/images/penser-logo.png';
import uwLogo from '../assets/images/uw-logo.png';

function Timeline() {
  const labelsCoOp = ['React', 'Django', 'Docker', 'Jenkins', 'CI/CD',];
  const labelsIntern1 = ['React', 'Golang', 'Grafana', 'Web Workers', 'GitHub  Workflow',];
  const labelsIntern2 = ['React', 'Golang', 'Prometheus', 'Node.js',];
  const labelsJuniorDev = ['Django', 'Celery', 'React', 'MongoDB'];
  const labelsPenser = ['AWS Lambda', 'Python', 'S3', 'DynamoDB', 'ETL'];
  const labelsResearch = ['Python', 'PyTorch', 'Pandas',];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan 2024 – Apr 2024"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={ericssonLogo} alt="Ericsson" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Co-Op</h3>
            <h4 className="vertical-timeline-element-subtitle">Ericsson - Ottawa, ON</h4>
            <div className="flex-chips">
              {labelsCoOp.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2023 – Aug 2023"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={arcticWolfLogo} alt="Arctic Wolf Networks" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Arctic Wolf Networks - Waterloo, ON</h4>
            <div className="flex-chips">
              {labelsIntern1.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sept 2022 – Dec 2022"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={arcticWolfLogo} alt="Arctic Wolf Networks" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Arctic Wolf Networks - Waterloo, ON</h4>
            <div className="flex-chips">
              {labelsIntern2.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan 2022 – Apr 2022"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={grantmatchLogo} alt="GrantMatch" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Full-Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">GrantMatch - Oakville, ON</h4>
            <div className="flex-chips">
              {labelsJuniorDev.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2021 – Aug 2021"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={penserLogo} alt="Penser.io" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Penser.io - Cambridge, MA</h4>
            <div className="flex-chips">
              {labelsPenser.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2021 – Aug 2021"
            iconStyle={{ background: "none", boxShadow: "none" }}
            icon={<img src={uwLogo} alt="University of Waterloo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Student Research Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Waterloo - Waterloo, ON</h4>
            <div className="flex-chips">
              {labelsResearch.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
