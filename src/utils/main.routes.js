import React from 'react';
import { BrowserRouter, Switch, Route,HashRouter } from 'react-router-dom';
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
import IndoorLightingGreen from '../components/features/IndoorLightingGreen';
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
import IndoorSecondGreen from '../components/features/IndoorSecondGreen';
import Cartstep1 from '../components/features/Cartstep1';
import BlogSecond from '../components/features/BlogSecond';
import ScrollToTop from '../components/features/layouts/ScrollToTop';
const MainRoutes = (props) => {
	return (
		<HashRouter basename={'/'}>
<ScrollToTop/>
			<Route
					 exact
					path='/'
					name='صفحه اصلی'
					render={(props) => <Home />}>

					</Route>
					<Route

					path='/GreenShop/:id'
					name='فروشگاه سبز'
					render={(props) => <GreenShop/>}>

					</Route>
					<Route

					path='/indoorsecond/:id'
					name='داخلی'
					render={(props) => <IndoorSecond/>}>

					</Route>
					<Route

					path='/indoorsecondgreen/:id'
					name='داخلی'
					render={(props) => <IndoorSecondGreen/>}>

					</Route>
					<Route

					path='/brandsecond/:id'
					name='برند داخلی'
					render={(props) => <BrandSecond/>}>

					</Route>
					<Route

					path='/searchresult/:id'
					name='جستجو'
					render={(props) => <SearchResult/>}>

					</Route>
					<Route

					path='/searchresultfinder/:base/:id/:tech/:color/:light/:hobab'
					name='لامپ یاب جستجو'
					render={(props) => <SearchResultFinder/>}>

					</Route>
					<Route

					path='/brandshop'
					name='برند شاپ'
					render={(props) => <BrandShop/>}>

					</Route>
					<Route

					path='/circumstance'
					name='روشنایی بر اساس محیط'
					render={(props) => <Circumstance/>}>

					</Route>
					<Route

					path='/services'
					name='خدمات'
					render={(props) => <Services/>}>

					</Route>
					<Route

					path='/contactUs'
					name='تماس با ما'
					render={(props) => <ContactUs/>}>

					</Route>
					<Route

					path='/rules'
					name='قوانین و مقررات'
					render={(props) => <Rules/>}>

					</Route>
					<Route

					path='/login'
					name='ورود'
					render={(props) => <Login/>}>

					</Route>
					<Route

					path='/register'
					name='ثبت نام'
					render={(props) => <Register/>}>

					</Route>
					<Route

					path='/forgetpass'
					name='فراموشی رمز'
					render={(props) => <ForgetPass/>}>

					</Route>
					<Route

					path='/verification'
					name='تایید'
					render={(props) => <Verification/>}>

					</Route>
					<Route

					path='/indoorlighting/:id'
					name='روشنایی داخلی'
					render={(props) => <IndoorLighting/>}>

					</Route>
					<Route

					path='/indoorlightingGreen/:id'
					name='روشنایی داخلی'
					render={(props) => <IndoorLightingGreen/>}>

					</Route>
					<Route

					path='/circumstancesecond/:id'
					name='فروشگاه سبمحیط داخلی'
					render={(props) => <Circumstancesecond/>}>

					</Route>
					<Route

					path='/garanty'
					name='گارانتی'
					render={(props) => <Garanty/>}>

					</Route>
					<Route

					path='/repairs'
					name='تعمیرات'
					render={(props) => <Repairs/>}>

					</Route>
					<Route

					path='/lavazemyadaki'
					name='لوازم یدکی'
					render={(props) => <LavazemYadaki/>}>

					</Route>
					<Route

					path='/singleproduct/:id'
					name='محصول'
					render={(props) => <SingleProduct/>}>

					</Route>
					<Route

					path='/design'
					name='طراحیو دیزاین'
					render={(props) => <Design/>}>

					</Route>
					<Route

					path='/news'
					name='اخبار و مقالات'
					render={(props) => <News/>}>

					</Route>
					<Route

					path='/userpanel/:id'
					name='پنل کاربری'
					render={(props) => <UserPanel/>}>

					</Route>
					<Route

					path='/pishnahadvijhe'
					name='پیشنهاد ویژه'
					render={(props) => <PishnahaVijhe/>}>

					</Route>
					<Route

					path='/masarefLED'
					name='مصارف ال ای دی'
					render={(props) => <MasarefLED/>}>

					</Route>
					<Route

					path='/pricebrand'
					name='برند قیمت'
					render={(props) => <PriceBrand/>}>

					</Route>
					<Route

					path='/LEDtechnology/:id'
					name='تکنولوژی ال ای دی'
					render={(props) => <LEDTechnology/>}>

					</Route>
					<Route

					path='/LEDmasarefdakheli/:id'
					name='مصارف داخلی ال ای دی'
					render={(props) => <LEDMasarefDakheli/>}>

					</Route>
					<Route

					path='/pricetable/:id'
					name='جدول قیمت'
					render={(props) => <PriceTable/>}>

					</Route>
					<Route

					path='/darkhastprice'
					name='درخواست استعلام قیمت'
					render={(props) => <DarkhastPrice/>}>

					</Route>
					<Route

					path='/bulbfinderstart'
					name='بالب یاب شروع'
					render={(props) => <BulbFinderStart/>}>

					</Route>
					<Route

					path='/bulbfinder/:id'
					name='لامپ یاب'
					render={(props) => <BulbFinder/>}>

					</Route>
					<Route

					path='/showblog/:id'
					name='مقاله'
					render={(props) => <ShowBlog/>}>

					</Route>
					<Route

					path='/BulbiranShop/:id'
					name='فروشگاه بالبیران'
					render={(props) => <BulbiranShop/>}>

					</Route>
					<Route

					path='/Shegeftangiz'
					name='محصولات شگفت انگیز'
					render={(props) => <Shegeftangiz/>}>

					</Route>
					<Route

					path='/ShegeftGreen'
					name='محصولات شگفت انگیزفروشگاه سبز'
					render={(props) => <ShegeftGreen/>}>

					</Route>
					<Route

					path='/Cartstep1/:id'
					name='سبد خرید'
					render={(props) => <Cartstep1/>}>

					</Route>
					<Route

					path='/BlogSecond/:id'
					name='بلاگ دو'
					render={(props) => <BlogSecond/>}>

					</Route>
					{/* <PrivateRoute path='/pages' /> */}
		</HashRouter>
	);
};

export default MainRoutes;