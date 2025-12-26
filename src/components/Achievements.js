import React from 'react';
import citCert from '../assests/CIT.jpg';
import eeeCert from '../assests/eee.jpg';
import ramakrishnaCert from '../assests/ramakrishna.jpg';
import zinniaCert from '../assests/zinnia.jpg';
import exodiaCert from '../assests/Exodia.jpg';
import projectCert from '../assests/project.jpg';
import hackathonCert from '../assests/hackathon.jpg';
import paperCert from '../assests/paper.jpg';

const Achievements = () => {
  const achievements = [
    {
      icon: 'fas fa-trophy',
      title: 'Third Prize - Project Presentation',
      description: 'Won 3rd prize in Project Presentation at 15th National Level Technical Symposium, Nandha Engineering College',
      certificate: projectCert
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Paper Presentation',
      description: 'Participated in Paper Presentation at 15th National Level Technical Symposium, Nandha Engineering College',
      certificate: paperCert
    },
    {
      icon: 'fas fa-code',
      title: 'Hackathon Participation',
      description: 'Participated in Hackathon at 15th National Level Technical Symposium, Nandha Engineering College',
      certificate: hackathonCert
    },
           {
      icon: 'fas fa-trophy',
      title: 'First Prize - Email Spam Classifier',
      description: 'Won 1st prize for Email Spam Classifier paper presentation at EEE, Kongu Engineering College',
      certificate: eeeCert
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Paper Presentation - Chatbot Development',
      description: 'Presented a technical paper at a national-level symposium held at Coimbatore Institute of Technology (CIT), Coimbatore.',
      certificate: citCert
    },

    
    {
      icon: 'fas fa-file-alt',
      title: 'Paper Presentation',
      description: 'Participant, ELEMENTS 2K24 – National-Level Technical Symposium, Sri Ramakrishna Engineering College, Coimbatore (Subsation Chatbot Development',
      certificate: ramakrishnaCert
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Paper Presentation',
      description: 'Participant, ZINNIA 2K24 – Technical Symposium, Government College of Engineering ,Erode',
      certificate: zinniaCert
    },
       {
      icon: 'fas fa-file-alt',
      title: 'Paper Presentation',
      description: 'Participant, EXODIA 2K24 – Technical Symposium, Kongu Engineering College, Erode',
      certificate: exodiaCert
    }
  ];

  return (
    <section id="achievements" className="achievements">
      {/* Floating bubbles */}
      <div className="section-bubbles">
        <div className="section-bubble bubble-1"></div>
        <div className="section-bubble bubble-2"></div>
        <div className="section-bubble bubble-3"></div>
        <div className="section-bubble bubble-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              {achievement.certificate && (
                <div className="certificate-preview">
                  <img src={achievement.certificate} alt={`${achievement.title} Certificate`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
