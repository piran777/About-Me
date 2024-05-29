import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ResumeRedirect from './components/ResumeRedirect';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/About-Me" element={<Home />} />
            <Route path="/About-Me/about" element={<About />} />
            <Route path="/About-Me/projects" element={<Projects />} />
            <Route path="/About-Me/contact" element={<Contact />} />
            <Route path="/About-Me/resume" element={<ResumeRedirect />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
}

export default App;
