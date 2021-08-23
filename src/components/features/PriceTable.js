import React , {useState} from 'react'
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
const PriceTable = () => {
  
    return (
    <>
          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <Row style={{margin:"0px"}}>
        <Col md={3} className="d-flex pdr0">
            <div className="whiteBox ta-center pd60 mgt0">
                <img src={b14} className="w100"/>
            </div>
        </Col>
        <Col md={9} className="d-flex pdl0">
            <div className="whiteBox mgt0">
                <h4 className="circumstanceTitle">معرفی برند بروکس</h4>
                <p className="brandShopDescription w100 mgt10">
                شرکت «بروکس» (Burux) یکی از تولیدکنندگان انواع چراغ‌ها و لامپ‌های LED محسوب می‌شود. این شرکت با شعار «نور سالم است» محصولات خود را تولید می‌کند و بر عدم استفاده از عناصری مانند سرب و جیوه که برای سلامتی انسان مضر هستند، تاکید دارد. کیفیت لامپ و چراغ بروکس با بسیاری از برندهای اروپایی و آسیایی قابل رقابت است و خدماتی گسترده‌ای را در تهران و 30 استان دیگر در ایران ارایه می‌دهد.
                30 استان دیگر در ایران ارایه می‌دهد.
                30 استان دیگر در ایران ارایه می‌دهد.
                 </p>
            </div>
        </Col>
    </Row>
    <div className="coloredBox" id="red1">
        <h3 className="coloredBoxTitle3">
       لیست محصولات برند بروکس
        </h3>
    </div>
    <div className="tableWhiteBox">
        <div className="tableBorder">
            <Row style={{marginRight:"0px",marginLeft:"0px",paddingTop:"15px",paddingBottom:"15px"}} className="bBottomC">
                <Col md={1} className="ta-center">
                    <span className="tableHeader">ردیف</span>
                </Col>
                <Col md={2} className="ta-center">
                    <span className="tableHeader">تصویر محصول</span>
                </Col>
                <Col md={5} className="ta-right">
                    <span className="tableHeader">نام محصول</span>
                </Col>
                <Col md={2} className="ta-center">
                    <span className="tableHeader">قیمت تکی</span>
                </Col>
                <Col md={2} className="ta-center">
                    <span className="tableHeader">قیمت باکس</span>
                </Col>
            </Row>
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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
            <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
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