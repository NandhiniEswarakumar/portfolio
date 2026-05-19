import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FrontendProjects from './components/FrontendProjects';
import MarketingProjects from './components/MarketingProjects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 80,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const clickHandlers = [];

    anchors.forEach(anchor => {
      const handleClick = function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };

      clickHandlers.push({ anchor, handleClick });
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      clickHandlers.forEach(({ anchor, handleClick }) => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="premium-bg" aria-hidden="true">
        <div className="premium-grid"></div>
        <div className="premium-orb premium-orb-1"></div>
        <div className="premium-orb premium-orb-2"></div>
        {/* Removed Tech Stack floating card to avoid distracting text while scrolling */}
        {/* Removed Growth Strategy floating card to avoid distracting text while scrolling */}
        <div className="premium-ring premium-ring-1"></div>
        <div className="premium-ring premium-ring-2"></div>
      </div>
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <Navbar />
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="80">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Skills />
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="120">
        <FrontendProjects />
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="150">
        <MarketingProjects />
      </div>
      <div data-aos="fade-up" data-aos-delay="170">
        <Achievements />
      </div>
      <div data-aos="fade-up" data-aos-delay="190">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
