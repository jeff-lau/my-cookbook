import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Recipe from './recipe'

const mapStateToProps = ({ myRecipesReducer }, props) => {

	const { recipeKey } = props.match.params

	return {
		recipe: myRecipesReducer.myRecipes[recipeKey],
		recipeKey
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe))