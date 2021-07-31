import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/features/Home';
import BrandShop from '../components/features/BrandShop';
import Circumstance from '../components/features/Circumstance';
import Services from '../components/features/Services';
import ContactUs from '../components/features/ContactUs';
import Rules from '../components/features/Rules.js';
import Login from '../components/features/Login';
import Register from '../components/features/Register'
import ForgetPass from '../components/features/ForgetPass'
import Verification from '../components/features/Verification';
import IndoorLighting from '../components/features/IndoorLighting';
import Circumstancesecond from '../components/features/CircumstanceSecond';
import Garanty from '../components/features/Garanty';
import Repairs from '../components/features/Repairs'
import LavazemYadaki from '../components/features/LavazemYadaki'
import SingleProduct from '../components/features/SingleProduct';
import Design from '../components/features/Design';
import News from '../components/features/News';
const MainRoutes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
			<Route
					exact
					path='/'
					name='صفحه اصلی'
					render={(props) => <News {...props}/>}>
						
					</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;