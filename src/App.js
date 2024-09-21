import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from '../src/components/Introduction';
import SelectIngredients from '../src/components/SelectIngredients';
import RecipeResults from '../src/components/RecipeResults';
import Footer from '../src/components/Footer';
import RecipeDetails from '../src/components/RecipeDetails';
import '../src/styles/App.scss';

const App = () => {
  const [compatibleRecipes, setCompatibleRecipes] = useState([]);
  const [almostThereRecipes, setAlmostThereRecipes] = useState([]);

  return (
    <Router basename="">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Introduction />
              <SelectIngredients setCompatibleRecipes={setCompatibleRecipes} setAlmostThereRecipes={setAlmostThereRecipes} />
              {compatibleRecipes.length > 0 && (
                <RecipeResults recipes={compatibleRecipes} title="Receitas Compatíveis" type="compatible" />
              )}
              {almostThereRecipes.length > 0 && (
                <RecipeResults recipes={almostThereRecipes} title="Quase lá..." type="almostThere" />
              )}
              <Footer />
            </>
          } />
          <Route path="/receita/:nome" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
