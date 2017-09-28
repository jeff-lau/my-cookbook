import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Recipe from './recipe'
import { fetchRecipeDetails } from "../../sagas/firebaseSagas";
import { toggleCarouselState } from "../../reducers/stepCarouselReducer";
import  { clearSelectedRecipe } from "../../reducers/selectedRecipeReducer";

const mapStateToProps = ({myRecipesReducer, selectedRecipeReducer, stepCarouselReducer }, props) => {

	const { recipeKey } = props.match.params

	return {
		isCarouselOpen: stepCarouselReducer.isOpen,
		recipe: selectedRecipeReducer,
		recipeSummary: myRecipesReducer.myRecipes[recipeKey],
		recipeKey
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCarousel: (isOpen, stepIndex) => {
			dispatch(toggleCarouselState(isOpen, stepIndex))
		},

		fetchRecipe: (recipeKey) => {
			dispatch(fetchRecipeDetails(recipeKey))
		},

		clearSelectedRecipe: () => (dispatch(clearSelectedRecipe()))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe))