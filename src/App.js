import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "5923c232";
  const APP_KEY = "7e635b7cc25813149ddee91bd701a031";
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };getRecipes();},[query]);

  

  const updateSearch = e =>
  {
    setSearch(e.target.value);
  };

  const getSearch = e =>
  {
    e.preventDefault(); 
    setQuery(search);
    setSearch('');
  };
  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )
};

export default App;
