import React, { Component } from 'react';
import './App.css';
import Routes from './route/route'
import LoginContainer from './components/login/loginContainer'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogin} from "./reducers/authReducer";
import * as firebase from "firebase"

class App extends Component {

  componentDidMount() {
		firebase.auth().onAuthStateChanged((function(user) {
			if (user) {
				this.props.userLogin({}, user)
			}
		}).bind(this));
	}

  render() {
		return (
      <BrowserRouter>
        <div className="my-cookbook-root">
          <div className="login-nav-bar">
            <LoginContainer />
          </div>
          <div id="appContainer">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
		)
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
	}
}

export default connect(null, mapDispatchToProps)(App);
