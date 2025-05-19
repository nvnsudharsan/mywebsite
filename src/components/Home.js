import React, { useState, useEffect } from 'react';
import './Section.css';

const videos = [
  `${process.env.PUBLIC_URL}/videos/home1.mp4`,
  `${process.env.PUBLIC_URL}/videos/home2.mp4`,
  `${process.env.PUBLIC_URL}/videos/home3.mp4`,
  `${process.env.PUBLIC_URL}/videos/home4.mp4`,
];

const keywords = [
  'Applications of AI/ML in Weather and Climate',
  'Hydro-metrological Extremes',
  'Compound Extreme Events',
  'Digital Twins for Earth Systems',
  'Climate Risk Assessment',
  'Mitigation/Adaptation Strategies'
];

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth video transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 12000); // switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentWord = keywords[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      setTypedText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % keywords.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);
  // Load GitHub Contributions widget
// Load GitHub Contributions widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
    script.async = true;
    script.onload = () => {
      if (window.GitHubCalendar) {
        window.GitHubCalendar('.calendar', 'nvnsudharsan', { responsive: true });
      }
    };
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <div className="video-container">
        {videos.map((video, index) => (
          <video
            key={video}
            className={`fullscreen-video ${index === currentVideo ? 'fade-in' : 'fade-out'}`}
            autoPlay
            muted
            loop
            preload="auto"
            style={{ zIndex: index === currentVideo ? 2 : 1 }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        <div className="video-overlay-text">
          <h1>Welcome to My Research World</h1>
          <p>Exploring Extreme Weather, Climate, and AI</p>
        </div>
      </div>

      <section className="section">
        <h2>Hi, I'm Naveen Sudharsan</h2>
        <p>
          Explore my work at the intersection of extreme weather, data science, and AI.
        </p>
        <p>
          I am interested in: <span className="typed-keyword">{typedText}</span>
        </p>
      </section>
      <section className="section">
        <h2>GitHub Contributions</h2>
        <div className="calendar">Loading GitHub contributions...</div>
      </section>
    </div>
  );
}

export default Home;
