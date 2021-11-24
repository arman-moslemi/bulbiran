import React  ,{ useRef,useState,useEffect } from 'react'
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
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

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
  const [mobile,setMobile]=useState('')
  const [pass,setPass]=useState('')
  const [againPass,setAgainPass]=useState('')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [rol,setRol]=useState(0)

  const loginto=()=>{
    console.log(mobile)
    console.log(pass)
    if(pass==againPass){
    const axios = require("axios");
    axios
    .post(apiUrl + "InsertCustomerFull",{Mobile:mobile.toString(),Password:pass.toString(),Role:rol,Email:email,NameFamily:name})
.then(function (response) {
  if (response.data.result == "true") {
    console.log(response.data.Data)
    // console.log(response.data.Data[0].UserID)
    // localStorage.setItem("user_id", response.data.Data[0].CustomerID);
alert("عملیات موفقیت آمیز بود")
history.push("/verification")

} else if (response.data.result == "duplicate"){
  alert("این شماره موبایل وجود دارد")
}
 else{
  console.log(response.data.result)
  alert("عملیات با خطا روبرو شد")

}})
.catch(function (error) {
  console.log(error);
});
    }
    else{
      alert(" تکرار رمز عبور درست نمی باشد")

    }
// console.log(159876)
  }
  return (
      <>
        <TopBar/>
        <Header/>
      <Container fluid className="bulbiranContainer">
      <div className="whiteBox pd0 loginBox">
    <Row>
        <Col md={6} id="secondOrder">
        <div className="lBox ta-center w100">
          <h4>ثبت نام</h4>

          <div className="registerForm">
          <Row>
            <Col md={6}>
            <label className="cLabel mgt40">نام و نام خانوادگی</label>
            <input onChange={(event)=>setName(event.target.value)} className="cInput mgt10"  placeholder="نام و نام خانوادگی" ></input>

            </Col>
            <Col md={6}>
            <label className="cLabel mgt40">شماره تلفن همراه</label>
            <input onChange={(event)=>setMobile(event.target.value)} className="cInput mgt10"  placeholder="تلفن همراه" type="number" ></input>

            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">ایمیل</label>
            <input onChange={(event)=>setEmail(event.target.value)} className="cInput mgt10"  placeholder="ایمیل" type="email" ></input>

            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">نوع کاربر</label>
            <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />
            </Col>
            <Col md={6}>
            <label className="cLabel mgt20">رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input onChange={(event)=>setPass(event.target.value)} className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>

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
           <input onChange={(event)=>setAgainPass(event.target.value)} className="cInput mgt10" ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon
              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>
            </Col>

          </Row>



          <Button onClick={()=>loginto()} className="loginBtn w50 mgt40" style={{marginTop:40}}>ثبت نام</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری دارید؟</span>
          <a     className="d-inline-block inLink" id="fo12" onClick={()=>  history.push("/login")}>وارد شوید</a>
          </div>

        </div>
        </div>
        </Col>
        <Col md={6} className="colBackground ta-center" id="firstOrder">
            <RegisterSvg className="wRes85"/>
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