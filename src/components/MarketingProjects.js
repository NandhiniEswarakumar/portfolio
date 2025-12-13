import React from 'react';
import travelBlogImg from '../screenshots/travelblog.png';
import startupMarketingImg from '../screenshots/startupmarketing.png';
import boatSeoImg from '../screenshots/boatseo.png';

const MarketingProjects = () => {
  const projects = [
    {
      title: 'Travel Blog',
      description: 'A comprehensive travel blog on Blogger.com featuring SEO-optimized content, keyword research, and engaging storytelling to attract organic traffic.',
      tech: ['SEO', 'Content Marketing', 'Blogger'],
      link: 'https://bit.ly/3L8xegR',
      featured: false,
      screenshot: travelBlogImg,
      outcome: 'Achieved consistent organic traffic growth through strategic keyword optimization and quality content'
    },
    {
      title: 'Digital Marketing for Startups',
      description: 'Educational blog focused on digital marketing strategies for startups, optimized for search engines and user engagement.',
      tech: ['SEO', 'Keyword Research', 'Analytics'],
      link: 'https://bit.ly/4qky0rd',
      featured: false,
      screenshot: startupMarketingImg,
      outcome: 'Created valuable educational content that ranks for targeted startup marketing keywords'
    },
    {
      title: 'Boat Lifestyle - SEO Audit',
      description: 'Comprehensive SEO audit and presentation for Boat Lifestyle, analyzing website performance, technical SEO, content optimization, and providing actionable recommendations.',
      tech: ['SEO Audit', 'Google Console', 'Analytics', 'Strategy'],
      link: 'https://drive.google.com/file/d/1_9hOhPe1FYhxHgzzOwTwVtgmGov2TuBF/view',
      featured: true,
      screenshot: boatSeoImg,
      outcome: 'Delivered comprehensive audit with 20+ actionable recommendations to improve search rankings and site performance'
    }
  ];

  return (
    <section id="marketing-projects" className="projects marketing-projects">
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Digital Marketing Projects</h2>
        <p className="section-subtitle">SEO optimization, content marketing, and strategic campaigns</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card marketing ${project.featured ? 'featured' : ''}`} key={index}>
              <div className="project-image marketing-bg">
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
                    <span className="tech-tag marketing-tag" key={idx}>{tech}</span>
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

export default MarketingProjects;
