import { useState } from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/Experiences.css';

function Experiences() {

  const [hideTimeline, setHideTimeline] = useState(false);

  function changeTimeline() {
    if (hideTimeline){ 
      setHideTimeline(false);
    } else {
      setHideTimeline(true);
    }
  }

    return (
      <div class='experiences-outer' id='experiences'>
        <p class='experiences-title' onClick={changeTimeline}>Experiences</p>
        {/*<div class={hideTimeline ? `` : `experiences-none`}>*/}
        <div>
        <VerticalTimeline
          lineColor='black'
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Up To Date"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px black solid', boxShadow: 'none' }}
            contentArrowStyle={{ display: 'none'}}
            contentStyle={{ border: 'black 3px solid'}}
            /*icon={<WorkIcon />}*/
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Portfolio Website</h2>
            <h4 className="vertical-timeline-element-subtitle">Front-End Developer</h4>
            <p>
              insert info
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep, 2023 - Current"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px black solid', boxShadow: 'none' }}
            contentArrowStyle={{ display: 'none'}}
            contentStyle={{ border: 'black 3px solid'}}
            /*icon={<WorkIcon />}*/
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">RCOS At RPI</h2>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
            <p>
              https://github.com/Stanagley/Study-Session-Connect
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className={`vertical-timeline-element--education ` + (hideTimeline ? `experiences-none` : ``)}
            date="Jan, 2023 - Current"
            iconStyle={{ background: '#ff964f', color: '#fff', boxShadow: 'none', border: '3px black solid' }}
            contentArrowStyle={{ display: 'none'}}
            contentStyle={{ border: 'black 3px solid'}}
            /*icon={<SchoolIcon />}*/
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Chi Phi</h2>
            <h4 className="vertical-timeline-element-subtitle">President</h4>
            <h4 className="vertical-timeline-element-subtitle">Troy, NY</h4>
            <ul>
            <li>Played a vital role in recovering and improving Chapter operations coming off a probation</li>
<li>Manage all 21 officers in charge of all Chi Phi operations</li>
<li>Represent Chi Phi locally within RPI’s Interfraternity Council and nationally for our National</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            /*contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/
            date="May, 2023 - Aug, 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px black solid', boxShadow: 'none' }}
            /*icon={<WorkIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Google</h2>
            <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
            <h4 className="vertical-timeline-element-subtitle">Waterloo, ON, Canada</h4>
            <ul>
              <li>Modernized C++ code by deprecating the use of a god object and instead using a recorder pattern for
audit logging to clean up the developer workflow</li>
              <li>Refactored unit tests and integration tests increasing coverage for new and old code</li>
              <li>Wrote multiple documents describing design decisions, live launch changes, and next steps</li>
              <li>Utilized Google’s internal tools to make, upload, and review code changes</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep, 2022 - Dec, 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px black solid', boxShadow: 'none' }}
            /*icon={<WorkIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Data Structures Mentor At RPI</h2>
            <h4 className="vertical-timeline-element-subtitle">Mentor</h4>
            <p>
              insert info
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May, 2022 - Aug, 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '3px black solid', boxShadow: 'none' }}
            /*icon={<WorkIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Google</h2>
            <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
            <h4 className="vertical-timeline-element-subtitle">Boulder, CO</h4>
            <ul>
              <li>Launched a DevTool to demystify the ChromeOS package manager and streamline accessing metadata</li>
              <li>Created Python scripts to crawl through and gather metadata from ChromeOS source code</li>
<li>Built infrastructure to run these scripts on an interval and upload gathered data into Google Storage</li>
<li>Updated documentation to allow anybody on ChromeOS to setup similar infrastructure for their projects</li>
<li>Made a Project Requirements Doc, Entity Relationships Diagram, and Design Doc</li>
<li>Learned the ChromeOS developer workflow including writing clean code, writing tests, and using Gerrit</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className={`vertical-timeline-element--education ` + (hideTimeline ? `experiences-none` : ``)}
            date="2022"
            iconStyle={{ background: '#ff964f', color: '#fff', boxShadow: 'none', border: '3px black solid' }}
            /*icon={<SchoolIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Chi Phi</h2>
            <h4 className="vertical-timeline-element-subtitle">House Manager</h4>
            <h4 className="vertical-timeline-element-subtitle">Troy, NY</h4>
            <p>
              insert info
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct, 2021 - May 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: 'none', border: '3px black solid' }}
            /*icon={<WorkIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Mission: Mentor (Acq.)</h2>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Developer Team Lead</h4>
            <ul>
            <li>Full stack feature development allowing users to match with scholarships and learn with modules improving their chances of getting into their dream college</li>
<li>Worked with ReactJS, Java Spring Boot, and AWS services, such as Cognito, Amplify, and EC2</li>
<li>Led a team of developers to iterate quickly on new designs</li>
<li>Inter-team and intra-team communication through Slack, Figma, Jira, and Git</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May, 2021 - Aug, 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: 'none', border: '3px black solid' }}
            /*icon={<WorkIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">Research At RPI</h2>
            <h4 className="vertical-timeline-element-subtitle">Front-End Developer</h4>
            <ul>
              <li> Developed a functional website for teaching the Monty Hall problem</li>
<li>Coded in HTML, CSS, and JS in the Laravel framework and communicated with a MySQL database</li>
<li>Effectively collaborated and connected with a team of students</li>
<li>Designed the style of the website which the team adopted</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="May, 2021 - Aug, 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: 'none', border: '3px black solid' }}
            /*icon={<SchoolIcon />}*/
            contentArrowStyle={{ display: 'none' }}
            contentStyle={{ border: 'black 3px solid'}}
            dateClassName='date'
            position='right'
          >
            <h2 className="vertical-timeline-element-title">theCoderSchool</h2>
            <h4 className="vertical-timeline-element-subtitle">Code Coach</h4>
            <h4 className="vertical-timeline-element-subtitle">Commack, NY</h4>
            <ul>
              <li>Educated more than 20 students in coding languages such as Python, Java, and Scratch</li>
<li>Demonstrated competence working in a team environment</li>
<li>Connected with a diverse teaching staff to effectively coordinate working with the students</li>
<li>Demonstrated great patience working with young students and adapting to different situations</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    );
}

export default Experiences;