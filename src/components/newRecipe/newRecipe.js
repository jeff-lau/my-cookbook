import React, { Component } from 'react'
import PageWrapper from '../pageWrapper/pageWrapper'
import { Button, Header, Segment, Form } from 'semantic-ui-react'
import { WrappedInput, WrappedTextArea } from "../formComponents/wrappedSemanticUI";
import { required } from "../formComponents/reduxFormValidators";
import { Field, reduxForm } from 'redux-form'

import './newRecipe.css'

class NewRecipe extends Component {

	constructor(props) {
		super(props)
		this.onCancel = this.onCancel.bind(this)
	}

	onCancel() {
		this.props.history.push('/myrecipes')
	}

	onSubmit() {
	}

	render() {
		const { handleSubmit } = this.props

		return(
			<PageWrapper>
				<div className="new-recipe-container">
					<Segment>
						<Header>About your dish</Header>

						<Form onSubmit={ handleSubmit(this.onSubmit) }>
							<Field name="dishName" component={WrappedInput} validate={required} placeholder="Name of your dish..." />
							<Field name="dishDescription" component={WrappedTextArea} placeholder="Describe your dish..." />

							<Button primary type="submit">Add Recipe</Button>
							<Button secondary onClick={this.onCancel}>Cancel</Button>
						</Form>
					</Segment>
				</div>
			</PageWrapper>
		)
	}
}

const RecipeForm = reduxForm({
	form: 'recipe',
	onSubmitSuccess: (result, dispatch, props) => {
		props.addRecipe()
		props.history.push('/myrecipes')
	}
})(NewRecipe)


export default RecipeForm