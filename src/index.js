import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from "firebase"
import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducers from './reducers/combinedReducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/rootSagas'

const config = {
	apiKey: "AIzaSyBpDfBUSC5y41bn3FSIbIvy8_TmdL20PvE",
	authDomain: "my-cookbook-a5536.firebaseapp.com",
	databaseURL: "https://my-cookbook-a5536.firebaseio.com",
	storageBucket: "my-cookbook-a5536.appspot.com",
}
firebase.initializeApp(config)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
	combinedReducers,
	compose(
		applyMiddleware(sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

// then run the saga
sagaMiddleware.run(sagas)

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
registerServiceWorker()
