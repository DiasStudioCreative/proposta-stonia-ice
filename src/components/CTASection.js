import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './CTASection.css';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Tenho interesse nesse bate papo inicial");
    const phone = "61993038055";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="cta-badge-icon">🚀</span>
              Pronto para crescer?
            </div>
            
            <h2>Vamos conversar?</h2>
            <p>Adoraríamos apresentar essas ideias em mais detalhes e explorar como podemos crescer juntos.</p>
            <p className="cta-subtitle">Agende uma chamada de 15 minutos, sem compromisso.</p>
            
            <button onClick={openWhatsApp} className="cta-button">
              <span>Agendar uma Conversa</span>
              <span className="cta-button-icon">→</span>
            </button>
            
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">✓</div>
                <span>Sem compromisso</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">✓</div>
                <span>15 minutos</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">✓</div>
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CTASection; 