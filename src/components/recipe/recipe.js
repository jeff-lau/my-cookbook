import React, { Component } from 'react'
import './recipe.css'
import { Icon } from 'semantic-ui-react'
import StepDisplay from '../stepDisplay/stepDisplay'
import StepCarouselContainer from '../stepCarousel/stepCarouselContainer'
class Recipe extends Component {

	constructor(props) {
		super(props)
		this.handleCancel = this.handleCancel.bind(this)
		this.handleStepClick = this.handleStepClick.bind(this)
	}

	componentDidMount() {
		const { fetchRecipe, recipeKey } = this.props
		fetchRecipe(recipeKey)
	}

	handleStepClick(stepIndex) {
		this.props.toggleCarousel(true, stepIndex)
	}

	handleCancel() {
		this.props.clearSelectedRecipe()
		this.props.history.push('/myrecipes')
	}

	render() {
		const { imageURL, dishName } = this.props.recipeSummary
		const { steps = [], ingredients = [] } = this.props.recipe

		if (dishName) {
			return (
				<div className="banner-Image" style={{"backgroundImage" : `url(${imageURL})`}}>

					<div className="content-area">
						<div className="recipe-title">
							{dishName}
							<Icon className="close-icon" name="remove" size="large" onClick={this.handleCancel} />
						</div>
						<div className="recipe-container">
							<div className="ingredients">
								<div className="content-title">Ingredients</div>
								<ul className="ingredients-list">
									{
										ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))
									}
								</ul>
							</div>
							<div className="method">
								<div className="content-title">Method</div>
								<br />
								{
									steps.map((step, index) => (<StepDisplay step={step} key={index} steps={steps} stepIndex={index} onClick={() => (this.handleStepClick(index))}/>))
								}
							</div>

							<StepCarouselContainer steps={steps} />
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Recipe