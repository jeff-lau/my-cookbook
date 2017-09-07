import React from 'react'
import Home from '../components/home/home'
import MyRecipesContainer from '../components/myRecipes/myRecipesContainer'
import NewRecipeContainer from '../components/newRecipe/newRecipeContainer'
import { Route, Switch } from 'react-router-dom'

const routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/myrecipes" component={MyRecipesContainer} />
			<Route path="/newrecipe" component={NewRecipeContainer} />
			<Route component={Home}/>
		</Switch>
	)
}

export default routes