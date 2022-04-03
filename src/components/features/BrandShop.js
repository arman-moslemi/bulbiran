
import React,{useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import BrandShopSvg from './assets/icons/BrandShopSvg';
import b1 from './assets/img/b1.png';

import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const BrandShop = () => {
    const history = useNavigate();
    const [brand,setBrand]=useState([])

    const mainSlider=()=>{

    const axios = require("axios");

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


}
  useEffect(() => {
    mainSlider();

  }, []);
  return (
    <>
      <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
    <div className="whiteBox pdc">
        <Row>
            <Col md={8}>
                <h3 className="brandShopTitle">بازار روشنایی</h3>
                <p className="brandShopDescription">
                بازار روشنایی ایران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود  را دارا هستند.
<br></br>
تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.
<br/>
شما می توانید با انتخاب هرکدام از برند های زیر تمامی محصولات آن ها را مشاهده کنید ، از مشاوران ما بهره گرفته و اقدام به خریدی مطمئن کنید.
                </p>
            </Col>
            <Col md={4}>
            <BrandShopSvg className="w95"/>
            </Col>
        </Row>
    </div>
    <div className="coloredBox" id="brandShopColoreBox">
        <h3 className="coloredBoxTitle">
            هر برند، یک فروشگاه
        </h3>
    </div>
    <div className="brandShopBox">
        <Row>
            {
        brand?.map((item, i) => {
  return (
          <>
          
            <Col md={3} xs={6}>
            <Link  onClick={()=>  history("/brandsecond/"+item.BrandID)}>
                <div className="whiteBrandBox">
                    <img src={apiAsset+item.BrandLogo}/>
                    <div className="grayBox res95" >
                        <p>{item.BrandName}</p>
                    </div>
                </div>
                </Link>
            </Col>
           
            </>
        );

})
}
            {/* <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col> */}
         </Row>
    </div>
    </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default BrandShop;
