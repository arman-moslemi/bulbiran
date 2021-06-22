import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/features/Home';
const MainRoutes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
			<Route
					exact
					path='/'
					name='صفحه اصلی'
					render={(props) => <Home {...props}/>}>
						
					</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;