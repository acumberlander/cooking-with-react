import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients }) => {
	const ingredientElements = ingredients.map((ingredient) => (
		<Ingredient key={ingredient.id} {...ingredient} />
	));

	return <div className="ingredient-grid">{ingredientElements}</div>;
};

export default IngredientList;
