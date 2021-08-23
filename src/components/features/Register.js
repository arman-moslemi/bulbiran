import React  ,{ useRef } from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft ,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import RegisterSvg from './assets/icons/RegisterSvg';
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import Checkbox from "react-custom-checkbox";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const options=[
    'one',
    'two',
    'three'
  ]
  const defaultOption = options[0];
  let inputRef = useRef();
  const showIcon = () =><FaEye></FaEye>;
  const hideIcon = () => <FaEyeSlash></FaEyeSlash>;
  const history = useHistory();
  return (
      <>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
      <div className="whiteBox pd0 loginBox">
    <Row>
        <Col md={6}>
        <div className="lBox ta-center w100">
          <h4>ثبت نام</h4>

          <div className="registerForm">
          <Row>
            <Col md={6}>
            <label className="cLabel mgt40">نام و نام خانوادگی</label>
            <input className="cInput mgt10"  placeholder="نام و نام خانوادگی" ></input>
          
            </Col>
            <Col md={6}>
            <label className="cLabel mgt40">شماره تلفن همراه</label>
            <input className="cInput mgt10"  placeholder="تلفن همراه" type="number" ></input>
           
            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">ایمیل</label>
            <input className="cInput mgt10"  placeholder="ایمیل" type="email" ></input>
           
            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">نوع کاربر</label>
            <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />;
            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>
           
            <ReactPasswordToggleIcon 
              inputRef={inputRef} 
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>
            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">تکرار رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>
           
            <ReactPasswordToggleIcon 
              inputRef={inputRef} 
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>
            </Col>
            
          </Row>

          
         
          <Button className="loginBtn w50 mgt40" style={{marginTop:40}}>ثبت نام</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری دارید؟</span>
          <a href="#" className="d-inline-block inLink" id="fo12" onClick={()=>  history.push("/login")}>وارد شوید</a>
          </div>

        </div>
        </div>
        </Col>
        <Col md={6} className="colBackground ta-center">
            <RegisterSvg/>
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
export default Register;