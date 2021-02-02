import React, { useState, createContext, useEffect } from 'react';
import RecipeList from '../components/RecipeList/RecipeList';
import { v4 as uuidv4 } from 'uuid';
import '../css/App.css';
import RecipeEdit from '../components/RecipeEdit/RecipeEdit';

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
	const [selectedRecipeId, setSelectedRecipeId] = useState();
	const [recipes, setRecipes] = useState(sampleRecipes);
	const selectedRecipe = recipes.find(
		(recipe) => recipe.id === selectedRecipeId
	);

	useEffect(() => {
		const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (recipeJSON != null) {
			setRecipes(JSON.parse(recipeJSON));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
	}, [recipes]);

	const handleRecipeAdd = () => {
		const newRecipe = {
			id: uuidv4(),
			name: '',
			servings: 1,
			cookTime: '',
			instructions: '',
			ingredients: [
				{
					id: uuidv4(),
					name: '',
					amount: '',
				},
			],
		};

		setSelectedRecipeId(newRecipe.id);
		setRecipes([...recipes, newRecipe]);
	};

	const handleRecipeDelete = (id) => {
		if (selectedRecipeId != null && selectedRecipeId === id) {
			setSelectedRecipeId(undefined);
		}
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	};

	const handleRecipeSelect = (id) => {
		setSelectedRecipeId(id);
	};

	const handleRecipeChange = (id, recipe) => {
		const newRecipes = [...recipes];
		const index = newRecipes.findIndex((r) => r.id === id);
		newRecipes[index] = recipe;
		setRecipes(newRecipes);
	};

	const recipeContextValue = {
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect,
		handleRecipeChange,
	};

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList recipes={recipes} />
			{selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
