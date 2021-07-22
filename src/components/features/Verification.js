import React  ,{ useRef, Text } from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft ,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import ConfirmSvg from '../features/assets/icons/ConfirmSvg';

const Verification = () => {

  return (
      <>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
      <div className="whiteBox pd0 loginBox">
    <Row>
        <Col md={6}>
        <div className="lBox ta-center">
          <h4 className="w100">دریافت کد تایید</h4>

          <div className="loginForm">
           <label className="cLabel mgt40">کد تایید ارسال شده را وارد کنید</label>
           <input className="cInput mgt10"  placeholder="کد تایید" type="number" ></input>
           
          
          <Button className="loginBtn mgt40" id="cMargintop">ارسال مجدد</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری ندارید؟</span>
          <a href="#" className="d-inline-block inLink" id="fo12">ثبت نام کنید</a>
          </div>

        </div>
        </div>
        </Col>
        <Col md={6} className="colBackground ta-center">
            <ConfirmSvg/>
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
export default Verification;