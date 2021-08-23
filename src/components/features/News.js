import React , {useState} from 'react'
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
const News = () => {
    const history = useHistory();
    return (
    <>
          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <div style={{marginRight:"0px",marginLeft:"0px",marginTop:"0px",display:"flex",height:"470px"}}>
        <div className="pdr0 pdl0 w20 d-inline-block h100">
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
                <a href="#" onClick={()=>  history.push("/showblog")}>
                    صنعت روشنایی در وضعیت هشدار
                </a>
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
                <a href="#" onClick={()=>  history.push("/showblog")}>
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
        </div>
        <div className="w55 d-inline-block h100">
            <NewsSlider/>
        </div>
    </div>
    <div style={{display:"flex",height:"470px",marginTop:"40px"}}>
        <div className="w80 h100">
            <div className="newsWhiteBox h100 w95">
            <span className="boldTitle2">
                برترین ها
            </span>
            <div className="m1">
            <NewsSlider2/>
            </div>
            </div>
        </div>
        <div className="w20 h100">
            <div  className="positionR cHover h100">
            <img src={Tabligh} className="w100 h100"/>
            <div className="iOverlay h100">

            </div>
            <a className="spanOverlay">
                خبر تخفیف اول
            </a>
            </div>
        </div>
    </div>
  <div style={{display:"flex",height:"470px",marginTop:"40px"}}>
  <div className="newsWhiteBox h100 w100">
            <span className="boldTitle2">
                مقالات
            </span>

            <Row style={{marginRight:"auto",marginLeft:"auto",width:"94%",marginTop:"20px"}}>
                <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorFive">
                   مقاله
                </span>
            <div className="iOverlay" id="colorOne">

            </div>
            <a className="spanOverlay2">
            صنعت روشنایی در وضعیت 
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
                <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorSix">
                   مقاله
                </span>
            <div className="iOverlay" id="colorTwo">

            </div>
            <a className="spanOverlay2" onClick={()=>  history.push("/showblog")}>
            صنعت روشنایی در وضعیت 
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
                <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorSeven">
                   مقاله
                </span>
            <div className="iOverlay" id="colorThree">

            </div>
            <a className="spanOverlay2" onClick={()=>  history.push("/showblog")}>
            صنعت روشنایی در وضعیت 
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
                <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorEight">
                   مقاله
                </span>
            <div className="iOverlay"id="colorFour">

            </div>
            <a className="spanOverlay2"onClick={()=>  history.push("/showblog")} >
            صنعت روشنایی در وضعیت 
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
            </Row>
            </div>
  </div>
  <Row className="bannerRow">
      <Col md={12}>
          <img src={Banner1} className="bannerH100"/>
      </Col>
  </Row>
    <div style={{display:"flex",marginTop:"40px"}}>
    <div className="w25 d-inline-block h100">
            <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
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
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
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
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
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
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
        </div>
      <div className="w75 d-inline-block h100">
      <div style={{display:"flex",height:"566px"}}>
  <div className="newsWhiteBox h100 w100">
            <span className="boldTitle2">
               نمایشگاه ها
            </span>
            <Row style={{marginRight:"auto",marginLeft:"auto",marginTop:"40px",width:"95%",display:"flex"}}>
                <Col md={7}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic" style={{height:"457px"}}/>
          
            <div className="iOverlay" id="colorTen">

            </div>
            <a className="kh1 w100" style={{right:"20px"}}>خبر تخفیف اول</a>
          
            </div>
              
                </Col>
                <Col md={5}>
                    <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
                    <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
               
                    <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
               
                    <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
               
               
                </Col>
            </Row>
</div>
       
</div>
 <div className="mgt20 w100" style={{display:"flex",height:"375px"}}>
            <div className="d-inline-block w75">
            <div  className="positionR cHover w93">
            <img src={News3} className="w100 mPic"/>
          
            <div className="iOverlay" id="colorTen">

            </div>
            <a className="kh1 w100" style={{right:"20px"}}>خبر تخفیف اول</a>
          
            </div>
            </div>
            <div className="d-inline-block w25">
            <div  className="positionR cHover h100">
            <img src={Tabligh} className="w100 h100"/>
            <div className="iOverlay h100">

            </div>
            <a className="spanOverlay">
                خبر تخفیف اول
            </a>
            </div>
            </div>
        </div>
          </div> 
    </div>
  <div className="mgt40">
  <div className="newsWhiteBox h100 w100 r5">
            <span className="boldTitle2">
               اخبار
            </span>
            <div className="m1">
            <NewsSlider3/>
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
export default News;