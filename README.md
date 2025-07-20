# Proposta Stonia Ice - React

Uma proposta estratégica interativa para a Stonia Ice, desenvolvida com React moderno e design responsivo.

## 🚀 Características

- **Design Moderno**: Interface elegante com gradientes e animações suaves
- **Responsivo**: Otimizado para todos os dispositivos
- **Componentes Reutilizáveis**: Arquitetura modular com React
- **Animações**: Efeitos de scroll e hover interativos
- **Performance**: Otimizado para carregamento rápido

## 🛠️ Tecnologias Utilizadas

- React 18
- CSS3 com variáveis CSS
- Intersection Observer API
- Google Fonts (Poppins)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Hero.js              # Seção principal
│   ├── Recognition.js       # Seção de reconhecimento
│   ├── ProposalSection.js   # Seção de propostas
│   ├── AboutSection.js      # Seção sobre a agência
│   ├── CTASection.js        # Seção de call-to-action
│   ├── Footer.js            # Rodapé
│   └── *.css                # Estilos dos componentes
├── hooks/
│   └── useScrollAnimation.js # Hook para animações
├── App.js                   # Componente principal
├── index.js                 # Ponto de entrada
└── index.css                # Estilos globais
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Construir para produção:**
   ```bash
   npm run build
   ```

## 🎨 Personalização

### Cores
As cores podem ser alteradas editando as variáveis CSS em `src/index.css`:

```css
:root {
  --primary-color: #8A2BE2;
  --secondary-color: #FF69B4;
  --accent-color: #FFD700;
  /* ... outras cores */
}
```

### Conteúdo
- **Propostas**: Edite o array `proposals` em `src/components/ProposalSection.js`
- **Links**: Atualize os links de contato em `src/components/CTASection.js`
- **Texto**: Modifique os textos diretamente nos componentes

## 📱 Responsividade

O projeto é totalmente responsivo e inclui breakpoints para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Funcionalidades

- **Animações de Scroll**: Elementos aparecem conforme o usuário rola a página
- **Hover Effects**: Interações visuais nos cards e botões
- **Gradientes Dinâmicos**: Backgrounds com gradientes CSS
- **Tipografia Responsiva**: Textos que se adaptam ao tamanho da tela

## 📄 Licença

Este projeto foi desenvolvido para a Stonia Ice pela Dias Studio Creative.

## 🤝 Contribuição

Para contribuir com melhorias:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ pela Dias Studio Creative** 