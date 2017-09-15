import React from 'react'
import './ingredientInput.css'
import { Field } from 'redux-form'
import { WrappedInput } from "../formComponents/wrappedSemanticUI";
import { required} from "../formComponents/reduxFormValidators";

const IngredientInput = (props) => {
	const { cloneIndex = '' } = props

	return (
		<Field name={`ingredient${cloneIndex}`} component={WrappedInput} validate={[required]} {...props} placeholder="Ingredient"  />
	)
}

export default IngredientInput