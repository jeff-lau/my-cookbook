import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Recipe from './recipe'
import { toggleCarouselState } from "../../reducers/stepCarouselReducer";

const mapStateToProps = ({ myRecipesReducer, stepCarouselReducer }, props) => {

	const { recipeKey } = props.match.params

	return {
		isCarouselOpen: stepCarouselReducer.isOpen,
		recipe: myRecipesReducer.myRecipes[recipeKey],
		recipeKey
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCarousel: (isOpen, stepIndex) => {
			dispatch(toggleCarouselState(isOpen, stepIndex))
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe))