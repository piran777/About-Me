import React, { useState } from 'react';
import './About.css';
import pawmirLogo from '../Assets/PawmirPaintingLTD.PNG';
import hackwesternLogo from '../Assets/HackWestern8.png';
import trafficImage from '../Assets/TrafficAIProject.PNG';
import trafficImage2 from '../Assets/traffic2.PNG';
import musicAppImage from '../Assets/HackWestern8.png';
import blog1 from '../Assets/blog-login.PNG';
import blog2 from '../Assets/LoggedInBLog.PNG';
import blog3 from '../Assets/makingpostblog.PNG';
import blog4 from '../Assets/EditBlog.PNG';
import blog5 from '../Assets/EDIT2BLog.PNG';
import blog6 from '../Assets/edit3blog.PNG';
import blog7 from '../Assets/CommentBlog.PNG';
import music1 from '../Assets/music-1.PNG'; 
import music2 from '../Assets/music2.PNG'; 
import maze2 from '../Assets/Maze-Game-diag.PNG'; 
import maze3 from '../Assets/Maze-Game-Take hits.PNG'; 
import maze4 from '../Assets/mazegame-3.PNG'; 
import maze5 from '../Assets/maze-3.PNG';
import hicoderLogo from '../Assets/hicoder_logo.png'; 

const experiences = [
  {
    company: 'HiCoder',
    logo: hicoderLogo,
    roles: [
      {
        title: 'Software Engineer Intern',
        date: 'May 2024 - present',
        description: [
          'Led the design and development of scalable server-side applications using Node.js, enhancing performance and reliability.',
          'Developed the client side using crema/react.js, ensuring a seamless and responsive user experience.',
          'Assisted in building and implementing RESTful APIs, facilitating efficient communication between server and client applications.',
          'Diagnosed and resolved critical performance issues, leading to significant improvements in application responsiveness and user experience.'
        ]
      }
    ]
  },
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
    images: [trafficImage, trafficImage2],
    video: 'https://www.youtube.com/embed/Xrf8B0IFcyI' // Updated YouTube embed link
  },
  
  {
    title: 'MyBlog',
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      'Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
      'Utilized: JavaScript, CSS, HTML, ReactJS, NodeJS/Express, Docker, Kubernetes, JWT.',
    ],
    images: [blog1, blog2, blog3, blog4, blog5, blog6, blog7], // Replace with appropriate images
    video: null // No video available
  },
  {
    title: 'Maze World',
    details: [
      'Made a 2D maze game with 3 levels using Unity and C# to create the levels for the game and to give movement and actions to the characters within the game using the C# scripts',
      'Had different enemy types in each level with AOE detection/shooting, target tracking and different characters which use different abilities in the game.',
      'Utilized: C#, Unity'
    ],
    video: 'https://www.youtube.com/embed/ZxHu8RLDSTE', // Corrected YouTube embed link
    images: [maze2,maze3,maze4,maze5], // Replace with appropriate images
    
  },
  {
    title: 'Course Outline Maker',
    details: [
      'Designed the front-end using React, providing a responsive and user-friendly interface with a RESTful API using Node.js and Express for handling CRUD operations on blog posts in the back-end',
      'User authentication and authorization using JSON Web Tokens (JWT) is used for secure access to the platform.',
      'Used docker and kubernetes to dockerize the application in order to deploy it using GCP',
      'Created full documentation of the program which explains the code and functionality of the program in a ReadMe.',
      'Utilized: JavaScript, CSS, HTML, ReactJS, NodeJS/Express, Docker, Kubernetes, JWT.',
    ],
    video: 'https://www.youtube.com/embed/iSijKl2pH1w' // Corrected YouTube embed link
  },

  
  {
    title: 'MyMusicPlayer',
    details: [
      'Audio streaming app that can create, update, and delete playlists by adding songs and playing them directly from youtube for logged in users.',
      'Search by artists, albums, or songs names to find the track and add it to a playlist or to remove it from an existing one',
      'Account creation, verification, deletion, deactivation, and authentication with JWT is integrated. Users that are logged in with an account have more features than guests that have no account.',
      'Utilized: JavaScript, React, NodeJS, Express, CSS, HTML, mySQL, Amazon Web Services (AWS), JWT',
    ],
    images: [music1, music2],
    video: null // No video available
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
                {project.images && project.images.map((image, i) => (
                  <img src={image} alt={`${project.title} Image ${i + 1}`} key={i} />
                ))}
                {project.video && (
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src={project.video}
                      title={`${project.title} Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
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
