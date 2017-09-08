import * as firebase from "firebase";
import { select, put } from 'redux-saga/effects'
import { FETCH_RECIPES_SUCCESS } from "../reducers/myRecipesReducer";
import { getUserDetails } from '../reducers/authReducer'
import { getFormValues } from 'redux-form'

export const saveToFirebaseDb = function * (action) {
	try {
		const db = firebase.database()
		const formValues = yield select(getFormValues('recipe'))
		const userDetails = yield select(getUserDetails)
		db.ref(`users/${userDetails.uid}`).child('recipes').push(formValues)
	} catch (e) {
		console.log(e)
	}
}

export const fetchFromFirebaseDb = function * () {
	try {
		const db = firebase.database()
		const userDetails = yield select(getUserDetails)
		const snapshot = yield db.ref(`users/${userDetails.uid}`).once('value')
		const { recipes } = snapshot.val()

		yield put({ type: FETCH_RECIPES_SUCCESS, payload: recipes })

	} catch (e) {
		console.log(e)
	}
}

//actions
export const SAVE_NEW_RECIPE_TO_FIREBASE = 'SAVE_NEW_RECIPE_TO_FIREBASE'
export const FETCH_MY_RECIPES = 'FETCH_MY_RECIPES'

export const saveNewRecipe = () => ({
	type: SAVE_NEW_RECIPE_TO_FIREBASE
})

export const fetchMyRecipes = () => ({
	type: FETCH_MY_RECIPES
})
