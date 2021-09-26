
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

import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const BrandShop = () => {
    const history = useHistory();
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
                بازار روشنایی ایران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود را دارا هستند.
<br></br>
تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.
<br></br>
بازار روشنایی ایران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود را دارا هستند.
<br></br>
تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.

                </p>
            </Col>
            <Col md={4}>
            <BrandShopSvg/>
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
          <Link  onClick={()=>  history.push("/brandsecond/"+item.BrandID)}>
            <Col md={3} xs={6}>
                <div className="whiteBrandBox">
                    <img src={apiAsset+item.BrandLogo}/>
                    <div className="grayBox" >
                        <p>{item.BrandName}</p>
                    </div>
                </div>
            </Col>
            </Link>
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
