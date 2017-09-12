import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

export const WrappedInput = (field) => {
	return (
		<Form.Input type='text' placeholder={field.placeholder}
								error={field.meta.touched && field.meta.invalid} {...field.input}></Form.Input>
	)
}

export const WrappedTextArea = (field) => {
	return (
		<Form.Field control={TextArea} {...field}
								error={field.meta.touched && field.meta.invalid} {...field.input} />
	)
}

export const WrappedPlainTextArea = (field) => {
	return (
		<TextArea {...field} {...field.input} />
	)
}