import React from 'react';
import { Link } from 'react-router-dom';
import bolo from '../images/bolo.webp';
import cupcake from '../images/cupcake.webp';
import drink from '../images/drink.webp';
import { MdArrowOutward } from "react-icons/md";

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

const RecipeResults = ({ recipes, title, type }) => {
  return (
    <div className="recipe-results">
      <h2>{title}</h2>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={getImageForRecipe(recipe.nome)} alt={recipe.nome} />
            <h3>{recipe.nome}</h3>
            
            {/* Exibir ingredientes faltando se for tipo "almostThere" */}
            {type === "almostThere" && recipe.missingIngredients && (
              <p>Faltam: {recipe.missingIngredients.join(', ')}</p>
            )}
            
            <Link to={`/receita/${encodeURIComponent(recipe.nome)}`}>
              Veja a receita <MdArrowOutward />
            </Link>
          </div>
        ))
      ) : (
        <p>Nenhuma receita encontrada</p>
      )}
    </div>
  );
};

export default RecipeResults;
