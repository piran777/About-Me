import React from 'react';
import './Home.css';
import profileImage from '../Assets/1711219373283.jpg'; // Replace with your profile image path
import profileImage2 from '../Assets/Western-University-Logo.png';

const skills = [
  { name: 'React', url: 'https://react.dev/' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
  { name: 'NodeJS/Express', url: 'https://expressjs.com/en/starter/installing.html' },
  { name: 'mongoDB', url: 'https://docs.mongodb.com/' },
  { name: 'AWS', url: 'https://docs.aws.amazon.com/' },
  { name: 'Docker', url: 'https://docs.docker.com/' },
  { name: 'Kubernetes', url: 'https://kubernetes.io/docs/home/' },
  { name: 'Python', url: 'https://docs.python.org/3/' },
  { name: 'Pandas', url: 'https://pandas.pydata.org/pandas-docs/stable/' },
  { name: 'NumPy', url: 'https://numpy.org/doc/' },
  { name: 'SQL', url: 'https://www.w3schools.com/sql/' },
  { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'TensorFlow', url: 'https://www.tensorflow.org/learn' },
  { name: 'PyTorch', url: 'https://pytorch.org/tutorials/' },
  { name: 'Java', url: 'https://docs.oracle.com/javase/tutorial/' },
  { name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'GCP', url: 'https://cloud.google.com/docs' },
  { name: 'C/C++', url: 'https://en.cppreference.com/w/' },
  { name: 'Git', url: 'https://git-scm.com/doc' },
  { name: 'OpenGL', url: 'https://www.khronos.org/opengl/wiki/Getting_Started' },
  { name: 'Unity', url: 'https://docs.unity3d.com/Manual/index.html' },
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
            <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill">
              {skill.name}
            </a>
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
