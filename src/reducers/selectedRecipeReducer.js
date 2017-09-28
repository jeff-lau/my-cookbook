const initialState = {
	steps: [],
	ingredients: []
}

const selectedRecipeReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_RECIPE_SUCCESS:
			return {
				steps: action.payload.steps,
				ingredients: action.payload.ingredients
			}
		case CLEAR_SELECTED_RECIPE:
			return initialState
		default:
			return state
	}
}

//Action
const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS'
const CLEAR_SELECTED_RECIPE = 'CLEAR_SELECTED_RECIPE'

export const fetchRecipeSuccess = (recipe) => {
	return { type: FETCH_RECIPE_SUCCESS, payload: recipe}
}

export const clearSelectedRecipe = () => ( { type : CLEAR_SELECTED_RECIPE })

export default selectedRecipeReducer