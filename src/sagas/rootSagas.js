import { takeLatest } from 'redux-saga/effects'
import { saveToFirebaseDb, fetchFromFirebaseDb, SAVE_NEW_RECIPE_TO_FIREBASE, FETCH_MY_RECIPES } from "./firebaseSagas"

export default function * () {
	yield takeLatest(SAVE_NEW_RECIPE_TO_FIREBASE, saveToFirebaseDb)
	yield takeLatest(FETCH_MY_RECIPES, fetchFromFirebaseDb)
}