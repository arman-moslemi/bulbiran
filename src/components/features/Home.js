
import React,{useEffect,useState} from 'react'
import { Link, useHistory } from "react-router-dom";
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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CircumstanceBanner from './assets/icons/CircumstanceBanner'
import LedBanner from './assets/icons/LedBanner'
import { FaAngleLeft ,FaSearch} from 'react-icons/fa';
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
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const options=[
  'نورلامپ',
  'شکل لامپ'
]
const defaultOption = options[0];
const Home = () => {
const [img1,setimg1]=useState('')
const [img2,setimg2]=useState('')
const [img3,setimg3]=useState('')
const [img4,setimg4]=useState('')
const [img5,setimg5]=useState('')
const [img6,setimg6]=useState('')
const [brand,setBrand]=useState([])
const [product,setProduct]=useState([])

const [amazing,setAmazing]=useState([])
const mainSlider=()=>{
  const axios = require("axios");
  axios
    // .post(apiUrl + "RequestPhotos",{RequestID:params})
    .get(apiUrl + "FirstPage")
    .then(function (response) {
      if (response.data.result == "true") {
       console.log(123456)
       console.log(response.data.Data[0].Pic)
       setimg1(response.data.Data[0].Pic)
       setimg2(response.data.Data[0].Pic2)
       setimg3(response.data.Data[0].Pic3)
       setimg4(response.data.Data[0].Pic4)
       setimg5(response.data.Data[0].Pic5)
       setimg6(response.data.Data[0].Pic6)
       console.log(img1)
    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    axios
        .get(apiUrl + "AllBrandProduct")
    .then(function (response) {
      if (response.data.result == "true") {

       setBrand(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
//     axios
//     .get(apiUrl + "AllProduct")
// .then(function (response) {
//   if (response.data.result == "true") {

//    setAmazing(response.data.Data)
//   //  console.log(response.data.Data)
// }
// else{
//   console.log(response.data.result)

// }})
// .catch(function (error) {
//   console.log(error);
// });
axios
.get(apiUrl + "AllProductSpecial")
.then(function (response) {
if (response.data.result == "true") {

setProduct(response.data.Data)
//  console.log(response.data.Data)
}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});
axios
.get(apiUrl + "AllProductWonder")
.then(function (response) {
if (response.data.result == "true") {

setAmazing(response.data.Data)
//  console.log(response.data.Data)
}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});
}
  useEffect(() => {
    mainSlider();

  }, []);

  const history = useHistory();
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
      <Button onClick={()=>  history.push("/GreenShop")} className="ledButton d-block">فروشگاه سبز</Button>
      </Col>
      </Row>
      <Row className="mgt20">
        <Col md={8} className="pdl0">
        <Slider img1={img1}img2={img2}img3={img3}img4={img4}img5={img5}img6={img6}/>
       </Col>
        <Col md={4} className="ta-left">
       <div>
       <div className="firstBanner">
            <CircumstanceBanner/>
            <div className="bottomDiv">
              <Button onClick={()=>  history.push("/circumstance")}  className="bottomButton">مکان روشنایی

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
       </div>
          <div className="secondBanner">
            <LedBanner/>
            <div className="bottomDiv2">
              <Button className="bottomButton" onClick={()=>  history.push("/masarefLED")}   >مصارف LED

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
        </Col>
      </Row>
    <Row className="mgt20 categoryRow">
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/1")} >
      <img src={Lamp}/>
      <p className="categoryName">لامپ</p>
        </a>
      </Col>

      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/2")} >
      <img src={Inner}/>
      <p className="categoryName">روشنایی داخلی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/3")} >
      <img src={Outdoor}/>
      <p className="categoryName">روشنایی بیرونی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/4")} >
      <img src={Tazein}/>
      <p className="categoryName">روشنایی تزئینی</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/5")} >
      <img src={Rise}/>
      <p className="categoryName">روشنایی خاص</p>
        </a>
      </Col>
      <Col md={2} className="pd10">
        <a href="#" className="categoryBox" onClick={()=>  history.push("/indoorlighting/6")} >
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
          <Button className="readMoreBtn" onClick={()=>  history.push("/brandshop")}>بازار روشنایی</Button>
        </Col>
        <Col md={7}>
          {

            brand?.map((item, i) => {
              return (
                      <>
                     <div href="#" className="brandIconBox">
            <img src={apiAsset+item.BrandLogo}/>
          </div>
                      </>
                    );

            })
          }

        </Col>
      </Row>
    </div>
  <div className="hSearchBar">
    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"40px"}}>
      <Col md={1} className="pd0">
      <div className="sIcon">
        <FaSearch/>
      </div>
      </Col>
      <Col md={9} className="pd0">
      <div className="centerSearch">
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      </div>
      </Col>
      <Col md={2} className="pd0">
      <div className="searchIBtn">
        <Button className="searchIBtn2" onClick={()=>  history.push("/searchresult")}>جستجو</Button>
      </div>
      </Col>
    </Row>
  </div>
   <Row className="threeColRow">
     <Col md={4}>
       <div className="littleBanner" id="suggestionBanner">
     <Suggestion/>
       <div className="bottomDiv3">

              <Button className="bottomButton" onClick={()=>  history.push("/pishnahadvijhe")}>پیشنهادات ویژه بالبیران

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
       </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="servicesBanner">
         <Services/>
         <div className="bottomDiv3">

         <Button className="bottomButton" onClick={()=>  history.push("/services")}>خدمات بالبیران
         </Button>
         <FaAngleLeft className="leftArrow"></FaAngleLeft>
       </div>
         </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="magazineBanner">
         <Magazine/>
         <div className="bottomDiv3">

         <Button className="bottomButton"onClick={()=>  history.push("/news")}>مجله بالبیران

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
        <Button onClick={()=>  history.push("/Shegeftangiz")}>
          مشاهده ی همه
          <FaAngleLeft/>
        </Button>
      </div>
      </Col>
      <Col md={9}>
        <AmazingSlider
          data={amazing}
        className="amazingSlider"/>
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
      <ProductSlider data={product[0]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[1]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[2]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[3]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[4]} className="bulbSliderBox"/>
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
