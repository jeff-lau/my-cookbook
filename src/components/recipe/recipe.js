import React, { Component } from 'react'
import './recipe.css'
import { Button } from 'semantic-ui-react'
import StepDisplay from '../stepDisplay/stepDisplay'
import StepCarouselContainer from '../stepCarousel/stepCarouselContainer'
class Recipe extends Component {

	constructor(props) {
		super(props)
		this.handleCancel = this.handleCancel.bind(this)
		this.handleStepClick = this.handleStepClick.bind(this)
	}

	handleStepClick(stepIndex) {
		this.props.toggleCarousel(true, stepIndex)
	}

	handleCancel() {
		this.props.history.push('/myrecipes')
	}

	render() {
		console.log('render recipe')
		const { recipe: { imageURL, dishName }} = this.props
		const steps = []
		const ingredients = []
		for (var name in this.props.recipe) {
			if (name.startsWith('step')) {
				steps.push(this.props.recipe[name])
			}
			if (name.startsWith(('ingredient'))) {
				ingredients.push(this.props.recipe[name])
			}
		}

		return (
			<div className="banner-Image" style={{"backgroundImage" : `url(${imageURL})`}}>
				<div className="content-area">
					<div className="recipe-title">
						{dishName}
					</div>

					<div className="recipe-container">
						<div className="ingredients">
							<div className="content-title">Ingredients</div>
							<br />
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
						<Button secondary onClick={this.handleCancel}>Cancel</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default Recipe