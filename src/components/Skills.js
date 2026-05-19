import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const progress = bar.getAttribute('data-progress');
              bar.style.width = progress + '%';
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML5', icon: 'fab fa-html5', progress: 90 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', progress: 85 },
    { name: 'JavaScript', icon: 'fab fa-js', progress: 80 },
    { name: 'React', icon: 'fab fa-react', progress: 85 },
    { name: 'Node', icon: 'fab fa-node-js', progress: 80 },
    { name: 'Express', icon: 'fas fa-server', progress: 78 },
    { name: 'MongoDB', icon: 'fas fa-server', progress: 60 }
  ];

  const marketingSkills = [
    { name: 'SEO', icon: 'fas fa-search', progress: 85 },
    { name: 'Google Ads', icon: 'fab fa-google', progress: 80 },
    { name: 'Meta Ads', icon: 'fab fa-facebook', progress: 80 },
    { name: 'Keyword Research', icon: 'fas fa-key', progress: 85 },
    { name: 'Google Analytics', icon: 'fas fa-chart-bar', progress: 80 },
    { name: 'Google Console', icon: 'fas fa-search-plus', progress: 80 },
    { name: 'Canva', icon: 'fas fa-palette', progress: 90 }
  ];

  const softSkills = [
    { name: 'Team Work', icon: 'fas fa-users', progress: 90 },
    { name: 'Communication Skills', icon: 'fas fa-comments', progress: 85 },
    { name: 'Time Management', icon: 'fas fa-clock', progress: 85 }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {/* Frontend Development */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
            whileHover={{ y: -10, scale: 1.01 }}
          >
            <div className="category-header">
              <i className="fas fa-code"></i>
              <h3>Teck Stack</h3>
            </div>
            <div className="skill-items">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-progress" data-progress={skill.progress}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            whileHover={{ y: -10, scale: 1.01 }}
          >
            <div className="category-header">
              <i className="fas fa-chart-line"></i>
              <h3>Digital Marketing</h3>
            </div>
            <div className="skill-items">
              {marketingSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-progress" data-progress={skill.progress}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
            whileHover={{ y: -10, scale: 1.01 }}
          >
            <div className="category-header">
              <i className="fas fa-lightbulb"></i>
              <h3>Soft Skills</h3>
            </div>
            <div className="skill-items">
              {softSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-progress" data-progress={skill.progress}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
