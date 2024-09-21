import React from 'react';
import mulheresCozinha from '../images/mulheres-cozinha.webp';
import blobImage from '../images/Blob.png';
import logo from '../images/logo.webp';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="blob-container">
        <img src={blobImage} alt="Blob decorativo" />
      </div>

      <div className="introduction">
        <div className="logo">
          <img src={logo} alt="Logo Minha Despensa" />
          <h1>Minha Despensa</h1>
        </div>
        <h2>Sua cozinha, suas regras!</h2>
        <p>
          Descubra receitas práticas com os ingredientes que você já tem em casa! 
          Aqui você encontra receitas personalizadas com o que está disponível em sua despensa.
        </p>
      </div>

      <div className="intro-image">
        <img src={mulheresCozinha} alt="Mulheres cozinhando" />
      </div>
    </div>
  );
};

export default Introduction;
