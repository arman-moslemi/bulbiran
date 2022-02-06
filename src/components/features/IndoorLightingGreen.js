import React,{useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import RulesSvg from './assets/icons/RulesSvg';
import IndoorSlider from './layouts/IndoorSlider';
import Saghfi from './assets/img/Saghfi.png';
import MiniIcon from './assets/icons/MiniIcon.js';
import AmazingSlider from './layouts/AmazingSlider';
import BulbsImg from './assets/img/bulbs.png';
import SliderImg from './assets/icons/SliderImg';
import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";

const Indoor = () => {
   const history = useHistory();
   const [img1,setimg1]=useState('')
const [img2,setimg2]=useState('')
const params = useParams().id;
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
           console.log(response.data.Data[3].Pic)
           setimg1(response.data.Data[3].Pic)
           setimg2(response.data.Data[3].Pic2)

           console.log(img1)
        }
        else{
          console.log(response.data.result)

        }})
        .catch(function (error) {
          console.log(error);
        });

    axios
    .get(apiUrl + "GreenGroup/"+params)
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
    return (
      <>
        <TopBar/>
        <Header/>
      <Container fluid className="bulbiranContainer">
        <IndoorSlider img1={img1}img2={img2} className="heightResCustom"/>
        <Row style={{margin:"0px"}}>
        {product?.map((item, i) => {
  return (
          <>
        <Col md={4} xs={6} className="pdResCustom">
       <div className="miniBox">
          <img className="w100" src={apiAsset+item.Photo}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع {item.SmallerGroup}</span>
          <Button onClick={()=>  history.push("/indoorsecondgreen/"+item.GreenGroupID)}>خرید محصولات</Button>
          {/* <Button onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>خرید محصولات</Button> */}
          </div>

       </div>
        </Col>
        </>
                    );

            })
          }
        {/* <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ آویز</span>
          <Button onClick={()=>  history.push("/indoorsecond")}>خرید محصولات</Button>
          </div>

       </div>
        </Col>
       */}
        </Row>

     </Container>
     <Container fluid className="pd0">
   <div className="amazingSliderBody" id="greencolor">
    <Row>
      <Col md={3}>
      <div className="innerSlider ta-center">
      <SliderImg/>
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
     <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Indoor;