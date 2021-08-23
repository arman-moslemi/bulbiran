import React  ,{ useRef } from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import { Link, useHistory } from "react-router-dom";
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft ,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import LoginSvg from './assets/icons/LoginSvg';
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import Checkbox from "react-custom-checkbox";

const Login = () => {
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
        <Col md={6}>
        <div className="lBox ta-center">
          <h4>ورود</h4>

          <div className="loginForm">
            <label className="cLabel mgt40">شماره تلفن همراه</label>
            <input className="cInput mgt10"  placeholder="تلفن همراه" type="number" ></input>
            <label className="cLabel mgt20">رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>
           
            <ReactPasswordToggleIcon 
              inputRef={inputRef} 
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>
          <a href="#" className="ta-right cLabel mgt20" id="fo12" onClick={()=>  history.push("/verification")}>فراموشی رمز عبور</a>
          <div className="mgt10 checkB">
          <Checkbox
        icon={<FaCheck color="#ffb921" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {
        
        }}
        borderColor="#18206b"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none" }}
        label="مرا به خاطر بسپار"
      />
          
          </div>
          </div>
          <Button className="loginBtn">ورود</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری ندارید؟</span>
          <a href="#" className="d-inline-block inLink" id="fo12" onClick={()=>  history.push("/register")}>ثبت نام کنید</a>
          </div>

        </div>
        </Col>
        <Col md={6} className="colBackground ta-center">
            <LoginSvg/>
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
export default Login;