import React, { Component } from 'react'
import { Modal, Icon } from 'semantic-ui-react'
import './stepCarousel.css'

class StepCarousel extends Component {

	constructor(props) {
		super(props)
		this.handlePrevious = this.handlePrevious.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleNext = this.handleNext.bind(this)
	}

	handleClose() {
		this.props.toggleCarousel(false)
	}

	handleNext() {
		let nextIndex = this.props.stepIndex + 1;
		if (nextIndex < this.props.steps.length) {
			this.props.toggleCarousel(true, nextIndex)
		}
	}

	handlePrevious() {
		let nextIndex = this.props.stepIndex - 1;
		if (nextIndex >= 0) {
			this.props.toggleCarousel(true, nextIndex)
		}
	}

	render() {
		const { steps, isCarouselOpen, stepIndex } = this.props
		const currentStep = steps[stepIndex];
		const hasNextStep = stepIndex < steps.length - 1
		const hasPreviousStep = stepIndex > 0

		if (steps.length > 0) {
			return(
				<Modal open={isCarouselOpen} className="modal-container" size="fullscreen">
					<Modal.Actions>
						<Icon name="remove" size="large" onClick={this.handleClose} />
					</Modal.Actions>
					<Modal.Content className="modal-content" style={{background: "black"}}>
						<div className="carousel-container">
							<div className="previous-step">
								{ !hasPreviousStep || <Icon name="chevron left" size="large" onClick={this.handlePrevious}/> }
							</div>
							<div className="current-step">
								<div className="step-image" style={{backgroundImage: `url(${currentStep.imageURL})`}} />
								<div className="step-description">
									{currentStep.description}
								</div>
							</div>
							<div className="next-step">
								{!hasNextStep || <Icon name="chevron right" size="large" onClick={this.handleNext} />}
							</div>
						</div>
					</Modal.Content>
				</Modal>
			)
		}
		return ''
	}
}

export default StepCarousel