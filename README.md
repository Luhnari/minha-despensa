# Minha Despensa

**Sua cozinha, suas regras: Descubra receitas práticas com os ingredientes que você já tem em casa!**

## Sobre o Projeto

"Minha Despensa" é uma aplicação web que ajuda você a encontrar receitas personalizadas com base nos ingredientes disponíveis em sua despensa. O objetivo do projeto é proporcionar praticidade e economia, permitindo que você prepare refeições com o que já tem em mãos, sem precisar sair de casa.

## Funcionalidades

- **Busca de Receitas Personalizadas:** Insira os ingredientes que você tem em casa e receba sugestões de receitas que podem ser preparadas.
- **Exploração de Novas Receitas:** Descubra novas receitas baseadas em seus ingredientes favoritos.
- **Interface Simples e Intuitiva:** Um design moderno e minimalista para facilitar sua experiência.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend:**
  - React.js
  - HTML5
  - CSS3 (SCSS)
- **Backend:**
  - Node.js
  - Express.js
- **Outros:**
  - Webpack
  - Babel

## Estrutura do Projeto

```bash
minha-despensa/
│
├── public/             # Arquivos públicos, como o HTML
│   └── index.html
│
├── src/                # Código fonte do projeto
│   ├── components/     # Componentes React
│   │   ├── Footer.js
│   │   ├── Introduction.js
│   │   ├── RecipeDetails.js
│   │   ├── RecipeResults.js
│   │   └── SelectIngredients.js
│   ├── images/         # Imagens usadas no projeto
│   │   ├── Blob.png
│   │   ├── bolo.webp
│   │   ├── cesta-compra.webp
│   │   ├── cupcake.webp
│   │   ├── drink.webp
│   │   ├── Frame.png
│   │   ├── logo.webp
│   │   ├── mulheres-cozinhando.webp
│   │   └── Shape bg.png
│   ├── receitas/       # Arquivos de receitas em JSON
│   ├── styles/         # Estilos (SCSS)
│   │   ├── App.scss
│   │   ├── Footer.scss
│   │   ├── Introduction.scss
│   │   ├── RecipeDetails.scss
│   │   ├── RecipeResults.scss
│   │   └── SelectIngredients.scss
│   ├── App.js          # Componente principal do React
│   ├── App.test.js     # Testes do App
│   ├── index.js        # Ponto de entrada do React
│   └── reportWebVitals.js
│
├── .gitignore          # Arquivos ignorados pelo Git
├── package-lock.json   # Controle de dependências
├── package.json        # Configurações do npm e scripts
├── README.md           # Documentação do projeto
└── webpack.config.js   # Configuração do Webpack
