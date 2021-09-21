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
import ShegeftGreen from '../components/features/ShegeftGreen';
import SearchResult from '../components/features/SearchResult';
import SearchResultFinder from '../components/features/SearchResultFinder';
import BrandSecond from '../components/features/BrandSecond';
import IndoorSecond from '../components/features/IndoorSecond';
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
					<Route
					exact
					path='/GreenShop/:id'
					name='فروشگاه سبز'
					render={(props) => <GreenShop/>}>

					</Route>
					<Route
					exact
					path='/indoorsecond/:id'
					name='داخلی'
					render={(props) => <IndoorSecond/>}>

					</Route>
					<Route
					exact
					path='/brandsecond/:id'
					name='برند داخلی'
					render={(props) => <BrandSecond/>}>

					</Route>
					<Route
					exact
					path='/searchresult/:id'
					name='جستجو'
					render={(props) => <SearchResult/>}>

					</Route>
					<Route
					exact
					path='/searchresultfinder/:base/:id/:tech/:color/:light/:hobab'
					name='لامپ یاب جستجو'
					render={(props) => <SearchResultFinder/>}>

					</Route>
					<Route
					exact
					path='/brandshop'
					name='برند شاپ'
					render={(props) => <BrandShop/>}>

					</Route>
					<Route
					exact
					path='/circumstance'
					name='روشنایی بر اساس محیط'
					render={(props) => <Circumstance/>}>

					</Route>
					<Route
					exact
					path='/services'
					name='خدمات'
					render={(props) => <Services/>}>

					</Route>
					<Route
					exact
					path='/contactUs'
					name='تماس با ما'
					render={(props) => <ContactUs/>}>

					</Route>
					<Route
					exact
					path='/rules'
					name='قوانین و مقررات'
					render={(props) => <Rules/>}>

					</Route>
					<Route
					exact
					path='/login'
					name='ورود'
					render={(props) => <Login/>}>

					</Route>
					<Route
					exact
					path='/register'
					name='ثبت نام'
					render={(props) => <Register/>}>

					</Route>
					<Route
					exact
					path='/forgetpass'
					name='فراموشی رمز'
					render={(props) => <ForgetPass/>}>

					</Route>
					<Route
					exact
					path='/verification'
					name='تایید'
					render={(props) => <Verification/>}>

					</Route>
					<Route
					exact
					path='/indoorlighting/:id'
					name='روشنایی داخلی'
					render={(props) => <IndoorLighting/>}>

					</Route>
					<Route
					exact
					path='/circumstancesecond/:id'
					name='فروشگاه سبمحیط داخلی'
					render={(props) => <Circumstancesecond/>}>

					</Route>
					<Route
					exact
					path='/garanty'
					name='گارانتی'
					render={(props) => <Garanty/>}>

					</Route>
					<Route
					exact
					path='/repairs'
					name='تعمیرات'
					render={(props) => <Repairs/>}>

					</Route>
					<Route
					exact
					path='/lavazemyadaki'
					name='لوازم یدکی'
					render={(props) => <LavazemYadaki/>}>

					</Route>
					<Route
					exact
					path='/singleproduct/:id'
					name='محصول'
					render={(props) => <SingleProduct/>}>

					</Route>
					<Route
					exact
					path='/design'
					name='طراحیو دیزاین'
					render={(props) => <Design/>}>

					</Route>
					<Route
					exact
					path='/news'
					name='اخبار و مقالات'
					render={(props) => <News/>}>

					</Route>
					<Route
					exact
					path='/userpanel/:id'
					name='پنل کاربری'
					render={(props) => <UserPanel/>}>

					</Route>
					<Route
					exact
					path='/pishnahadvijhe'
					name='پیشنهاد ویژه'
					render={(props) => <PishnahaVijhe/>}>

					</Route>
					<Route
					exact
					path='/masarefLED'
					name='مصارف ال ای دی'
					render={(props) => <MasarefLED/>}>

					</Route>
					<Route
					exact
					path='/pricebrand'
					name='برند قیمت'
					render={(props) => <PriceBrand/>}>

					</Route>
					<Route
					exact
					path='/LEDtechnology/:id'
					name='تکنولوژی ال ای دی'
					render={(props) => <LEDTechnology/>}>

					</Route>
					<Route
					exact
					path='/LEDmasarefdakheli/:id'
					name='مصارف داخلی ال ای دی'
					render={(props) => <LEDMasarefDakheli/>}>

					</Route>
					<Route
					exact
					path='/pricetable/:id'
					name='جدول قیمت'
					render={(props) => <PriceTable/>}>

					</Route>
					<Route
					exact
					path='/darkhastprice'
					name='درخواست استعلام قیمت'
					render={(props) => <DarkhastPrice/>}>

					</Route>
					<Route
					exact
					path='/bulbfinderstart'
					name='بالب یاب شروع'
					render={(props) => <BulbFinderStart/>}>

					</Route>
					<Route
					exact
					path='/bulbfinder/:id'
					name='لامپ یاب'
					render={(props) => <BulbFinder/>}>

					</Route>
					<Route
					exact
					path='/showblog/:id'
					name='مقاله'
					render={(props) => <ShowBlog/>}>

					</Route>
					<Route
					exact
					path='/BulbiranShop/:id'
					name='فروشگاه بالبیران'
					render={(props) => <BulbiranShop/>}>

					</Route>
					<Route
					exact
					path='/Shegeftangiz'
					name='محصولات شگفت انگیز'
					render={(props) => <Shegeftangiz/>}>

					</Route>
					<Route
					exact
					path='/ShegeftGreen'
					name='محصولات شگفت انگیزفروشگاه سبز'
					render={(props) => <ShegeftGreen/>}>

					</Route>
					{/* <PrivateRoute path='/pages' /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;