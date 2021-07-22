import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import Linkdin from '../assets/icons/Linkdin';
import Whatsapp from '../assets/icons/WhatsApp';
import Telegram from '../assets/icons/Telegram';
import Instagram from '../assets/icons/Instagram';
import {Container,Row,Col,Button} from 'react-bootstrap'

import { FaSearch,FaMapMarkerAlt } from 'react-icons/fa';
const SocialRow = () => {
    return (
      <>
     <Container fluid className="social-row">
         <Row>
             <Col md={6} className="ta-right">
             <p className="email-title">بالبیران را در شبکه های اجتماعی دنبال کنید</p>
             <div className="d-inline-block socialIcons">
                 <Instagram></Instagram>
                 </div>  
                 <div className="d-inline-block socialIcons">
                 <Telegram></Telegram>
                 </div>
                 <div className="d-inline-block socialIcons">
                 <Whatsapp></Whatsapp>
                 </div>
                 <div className="d-inline-block socialIcons">
                 <Linkdin></Linkdin>
                 </div>
             </Col>
             <Col md={6} className="ta-left">
                 <p className="email-title">جهت آگاهی از تخفیف های ویژه،عضو باشگاه مشتریان شوید</p>
                <div className="emailBox">
                    <form>
                        <input className="mobileInput" type="text" name="phonenumber" placeholder="شماره تلفن همراه خود را وارد کنید"></input>
                        <input className="mobileSubmit" type="submit" value="عضویت" />
                    </form>
                </div>
             </Col>
         </Row>
     </Container>
      </>
      );
    };
    export default SocialRow;