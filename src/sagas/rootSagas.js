import { takeLatest } from 'redux-saga/effects'
import { saveToFirebaseDb, SAVE_NEW_RECIPE_TO_FIREBASE } from "./firebaseSagas";

export default function * () {
	yield takeLatest(SAVE_NEW_RECIPE_TO_FIREBASE, saveToFirebaseDb);
}