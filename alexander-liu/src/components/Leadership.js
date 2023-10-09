import { useState } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './css/Leadership.css';

function Leadership() {

    const [showLeadership, setShowLeadership] = useState(false);

    function updateLeadership() {
        if (showLeadership) {
            setShowLeadership(false);
        } else {
            setShowLeadership(true);
        }
    }

    return (
        <div id='leadership'>
            <p class='leadership-title' onClick={updateLeadership}>Leadership</p>
            <div class={showLeadership ? `` : `leadership-none`}>
            <VerticalTimeline lineColor='black' >
          
          
            </VerticalTimeline>
            </div>
        </div>
    );
}

export default Leadership;