import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import Khadamat1 from './assets/icons/Khadamat1';
import Khadamat2 from './assets/icons/Khadamat2';
import Khadamat3 from './assets/icons/Khadamat3';
import Khadamat4 from './assets/icons/Khadamat4';
import Khadamat5 from './assets/icons/Khadamat5';
import CreativeDesign from './assets/icons/CreativeDesign';
import Janebi from './assets/icons/Janebi';
import LifeTime from './assets/icons/LifeTime';
import Repair from './assets/icons/Repair';
import { Link, useHistory } from "react-router-dom";

const Services = () => {
    const history = useHistory();
    return (
      <>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
      <div className="whiteBox pdc">
          <Row>
              <Col md={6} className="ta-right" id="firstOrder">
                <Khadamat1 className="mgt40 wRes100"/>
              </Col>
              <Col md={6} className="ta-right" id="secondOrder">
                  <p className="brandShopTitle mFontRes">خدمات شرکت بالبیران</p>
                  <div className="oneLine mgt40">
                      <CreativeDesign className="d-inline-block mgL15"/>
                      <p>طراحی و دیزاین محیط مورد نظر شما</p>
                  </div>
                  <div className="borderRight">

                  </div>
                  <div className="oneLine mgt40">
                      <LifeTime className="d-inline-block mgL15"/>
                      <p>گارانتی محصولات خریداری شده از برندهای همکار</p>
                  </div>
                  <div className="borderRight">

                  </div>
                  <div className="oneLine mgt40">
                      <Repair className="d-inline-block mgL15"/>
                      <p>تعمیرات کالاهای آسیب دیده برندهای همکار با بالبیران</p>
                  </div>
                  <div className="borderRight">

                  </div>
                  <div className="oneLine mgt40">
                      <Janebi className="d-inline-block mgL15"/>
                      <p>تهیه لوازم جانبی</p>
                  </div>
              
              </Col>
          </Row>
      </div>
   <div className="whiteBox pdc">
       <Row>
           <Col md={6} className="ta-right" id="secondOrder">
           <CreativeDesign className="d-inline-block mgL15"/>
                     
           <p className="brandShopTitle d-inline-block cFontSize">طراحی و دیزاین محیط های مورد نظر شما</p>
               <p className="brandShopDescription" id="cColor">
               به منظور دریافت خدمات حرفه‌ای فنی و مهندسی راهکارهای روشنایی زیر، از طریق فرم "درخواست خدمات روشنایی و نورپردازی"  نسبت به ثبت درخواست خود اقدام فرمایید.
 
 ر*اهکار طراحی روشنایی و نورپردازی؛ نور مناسب برای هر کاربُرد با لامپ درست و مناسب آن.
 
  *راهکار فروش روشنایی یکپارچه؛ دریافت روشنایی به جای اجزای تشکیل دهنده روشنایی.
 
  *راهکار طراحی سامانه روشنایی هوشمند؛ دریافت روشنایی که هوشمند و همراه با صرفه‌جویی است.
 
 
               </p>
               <Button className="servicesButton" onClick={()=>  history.push("/design")}>
                   مشاهده نمونه کارها و ثبت درخواست
               </Button>
           </Col>
           <Col md={6} className="ta-left" id="firstOrder">
               <Khadamat2 className="wRes100"/>
           </Col>
       </Row>
   </div>
   <div className="whiteBox pdc">
   <Row>
   <Col md={6} className="ta-right" id="firstOrder">
               <Khadamat3 className="wRes100"/>
           </Col>
           <Col md={6} className="ta-right" id="secondOrder">
           <LifeTime className="d-inline-block mgL15"/>
                     
           <p className="brandShopTitle d-inline-block cFontSize">گارانتی محصولات خریداری شده از برند های همکار</p>
               <p className="brandShopDescription" id="cColor">
               به منظور دریافت خدمات حرفه‌ای فنی و مهندسی راهکارهای روشنایی زیر، از طریق فرم "درخواست خدمات روشنایی و نورپردازی"  نسبت به ثبت درخواست خود اقدام فرمایید.
 
 ر*اهکار طراحی روشنایی و نورپردازی؛ نور مناسب برای هر کاربُرد با لامپ درست و مناسب آن.
 
  *راهکار فروش روشنایی یکپارچه؛ دریافت روشنایی به جای اجزای تشکیل دهنده روشنایی.
 
  *راهکار طراحی سامانه روشنایی هوشمند؛ دریافت روشنایی که هوشمند و همراه با صرفه‌جویی است.
 
 
               </p>
               <Button className="servicesButton" onClick={()=>  history.push("/garanty")}>
                   درخواست استفاده از گارانتی و مشاهده شرایط
               </Button>
           </Col>
           
       </Row>
  
   </div>
   <div className="whiteBox pdc">
       <Row>
           <Col md={6} className="ta-right" id="secondOrder">
           <Repair className="d-inline-block mgL15"/>
                     
           <p className="brandShopTitle d-inline-block cFontSize">تعمیرات کالاهای آسیب دیده خارج از گارانتی</p>
               <p className="brandShopDescription" id="cColor">
               به منظور دریافت خدمات حرفه‌ای فنی و مهندسی راهکارهای روشنایی زیر، از طریق فرم "درخواست خدمات روشنایی و نورپردازی"  نسبت به ثبت درخواست خود اقدام فرمایید.
 
 ر*اهکار طراحی روشنایی و نورپردازی؛ نور مناسب برای هر کاربُرد با لامپ درست و مناسب آن.
 
  *راهکار فروش روشنایی یکپارچه؛ دریافت روشنایی به جای اجزای تشکیل دهنده روشنایی.
 
  *راهکار طراحی سامانه روشنایی هوشمند؛ دریافت روشنایی که هوشمند و همراه با صرفه‌جویی است.
 
 
               </p>
               <Button className="servicesButton" onClick={()=>  history.push("/repairs")}>
                   درخواست تعمیرات
               </Button>
           </Col>
           <Col md={6} className="ta-left" id="firstOrder">
               <Khadamat4 className="wRes100"/>
           </Col>
       </Row>
   </div>
   <div className="whiteBox pdc">
   <Row>
   <Col md={6} className="ta-right" id="firstOrder">
               <Khadamat5 className="wRes100"/>
           </Col>
           <Col md={6} className="ta-right" id="secondOrder">
           <Janebi className="d-inline-block mgL15"/>
                     
           <p className="brandShopTitle d-inline-block cFontSize">فروش انواع لوازم یدکی مرتبط با روشنایی</p>
               <p className="brandShopDescription" id="cColor">
               به منظور دریافت خدمات حرفه‌ای فنی و مهندسی راهکارهای روشنایی زیر، از طریق فرم "درخواست خدمات روشنایی و نورپردازی"  نسبت به ثبت درخواست خود اقدام فرمایید.
 
 ر*اهکار طراحی روشنایی و نورپردازی؛ نور مناسب برای هر کاربُرد با لامپ درست و مناسب آن.
 
  *راهکار فروش روشنایی یکپارچه؛ دریافت روشنایی به جای اجزای تشکیل دهنده روشنایی.
 
  *راهکار طراحی سامانه روشنایی هوشمند؛ دریافت روشنایی که هوشمند و همراه با صرفه‌جویی است.
 
 
               </p>
               <Button className="servicesButton" onClick={()=>  history.push("/lavazemyadaki")}>
                 خرید لوازم یدکی
               </Button>
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
export default Services;
  