import React  ,{ useState, Text } from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft ,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import ConfirmSvg from '../features/assets/icons/ConfirmSvg';
import 'react-dropdown/style.css';
import { Link, useHistory,useParams } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
const Verification = () => {
  const history = useHistory();
  const params = useParams().id;
  const [code,setCode]=useState(0)

  const verify=()=>{
    if(localStorage.getItem("ver")==code){
      const axios = require("axios");
      axios
      .post(apiUrl + "InsertCustomer",{Mobile:params})
  .then(function (response) {
    if (response.data.result == "true") {
      console.log(response.data.Data)
      // console.log(response.data.Data[0].UserID)
      // localStorage.setItem("user_id", response.data.Data[0].CustomerID);
  // alert("عملیات موفقیت آمیز بود")
  localStorage.setItem("ver",response.data.code)
  history.push("/registerCompelete/"+params)
  
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
      alert("کد درست نمیباشد")
    }
   
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
          <h4 className="w100">دریافت کد تایید</h4>

          <div className="loginForm">
           <label className="cLabel mgt40">کد تایید ارسال شده را وارد کنید</label>
           <input className="cInput mgt10" onChange={(event)=>setCode(event.target.value)}  placeholder="کد تایید" type="number" ></input>


          <Button className="loginBtn mgt40" id="cMargintop" onClick={()=>  verify()}>تنظیم رمز عبور جدید</Button>
          <span className="d-inline-block cLabel mgt20" id="fo12">ارسال مجدد</span>
          <div className="mgt20">
            <span className="d-inline-block cLabel" id="fo12">حساب کاربری ندارید؟</span>
          <a     className="d-inline-block inLink" id="fo12">ثبت نام کنید</a>
          </div>

        </div>
        </div>
        </Col>
        <Col md={6} className="colBackground ta-center" id="firstOrder">
            <ConfirmSvg className="wRes85"/>
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