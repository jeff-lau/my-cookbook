import React, { Component } from 'react'
import './recipe.css'
import { Button } from 'semantic-ui-react'
import StepDisplay from '../stepDisplay/stepDisplay'
class Recipe extends Component {

	constructor(props) {
		super(props)
		this.handleCancel = this.handleCancel.bind(this)
	}

	componentDidMount() {

	}

	handleCancel() {
		this.props.history.push('/myrecipes')
	}

	render() {

		const { imageURL, dishName } = this.props.recipe
		const steps = []
		for (var name in this.props.recipe) {
			if (name.startsWith('step')) {
				steps.push(this.props.recipe[name])
			}
		}
		return (
			<div className="banner-Image" style={{"backgroundImage" : `url(${imageURL})`}}>
				<Button secondary onClick={this.handleCancel}>Cancel</Button>


				<div className="content-area">
					<div className="recipe-title">
						{dishName}
					</div>

					<div className="recipe-container">
						<div className="ingredients">
							Ingredients
						</div>
						<div className="method">
							Method
							<br />
							{
								steps.map((step, index) => (<StepDisplay step={step} key={index}/>))
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Recipe