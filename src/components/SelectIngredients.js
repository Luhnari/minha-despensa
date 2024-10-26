import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import receitasJson from '../receitas/receitas.json';
import frameImage from '../images/Frame.png';

const SelectIngredients = ({ setCompatibleRecipes, setAlmostThereRecipes }) => {
  const [input, setInput] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchingIngredients, setMatchingIngredients] = useState([]);
  const [showNoIngredientsMessage, setShowNoIngredientsMessage] = useState(false);

  useEffect(() => {
    if (input) {
      const allIngredients = new Set();
      receitasJson.receitas.forEach(receita => {
        receita.ingredientes.forEach(ingrediente => {
          allIngredients.add(ingrediente.ingrediente.toLowerCase());
        });
      });
      const filteredIngredients = Array.from(allIngredients).filter(ing => ing.includes(input.toLowerCase()));
      setMatchingIngredients(filteredIngredients);
    } else {
      setMatchingIngredients([]);
    }
  }, [input]);

  const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
    setInput('');
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
  };

  const handleFindRecipes = () => {
    if (selectedIngredients.length === 0) {
      setShowNoIngredientsMessage(true);
      return;
    }

    setShowNoIngredientsMessage(false);

    const compatible = [];
    const almostThere = [];

    receitasJson.receitas.forEach((receita) => {
      const ingredientesReceita = receita.ingredientes.map(i => i.ingrediente.toLowerCase());
      const matching = selectedIngredients.filter(i => ingredientesReceita.includes(i.toLowerCase()));
      
      if (matching.length === ingredientesReceita.length && selectedIngredients.length >= ingredientesReceita.length) {
        compatible.push(receita);
      } else if (matching.length >= ingredientesReceita.length - 3 && matching.length < ingredientesReceita.length) {
        almostThere.push({
          ...receita,
          missingIngredients: ingredientesReceita.filter(i => !matching.includes(i)),
        });
      }
    });

    setCompatibleRecipes(compatible);
    setAlmostThereRecipes(almostThere);
  };

  return (
    <div className="select-ingredients-container">
      <div className="select-ingredients">
        <h2>Selecione seus ingredientes</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pesquisar ingredientes"
        />
        <div className="ingredient-matches">
          {matchingIngredients.map((ingredient, index) => (
            <div key={index} className="ingredient-option">
              {ingredient}
              <FaPlusCircle onClick={() => handleAddIngredient(ingredient)} />
            </div>
          ))}
        </div>

        <div className="selected-ingredients">
          {selectedIngredients.map((ingredient, index) => (
            <div key={index} className="ingredient-selected">
              {ingredient}
              <FaTrashAlt onClick={() => handleRemoveIngredient(ingredient)} />
            </div>
          ))}
        </div>

        {showNoIngredientsMessage && (
          <p className="no-ingredients-message">Nenhum ingrediente selecionado.</p>
        )}

        <button onClick={handleFindRecipes}>Ache sua Receita</button>
      </div>

      <div className="image-container">
        <img src={frameImage} alt="Imagem decorativa" />
      </div>
    </div>
  );
};

export default SelectIngredients;
