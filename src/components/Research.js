import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';
import '../App.css';
import GitHubContributionsChart from './GitHubContributionsChart';

const projects = [
  {
    title: 'SOLWEIG-GPU: GPU-Accelerated Thermal Comfort Modeling Framework',
    description: 'SOLWEIG-GPU is a Python package and command-line interface for running the SOLWEIG (Solar and LongWave Environmental Irradiance Geometry) model on CPU or GPU (if available). It enables high-resolution urban microclimate modeling by computing key variables such as Sky View Factor (SVF), Mean Radiant Temperature (Tmrt), and the Universal Thermal Climate Index (UTCI)',
    image: '${process.env.PUBLIC_URL}/images/UTCI_New_Delhi.jpeg',
    link: 'https://github.com/nvnsudharsan/SOLWEIG-GPU'
  },
  {
    title: 'Comparison of AI and Physics based models for Hurricane Track Prediction at Realtime',
    description: 'Improving hurricane track prediction with deep learning.',
    image: '${process.env.PUBLIC_URL}/images/hurricane.png',
    link: '/research/hurricane'
  },
  {
    title: 'Heat Risk Assessment',
    description: 'High-resolution flood prediction using coupled models.',
    image: '${process.env.PUBLIC_URL}/images/risk.png',
    link: '/research/flood'
  },
  {
    title: 'Projection of Heatwaves',
    description: 'High-resolution flood prediction using coupled models.',
    image: '${process.env.PUBLIC_URL}/images/heatwave_pdf.png',
    link: '/research/flood'
  },
  {
    title: 'Hurricane Precipitation Climatology',
    description: 'High-resolution flood prediction using coupled models.',
    image: '${process.env.PUBLIC_URL}/images/hurricane_clim.png',
    link: '/research/flood'
  },
  {
    title: 'Coastal Risk Assessment',
    description: 'High-resolution flood prediction using coupled models.',
    image: '${process.env.PUBLIC_URL}/images/hurricane_clim.png',
    link: '/research/flood'
  },
  {
    title: 'Near Real-Time Forecasting of Hurricanes using AI models',
    description: 'High-resolution flood prediction using coupled models.',
    image: '${process.env.PUBLIC_URL}/images/hurricane_clim.png',
    link: '/research/flood'
  },
];

function Research() {
  return (
    <>
      <section className="section">
        <h2 style={{ fontSize: '2.5rem' }}>Research</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <Link to={project.link} className="tile" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>


    </>
  );


}

export default Research;
