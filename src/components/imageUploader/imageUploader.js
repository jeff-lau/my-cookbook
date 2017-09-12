import React, { Component } from 'react'
import './imageUploader.css'
import { forEach } from 'lodash'
import * as firebase from 'firebase'
import uuid from 'uuid'

const MAX_SIZE = 8192000
class ImageUploader extends Component {

	uploadTask = null

	constructor(props) {
		super(props)

		this.handleSelectFiles = this.handleSelectFiles.bind(this)
		this.uploadSuccess = this.uploadSuccess.bind(this)
		this.uploadFailed = this.uploadFailed.bind(this)
		this.progressUpdate = this.progressUpdate.bind(this)

		this.state = {
			isUploadInProgress: false,
			percentageComplete: 0,
			imageUploaded: false
		}
	}

	handleSelectFiles(event) {

		const { userKey, recipeKey } = this.props
		const { files } = event.target

		if (files.length > 1) {
			alert('One file at a time')
		}

		forEach(files, (file) => {
			if (file.size > MAX_SIZE) {
				alert('image too big!')
			} else {
				this.uploadTask = firebase.storage().ref()
					.child('images')
					.child(userKey)
					.child(recipeKey)
					.child(uuid.v4()).put(file)

				this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED)(
					{
						'next': this.progressUpdate,
						'error': this.uploadFailed,
						'complete': this.uploadSuccess
					}
				)
			}
		})
	}

	progressUpdate(snapshot) {
		const { bytesTransferred, totalBytes } = snapshot
		this.setState({
			isUploadInProgress: true,
			percentageComplete: Math.round(bytesTransferred * 100 /totalBytes),
			imageUploaded: false
		})
	}

	uploadSuccess() {
		this.setState({
			isUploadInProgress: false,
			percentageComplete: 0,
			imageUploaded: true
		})
		if (this.props.onSuccess) {
			this.props.onSuccess({
					ref: this.uploadTask.snapshot.ref,
					url: this.uploadTask.snapshot.downloadURL
				})
		}
	}

	uploadFailed() {
		this.setState({
			isUploadInProgress: false,
			percentageComplete: 0,
			imageUploaded: false
		})
	}

	renderUploadIcon() {
		const { id } = this.props
		return (
			<div className="image-uploader-container" >
				<input id={id} type='file' onChange={this.handleSelectFiles} />
				<label htmlFor={id}>+</label>
			</div>
		)
	}

	renderProgressUpdate() {
		const { percentageComplete } = this.state
		return (
			<div className="image-uploader-container">
				<div className="progress-update">{percentageComplete}</div>
			</div>
		)
	}

	renderImageDisplay() {
		const divStyle = {
			backgroundImage: `url(${this.uploadTask.snapshot.downloadURL})`
		}

		return(
			<div className="image-display" style={divStyle}>
			</div>
		)
	}

	render() {
		const { isUploadInProgress, imageUploaded } = this.state

		return (
			isUploadInProgress
				? this.renderProgressUpdate()
				: imageUploaded ? this.renderImageDisplay() : this.renderUploadIcon()
		)
	}
}

export default ImageUploader