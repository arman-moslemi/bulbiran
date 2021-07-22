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
const Footer = () => {
    return (
      <>
      <Container fluid>
          <Row className="footerRow">
             <Col md={2} className="ta-right">
                 <p className="footerTitle">درباره بالبیران</p>
               <ul className="footerList">
                 <li>
                 <a href="#" className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک دو</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک سه</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک چهار</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک پنج</a>
                 </li>
               </ul>
               
               
                 </Col> 
            <Col md={2} className="ta-right">
            <p className="footerTitle">فروشگاه بالبیران</p>
            <ul className="footerList">
                 <li>
                 <a href="#" className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک دو</a>
                 </li>
                 </ul>
            </Col>
            <Col md={2} className="ta-right">
            <p className="footerTitle">خدمات بالبیران</p>
            <ul className="footerList">
                 <li>
                 <a href="#" className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک دو</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک سه</a>
                 </li>
                 </ul>
            </Col>
            <Col md={2} className="ta-right">
            <p className="footerTitle">خدمات مشتریان</p>
            <ul className="footerList">
                 <li>
                 <a href="#" className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک دو</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک سه</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک چهار</a>
                 </li>

                 </ul>

                 </Col> 
            <Col md={2} className="ta-right">
            <p className="footerTitle">مجله بالبیران</p>
                    <ul className="footerList">
                 <li>
                 <a href="#" className="footerLink">لینک یک</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک دو</a>
                 </li>
                 <li>
                 <a href="#" className="footerLink">لینک سه</a>
                 </li>
                 
                 
                 </ul>
            </Col>
            <Col md={2}>
              <div className="footerImg d-inline-block float-right">
                <img src={Enamad}/>
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