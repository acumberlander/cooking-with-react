import React, { useState, createContext, useEffect } from 'react';
import RecipeList from '../components/RecipeList/RecipeList';
import { v4 as uuidv4 } from 'uuid';
import '../css/App.css';
import RecipeEdit from '../components/RecipeEdit/RecipeEdit';

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes);

	useEffect(() => {
		const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (recipeJSON != null) {
			setRecipes(JSON.parse(recipeJSON));
		}
	}, []);

	useEffect(() => {
		console.log('Rendered');
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
	}, [recipes]);

	const handleRecipeAdd = () => {
		const newRecipe = {
			id: uuidv4(),
			name: 'New',
			servings: 1,
			cookTime: '1:00',
			instructions: 'instructions',
			ingredients: [
				{
					id: uuidv4(),
					name: 'Name',
					amount: '1 Tbs',
				},
			],
		};

		setRecipes([...recipes, newRecipe]);
	};

	const handleRecipeDelete = (id) => {
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	};

	const recipeContextValue = {
		handleRecipeAdd,
		handleRecipeDelete,
	};

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList recipes={recipes} />
			<RecipeEdit />
		</RecipeContext.Provider>
	);
}

const sampleRecipes = [
	{
		id: 1,
		name: 'Plain Chicken',
		servings: 3,
		cookTime: '1:45',
		instructions:
			'1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken',
		ingredients: [
			{
				id: 1,
				name: 'Chicken',
				amount: '2 Pounds',
			},
			{
				id: 2,
				name: 'Salt',
				amount: '1 Tbs',
			},
		],
	},
	{
		id: 2,
		name: 'Plain Pork',
		servings: 5,
		cookTime: '0:45',
		instructions: '1. Put paprika on Pork\n2. Put pork in oven\n3. Eat pork',
		ingredients: [
			{
				id: 3,
				name: 'Pork',
				amount: '3 Pounds',
			},
			{
				id: 4,
				name: 'Paprika',
				amount: '2 Tbs',
			},
		],
	},
];

export default App;
