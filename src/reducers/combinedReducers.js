import { combineReducers } from 'redux'
import authReducer from './authReducer'
import myRecipesReducer from './myRecipesReducer'
import stepCarouselReducer from './stepCarouselReducer'
import selectedRecipeReducer from './selectedRecipeReducer'
import userReducer from './userReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	authReducer,
	myRecipesReducer,
	stepCarouselReducer,
	selectedRecipeReducer,
	userReducer,
	form: formReducer
})