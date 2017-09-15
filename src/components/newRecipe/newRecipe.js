import React, { Component } from 'react'
import PageWrapper from '../pageWrapper/pageWrapper'
import { Button, Header, Segment, Form } from 'semantic-ui-react'
import { WrappedInput, WrappedTextArea } from "../formComponents/wrappedSemanticUI";
import { required, maxLength, minLength } from "../formComponents/reduxFormValidators";
import IngredientInput from '../ingredientInput/ingredientInput'
import { Field, reduxForm } from 'redux-form'
import ImageUploader from '../imageUploader/imageUploader'
import StepInput from '../stepInput/stepInput'
import { forEach } from 'lodash'
import ElementRepeater from '../elementRepeater/elementRepeater'

import './newRecipe.css'

class NewRecipe extends Component {

	imageReferences = []

	constructor(props) {
		super(props)
		this.onCancel = this.onCancel.bind(this)
		this.onSuccessImageUpload = this.onSuccessImageUpload.bind(this)
	}

	onCancel() {
		forEach(this.imageReferences, (imageObject) => (imageObject.ref.delete()))
		this.props.history.push('/myrecipes')
	}

	onSuccessImageUpload(imageObject, formFieldName) {
		this.imageReferences.push(imageObject)
		this.props.change(formFieldName, imageObject.url)
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

							<div className="field">
								<div className="main-image">
									<ImageUploader id="imageUploader" userKey={userKey} recipeKey={recipeKey} step="0" onSuccess={imageRef => (this.onSuccessImageUpload(imageRef, 'imageURL'))} />
								</div>
							</div>

							<Field name="dishName" component={WrappedInput} validate={[required]} placeholder="Name of your dish..." />
							<Field name="dishDescription" validate={[]} component={WrappedTextArea} placeholder="Describe your dish..." />

							<Header>Ingredients</Header>
							<ElementRepeater component={IngredientInput} />

							<Header>Method</Header>
							<div className="field">
								<ElementRepeater component={StepInput} id="step" stepNumber={1} userKey={userKey} recipeKey={recipeKey} onImageUploadSuccess={this.onSuccessImageUpload}/>
							</div>

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
		props.addRecipe(props.recipeKey)
		props.history.push('/myrecipes')
	}
})(NewRecipe)


export default RecipeForm