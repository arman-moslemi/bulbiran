import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import Linkdin from '../assets/icons/Linkdin';
import Whatsapp from '../assets/icons/WhatsApp';
import Telegram from '../assets/icons/Telegram';
import Instagram from '../assets/icons/Instagram';
import {Container,Row,Col,Button} from 'react-bootstrap'
import Ersal from '../assets/icons/Ersal';
import Zemanat from '../assets/icons/zemanat';
import Garantee from '../assets/icons/Garantee';
import Moshavere from '../assets/icons/Moshavere';
import Pardakht from '../assets/icons/Pardakht';
import Price from '../assets/icons/Price';


const IconRow = () => {
    return (
      <>
    <Container fluid>
        <Row  className="iconRow">
            <Col md={2} className="ta-center">
                <Moshavere className="footerIcon"></Moshavere>
                <p className="iconTitle">مشاوره رایگان</p>
            </Col>
            <Col md={2} className="ta-center">
                <Pardakht className="footerIcon"></Pardakht>
                <p className="iconTitle">پرداخت امن و آسان</p>
            </Col>
            <Col md={2} className="ta-center">
                <Zemanat className="footerIcon"> </Zemanat>
                <p className="iconTitle">ضمانت اصل بودن کالا</p>
            </Col>
            <Col md={2} className="ta-center">
                <Ersal className="footerIcon"></Ersal>
                <p className="iconTitle">ارسال و پیگیری</p>
            </Col>
            <Col md={2} className="ta-center">
                <Garantee className="footerIcon"></Garantee>
                <p className="iconTitle">خدمات پس از فروش</p>
            </Col>
            <Col md={2} className="ta-center">
                <Price className="footerIcon"></Price>
                <p className="iconTitle">قیمت کارخانه</p>
            </Col>
            </Row>
        </Container>
  </>
      );
    };
    export default IconRow;