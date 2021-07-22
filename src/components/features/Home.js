
import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import APlus from './assets/icons/APlus'
import Clock from './assets/icons/Clock'
import Degree from './assets/icons/Degree'
import Garanteewhite from './assets/icons/GaranteeWhite'
import LED from './assets/icons/LED'
import SaveEnergy from './assets/icons/SaveEnergy'
import Standard from './assets/icons/Standard'
import UvFree from './assets/icons/UvFree'
import LedButton from './assets/icons/LedButton'
import Slider from './layouts/Slider'
import CircumstanceBanner from './assets/icons/CircumstanceBanner'
import LedBanner from './assets/icons/LedBanner'
import { FaAngleLeft } from 'react-icons/fa';
import Slide1 from './assets/img/slide1.jpg';
import Lamp from './assets/img/lamp.png';
import Rise from './assets/img/rise.png';
import Lavazem from './assets/img/lavazemjanebi.png';
import Inner from './assets/img/inner.png';
import Outdoor from './assets/img/outdoor.png';
import Tazein from './assets/img/tazein.png';
import b1 from './assets/img/b1.png';
import b2 from './assets/img/b2.png';
import b3 from './assets/img/b3.jpeg';
import b4 from './assets/img/b4.png';
import b5 from './assets/img/b5.png';
import b6 from './assets/img/b6.png';
import b7 from './assets/img/b7.png';
import b8 from './assets/img/b8.png';
import b9 from './assets/img/b9.png';
import b10 from './assets/img/b10.png';
import b11 from './assets/img/b11.png';
import b12 from './assets/img/b12.png';
import Suggestion from './assets/icons/Suggestion';
import Services from './assets/icons/Services';
import Magazine from './assets/icons/Magazine';
import AmazingSlider from './layouts/AmazingSlider';
import BulbsImg from './assets/img/bulbs.png';
import ProductSlider from './layouts/Productslider';
import BrandSlider from './layouts/BrandSlider';
const Home = () => {
  return (
    <>
      <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
      <Row className="heroBanner">
        <Col md={10}>
          <div >
            <p className="heroText">عمر بیشتر ، نور بیشتر مصرف کمتر با محصولات LED</p>
         <Row>
           <Col md={12} className="ta-right">
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="degree">
 
               <Degree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="uv">
             <p className="iconInner"></p>
               <UvFree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="clock">
              
               <Clock className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="garanteeW">
        
               <Garanteewhite className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="saveE">
           
               <SaveEnergy className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="standard">
          
               <Standard className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="aplus">
          
               <APlus className="degree"/>
             </div>
             </div>
             <div className="d-inline-block">
               <LED className="ledLabel"/>
             </div>
           </Col>
        
         </Row>
          </div>
          
        </Col>
      <Col md={2}>
      <LedButton className="d-block ledbuttonIcon"></LedButton>
      <Button className="ledButton d-block">فروشگاه سبز</Button>
      </Col>
      </Row>
      <Row className="mgt20">
        <Col md={8} className="pdl0">
        <Slider/>
       </Col>
        <Col md={4} className="ta-left">
       <div>
       <div className="firstBanner">
            <CircumstanceBanner/>
            <div className="bottomDiv">
              <Button className="bottomButton">مکان روشنایی
              
              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
       </div>
          <div className="secondBanner">
            <LedBanner/>
            <div className="bottomDiv2">
              <Button className="bottomButton">مصارف LED
              
              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
        </Col>
      </Row>
    <Row className="mgt20 categoryRow">
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Lamp}/>
      <p className="categoryName">لامپ</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Tazein}/>
      <p className="categoryName">چراغانی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Inner}/>
      <p className="categoryName">روشنایی داخلی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Outdoor}/>
      <p className="categoryName">روشنایی بیرونی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Rise}/>
      <p className="categoryName">روشنایی خاص</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox">
      <img src={Lavazem}/>
      <p className="categoryName">لوازم جانبی</p>
        </a>
      </Col>
    </Row>
    <div className="whiteBox">
      <Row>
        <Col md={5}className="ta-right pd0">
          <p className="wBoxTitle">
            بازار روشنایی
          </p>
          <p className="wBoxDescription">
          این لامپ‌ها دارای کارایی و طول عمر و بازده انرژی بالا چند برابر لامپ‌های رشته‌ای هستند و به شکل قابل ملاحظه ای از کارآمدی بالاتری نسبت به دیگر لامپ‌های فلورسنت برخوردارند.
          </p>
          <Button className="readMoreBtn">بازار روشنایی</Button>
        </Col>
        <Col md={7}>
          <div href="#" className="brandIconBox">
            <img src={b10}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b2}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b3}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b4}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b5}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b6}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b7}/>
          </div>
        </Col>
      </Row>
    </div>
   <Row className="threeColRow">
     <Col md={4}>
       <div className="littleBanner" id="suggestionBanner">
     <Suggestion/>
       <div className="bottomDiv3">
         
              <Button className="bottomButton">پیشنهادات ویژه بالبیران
              
              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
       </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="servicesBanner">
         <Services/>
         <div className="bottomDiv3">
         
         <Button className="bottomButton">خدمات بالبیران
         </Button>
         <FaAngleLeft className="leftArrow"></FaAngleLeft>
       </div>
         </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="magazineBanner">
         <Magazine/>
         <div className="bottomDiv3">
         
         <Button className="bottomButton">مجله بالبیران
         
         </Button>
         <FaAngleLeft className="leftArrow"></FaAngleLeft>
       </div>
         </div>
     </Col>
   </Row>
    </Container>
   <Container fluid className="pd0">
   <div className="amazingSliderBody">
    <Row>
      <Col md={3}>
      <div className="innerSlider ta-center">
        <p>محصولات شگفت انگیز بالبیران</p>
        <img src={BulbsImg}/>
        <Button>
          مشاهده ی همه
          <FaAngleLeft/>
        </Button>
      </div>
      </Col>
      <Col md={9}>
        <AmazingSlider className="amazingSlider"/>
      </Col>
    </Row>
   </div>
   </Container>
   <Container fluid className="bulbiranContainer">
     <div className="homeSlider" id="bulbSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه لامپ</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
      <ProductSlider className="bulbSliderBox"/>
        </div>
        
       
      </Col>
     
    </Row>
     </div>
     <div className="homeSlider" id="pannelSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه پنل</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
      <ProductSlider className="bulbSliderBox"/>
        </div>
        
       
      </Col>
     
    </Row>
     </div>
     <div className="homeSlider" id="avizSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه آویز</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
      <ProductSlider className="bulbSliderBox"/>
        </div>
        
       
      </Col>
     
    </Row>
     </div>
     <div className="homeSlider" id="riseSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه ریسه</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
      <ProductSlider className="bulbSliderBox"/>
        </div>
        
       
      </Col>
     
    </Row>
     </div>
     <div className="homeSlider" id="noorafkanSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه نورافکن</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
      <ProductSlider className="bulbSliderBox"/>
        </div>
        
       
      </Col>
     
    </Row>
     </div>
   <div className="brandSliderBox">
   <div>
        <p className="sliderTitle2" id="hamkarTitle">مشتریان معتبر بالبیران</p> 
        
        <div className="thickBorder">
       </div>
        <div className="lightBorder">
          
        </div>
        <div className="cPadding">
        <BrandSlider/>
        </div>
        </div>
     
   </div>
   </Container>
     <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Home;
