import React, { Component } from 'react'
import PageWrapper from '../pageWrapper/pageWrapper'
import { Input, Button, TextArea, Header, Segment, Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

import './newRecipe.css'

class NewRecipe extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { handleSubmit } = this.props

		return(
			<PageWrapper>
				<div className="new-recipe-container">
					<Segment>
						<Header>About your dish</Header>

						<Form onSubmit={ handleSubmit }>
							<div className="field">
								<label htmlFor="dishName">Name</label>
								<Field name="dishName" component={Input} placeholder="Name of your dish..." />
							</div>

							<div className="field">
								<label htmlFor="dishName">Description</label>
								<Field name="dishName" component={TextArea} placeholder="Describe your dish..." />
							</div>


							<Button primary type="submit">Add Recipe</Button>
							<Button secondary>Cancel</Button>
						</Form>
					</Segment>
				</div>
			</PageWrapper>
		)
	}
}

const RecipeForm = reduxForm({
	// a unique name for the form
	form: 'recipe'
})(NewRecipe)


export default RecipeForm