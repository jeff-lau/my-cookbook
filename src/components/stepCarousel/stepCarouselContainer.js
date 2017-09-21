import { connect } from 'react-redux'
import StepCarousel from './stepCarousel'
import { toggleCarouselState } from '../../reducers/stepCarouselReducer'

const mapStateToProps = ({ stepCarouselReducer }) => {
	return {
		isCarouselOpen: stepCarouselReducer.isOpen,
		stepIndex: stepCarouselReducer.stepIndex
	}
}

const mapDispatchToProps =(dispatch) => {
	return {
		toggleCarousel: (isOpen, stepIndex) => {
			dispatch(toggleCarouselState(isOpen, stepIndex))
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StepCarousel)
