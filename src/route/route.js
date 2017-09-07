import React from 'react'
import Home from '../components/home/home'
import { Route, Switch } from 'react-router-dom'

const routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home}/>
		</Switch>
	)
}

export default routes