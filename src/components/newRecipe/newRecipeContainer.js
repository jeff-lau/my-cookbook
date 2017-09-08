import { connect } from 'react-redux'
import NewRecipe from './newRecipe'
import { withRouter } from 'react-router'
import { saveNewRecipe } from "../../sagas/firebaseSagas";

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addRecipe: () => {
			dispatch(saveNewRecipe())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewRecipe))