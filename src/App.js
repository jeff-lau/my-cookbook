import React from 'react';
import './App.css';
import Routes from './route/route'
import LoginContainer from './components/login/loginContainer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const App = ({ store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
