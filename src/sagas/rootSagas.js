import { takeLatest } from 'redux-saga/effects'
import { saveToFirebaseDb,
	getUserData,
	fetchUserAndRecipeSummaries,
	fetchRecipeDetailsFromFirebase,
	SAVE_NEW_RECIPE_TO_FIREBASE,
	GET_USER_DATA,
	FETCH_MY_RECIPES,
	FETCH_RECIPE_DETAILS
} from "./firebaseSagas"

export default function * () {
	yield takeLatest(SAVE_NEW_RECIPE_TO_FIREBASE, saveToFirebaseDb)
	yield takeLatest(GET_USER_DATA, getUserData)
	yield takeLatest(FETCH_MY_RECIPES, fetchUserAndRecipeSummaries)
	yield takeLatest(FETCH_RECIPE_DETAILS, fetchRecipeDetailsFromFirebase)
}