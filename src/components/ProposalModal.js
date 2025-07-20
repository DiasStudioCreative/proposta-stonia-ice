import React from 'react';
import './ProposalModal.css';

const ProposalModal = ({ isOpen, onClose }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Tenho interesse na proposta para o Instagram da Stonia Ice");
    const phone = "61993038055";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="proposal-modal-overlay" onClick={onClose}>
      <div className="proposal-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="proposal-modal-close" onClick={onClose}>×</button>
        
        <div className="proposal-modal-header">
          <div className="proposal-modal-header-icon">📊</div>
          <h2>Oportunidades de Otimização para o Instagram da Stonia Ice</h2>
          <p>Análise estratégica para elevar o impacto da marca no ambiente digital</p>
        </div>

        <div className="proposal-content">
          <div className="proposal-intro">
            <p>
              Ao analisar o perfil da Stonia Ice (@stoniaice), que já se destaca pela excelência visual e foco no produto, 
              identificamos algumas áreas estratégicas que, quando aprimoradas, podem elevar ainda mais a conexão com o 
              público e o impacto da marca no ambiente digital:
            </p>
          </div>

          <div className="proposal-sections">
            <div className="proposal-section">
              <div className="proposal-section-header">
                <div className="proposal-section-icon">🎯</div>
                <h3>Aprofundamento da Narrativa da Marca</h3>
              </div>
              <p>
                Existe um vasto potencial para enriquecer a percepção da marca, indo além da apresentação do produto final. 
                Explorar a essência e os valores que impulsionam a Stonia Ice pode gerar uma ressonância mais profunda com os seguidores.
              </p>
            </div>

            <div className="proposal-section">
              <div className="proposal-section-header">
                <div className="proposal-section-icon">🎬</div>
                <h3>Expansão da Dinâmica de Conteúdo em Vídeo</h3>
              </div>
              <p>
                O formato de vídeo curto oferece um terreno fértil para capturar a atenção e gerar maior engajamento. 
                Há espaço para diversificar as abordagens visuais e sonoras, criando experiências mais imersivas e 
                memoráveis para a audiência.
              </p>
            </div>

            <div className="proposal-section">
              <div className="proposal-section-header">
                <div className="proposal-section-icon">🤝</div>
                <h3>Fortalecimento da Interação e Senso de Comunidade</h3>
              </div>
              <p>
                Transformar o perfil em um espaço mais colaborativo e participativo pode cultivar uma base de fãs ainda mais leal. 
                Incentivar a participação ativa do público e valorizar suas contribuições pode amplificar o alcance orgânico 
                e a autenticidade da marca.
              </p>
            </div>

            <div className="proposal-section">
              <div className="proposal-section-header">
                <div className="proposal-section-icon">🛤️</div>
                <h3>Otimização da Jornada do Consumidor no Digital</h3>
              </div>
              <p>
                Aprimorar a forma como o conteúdo guia o seguidor desde a descoberta até a ação (como a visita à loja) 
                pode refinar a eficácia do perfil como ferramenta de negócio. Há oportunidades para tornar essa transição 
                mais fluida e intuitiva.
              </p>
            </div>
          </div>

          <div className="proposal-cta">
            <p>Gostou da análise? Vamos conversar sobre como implementar essas estratégias!</p>
            <button onClick={openWhatsApp} className="proposal-whatsapp-button">
              <span>💬 Conversar sobre a Proposta</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal; 