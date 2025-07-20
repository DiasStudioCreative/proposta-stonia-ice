import React from 'react';
import './Recognition.css';

const Recognition = () => {
  return (
    <div className="container">
      <section className="recognition">
        <div className="recognition-icon">🎯</div>
        <h2>Parabéns pelo trabalho incrível!</h2>
        <p>
          A qualidade visual do perfil <span className="recognition-highlight">@stoniaice</span> é impecável e o cuidado com a marca é evidente. 
          Vocês já dominam o mais difícil: ter um produto excepcional e apresentá-lo de forma irresistível. 
          Nossa proposta é <span className="recognition-highlight">potencializar ainda mais esse sucesso</span>.
        </p>
        <div className="recognition-badge">
          <span className="recognition-badge-icon">⭐</span>
          Qualidade Reconhecida
        </div>
      </section>
    </div>
  );
};

export default Recognition; 