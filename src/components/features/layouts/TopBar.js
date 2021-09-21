import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import { Link, useHistory } from "react-router-dom";
import {Container,Row,Col,Button} from 'react-bootstrap'
import Truck from'../assets/icons/TruckSvg'
import Percent from '../assets/icons/Percent'
import User from '../assets/icons/User'
import Cart from '../assets/icons/Cart'

const TopBar = () => {
  const history = useHistory();
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
    <Col xs={3} md={6}>
      <Button className="topbar-btn">
      <Percent className="d-inline-block"></Percent>
      <p className="d-inline-block" onClick={()=>  history.push("/pishnahadvijhe")}>تخفیفات امروز</p>
      </Button>
      
  
    
    <Button className="topbar-btn">
      <User className="d-inline-block"></User>
      <p className="d-inline-block" onClick={()=>  history.push("/login")}>حساب کاربری</p>
      </Button>
    
    
    <Button className="topbar-btn">
      <Cart className="d-inline-block"></Cart>
      <p className="d-inline-block"  onClick={()=>  history.push("/Cartstep1")}>سبد خرید</p>
      </Button>
    </Col>

  </Row>

 
</Container>
      </>
    );
  };
  export default TopBar;
  