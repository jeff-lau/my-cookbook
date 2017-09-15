import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { forEach } from 'lodash'
import './elementRepeater.css'

class ElementRepeater extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.repeatComponent = this.repeatComponent.bind(this)

		this.state = {
			repeat: 1
		}
	}

	handleClick(event) {
		event.preventDefault()
		this.setState({
			repeat: this.state.repeat + 1
		})
	}

	repeatComponent() {
		let output = []
		const { component : Component, ...rest } = this.props
		for (let i = 1; i < this.state.repeat; i++) {
			output.push(<div className="repeat-element-container" key={i + 1}><Component {...rest} cloneIndex={i + 1} /></div>)
		}
		return output
	}

	render() {
		const { component : Component, ...rest } = this.props
		return(
			<div>
				<div className="repeat-element-container">
					<Component {...rest} cloneIndex={1}/>
				</div>

				{
					forEach(this.repeatComponent(), (component) => (component))
				}
				<Button basic color='blue' onClick={this.handleClick}>Add another item</Button>
			</div>
		)
	}
}

export default ElementRepeater