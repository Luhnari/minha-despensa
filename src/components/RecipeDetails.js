import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import receitasJson from '../receitas/receitas.json';
import bolo from '../images/bolo.webp';
import drink from '../images/drink.webp';
import cupcake from '../images/cupcake.webp';
import { MdOutlineAccessTime } from "react-icons/md";
import Footer from '../components/Footer';

const getImageForRecipe = (nomeReceita) => {
  nomeReceita = nomeReceita.toLowerCase();
  if (nomeReceita.includes('bolo') || nomeReceita.includes('rocambole')) {
    return bolo;
  } else if (nomeReceita.includes('vitamina')) {
    return drink;
  } else {
    return cupcake;
  }
};

const RecipeDetails = () => {
  const { nome } = useParams();
  const navigate = useNavigate();

  const recipe = receitasJson.receitas.find(r => r.nome.toLowerCase() === decodeURIComponent(nome).toLowerCase());

  if (!recipe) {
    return <p>Receita não encontrada</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <div>
          <h1>{recipe.nome}</h1>
        </div>
        <div>
          <img 
            src={getImageForRecipe(recipe.nome)} 
            alt={recipe.nome} 
          />
          <p>
            <MdOutlineAccessTime />
            {recipe['tempo de preparo']}
          </p>
        </div>
      </div>

      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredientes:</h2>
          <ul>
            {recipe.ingredientes.map((ingrediente, index) => (
              <li key={index}>
                {ingrediente.quantidade} de {ingrediente.ingrediente}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Modo de preparo:</h2>
          <p>
            {recipe['modo de preparo']}
          </p>
        </div>
      </div>

      <div className="back-button">
        <button onClick={handleGoBack}>
          Voltar à página anterior
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default RecipeDetails;
