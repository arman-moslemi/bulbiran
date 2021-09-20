import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import NewsSlider from './layouts/NewsSlider';
import NewsSlider2 from './layouts/NewsSlider2';
import NewsSlider3 from './layouts/NewsSlider3';
import Designs from './assets/icons/CreativeDesign'
import NewsImg from './assets/img/bulding.jpg'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle, FaRegClock} from 'react-icons/fa';
import Tabligh from './assets/img/tabligh.png'
import News3 from './assets/img/news3.png';
import Banner1 from './assets/img/banner1.jpg';
import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const BlogSecond = () => {
   
    return (
    <>
          <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
 
    <Row style={{marginRight:"0px",marginLeft:"0px"}}>
        <Col md={3}>
        <div className="pdr0 pdl0 w100 d-inline-block h100">
        <div className="whiteBox ta-right pd0 h100" style={{marginTop:"0px"}}>
           <div className="redBorder">
           <FaAlignRight className="d-inline-block"/>
            <span className="d-inline-block">
                دسته بندی
            </span>
           </div>
        <div className="newsList">
            <a className="newsLista" href="#">
                آخرین اخبار
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
                آخرین تخفیف ها
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
               مقالات علمی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
              تکنولوژی روز
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
               نور
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
              مهندسی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
              ساخت و تولید
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
             طراحی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
              رویدادهای مرتبط با روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
               تبلیغات
            </a>
        </div>
       </div>

        </div>
        </Col>
        <Col md={9}>
      <Row style={{margin:"0px",backgroundColor:"#fff",padding:"15px"}}>
      <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="newsBox w100">
                <img src={News3}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  href="#">
                   مقاله یک
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>28 فروردین 1399</span>
                </div>
            </div>
          </Col>
      </Row>
      
        </Col>
    </Row>
 </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default BlogSecond;