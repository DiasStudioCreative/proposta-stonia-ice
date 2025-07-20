import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import ProposalModal from './ProposalModal';
import './Hero.css';

const Hero = () => {
  const { hero } = siteConfig.content;
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  
  const scrollToNext = () => {
    const nextSection = document.querySelector('.recognition');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProposalModal = () => {
    setIsProposalModalOpen(true);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Tenho interesse nesse bate papo inicial");
    const phone = "61993038055";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };
  
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-icon">✨</div>
            Proposta Estratégica
          </div>
          
          <p className="hero-subtitle">{hero.subtitle}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">
            {hero.description}
          </p>
          
          <div className="hero-cta">
            <button className="hero-btn-primary" onClick={openProposalModal}>
              Ver Proposta Completa
            </button>
            <button className="hero-btn-secondary" onClick={openWhatsApp}>
              Conhecer Nosso Trabalho
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">3</span>
              <span className="hero-stat-label">Estratégias</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Personalizado</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">24h</span>
              <span className="hero-stat-label">Resposta</span>
            </div>
          </div>
        </div>
      </div>
      
      <ProposalModal 
        isOpen={isProposalModalOpen} 
        onClose={() => setIsProposalModalOpen(false)} 
      />
    </section>
  );
};

export default Hero; 