import React from 'react';
import Home from '../components/features/Home'
import BrandShop from '../components/features/BrandShop'
import Circumstance from '../components/features/Circumstance'
import Services from '../components/features/Services'
import ContactUs from '../components/features/ContactUs'
import Rules from '../components/features/Rules.js';
import Login from '../components/features/Login';
import Register from '../components/features/Register'
import ForgetPass from '../components/features/ForgetPass'
import Verification from '../components/features/Verification';
import InndoorLighting from '../components/features/IndoorLighting';
import Circumstancesecond from '../components/features/CircumstanceSecond';
import Garanty from '../components/features/Garanty';
import Repairs from '../components/features/Repairs'
import LavazemYadaki from '../components/features/LavazemYadaki'
import SingleProduct from '../components/features/SingleProduct'
const routes = [
	{
		path: '/',
		exact: true,
		name: 'صفحه اصلی',
		component: <SingleProduct/>,
	},
];

export default routes;
