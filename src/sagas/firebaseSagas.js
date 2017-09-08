import * as firebase from "firebase";
import { getFormValues } from 'redux-form'

export const saveToFirebaseDb = function * (action) {
	try {
		const db = firebase.database()

		console.log(getFormValues('recipe'))

		// Get the auth token
		// Get the form data.
		// save to the database
		// tell redux to clear form data?
	} catch (e) {
	}
}

//actions
export const SAVE_NEW_RECIPE_TO_FIREBASE = 'SAVE_NEW_RECIPE_TO_FIREBASE'
export const saveNewRecipe = () => ({
	type: SAVE_NEW_RECIPE_TO_FIREBASE
})
