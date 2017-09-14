import React from 'react'
import Home from '../components/home/home'
import MyRecipesContainer from '../components/myRecipes/myRecipesContainer'
import NewRecipeContainer from '../components/newRecipe/newRecipeContainer'
import RecipeContainer from '../components/recipe/recipeContainer'
import ProtectedRoute from './protectedRoute'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const routes = (props) => {
	const { isLoggedIn } = props

	console.log(`Is Logged In?  -  ${isLoggedIn}`)
	return (
		<Switch>
			<Route exact path="/" render={() => (isLoggedIn ? (<Redirect to="/myrecipes" />) : (<Home />))} />
			<ProtectedRoute exact path="/myrecipes" isAuthenticated={isLoggedIn} component={MyRecipesContainer} />
			<ProtectedRoute path="/newrecipe" isAuthenticated={isLoggedIn} component={NewRecipeContainer} />
			<ProtectedRoute path="/myrecipes/:recipeKey" isAuthenticated={isLoggedIn} component={RecipeContainer} />
			<Route component={Home}/>
		</Switch>
	)
}

const mapStateToProps = (state) => {
	return {
		...state.authReducer
	}
}
	
export default withRouter(connect(mapStateToProps, () => ({}))(routes))