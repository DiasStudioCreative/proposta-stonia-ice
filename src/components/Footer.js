import React from 'react';
import './Footer.css';

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Tenho interesse nesse bate papo inicial");
    const phone = "61993038055";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/image/logo-preta.png" alt="Dias Studio Creative" />
          </div>
          
          <p>
            Esta proposta foi preparada com carinho pela <span className="footer-highlight">Dias Studio Creative</span> para a <span className="footer-highlight">Stonia Ice</span>.
          </p>
          
          <div className="footer-divider"></div>
          
          <div className="footer-info">
            <div className="footer-info-item">
              <div className="footer-info-icon">📧</div>
              <span>tiago@diasstudiocreative.com</span>
            </div>
            <div className="footer-info-item" onClick={openWhatsApp} style={{ cursor: 'pointer' }}>
              <div className="footer-info-icon">📱</div>
              <span>WhatsApp: (61) 99303-8055</span>
            </div>
            <div className="footer-info-item">
              <div className="footer-info-icon">📍</div>
              <span>Brasília, Brasil</span>
            </div>
          </div>
          
          <div className="footer-copyright">
            © 2024 Dias Studio Creative. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 