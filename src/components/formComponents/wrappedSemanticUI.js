import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

export const WrappedInput = (field) => {
	return (
		<Form.Input label='Dish name' type='text' placeholder={field.placeholder}
								error={field.meta.touched && field.meta.invalid} {...field.input}></Form.Input>
	)
}

export const WrappedFileInput = (field) => {
	return (
		<Form.Input label='Dish name' type='file' placeholder={field.placeholder}
								error={field.meta.touched && field.meta.invalid} {...field.input}></Form.Input>
	)
}

export const WrappedTextArea = (field) => {
	return (
		<Form.Field control={TextArea} label='Describe your dish' placeholder='Tell us more about your dish...'
								error={field.meta.touched && field.meta.invalid} {...field.input} />
	)
}