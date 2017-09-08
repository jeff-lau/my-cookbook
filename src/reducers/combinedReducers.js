import { combineReducers } from 'redux'
import authReducer from './authReducer'
import myRecipesReducer from './myRecipesReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	authReducer,
	myRecipesReducer,
	form: formReducer
})