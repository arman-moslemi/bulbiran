import React  ,{ useRef } from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft ,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import ForgetPassSvg from './assets/icons/ForgetPassSvg';
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import Checkbox from "react-custom-checkbox";
import { Link, useHistory } from "react-router-dom";
const ForgetPassword = () => {
  const history = useHistory();
  let inputRef = useRef();
  const showIcon = () =><FaEye></FaEye>;
  const hideIcon = () => <FaEyeSlash></FaEyeSlash>;

  return (
      <>
        <TopBar/>
        <Header/>
      <Container fluid className="bulbiranContainer">
      <div className="whiteBox pd0 loginBox">
    <Row>
        <Col md={6}  id="secondOrder">
        <div className="lBox ta-center">
          <h4 className="w100">فراموشی رمز عبور</h4>

          <div className="loginForm">
           <label className="cLabel mgt40">رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon
              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>

          <label className="cLabel mgt20">تکرار رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon
              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>

          <Button className="loginBtn mgt40">تغییر رمز عبور</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری ندارید؟</span>
          <a className="d-inline-block inLink" id="fo12"  onClick={()=>  history.push("/register")}>ثبت نام کنید</a>
          </div>

        </div>
        </div>
        </Col>
        <Col md={6} className="colBackground ta-center"  id="firstOrder">
            <ForgetPassSvg className="wRes85"/>
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
export default ForgetPassword;