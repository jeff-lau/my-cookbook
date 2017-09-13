import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import PageWrapper from '../pageWrapper/pageWrapper'
import './myRecipes.css'

class MyRecipes extends Component {

	constructor(props) {
		super(props)
		this.createNewRecipe = this.createNewRecipe.bind(this)
	}

	componentDidMount() {
		this.props.fetchMyRecipes()
	}

	createNewRecipe() {
		this.props.history.push('/newrecipe')
	}

	render() {
		const { myRecipes } = this.props
		const createRecipeButton = <Button primary onClick={this.createNewRecipe}>New Recipe</Button>

		return (
			<PageWrapper>
				<div className="my-recipes-page">
					<div className="card-container" >
						<Card
							header='My Recipes'
							meta='Yum'
							description='All your delicious recipes at your finger tip.  Create a new recipe today!'
							extra={createRecipeButton}
						/>
					</div>

					{
						Object.keys(myRecipes).map(function(key, index) {
							const recipe = myRecipes[key]
								return (
									<div className="card-container" key={key}>
										<Card
											image={recipe.imageURL}
											key={key}
											header={recipe.dishName}
											meta="Pie"
											description={recipe.dishDescription}
										/>
									</div>
								)
						})
					}
				</div>
			</PageWrapper>
		)
	}
}

export default MyRecipes