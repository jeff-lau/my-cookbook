import React, { Component } from 'react'
import * as firebase from "firebase"
import { Button } from 'semantic-ui-react'

class Login extends Component {
	auth = firebase.auth()

	constructor(props) {
		super(props)
		console.log(this.auth.currentUser)



		this.logOut = this.logOut.bind(this)
		this.facebookLogin = this.facebookLogin.bind(this)
	}

	componentDidMount() {
		this.auth.onAuthStateChanged((function(user) {
			if (user) {
				this.props.userLogin({}, user)
			}
		}).bind(this));
	}

	logOut() {
		const { loginLoading, userLogout, history } = this.props
		loginLoading()
		this.auth.signOut().then(() => {
			userLogout()
			history.push('/')
		}).catch((error) => {
			console.log("Signout failed")
			console.log(error)
		})
	}

	facebookLogin() {
		const { loginLoading, userLogin, history } = this.props

		loginLoading()
		const provider = new firebase.auth.FacebookAuthProvider()
		const loginCallBack = (authDetails, userDetails) => {
			userLogin(authDetails, userDetails)
			history.push('/myrecipes')
		}
		this.auth.signInWithPopup(provider).then(function(result) {
			const authDetails = result.credential
			const userDetails = result.user
			loginCallBack(authDetails, userDetails)
		}).catch((error) => {
			console.log(error.message)
		})
	}

	render() {
		const { isLoggedIn, isLoading } = this.props
		let button
		if (isLoggedIn) {
			button = <Button secondary loading={isLoading} onClick={this.logOut}>Logout</Button>
		} else {
			button = <Button primary loading={isLoading} onClick={this.facebookLogin}>Login</Button>
		}

		return (
			<div>
				{ button }
			</div>
		)
	}
}

export default Login