import React, { useContext } from 'react';
import Recipe from '../Recipe/Recipe';
import { RecipeContext } from '../../App/App';

const RecipeList = ({ recipes }) => {
	const { handleRecipeAdd } = useContext(RecipeContext);

	return (
		<div className="recipe-list">
			<div>
				{recipes.map((recipe) => (
					<Recipe key={recipe.id} {...recipe} />
				))}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button className="btn btn--primary" onClick={handleRecipeAdd}>
					Add Recipe
				</button>
			</div>
		</div>
	);
};

export default RecipeList;
