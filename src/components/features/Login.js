import React  ,{ useRef,useState,useEffect } from 'react'
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
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  let inputRef = useRef();
  const showIcon = () =><FaEye></FaEye>;
  const hideIcon = () => <FaEyeSlash></FaEyeSlash>;
  const [mobile,setMobile]=useState('')
  const [pass,setPass]=useState('')
  const [pro,setPro]=useState([])

  const loginto=()=>{
    console.log(mobile)
    console.log(pass)
    const axios = require("axios");
    axios
    .post(apiUrl + "Login",{Mobile:mobile.toString(),Password:pass.toString()})
.then(function (response) {
  if (response.data.result == "true") {
    console.log(response.data.Data)
    console.log(response.data.Data[0].UserID)
    localStorage.setItem("user_id", response.data.Data[0].CustomerID);
    localStorage.setItem("user_name", response.data.Data[0].NameFamily);
// alert("عملیات موفقیت آمیز بود")
history.push("/userpanel/"+response.data.Data[0].CustomerID)

} else if (response.data.result == "duplicate"){
  alert("اطلاعات وارد شده درست نمی باشد")
}
 else{
  console.log(response.data.result)
  alert("عملیات با خطا روبرو شد")

}})
.catch(function (error) {
  console.log(error);
});
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
        <div className="lBox ta-center">
          <h4>ورود</h4>

          <div className="loginForm">
            <label className="cLabel mgt40">شماره تلفن همراه</label>
            <input className="cInput mgt10" onChange={(event)=>setMobile(event.target.value)}  placeholder="تلفن همراه" type="number" ></input>
            <label className="cLabel mgt20">رمز عبور</label>
           <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
           <input className="cInput mgt10" onChange={(event)=>setPass(event.target.value)} ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon
              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
          </div>
          <a     className="ta-right cLabel mgt20" id="fo12" onClick={()=>  history.push("/verification")}>فراموشی رمز عبور</a>
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
          <Button className="loginBtn" onClick={()=>loginto()}>ورود</Button>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری ندارید؟</span>
          <a     className="d-inline-block inLink" id="fo12" onClick={()=>  history.push("/register")}>ثبت نام کنید</a>
          </div>

        </div>
        </Col>
        <Col md={6} className="colBackground ta-center" id="firstOrder">
            <LoginSvg className="wRes85"/>
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