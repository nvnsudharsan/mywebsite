import React from 'react';
import './Section.css';

const updates = [
  {
    title: 'Attending Cesium Developer Conference at Philadelphia',
    date: 'June 23 - 25, 2025',
    link: 'https://cesium.com/events/cesium-developer-conference/'
  },
  {
    title: 'Resource Person for 3-day tutorial-cum-workshop on "Applications of AI/ML and km-scale Physical Models" by Atria University',
    date: 'June 5 - 7, 2025',
    link: 'https://www.linkedin.com/posts/madhavan-nair-rajeevan-38822526_tutorial-and-workshop-on-artificial-intelligence-activity-7314676934548852736-M8h_?utm_source=share&utm_medium=member_desktop&rcm=ACoAABR4ETcBIo86GV6B3vRJM_ahK6h2WgzFSKU'
  },
  {
    title: 'Attending S2S Community Workshop: Toward Minimizing Early Model Biases and Errors in S2S Predictions by NOAA',
    date: 'June 5 - 7, 2025',
    link: 'https://wpo.noaa.gov/s2s-community-workshop/'
  },
  {
    title: 'Presenting our work on Cool Pavement at Capital Area Section of the Institute of Transportation Engineers',
    date: 'May 23, 2025',
    link: 'https://www.casite.org/upcoming-events/may-meeting'
  }
];

function Updates() {
  return (
    <section className="section">
      <h2 style={{ fontSize: '2.5rem' }}>Updates</h2>
      <div className="updates-container">
        {updates.map((update, index) => (
          <a
            key={index}
            href={update.link}
            target="_blank"
            rel="noopener noreferrer"
            className="update-tile"
          >
            <div className="update-title">{update.title}</div>
            <div className="update-date">{update.date}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Updates;