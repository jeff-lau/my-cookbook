import { connect } from 'react-redux'
import NewRecipe from './newRecipe'
import { withRouter } from 'react-router'
import { saveNewRecipe } from "../../sagas/firebaseSagas";
import uuid from 'uuid'

const mapStateToProps = ({ authReducer }) => {
	return {
		userKey: authReducer.userDetails.uid,
		recipeKey: uuid.v4()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addRecipe: (recipeKey) => {
			dispatch(saveNewRecipe(recipeKey))
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewRecipe))