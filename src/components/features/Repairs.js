import React , {useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Repair from './assets/icons/Repair'
import Khadamat4 from './assets/icons/Khadamat4'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar} from 'react-icons/fa';
import b1 from './assets/img/b1.png';
import b2 from './assets/img/b2.png';
import b3 from './assets/img/b3.jpeg';
import b4 from './assets/img/b4.png';
import b5 from './assets/img/b5.png';
import b6 from './assets/img/b6.png';
import b7 from './assets/img/b7.png';
import b8 from './assets/img/b8.png';
import b9 from './assets/img/b9.png';
import b10 from './assets/img/b10.png';
import b11 from './assets/img/b11.png';
import b12 from './assets/img/b12.png';
import FormIcon from './assets/icons/FormIcon'
import ContactMail from './assets/icons/ContactMail'
import MailForm from './assets/img/MailForm.png'

const Repairs = () => {
  
    return (
    <>
          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <div className="whiteBox">
        <div className="ta-right">
            <Repair className="d-inline-block"/>
            <p className="gTitle">تعمیرات کالاهای آسیب دیده خارج از گارانتی</p>
        </div>
        <p className="brandShopDescription w100" style={{color:"#18206b"}}>
        در پروژه‌های تجاری دو بخش روشنایی عمومی و نورپردازی ویژه بخصوص در نمای ساختمان حائز اهمیت می‌باشد. ویترین مغازه‌ها، فروشگاه‌ها، نحوه نمایش محصولات و نورپردازی نمای بیرونی از اجزاء اصلی در روشنایی مکان‌های تجاری است. در این مکان‌ها انتخاب درست سیستم روشنایی و نورپردازی می‌تواند عامل اصلی بالا رفتن فروش و جذب مشتری باشد. نورپردازی صحیح می‌تواند با مشتری ارتباط برقرار کرده و او را به درون فضا دعوت کند. همچنین محصولات را  دیدنی و جذاب نشان داده و باعث رونق خرید و فروش شود. رنگ، کنتراست و تعادل مناسب بین سطوح نورپردازی شده از مهمترین ویژگی‌های نورپردازی مکان‌های تجاری است.
        </p>
        <Row className="mgt40">
          <Col md={6} className="ta-right">
            <p className="gTitle">مواردی که شامل تعمیرات می شوند</p>
            <ul className="garanteList">
              <li>
                <p className="">محصول سوخته</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
              <li>
                <p>محصول دارای اعتبار تاریخ ضمانت (بر روی بدنه محصول یا روی جعبه).</p>
              </li>
              <li>
                <p>عیوب فیزیکی و خسارت‌های مکانیکی مانند وارد آمدن ضربه به قسمت‌های مختلف محصول که باعث فرورفتگی، شکستگی و یا سوراخ شدن بدنه محصول می‌گردد..</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
              <li>
                <p>عیوب فیزیکی و خسارت‌های مکانیکی مانند وارد آمدن ضربه به قسمت‌های مختلف محصول که باعث فرورفتگی، شکستگی و یا سوراخ شدن بدنه محصول می‌گردد.</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Khadamat4/>
          </Col>
        </Row>
       <Row className="mgt20">
          <Col md={12} className="ta-right">
          <p className="gTitle">برندهای طرف قرارداد با بالبیران</p>
         <Row className="mgt20">
           <Col md={12} className="cP">
           <div href="#" className="brandIconBox">
            <img src={b10}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b2}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b3}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b4}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b5}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b6}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b7}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b10}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b2}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b3}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b4}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b5}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b6}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b7}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b2}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b3}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b4}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b5}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b6}/>
          </div>
          <div href="#" className="brandIconBox">
            <img src={b7}/>
          </div>
           </Col>
         </Row>
            </Col>
            </Row>
    </div>
    <div className="whiteBox" style={{paddingTop:'5',paddingRight:'0',paddingLeft:'0'}}>
      <Row>
        <Col md={1}>
          <FormIcon/>
        </Col>
        <Col md={11} className="ta-right pd0">
        <p className="gTitle" style={{marginRight:'0',marginTop:'5'}} >فرم درخواست تعمیرات کالا</p>
      <p className="shortDescription">برای آگاهی از شرایط تعمیرات کالا فرم زیر را تکمیل نمایید</p>
        </Col>
        </Row>
        <hr></hr>
        <Row style={{margin:"0"}}>
          <Col md={5} className="ta-right">
          <form className="serviceForm">
            <div className="cFormDiv">
           <span>نام و نام خانوادگی</span><FaStar/>   
           <input placeholder="نام و نام خانوادگی خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv">
           <span>نام محصول</span><FaStar/>   
           <input placeholder="نام محصول خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv">
           <span>شماره تماس</span><FaStar/>   
           <input placeholder="شماره تماس خود را وارد کنید" required type="number"/>
            </div>
            <div className="cFormDiv">
           <span>پست الکترونیکی</span> 
           <input placeholder="پست الکترونیکی خود را وارد کنید" type="email"/>
            </div>
            <div className="cFormDiv">
           <span>موضوع درخواست</span>  
           <input placeholder="موضوع درخواست را وارد کنید"/>
            </div>
            <div className="cFormDiv">
           <span>توضیحات</span><FaStar/>   
           <textarea placeholder="توضیحات خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv ta-left" style={{marginBottom:"0"}}>
            <Button className="servicesButton" type="submit">
                   ثبت درخواست
               </Button>
            </div>
          </form>

          </Col>
          <Col md={7} className="ta-center">
            <img src={MailForm} className="w90"/>
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
export default Repairs;