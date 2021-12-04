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
               در پروژه‌های تجاری دو بخش روشنایی عمومی و نورپردازی ویژه بخصوص در نمای ساختمان حائز اهمیت می‌باشد. ویترین مغازه‌ها، فروشگاه‌ها، نحوه نمایش محصولات و نورپردازی نمای بیرونی از اجزاء اصلی در روشنایی مکان‌های تجاری است. در این مکان‌ها انتخاب درست سیستم روشنایی و نورپردازی می‌تواند عامل اصلی بالا رفتن فروش و جذب مشتری باشد. نورپردازی صحیح می‌تواند با مشتری ارتباط برقرار کرده و او را به درون فضا دعوت کند. همچنین محصولات را دیدنی و جذاب نشان داده و باعث رونق خرید و فروش شود. رنگ، کنتراست و تعادل مناسب بین سطوح نورپردازی شده از مهمترین ویژگی‌های نورپردازی مکان‌های تجاری است.
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
               مدت گارانتی و خدمات پس از فروش کلیه کالاهای عرضه شده در سایت برای هر کالا متفاوت است که توسط شرکت وارد یا تولید کننده روی بسته بندی محصول ذکر می گردد و یا همراه کالا ارسال می شود (البته عدم درج موارد مذكور در این قسمت به معنی نداشتن گارانتی برای آن كالا می باشد). چنانچه کالای خریداری شده دارای گارانتی باشد و دچار نقص فنی گردد، خریدار می بایست طبق شرایط مندرج در کارت گارانتی نسبت به ارائه کالا و دریافت خدمات پس از فروش از شرکت گارانتی دهنده اقدام نماید.
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
               در مرکز تعمیرات بالبیران ، خدمات و سرویس انواع محصولات روشنایی انجام می شود. تعمیرگاه مجاز با سرلوحه قرار دادن هدف کسب رضایت مشتری و احترام به حقوق ایشان به فعالیت می پردازد . از این رو مرکز تعمیرات به تدوین و تهیه ی قوانین و مقررات تعمیرگاه مجاز روشنایی ، همت گماشته است.
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
               بالبیران به‌ عنوان یکی از فروشگاه‌‌های بزرگ اینترنتی کشور لذت یک خرید واقعی را برای شما به ارمغان می‌آورد. تمامی مردم ، همکاران ، برق کاران ، صنایع نور و روشنایی و … از سراسر ایران می‌توانند کالاهای مورد نیاز خود در حوزه نورپردازی ، مصرف خانگی و … بصورت آنلاین از فروشگاه ما تهیه و از مزایای ارسال سریع، ضمانت بهترین قیمت ، ضمانت اصالت کالا و گارانتی واقعی برخوردار شوند.
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
  