import { connect } from 'react-redux'
import MyRecipes from './myRecipes'
import { withRouter } from 'react-router'

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = () => {
	return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyRecipes))