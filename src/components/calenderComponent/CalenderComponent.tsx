import React from 'react';
import './CalenderComponent.scss';

const CalenderComponent = () => {
  return (
    <div className="calender-frame">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FLos_Angeles&amp;src=bDZoN3R2dXZnZjY4dDQ5bWV0MDN2dDhwNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23009688&amp;color=%230B8043&amp;mode=WEEK" width="100%" height="100%" scrolling="no"></iframe>
    </div>
  );
};

export default CalenderComponent;