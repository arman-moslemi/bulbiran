import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Checkbox from "react-custom-checkbox";
import ReactPaginate from 'react-paginate';
import 'react-accessible-accordion/dist/fancy-example.css';
import { FaAngleLeft,FaAlignRight ,FaCheck } from 'react-icons/fa';
import CircumstanceB from './assets/icons/CircumstanceB';

import Pool from './assets/icons/Pool';
import Lamp from './assets/img/lamp.png';
import Cheragh from './assets/img/cheragh.png';
import Panel from './assets/img/panel.png';
import Loster from './assets/img/loster.png';
import Janebi from './assets/img/janebi.png';
import rise from './assets/img/rise.png';
import Img4 from './assets/img/Image 4.png';
import Img5 from './assets/img/Image 5.png';
import Img6 from './assets/img/Image 6.png';
import Img7 from './assets/img/Image 7.png';
import Noorafkan from './assets/img/noorafkan.png';
import Chain from './assets/img/chain.png';
import b14 from './assets/img/b14.png';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";
const PriceTable = () => {
    const [product,setProduct]=useState([])
    const [brand,setBrand]=useState([])
    const params = useParams().id;
    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .get(apiUrl + "BrandProduct/"+params+"/0")
          .then(function (response) {
            if (response.data.result == "true") {

                setProduct(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });


          axios
          .get(apiUrl + "AboutBrand/"+params)
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
    <Row style={{margin:"0px"}}>
        <Col md={3} className="d-flex pdr0">
            <div className="whiteBox ta-center pd60 mgt0">
                <img src={apiAsset+brand.BrandLogo} className="w100"/>
            </div>
        </Col>
        <Col md={9} className="d-flex pdl0">
            <div className="whiteBox mgt0">
                <h4 className="circumstanceTitle">{brand.BrandName}</h4>
                <p className="brandShopDescription w100 mgt10">{brand.Description}
                 </p>
            </div>
        </Col>
    </Row>
    <div className="coloredBox" id="red1">
        <h3 className="coloredBoxTitle3">
       لیست محصولات {brand.BrandName}
        </h3>
    </div>
    <div className="tableWhiteBox "> 
        <div className="tableBorder">
           <div className="resOver">
           <Row style={{marginRight:"0px",marginLeft:"0px",paddingTop:"15px",paddingBottom:"15px"}} className="bBottomC j1">
                <Col md={1} xs={1} className="ta-center">
                    <span className="tableHeader">ردیف</span>
                </Col>
                <Col md={2} xs={3} className="ta-center">
                    <span className="tableHeader">تصویر محصول</span>
                </Col>
                <Col md={5} xs={4} className="ta-right">
                    <span className="tableHeader">نام محصول</span>
                </Col>
                <Col md={2} xs={2} className="ta-center">
                    <span className="tableHeader">قیمت تکی</span>
                </Col>
                <Col md={2} xs={2} className="ta-center">
                    <span className="tableHeader">قیمت باکس</span>
                </Col>
            </Row>
           
           </div>

            {

product?.map((item, i) => {
  return (
          <>
          <div className="resOver">
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
                <Col md={1} xs={1} className="ta-center">
                    <span className="tableHeader">{i+1}</span>
                </Col>
                <Col md={2} xs={3} className="ta-center">
                    <img src={apiAsset+item.Pic1} className="cImgT"/>
                </Col>
                <Col md={5} xs={4} className="ta-right">
                    <span className="tablePName">{item.ProductName}</span>
                </Col>
                <Col md={2} xs={2} className="ta-center">
                    <span className="tablePries">{item.Cost} تومان</span>
                </Col>
                <Col md={2} xs={2} className="ta-center">
                    <span className="tablePries">{item.Cost} تومان</span>
                </Col>
            </Row></div>
            </>
                    );

            })
          }
            {/* <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
                <Col md={1} className="ta-center">
                    <span className="tableHeader">1</span>
                </Col>
                <Col md={2} className="ta-center">
                    <img src={Img4} className="cImgT"/>
                </Col>
                <Col md={5} className="ta-right">
                    <span className="tablePName">لامپ ال ای دی45 مدل Parathom HQL led 280 پایه E27</span>
                </Col>
                <Col md={2} className="ta-center">
                    <span className="tablePries">12500 تومان</span>
                </Col>
                <Col md={2} className="ta-center">
                    <span className="tablePries">245000 تومان</span>
                </Col>
            </Row>
        */}
         </div>
    </div>
    </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default PriceTable;