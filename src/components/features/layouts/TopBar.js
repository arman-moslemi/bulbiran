import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import {Container,Row,Col} from 'react-bootstrap'
import Truck from'../assets/icons/TruckSvg'
import Percent from '../assets/icons/Percent'
const TopBar = () => {
    return (
      <>
<Container fluid>
  <Row className="alert-row">
    <Col>
    <p>اخبار و اطلاعیه های مهم اینجا قرار میگیرد...</p>

    </Col>
    
  </Row>
  <Row className="gray-row">
    <Col xs={3} md={6} className="ta-right">
      <Truck className="d-inline-block"></Truck>
      <p className="d-inline-block f-bold send-text">ارسال آسان،سریع و مطمئن</p>

    </Col>
    <Col xs={3} md={2}>
      <Percent></Percent>
    </Col>
    <Col xs={3} md={2}></Col>
    <Col xs={3} md={2}></Col>

  </Row>

 
</Container>
      </>
    );
  };
  export default TopBar;
  