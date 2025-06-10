import React from 'react';
import './Section.css';

const updates = [
  {
    title: 'Attending Cesium Developer Conference in Philadelphia',
    date: 'June 23 - 25, 2025',
    link: 'https://cesium.com/events/cesium-developer-conference/'
  },
  {
    title: 'Attending S2S Community Workshop: Toward Minimizing Early Model Biases and Errors in S2S Predictions by NOAA',
    date: 'June 16 - 18, 2025',
    link: 'https://wpo.noaa.gov/s2s-community-workshop/'
  },
  {
    title: 'Resource Person for 3-day tutorial-cum-workshop on "Applications of AI/ML and km-scale Physical Models" by Atria University',
    date: 'June 5 - 7, 2025',
    link: 'https://www.linkedin.com/posts/madhavan-nair-rajeevan-38822526_tutorial-and-workshop-on-artificial-intelligence-activity-7314676934548852736-M8h_?utm_source=share&utm_medium=member_desktop&rcm=ACoAABR4ETcBIo86GV6B3vRJM_ahK6h2WgzFSKU'
  },
  {
    title: 'Presenting our work on Cool Pavement at Capital Area Section of the Institute of Transportation Engineers',
    date: 'May 23, 2025',
    link: 'https://www.casite.org/upcoming-events/may-meeting'
  }
];

const newsMentions = [
  {
    title: 'Feel the Burn?',
    source: 'Hindustan Times',
    link: 'https://www.pressreader.com/india/hindustan-times-lucknow/20250511/281951728708637?srsltid=AfmBOoqfnLHyEzkWSJTbsIKA3E8XSGlHC0vovMqANpx6UTBu7etgJ8-l',
    date: 'May 11, 2025'
  },
  {
    title: 'UT geoscientists utilize AI to provide daily forecasts at Paris Olympics',
    source: 'The Daily Texan',
    link: 'https://thedailytexan.com/2024/08/13/ut-geoscientists-utilize-ai-to-provide-daily-forecasts-at-paris-olympics/',
    date: 'Aug 13, 2024'
  },
  {
    title: 'UT Austin researchers help predict local weather during 2024 Paris Olympics',
    source: 'KUT',
    link: 'https://www.kut.org/science/2024-08-07/ut-austin-researchers-help-predict-local-weather-during-2024-paris-olympics',
    date: 'Aug 7, 2024'
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

      <h2 style={{ fontSize: '2.5rem', marginTop: '3rem' }}>News Mentions</h2>
      <div className="updates-container">
        {newsMentions.map((news, index) => (
          <a
            key={index}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="update-tile"
          >
            <div className="update-title">{news.title}</div>
            <div className="update-date">
              {news.source} &mdash; {news.date}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Updates;
