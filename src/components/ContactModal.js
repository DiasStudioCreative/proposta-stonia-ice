import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
    onClose();
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Tenho interesse nesse bate papo inicial");
    const phone = "61993038055";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-header-icon">💬</div>
          <h2>Vamos Conversar?</h2>
          <p>Preencha o formulário abaixo e entraremos em contato em até 24h</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Conte-nos um pouco sobre sua empresa e objetivos..."
            />
          </div>

          <button type="submit" className="submit-button">
            <span>Enviar Mensagem</span>
            <span className="submit-button-icon">→</span>
          </button>
        </form>
        
        <div className="modal-whatsapp">
          <p>Ou prefere conversar diretamente pelo WhatsApp?</p>
          <button onClick={openWhatsApp} className="whatsapp-button">
            <span>💬 Conversar no WhatsApp</span>
          </button>
        </div>
        
        <div className="form-footer">
          <p>Seus dados estão seguros conosco. Não compartilhamos informações pessoais.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 