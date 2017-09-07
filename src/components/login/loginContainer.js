import { connect } from 'react-redux'
import Login from './login'
import { userLogin, userLogout, userLoginLoading } from '../../reducers/authReducer'

const mapStateToProps = (state) => {
	return {
		...state.authReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (authDetails, userDetails) => {
			dispatch(userLogin({
				authDetails,
				userDetails
			}))
		},

		userLogout: () => {
			dispatch(userLogout())
		},

		loginLoading: () => {
			dispatch(userLoginLoading())
		}
	}

}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer