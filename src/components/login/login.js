import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import * as firebase from "firebase";
import { Button } from 'semantic-ui-react'

class Login extends Component {
	auth = firebase.auth()

	constructor(props) {
		super(props)
		this.logOut = this.logOut.bind(this)
		this.facebookLogin = this.facebookLogin.bind(this)
	}

	logOut() {
		this.props.loginLoading()
		this.auth.signOut().then(() => {
			this.props.userLogout()
		}).catch((error) => {
			console.log("Signout failed")
			console.log(error)
		})
	}

	facebookLogin() {
		const { loginLoading, userLogin, history } = this.props

		loginLoading()
		const provider = new firebase.auth.FacebookAuthProvider()
		const loginCallBack = () => {
			userLogin()
			history.push('/myrecipes')
		}
		this.auth.signInWithPopup(provider).then(function(result) {
			const creds = result.credential;
			const user = result.user;
			loginCallBack(creds, user)
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