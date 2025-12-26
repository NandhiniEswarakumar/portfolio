import React from 'react';
import blissfulitesImg from '../screenshots/event.png';
import podhidaiImg from '../screenshots/resort.png';
import mmtImg from '../screenshots/mmt.png';
import textileImg from '../screenshots/textile.png';
import craftImg from '../screenshots/craft.png';

const FrontendProjects = () => {
  const projects = [
    {
      title: 'Podhidai Thootam',
      description: 'An interactive website showcasing clean code practices and modern web design principles.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://podhidaithootam.netlify.app/',
      featured: false,
      screenshot: podhidaiImg,
      outcome: 'Implemented clean, maintainable code architecture with cross-browser compatibility'
    },
    {
      title: 'MMT Solutions',
      description: 'A professional business website with engaging UI/UX and responsive layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://mmtsolutions.netlify.app/',
      featured: false,
      screenshot: mmtImg,
      outcome: 'Created a professional web presence that improved client credibility and business inquiries'
    },
    {
      title: 'Textile E-Commerce',
      description: 'A full-featured e-commerce platform built with React, featuring product catalog, shopping cart, and responsive design.',
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://textile-ten.vercel.app/',
      featured: true,
      screenshot: textileImg,
      outcome: 'Developed a complete shopping experience with dynamic product filtering and cart management'
    },
    {
      title: 'Craft Sales Online',
      description: 'An elegant e-commerce solution for handcrafted items, built with React and modern UI components.',
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://craftsales-online-hsld.vercel.app/',
      featured: true,
      screenshot: craftImg,
      outcome: 'Built an intuitive platform showcasing handcrafted products with seamless user experience'
    }
  ];

  return (
    <section id="frontend-projects" className="projects frontend-projects">
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Frontend Projects</h2>
        <p className="section-subtitle">Responsive web applications built with modern technologies</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={index}>
              <div className="project-image">
                <img src={project.screenshot} alt={project.title} className="project-screenshot" />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.outcome && (
                  <div className="project-outcome">
                    <i className="fas fa-check-circle"></i>
                    <span>{project.outcome}</span>
                  </div>
                )}
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendProjects;
