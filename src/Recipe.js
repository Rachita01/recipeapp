import React from 'react';
import './recipe.css';

const Recipe = ({title,calories,image,ingredients}) =>
{   return(
    <div className="recipe">
        <h1>{title}</h1>
        <p>Calories :- {calories}</p>
        <ol>Ingredients:- 
            {ingredients.map(ingredient =>
            (<li>{ingredient.text}</li>))}
            </ol>
        <img className="image" src={image} alt="images"></img>
    </div>
)
}

export default Recipe;