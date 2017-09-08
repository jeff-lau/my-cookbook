export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING'

const initState = {
	authDetails: {},
	userDetails: {},
	isLoggedIn: false,
	isLoading: false
}


function authReducer(state = initState, action) {
	switch(action.type) {
		case USER_LOGIN:
			return {
				...action.payload,
				isLoggedIn: true,
				isLoading: false
			}
		case USER_LOGOUT:
			return initState
		case USER_LOGIN_LOADING:
			return {
				...state,
				isLoading: true
			}
		default:
			return state
	}

}

// actions
export const userLogin = (payload) => ( { type : USER_LOGIN, payload })
export const userLogout = () => ( { type : USER_LOGOUT })
export const userLoginLoading = () => ({ type: USER_LOGIN_LOADING })

// selectors
export const getAuthDetails = ({ authReducer }) => {
	return authReducer.authDetails
}
export const getUserDetails = ({ authReducer }) => {
	return authReducer.userDetails
}

export default authReducer