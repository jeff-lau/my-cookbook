import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import PageWrapper from '../pageWrapper/pageWrapper'
import './myRecipes.css'


class MyRecipes extends Component {

	constructor(props) {
		super(props)

		this.createNewRecipe = this.createNewRecipe.bind(this)
	}

	createNewRecipe() {
		this.props.history.push('/newrecipe')
	}

	render() {

		const createRecipeButton = <Button primary onClick={this.createNewRecipe}>New Recipe</Button>

		return (
			<PageWrapper>
				<div className="page-banner">
					<Card
						header='My Recipes'
						meta='Yum'
						description='All your delicious recipes at your finger tip.  Create a new recipe today!'
						extra={createRecipeButton}
					/>
				</div>

				<div className="receipes-container">

				</div>
			</PageWrapper>
		)
	}
}

export default MyRecipes