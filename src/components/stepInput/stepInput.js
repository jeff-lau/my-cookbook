import React, { Component } from 'react'
import ImageUploader from '../imageUploader/imageUploader'
import { WrappedPlainTextArea } from "../formComponents/wrappedSemanticUI";
import { Field } from 'redux-form'
import { required} from "../formComponents/reduxFormValidators";
import './stepInput.css'

class StepInput extends Component {

	constructor(props) {
		super(props)
		this.onImageUploadSuccess = this.onImageUploadSuccess.bind(this)
	}

	onImageUploadSuccess(imageReference) {
		const { cloneIndex = 0, onImageUploadSuccess } = this.props
		onImageUploadSuccess(imageReference, `step${cloneIndex}.imageURL`)
	}

	render() {
		const { userKey, recipeKey, id, cloneIndex = 0 } = this.props

		return(
			<div className="step-container">
				<div className="step-image-container">
					<ImageUploader id={`${id}_${cloneIndex}`} userKey={userKey} recipeKey={recipeKey} onSuccess={this.onImageUploadSuccess} />
				</div>
				<div className="step-description-container">
					<Field style={{ border: 'none', minHeight: '80px'}} name={`step${cloneIndex}.description`} validate={required} component={WrappedPlainTextArea} placeholder={`Step ${cloneIndex}`} />
				</div>
			</div>
		)

	}
}

export default StepInput