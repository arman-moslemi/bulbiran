import React , {useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Designs from './assets/icons/CreativeDesign'

import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle} from 'react-icons/fa';
import Bulding from './assets/img/bulding.jpg';
import FormIcon from './assets/icons/FormIcon'
import ContactMail from './assets/icons/ContactMail'
import MailForm from './assets/img/MailForm.png'

const Design = () => {
  
    return (
    <>
          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <Row style={{marginRight:"0px",marginLeft:"0px",MarginTop:"20px"}}>
        <Col md={3}>
        <div className="whiteBox ta-right">
            <span className="boldTitle">
                طراحی و مشاوره روشنایی
            </span>
            <ul className="aUl">
                <li>
                    <a href="#">
                        روشنایی مکان های مسکونی
                    </a>
                </li>
                <li>
                    <a href="#">
                        روشنایی معابر عمومی
                    </a>
                </li>
                <li>
                    <a href="#">
                        روشنایی مکان های تجاری
                    </a>
                </li>
                <li>
                    <a href="#">
                       روشنایی مکان های اداری
                    </a>
                </li>
                <li>
                    <a href="#">
                        روشنایی مکان های صنعتی
                    </a>
                </li>
            </ul>
        </div>
        </Col>
        <Col md={9}>
            <div className="whiteBox pdc ta-right">
                <div>
                    <Designs/>
                    <span className="gTitle">
                        طراحی و مشاوره روشنایی
                    </span>
                    <p className="commentText">
                    در پروژه‌های تجاری دو بخش روشنایی عمومی و نورپردازی ویژه بخصوص در نمای ساختمان حائز اهمیت می‌باشد. ویترین مغازه‌ها، فروشگاه‌ها، نحوه نمایش محصولات و نورپردازی نمای بیرونی از اجزاء اصلی در روشنایی مکان‌های تجاری است. در این مکان‌ها انتخاب درست سیستم روشنایی و نورپردازی می‌تواند عامل اصلی بالا رفتن فروش و جذب مشتری باشد. نورپردازی صحیح می‌تواند با مشتری ارتباط برقرار کرده و او را به درون فضا دعوت کند. همچنین محصولات را  دیدنی و جذاب نشان داده و باعث رونق خرید و فروش شود. رنگ، کنتراست و تعادل مناسب بین سطوح نورپردازی شده از مهمترین ویژگی‌های نورپردازی مکان‌های تجاری است.
                    </p>
                    <span className="gTitle mgt40 mgr0">
                        نمونه کارهای بالبیران
                    </span>
                    <div>
                    <div style={{marginTop:"50px"}}>
                        <FaCircle className="bCircle d-inline-block"/>
                        <span className="projectName d-inline-block">
                            پروژه برج میلاد
                        </span>
                    </div>
                    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingBottom:"15px"}} className="bBottom">
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                    </Row>
                    </div>
                    <div>
                    <div style={{marginTop:"50px"}}>
                        <FaCircle className="bCircle d-inline-block"/>
                        <span className="projectName d-inline-block">
                            پروژه برج میلاد
                        </span>
                    </div>
                    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingBottom:"15px"}} className="bBottom">
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        
                    </Row>
                    </div>
                    <div>
                    <div style={{marginTop:"50px"}}>
                        <FaCircle className="bCircle d-inline-block"/>
                        <span className="projectName d-inline-block">
                            پروژه برج میلاد
                        </span>
                    </div>
                    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingBottom:"15px"}} className="bBottom">
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                        <Col md={4}>
                            <img src={Bulding} className="projectImg"/>
                            <span className="projectName ta-right">
                            نمای اولیه - لابی برج میلاد
                        </span>
                        </Col>
                      
                    </Row>
                    </div>
                </div>

            </div>
        </Col>
    </Row>
   <Row style={{margin:"0px"}}>
       <Col md={12}>
       <div className="whiteBox" style={{paddingTop:'5',paddingRight:'0',paddingLeft:'0'}}>
      <Row style={{margin:"0px"}}>
        <Col md={1}>
          <FormIcon/>
        </Col>
        <Col md={11} className="ta-right pd0">
        <p className="gTitle" style={{marginRight:'0',marginTop:'5'}} >فرم درخواست خدمات روشنایی و طراحی</p>
      <p className="shortDescription">برای آگاهی از شرایط گارانتی فرم زیر را تکمیل نمایید</p>
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
 
       </Col>
   </Row>
  </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Design;