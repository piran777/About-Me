import React from 'react';
import './Home.css';
import profileImage from '../Assets/1711219373283.jpg'; // Replace with your profile image path
import profileImage2 from '../Assets/Western-University-Logo.png';

const skills = [
  'React', 'JavaScript', 'NodeJS/Express', 'mongoDB', 'AWS', 
  'Docker', 'Kubernetes', 'Python', 'Pandas', 'NumPy', 'SQL', 'HTML', 'CSS',
  'TensorFlow', 'PyTorch', 'Java', 'C#', 'GCP', 'C/C++', 'Git', 'OpenGL', 'Unity'
];

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="profile">
          <img src={profileImage} alt="Profile" />
          <h2>Piran Aminullah</h2>
          <h4>Software Engineer</h4>
          <p>Hi there! I'm Piran!</p>
          <p>I have recently received my Bachelor's of Engineering Science in Software Engineering at Western University.</p>
          <p>Throughout my academic journey, I have worked on a variety of projects, gaining experience in full-stack development, AI/Machine Learning, and more!</p>
          <p>In my free time, I enjoy exploring new technologies, going for walks, and playing video games.</p>
          <p>Thanks for visiting my website! 👋🏼</p>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
        <div className="education">
          <p>B.E.Sc. in Software Engineering at Western University</p>
          <img src={profileImage2} alt="Western University" />
        </div>
      </div>
    </section>
  );
};

export default Home;
