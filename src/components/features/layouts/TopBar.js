import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import { Link, useHistory } from "react-router-dom";
import {Container,Row,Col,Button} from 'react-bootstrap'
import Truck from'../assets/icons/TruckSvg'
import Percent from '../assets/icons/Percent'
import User from '../assets/icons/User'
import Cart from '../assets/icons/Cart'

import ResponsiveMenu from '../layouts/ResponsiveMenu';

import Exit from '../assets/icons/Exit'

const TopBar = () => {
  const history = useHistory();
  const UserID= localStorage.getItem("user_id");
  const UserName= localStorage.getItem("user_name");
  const basket=()=>{
    console.log(22)
    console.log(UserID)
           if(UserID==null ||UserID=="" ){
  alert("ابتدا وارد شوید")
  history.push("/Login")

  }
  else{
    history.push("/Cartstep1/"+UserID)
  }
  }
  const exit=()=>{
    console.log(22)
    localStorage.setItem("user_id","")
    history.push("/")

  }
    return (
      <>
<Container fluid>
  <Row className="alert-row">
    <Col>
    <p>اخبار و اطلاعیه های مهم اینجا قرار میگیرد...</p>

    </Col>

  </Row>
  <Row className="gray-row">

    <Col xs={12} md={4} className="ta-right">

      <Truck className="d-inline-block"></Truck>
      <p className="d-inline-block f-bold send-text">ارسال آسان،سریع و مطمئن</p>

    </Col>

    <Col xs={6} md={6} className="desktopNone">
    <ResponsiveMenu className="desktopNone"/>
      </Col>

    <Col xs={6} md={8}>
    <Button className="topbar-btn"onClick={()=>  history.push("/pishnahadvijhe")}>

      <Percent className="d-inline-block"></Percent>
      <p className="d-inline-block" >تخفیفات امروز</p>
      </Button>





      {
          UserID==null ||UserID==""?
    <Button className="topbar-btn" onClick={()=>  history.push("/login")}>
      <User className="d-inline-block"></User>

          <p className="d-inline-block" onClick={()=>  history.push("/login")}>حساب کاربری</p>
      </Button>
          :
          <Button className="topbar-btn" onClick={()=>  history.push("/userpanel/"+UserID)}>
      <User className="d-inline-block"></User>
          <p className="d-inline-block" onClick={()=>  history.push("/userpanel/"+UserID)}>{UserName}</p>
          </Button>

      }



    <Button className="topbar-btn" onClick={()=>  basket()}>
      <Cart className="d-inline-block"></Cart>
      <p className="d-inline-block"  >سبد خرید</p>
      </Button>
      {
          UserID==null ||UserID==""?
     null
      :
      <Button onClick={()=>exit()} className="topbar-btn">
      <Exit className="d-inline-block" style={{width:"25px",color:"#ffb921"}}></Exit>
      <p className="d-inline-block" >خروج</p>
      </Button>
      }
    </Col>

  </Row>


</Container>
      </>
    );
  };
  export default TopBar;
