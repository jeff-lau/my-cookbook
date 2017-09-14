import './stepDisplay.css'
import React from 'react'

const StepDisplay = ({step}) => {
	return (
		<div className="step-display-container">
			<div className="step-image" style={{backgroundImage: `url(${step.imageURL})`}}></div>
			<div className="step-description">{step.description}</div>
		</div>
	)
}

export default StepDisplay