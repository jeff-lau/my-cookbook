const initialState = {
	recipes: {}
}

function userReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_USER_SUCCESS:
			return {
				recipes: action.payload
			}
		default:
			return state
	}
}

// actions
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const getUser = (payload) => {
	return { type: FETCH_USER_SUCCESS, payload }
}

// selector
export const getRecipeKeysForUser = ( { userReducer }) => (userReducer.recipes)
export default userReducer