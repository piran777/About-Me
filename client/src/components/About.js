import React, { useState } from 'react';
import './About.css';
import pawmirLogo from '../Assets/PawmirPaintingLTD.PNG';
import hackwesternLogo from '../Assets/HackWestern8.png';
import trafficImage from '../Assets/HackWestern8.png'; // Example project image
import musicAppImage from '../Assets/HackWestern8.png'; // Example project image

const experiences = [
  {
    company: 'PawmirPaintings LTD',
    logo: pawmirLogo,
    roles: [
      {
        title: 'Web Developer Intern',
        date: 'April 2022 - September 2023',
        description: [
          'Collaborated with a diverse team of developers, actively contributing ideas and insights for website development.',
          'Built the company\'s website through the integration of JavaScript, CSS, and HTML, leading to enhanced user interaction and navigation.',
          'Implemented a robust contact information section using Node.js/Express, addressing user issues promptly.'
        ]
      }
    ]
  },
  {
    company: 'HackWestern 8 Hackathon',
    logo: hackwesternLogo,
    roles: [
      {
        title: 'Participant',
        date: 'HackWestern 8',
        description: [
          'Participated in one of Canada\'s largest student-run hackathons competing against 341 participants in a team of 4.',
          'Learned from SWE reps of companies such as TELUS, Scotiabank, Sunlife, and participated in pre-event workshops to enhance our ability to create a strong project.',
          '48 hour time limit to create a project for the event and compete for awards and $19,350 in prizes sponsored by the companies present at Hackwestern 8.'
        ]
      }
    ]
  }
];

const projects = [
  {
    title: 'Traffic Density Predictor',
    details: [
      'Engineered a machine learning model that predicts the traffic density at an intersection using a random forest classifier and to accurately forecast congestion patterns and optimize route planning.',
      'Developed an advanced heat map algorithm in Python to predict high-traffic areas in London, Ontario so that it can be placed on a google maps UI.',
      'Utilized: Python, Pandas, Streamlit, Git, Jira/Confluence.',
    ],
    image: trafficImage
  },
  {
    title: 'MyMusicPlayer',
    details: [
      'Created a music streaming application with features similar to Spotify.',
      'Implemented user authentication, playlist creation, and music streaming functionalities.',
      'Deployed the application using Docker and Kubernetes on Google Cloud Platform.'
    ],
    image: musicAppImage
  },
  {
    title: 'MyBlog',
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      ' Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
      'Utilized: JavaScript, CSS, HTML, ReactJS, NodeJS/Express, Docker, Kubernetes, JWT.',
    ],
    image: trafficImage
  },
  {
    title: 'Course Outline Maker',
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      ' Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
      'Utilized: JavaScript, CSS, HTML, ReactJS, NodeJS/Express, Docker, Kubernetes, JWT.',
    ],
    image: trafficImage
  },
  // Add other projects here...
];

const About = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProjectDetails = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-content">
              <h3>
                <img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />
                {exp.company}
              </h3>
              {exp.roles.map((role, i) => (
                <div className="role" key={i}>
                  <h4>{role.title}</h4>
                  <span>{role.date}</span>
                  <ul>
                    {role.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="projects">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <button className="project-button" onClick={() => toggleProjectDetails(index)}>
                {project.title}
              </button>
              <div className={`project-details ${activeProject === index ? 'active' : ''}`}>
                <ul>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                {project.image && (
                  <img src={project.image} alt={`${project.title} Image`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
