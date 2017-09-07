import { connect } from 'react-redux'
import MyRecipes from './myRecipes'
import { withRouter } from 'react-router'

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyRecipes))