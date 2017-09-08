import { connect } from 'react-redux'
import { fetchMyRecipes } from "../../sagas/firebaseSagas";
import MyRecipes from './myRecipes'
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
	return {
		...state.myRecipesReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMyRecipes: () => {
			dispatch(fetchMyRecipes())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyRecipes))