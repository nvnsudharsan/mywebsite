import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';
import '../App.css';

const projects = [
  {
    title: 'SOLWEIG-GPU: GPU-Accelerated Thermal Comfort Modeling Framework',
    description: 'SOLWEIG-GPU is a Python package and command-line interface for high-resolution urban microclimate modeling.',
    image: `${process.env.PUBLIC_URL}/images/UTCI_New_Delhi.jpeg`,
    link: 'https://github.com/nvnsudharsan/SOLWEIG-GPU'
  },
  {
    title: 'Comparison of AI and Physics-based models for Hurricane Track Prediction',
    description: 'Compare different AI models for the track predictions in the Gulf Coast',
    image: `${process.env.PUBLIC_URL}/images/hurricane_AI.gif`,
    link: '/research/hurricane'
  },
  {
    title: 'Heat Risk Assessment',
    description: 'Non-parametric heat risk assessment based on UTCI for CONUS',
    image: `${process.env.PUBLIC_URL}/images/risk.png`,
    link: '/research/heatrisk'
  },
  {
    title: 'Projection of Heatwaves',
    description: 'Future risk assessment of heatwaves using downscaled climate projections. The warming scenarios are bias corrected using Q-Q mapping.',
    image: `${process.env.PUBLIC_URL}/images/heatwave_pdf.png`,
    link: 'https://arxiv.org/pdf/2501.13359'
  },
  {
    title: 'Hurricane Precipitation Climatology',
    description: 'Analysis of historical storms over the Gulf of America to develop precipitation climatology from the last 20 years. We used IMERG GPM precipitation and hurrciane tracks from HURDAT2',
    image: `${process.env.PUBLIC_URL}/images/hurricane_clim.png`,
    link: '/research/hurrciane_climatology'
  },
  {
    title: 'Coastal Risk Assessment',
    description: 'Coastal risk assessment for the Gulf coast, considering it as a multi-hazard approach, where we consider hurricane, precipitation, and storm surge as hazards. So this coastal risk assessment indirectly accounts for the compound flooding due to hurricanes.',
    image: `${process.env.PUBLIC_URL}/images/hurricane_hazard.png`,
    link: '/research/coastal_risk'
  },
  {
    title: 'Near Real-Time Forecasting of Hurricanes using AI models',
    description: 'Near real-time forecasting of hurricanes in the Atlantic basin using Graphcast-Operational and compare it with HWRF and official forecast',
    image: `${process.env.PUBLIC_URL}/images/hurriance_realtime.gif`,
    link: 'https://berylforecast.streamlit.app/'
  },
  {
    title: 'Evaluation of Reflective Pavement (Cool Pavement) for its effectiveness in mitigating urban over-heating',
    description: 'We evaluate the performance of cool pavement for mitigating the urban over-heating. We installed multiple HOBO sensors over the site where the City of Austin is running a pilot project using CoolSeal treatment. We measure the 2m temperature and the surface temperature using FLIR cameras.',
    image: `${process.env.PUBLIC_URL}/images/cool_pavement.png`,
    link: 'https://austincoolpavement.streamlit.app/'
  },
  {
    title: 'Evaluating the importance of land surface model in predicitng hurricane track',
    description: 'We evaluated the changes in tracks due to soil moisture using HWRF and emphasised the importance of have LSM in AI models to predict and explain the tracks at higher accuracy.',
    image: `${process.env.PUBLIC_URL}/images/hurricane.png`,
    link: 'https://austincoolpavement.streamlit.app/'
  },
  {
    title: 'xdownscale: super-resolution downscaling of gridded datasets using deep learning',
    description: 'xdownscale is a Python package for super-resolution downscaling of gridded datasets using deep learning. It supports a wide range of applications, including satellite observations, reanalysis data, and climate model outputs.',
    image: `${process.env.PUBLIC_URL}/images/xdownscale.png`,
    link: 'https://austincoolpavement.streamlit.app/'
  },
];

function Research() {
  return (
    <section className="section">
      <h2 style={{ fontSize: '2.5rem' }}>Research</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <Link to={project.link} className="tile" key={index}>
            <div className="tile-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="tile-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Research;
