import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p>Sobre Nós</p>
      </div>
      <div className="footer-center">
        <p>© 2024 Minha Despensa</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/Luhnari/minha-despensa.github.io" target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
