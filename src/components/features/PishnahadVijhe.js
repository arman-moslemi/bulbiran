
import React,{useEffect,useState} from 'react'
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

import Suggestion from './assets/icons/Suggestion';
import Services from './assets/icons/Services';
import Magazine from './assets/icons/Magazine';
import AmazingSlider from './layouts/AmazingSlider';
import ProductSlider from './layouts/Productslider';
import BrandSlider from './layouts/BrandSlider';
import BulbsImg from './assets/img/bulbs.png';
import SliderImgSvg from './assets/icons/SliderImgSvg';
import vijhe from './assets/img/vijhe.jpg';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const PishnahaVijhe = () => {
  const [img1,setimg1]=useState('')
const [img2,setimg2]=useState('')
const [img3,setimg3]=useState('')
const [img4,setimg4]=useState('')
const [img5,setimg5]=useState('')
const [img6,setimg6]=useState('')
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
    // console.log(66)
    // console.log(product[0])

  }, []);
  return (

    <>
      <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
    <Row className="mgt20">
        <Col md={8} className="pdl0">
        <Slider img1={img1}img2={img2}img3={img3}img4={img4}img5={img5}img6={img6}/>
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
      <div className="amazingSliderBody mgt40" id="niceGreen">
    <Row>
      <Col md={2}>
      <div className="innerSlider ta-center">

        <img src={BulbsImg}/>


      </div>
      </Col>
      <Col md={10}>
        <AmazingSlider data={amazing} className="amazingSlider"/>
      </Col>
    </Row>

   </div>
   <div className="mgt40">
      <img src={vijhe} className="w100"/>
    </div>

    </Container>
    <Container fluid className="bulbiranContainer">
         <div className="homeSlider" id="cheraghSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه چراغ</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[0]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
     <div className="homeSlider" id="bulbSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه لامپ</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[1]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[2]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[3]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[4]} className="bulbSliderBox"/>
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
      <ProductSlider data={product[5]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>

   </Container>

    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default PishnahaVijhe;