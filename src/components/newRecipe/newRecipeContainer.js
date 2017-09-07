import { connect } from 'react-redux'
import NewRecipe from './newRecipe'
import { withRouter } from 'react-router'

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewRecipe))