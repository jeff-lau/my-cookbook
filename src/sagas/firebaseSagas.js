import * as firebase from "firebase";
import { select, put, call } from 'redux-saga/effects'
import { FETCH_RECIPES_SUCCESS } from "../reducers/myRecipesReducer";
import { getUserDetails } from '../reducers/authReducer'
import { getUser, getRecipeKeysForUser } from "../reducers/userReducer";
import { fetchRecipeSuccess } from "../reducers/selectedRecipeReducer";
import { getFormValues } from 'redux-form'
import { forEach } from 'lodash'

export const saveToFirebaseDb = function * (action) {
	try {
		const db = firebase.database()
		const formValues = yield select(getFormValues('recipe'))
		const userDetails = yield select(getUserDetails)

		// Save the recipe summary details first to create the key:
		const reference = db.ref(`recipes`).push({
			dishName: formValues.dishName,
			dishDescription: formValues.dishDescription,
			imageURL: formValues.imageURL
		})

		reference.then((reference) => {
			// append recipe to user.
			db.ref(`users/${userDetails.uid}`).child('recipes').child(reference.key).set(reference.key)

			const steps = []
			const ingredients = []
			forEach(formValues, (value, key) => {
				if (key.startsWith('step')) {
					steps.push(value)
				} else if (key.startsWith('ingredient')) {
					ingredients.push(value)
				}
			})
			// save the recipe details
			db.ref(`recipeDetails/${reference.key}`).set({
				steps,
				ingredients
			})
		})
	} catch (e) {
		console.log(e)
	}
}

export const fetchUserData = function * () {
	try {
		const db = firebase.database()
		const userDetails = yield select(getUserDetails)
		const snapshot = yield db.ref(`users/${userDetails.uid}`).once('value')
		const { recipes } = snapshot.val()
		yield put(getUser(recipes))

	} catch (e) {
		console.log(e)
	}
}

export const fetchAllRecipeSummary = function * () {
	try {
		const db = firebase.database()
		const recipeKeysObj = yield select(getRecipeKeysForUser)
		const recipeKeys = Object.values(recipeKeysObj);

		const snapshots = yield Promise.all(recipeKeys.map( key => (db.ref(`recipes`).child(key).once('value'))))

		const recipes = {}
		const len = recipeKeys.length
		for (let i = 0; i < len; i++ ) {
			recipes[recipeKeys[i]] = snapshots[i].val()
		}
		yield put({ type: FETCH_RECIPES_SUCCESS, payload: recipes })
	} catch (e) {
		console.log(e)
	}
}

export const fetchUserAndRecipeSummaries = function * () {
	yield call(fetchUserData)
	yield call(fetchAllRecipeSummary)
}

export const fetchRecipeDetailsFromFirebase = function * (action) {
	try {
		const db = firebase.database()
		const snapshot = yield db.ref(`recipeDetails/${action.payload}`).once('value')
		yield put(fetchRecipeSuccess(snapshot.val()))
	} catch (e) {
		console.log(e)
	}
}

//actions
export const SAVE_NEW_RECIPE_TO_FIREBASE = 'SAVE_NEW_RECIPE_TO_FIREBASE'
export const FETCH_RECIPE_DETAILS = 'FETCH_RECIPE_DETAILS'
export const FETCH_MY_RECIPES = 'FETCH_MY_RECIPES'
export const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = () => ({
	type: GET_USER_DATA
})

export const saveNewRecipe = (recipeKey) => ({
	type: SAVE_NEW_RECIPE_TO_FIREBASE, payload: recipeKey
})

export const fetchMyRecipes = (recipeKey) => ({
	type: FETCH_MY_RECIPES, payload: recipeKey
})

export const fetchRecipeDetails = (recipeKey) => ({
	type: FETCH_RECIPE_DETAILS,
	payload: recipeKey
})
