import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

class StepModal extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Modal trigger={this.props.trigger} basic size='small'>
				<Modal.Content>
					<p>Display Step information here!!</p>
				</Modal.Content>
			</Modal>
		)
	}
}

export default StepModal