import React, { Component } from 'react'
import PageWrapper from '../pageWrapper/pageWrapper'
import { Button, Header, Segment, Form } from 'semantic-ui-react'
import { WrappedInput, WrappedTextArea } from "../formComponents/wrappedSemanticUI";
import { required } from "../formComponents/reduxFormValidators";
import { Field, reduxForm } from 'redux-form'
import ImageUploader from '../imageUploader/imageUploader'
import * as firebase from 'firebase'
import { forEach } from 'lodash'

import './newRecipe.css'

class NewRecipe extends Component {

	imageReferences = []
	stepImages = []

	constructor(props) {
		super(props)
		this.onCancel = this.onCancel.bind(this)
		this.onSuccessImageUpload = this.onSuccessImageUpload.bind(this)
	}

	onCancel() {
		forEach(this.imageReferences, (imageObject) => (imageObject.ref.delete()))
		this.props.history.push('/myrecipes')
	}

	onSuccessImageUpload(imageObject) {
		this.imageReferences.push(imageObject)
		this.props.change('imageURL', imageObject.url)
	}

	onSubmit() {
	}

	render() {
		const { handleSubmit, userKey, recipeKey } = this.props

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

							<ImageUploader id="imageUploader" userKey={userKey} recipeKey={recipeKey} step="0" onSuccess={this.onSuccessImageUpload}/>

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
		props.addRecipe(props.recipeKey)
		props.history.push('/myrecipes')
	}
})(NewRecipe)


export default RecipeForm