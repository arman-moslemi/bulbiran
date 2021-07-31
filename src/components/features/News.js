import React , {useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import NewsSlider from './layouts/NewsSlider';
import Designs from './assets/icons/CreativeDesign'
import NewsImg from './assets/img/bulding.jpg'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle, FaRegClock} from 'react-icons/fa';

const News = () => {
  
    return (
    <>
          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <div style={{marginRight:"0px",marginLeft:"0px",marginTop:"0px",display:"flex",height:"470px"}}>
        <div className="pdr0 pdl0 w25 d-inline-block h100">
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
        <div className="w25 d-inline-block h100">
            <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <p>
                    صنعت روشنایی در وضعیت هشدار
                </p>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
            <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <p>
                    صنعت روشنایی در وضعیت هشدار
                </p>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
        </div>
        <div className="w50 d-inline-block h100">
            <NewsSlider/>
        </div>
    </div>
  </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default News;