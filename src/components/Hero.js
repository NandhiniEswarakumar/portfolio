import React from 'react';

import techCv from '../assests/Nandhini E_FullStack.pdf';
import marketingCv from '../assests/Nandhini E_Digital Marketing Intern.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background design elements */}
      <div className="hero-bg-decoration">
        <div className="decoration-blob blob-1"></div>
        <div className="decoration-blob blob-2"></div>
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>

      {/* Floating bubbles */}
      <div className="hero-bubbles">
        <div className="hero-bubble bubble-1"></div>
        <div className="hero-bubble bubble-2"></div>
        <div className="hero-bubble bubble-3"></div>
        <div className="hero-bubble bubble-4"></div>
        <div className="hero-bubble bubble-5"></div>
        <div className="hero-bubble bubble-6"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <i className="fas fa-code"></i>
            <span>Welcome to my Portfolio</span>
          </div>
          
          <h1 className="glitch" data-text="Nandhini Eswarakumar">Nandhini Eswarakumar</h1>
          <h2 className="typewriter"> Frontend Developer | MERN Stack Enthusiast | Digital Marketing Professional </h2>
          <p className="hero-description">Crafting beautiful web experiences and driving digital growth through strategic marketing</p>
            
          <div className="hero-buttons">
            <a href={techCv} className="btn btn-primary" download="Nandhini-Eswarakumar-Tech-CV.pdf">
              <i className="fas fa-download"></i> Tech CV
            </a>
            <a href={marketingCv} className="btn btn-secondary" download="Nandhini-Eswarakumar-Marketing-CV.pdf">
              <i className="fas fa-chart-line"></i> Marketing CV
            </a>
            <a href="#frontend-projects" className="btn btn-secondary">
              <i className="fas fa-arrow-right"></i> View Projects
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nandhinieswarakumar" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/NandhiniEswarakumar" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/itsme_nandhy?igsh=amtybmx2dG90eWt0" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:nandhinieswarakumar1@gmail.com" className="social-icon" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-3d">
          <div className="cube">
            <div className="face front">💻</div>
            <div className="face back">📱</div>
            <div className="face right">🎨</div>
            <div className="face left">📊</div>
            <div className="face top">🚀</div>
            <div className="face bottom">✨</div>
          </div>
        </div>
      </div>
      
    
    </section>
  );
};

export default Hero;
