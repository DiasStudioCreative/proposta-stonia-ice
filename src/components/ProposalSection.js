import React from 'react';
import './ProposalSection.css';

const ProposalSection = () => {
  const proposals = [
    {
      icon: '📖',
      title: 'Storytelling que Conecta',
      description: 'As fotos vendem, mas as histórias criam lealdade. Vamos mostrar os bastidores da Stonia: o processo artesanal de criação dos sabores, a paixão da equipe e a história por trás de cada gelato.',
      features: [
        'Conteúdo de bastidores exclusivo',
        'Histórias emocionais da equipe',
        'Processo artesanal documentado'
      ]
    },
    {
      icon: '🎬',
      title: 'Domínio dos Reels',
      description: 'Vídeos curtos são o motor de crescimento do Instagram. Criaremos uma estratégia de Reels com alto potencial viral: ASMR da montagem de pedidos, desafios com a equipe, tendências adaptadas ao universo Stonia.',
      features: [
        'Estratégia de Reels viral',
        'Conteúdo ASMR exclusivo',
        'Tendências adaptadas à marca'
      ]
    },
    {
      icon: '👥',
      title: 'Comunidade Ativa',
      description: 'Transformaremos seus seguidores em embaixadores. Desenvolveremos campanhas para incentivar e destacar o conteúdo gerado pelos clientes (UGC), construindo uma prova social autêntica.',
      features: [
        'Campanhas de UGC',
        'Comunidade engajada',
        'Prova social autêntica'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Nossa Visão Estratégica</h2>
          <p className="section-subtitle">
            Identificamos 3 oportunidades estratégicas para aprofundar a conexão com seu público, 
            transformando clientes em verdadeiros fãs e embaixadores da marca Stonia Ice.
          </p>
          
          <div className="proposal-grid">
            {proposals.map((proposal, index) => (
              <div 
                key={index} 
                className="proposal-card"
              >
                <div className="proposal-card-number">{index + 1}</div>
                <div className="proposal-card-content">
                  <div className="card-icon">{proposal.icon}</div>
                  <h3>{proposal.title}</h3>
                  <p>{proposal.description}</p>
                  
                  <div className="proposal-card-features">
                    {proposal.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="proposal-card-feature">
                        <div className="proposal-card-feature-icon">✓</div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection; 