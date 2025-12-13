import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together on your next project</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:nandhinieswarakumar1@gmail.com" target="_blank" rel="noopener noreferrer">
                  nandhinieswarakumar1@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/nandhinieswarakumar" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/nandhinieswarakumar
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/NandhiniEswarakumar" target="_blank" rel="noopener noreferrer">
                  github.com/NandhiniEswarakumar
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="contact-details">
                <h3>Available For</h3>
                <p>Frontend Development & Digital Marketing Projects</p>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <div className="cta-card">
              <h3>Ready to collaborate?</h3>
              <p>I'm always interested in hearing about new projects and opportunities.</p>
              <div className="cta-buttons">
                <a href="https://www.linkedin.com/in/nandhinieswarakumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-linkedin"></i> Connect on LinkedIn
                </a>
                <a href="https://github.com/NandhiniEswarakumar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fab fa-github"></i> View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
