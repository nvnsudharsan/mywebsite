import React from 'react';
import './Section.css';
import profilePic from '../assets/Naveen2.jpeg'; 

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Me</h2>
        <div className="resume-style">
          <p>
            I’m Dr. Naveen Sudharsan, a Postdoctoral Fellow at the University of Texas at Austin, working at the intersection of extreme weather, climate risk, and artificial intelligence. My research focuses on developing innovative tools to improve short-term weather forecasts and long-term risk assessments for hazards like heatwaves, hurricanes, and compound flooding.
          </p>

          <p>
            At UT Austin’s Jackson School of Geosciences, I lead and contribute to several interdisciplinary projects, including the development of AI-enhanced Digital Twin frameworks for the Gulf Coast, heatwave and flood risk mapping/estimation, and the evaluation of next-generation AI weather models like GraphCast, FourCastNet, FuXi, and Pangu-Weather. I also work extensively on coastal hazard modeling, urban climate adaptation, and high-resolution downscaling of climate data.
          </p>

          <p>
            My academic background includes a Ph.D. in Environmental Science and Engineering from IIT Bombay, where I focused on heatwave and precipitation extremes across India. I have over a decade of experience in research and teaching, and I actively collaborate with government agencies and communities to translate cutting-edge climate science into practical solutions.
          </p>

          <p>
            Outside of research, I enjoy mentoring students and contributing to open-source tools that support climate and geoscience communities. I'm passionate about traveling, discovering new places, and exploring local cuisines. When it comes to sports, I love playing cricket and badminton, and I also enjoy watching soccer and tennis. Since joining UT Austin, I’ve started following Longhorn football and enjoy the vibrant campus sports culture.
          </p>

          <h3>Education</h3>
          <ul>
            <li><strong>Ph.D. in Environmental Science and Engineering</strong>, <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Bombay</a></li>
            <li><strong>M.Tech in Water Resources Engineering</strong>, <a href="https://vnit.ac.in/" target="_blank" rel="noopener noreferrer">Visvesvaraya National Institute of Technology Nagpur</a></li>
            <li><strong>B.Tech in Civil Engineering</strong>, <a href="https://www.mgu.ac.in/" target="_blank" rel="noopener noreferrer">Mahatma Gandhi University, Kottayam, Kerala</a></li>
          </ul>

          <h3>Experience</h3>
          <ul>
            <li><strong>Postdoctoral Fellow</strong>, <a href="https://www.utexas.edu/" target="_blank" rel="noopener noreferrer">The University of Texas at Austin</a>, Jan 2023 to Present</li>
            <li><strong>Research Associate</strong>, <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Bombay</a>, Jul 2022 to Nov 2022</li>
            <li><strong>Teaching Assistant</strong>, <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Bombay</a>, Jan 2018 to Jul 2022</li>
            <li><strong>Assistant Professor</strong>, <a href="https://scmsgroup.org/sset/" target="_blank" rel="noopener noreferrer">SCMS School of Engineering and Technology</a>, Jul 2017 to Dec 2017</li>
            <li><strong>Assistant Professor</strong>, <a href="https://visat.in/" target="_blank" rel="noopener noreferrer">Vijnan Institute of Science and Technology</a>, Aug 2016 to Dec 2017</li>
            <li><strong>Teaching Assistant</strong>, <a href="https://www.vnit.ac.in/" target="_blank" rel="noopener noreferrer">Visvesvaraya National Institute of Technology Nagpur</a>, Jul 2014 to Jun 2016</li>
            <li><strong>Lecturer</strong>, <a href="https://www.iiet.org.in/" target="_blank" rel="noopener noreferrer">Indira Gandhi Institute of Engineering and Technology</a>, Jan 2014 to Jun 2014</li>
          </ul>

          <h3>Skills</h3>
          <ul>
            <li><strong>Programming & Scripting:</strong> Python, Bash, MATLAB, R</li>
            <li><strong>Machine Learning & AI:</strong> PyTorch, TensorFlow, Scikit-learn, dask</li>
            <li><strong>Visualization:</strong> Matplotlib, Plotly, Seaborn</li>
            <li><strong>Data Processing:</strong> xarray, NumPy, Pandas, GDAL, GeoPandas, Rasterio, zarr-python</li>
            <li><strong>GIS & Remote Sensing:</strong> ArcGIS, QGIS, ERDAS Imagine, Google Earth Engine</li>
            <li><strong>Modeling & Simulation:</strong> WRF, HRLDAS (NoahMP), HEC-RAS, EPANET, STAAD Pro, SACS</li>
            <li><strong>Other Tools:</strong> AutoCAD, MS Project, LATEX, MS Office, PowerBI</li>
            <li><strong>Web Development:</strong> HTML, CSS, ReactJS</li>
            <li><strong>Version Control & Platforms:</strong> Git, Linux, Windows, MacOS</li>
          </ul>
          <h3>Associated Groups</h3>
          <ul>
            <li><a href="https://www.texuslab.org/" target="_blank" rel="noopener noreferrer"><strong>TExUS Lab</strong></a></li>
            <li><a href="https://www.utcitycolab.org/" target="_blank" rel="noopener noreferrer"><strong>UT City Colab</strong></a></li>
          </ul>
        </div>
      </div>
      <div className="about-image">
        <img src={profilePic} alt="Naveen Sudharsan" />
      </div>
    </section>
  );
}

export default About;


