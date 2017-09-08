
const initState = {
	myRecipes: {}
}

function myRecipesReducer(state = initState, action) {
	switch(action.type) {
		case FETCH_RECIPES_SUCCESS:
			return {
				myRecipes: action.payload
			}
		default:
			return state

	}
}

// action
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export default myRecipesReducer
