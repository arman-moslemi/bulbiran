import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import Linkdin from '../assets/icons/Linkdin';
import Whatsapp from '../assets/icons/WhatsApp';
import Telegram from '../assets/icons/Telegram';
import Instagram from '../assets/icons/Instagram';
import {Container,Row,Col,Button} from 'react-bootstrap'
import Enamad from '../assets/img/enamad-copy.png'
import Samandehi from '../assets/img/samandehi.png'
import Logonama from '../assets/img/logonama.png'
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const history = useNavigate();
    return (
      <>
      <Container fluid>
          <Row className="footerRow">

            {/* <Col md={2} className="ta-right">
=======


                 </Col>
            <Col md={2} xs={6} className="ta-right">
>>>>>>> 6873bfcd9d3b18744d9751ba8eca75d9f7b5386e
            <p className="footerTitle">فروشگاه بالبیران</p>
            <ul className="footerList">
                 <li>
                 <a   className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک دو</a>
                 </li>
                 </ul>
<<<<<<< HEAD
            </Col> */}
            {/* <Col md={2} className="ta-right">
            </Col> */}
            <Col md={2} xs={6} className="ta-right">
            <p className="footerTitle">خدمات بالبیران</p>
            <ul className="footerList">
                 <li>
                 <a onClick={()=>  history("/design")} className="footerLink">طراحی و دیزاین</a>
                 </li>
                 <li>
                 <a  onClick={()=>  history("/Garanty")} className="footerLink">گارانتی و خدمات پس از فروش</a>
                 </li>
                 <li>
                 <a  onClick={()=>  history("/repairs")} className="footerLink">تعمیرات</a>
                 </li>
                 <li>
                 <a  onClick={()=>  history("/LavazemYadaki")} className="footerLink">لوازم یدکی</a>
                 </li>
                 </ul>
            </Col>
            {/* <Col md={2} className="ta-right">
            <Col md={2} xs={6} className="ta-right">
>>>>>>> 6873bfcd9d3b18744d9751ba8eca75d9f7b5386e
            <p className="footerTitle">خدمات مشتریان</p>
            <ul className="footerList">
                 <li>
                 <a   className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک دو</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک سه</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک چهار</a>
                 </li>

                 </ul>

<<<<<<< HEAD
                 </Col>  */}
            {/* <Col md={2} className="ta-right">
                 </Col> */}
            <Col md={2} xs={6} className="ta-right">
            <p className="footerTitle">مجله بالبیران</p>
                    <ul className="footerList">
                 <li>
                 <a  onClick={()=>  history("/news")}  className="footerLink">آخرین اخبار</a>
                 </li>
                 <li>
                 <a  onClick={()=>  history("/news")}  className="footerLink">مقالات علمی</a>
                 </li>
                 <li>
                 <a  onClick={()=>  history("/news")}  className="footerLink">طراحی روشنایی</a>
                 </li>


                 </ul>
            </Col>
            <Col md={2} xs={6} className="ta-right">
                 <p className="footerTitle">درباره بالبیران</p>
               <ul className="footerList">
                 <li>
                 <a   className="footerLink"onClick={()=>  history("/rules")}>قوانین و مقررات</a>
                 </li>
                 <li>
                 <a   className="footerLink"onClick={()=>  history("/contactUs")}>تماس با ما</a>
                 </li>
                 {/* <li>
                 <a   className="footerLink">لینک سه</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک چهار</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک پنج</a>
                 </li> */}
               </ul>


                 </Col>
                 <Col md={4} xs={12} className="ta-right">
                 <p className="footerTitle">آدرس</p>
               <ul className="footerList">
                 <li>
                 <p   className="footerLink">تهران،میدان امام خمینی،خیابان ناصر خسرو،مجتمع تجاری ناصر خسرو</p>
                 </li>
                 <li>
                 <p   className="footerLink">تلفن ثابت:02133904900 </p>
                 </li>
                 <li>
                 <p   className="footerLink">موبایل:09357500057 </p>
                 </li>
                 
                 {/* <li>
                 <a   className="footerLink">لینک سه</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک چهار</a>
                 </li>
                 <li>
                 <a   className="footerLink">لینک پنج</a>
                 </li> */}
               </ul>


                 </Col>
            <Col md={2} xs={12}>
              <div className="footerImg d-inline-block float-right">
                {/* <img src={Enamad}/> */}


<a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=252046&amp;Code=wh9eNJMPy5RlG0tr4Xfr">
  <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=252046&amp;Code=wh9eNJMPy5RlG0tr4Xfr" alt=""  id="wh9eNJMPy5RlG0tr4Xfr"/>
  </a>


              </div>
              <div className="footerImg d-inline-block">
                <img src={Samandehi}/>
              </div>
              <div className="footerImg float-right mgt15">
                <img src={Logonama}/>
              </div>
            </Col>
          
          </Row>
      </Container>
      </>
    );
};
export default Footer;