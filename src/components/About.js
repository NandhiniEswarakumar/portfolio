import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">Hello! I'm Nandhini Eswarakumar, a passionate Frontend Developer and Digital Marketing Enthusiast.</p>
            <p>I specialize in creating responsive, user-friendly web applications and implementing data-driven digital marketing strategies. With expertise in modern web technologies and digital marketing tools, I bridge the gap between technical implementation and business growth.</p>
            <p>My dual expertise allows me to not only build stunning websites but also ensure they reach and engage the right audience through effective digital marketing campaigns.</p>

                       {/* Education Section */}
            <div className="education-section">
              <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              <div className="education-card">
                <h4>Kongu Engineering College</h4>
                <p className="degree"><i className="fas fa-book"></i> B.Tech INFORMATION TECHNOLOGY</p>
                <p className="year">3rd Year</p>
                <p className="cgpa"><i className="fas fa-star"></i> CGPA: 7.94 / 10.0</p>
              </div>
            </div>

            {/* Internship Section */}
            <div className="internship-section">
              <h3><i className="fas fa-briefcase"></i> Current Internship</h3>
              <div className="internship-card">
                <h4>Digital Marketing Intern</h4>
                <p className="company"><i className="fas fa-building"></i> NNUTS Company, Chennai</p>
                <p className="description">Gaining hands-on experience in SEO optimization, social media marketing strategies, and digital advertising campaigns. Working with real-world projects to enhance brand visibility and drive customer engagement.</p>
              </div>
            </div>



            <div className="about-stats">
              <div className="stat-card">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>2</h3>
                <p>Specializations</p>
              </div>
              <div className="stat-card">
                <h3>∞</h3>
                <p>Learning & Growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
