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
import Design from '../components/features/Design';
import News from '../components/features/News';
import UserPanel from '../components/features/UserPanel';
import PishnahaVijhe  from '../components/features/PishnahadVijhe';
import MasarefLED from '../components/features/MasarefLED';
import PriceBrand from '../components/features/PriceBrand';
import LEDMasarefDakheli from '../components/features/LEDMasarefDakheli'
import LEDTechnology from '../components/features/LEDTechnology';
import PriceTable from '../components/features/PriceTable';
import DarkhastPrice from '../components/features/DarkhastPrice';
import BulbFinderStart from '../components/features/BulbFinderStart';
import BulbFinder from '../components/features/BulbFinder';
import ShowBlog from '../components/features/ShowBlog';
import GreenShop from '../components/features/GreenShop';
import BulbiranShop from '../components/features/BulbiranShop';
import Shegeftangiz from '../components/features/Shegeftangiz';
const routes = [
	{
		path: '/',
		exact: true,
		name: 'صفحه اصلی',
		component: <GreenShop/>,
	},
	{
		path: '/pages/GreenShop',
		exact: true,
		name: 'فروشگاه سبز',
		component: <GreenShop/>,
	},
	{
		path: '/GreenShop',
		exact: true,
		name: 'فروشگاه سبز',
		component: <GreenShop/>,
	},
];

export default routes;
