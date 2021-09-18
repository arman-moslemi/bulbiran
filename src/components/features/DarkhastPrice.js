import React , {useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Repair from './assets/icons/Repair'
import Khadamat4 from './assets/icons/Khadamat4'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar} from 'react-icons/fa';
import Khadamat3 from './assets/icons/Khadamat3';
import FormIcon from './assets/icons/FormIcon'
import ContactMail from './assets/icons/ContactMail'
import MailForm from './assets/img/MailForm.png'
import Coin from './assets/icons/Coin';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const DarkhastPrice = () => {
  const [name,setName]=useState('')
  const [company,setCompany]=useState('')
  const [fax,setFax]=useState('')
  const [phone,setPhone]=useState('')
  const [des,setDes]=useState('')
  const sendReq=()=>{
    const axios = require("axios");
    console.log(name)
    console.log(phone)
    console.log(des)
    if(name!=""&&company!=""&&phone!=""&&des!=""){
      axios
      .post(apiUrl + "InsertRequestCost",{NameFamily:name,CompanyName:company,Mobile:phone,Fax:fax,Text:des})
  .then(function (response) {
    if (response.data.result == "true") {
        console.log(22)
        console.log(response.data.Data)
alert("با موفقیت انجام شد")
    setName("")
    setCompany("")
    setDes("")
    setFax("")
    setPhone("")


  }
  else{
    // console.log(response.data.result)
    alert("عملیات با خطا رویرو شد")

  }
}
  )
  .catch(function (error) {
    console.log(error);
  });
}
else{
    alert("لطفا فیلدهای ستاره دار را کامل کنید")
}
  }
    return (
    <>
          <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
    <div className="whiteBox">
        <div className="ta-right">
            <Coin className="d-inline-block"/>
            <p className="gTitle">درخواست استعلام قیمت</p>
        </div>
        <p className="brandShopDescription w100" style={{color:"#18206b"}}>
        در پروژه‌های تجاری دو بخش روشنایی عمومی و نورپردازی ویژه بخصوص در نمای ساختمان حائز اهمیت می‌باشد. ویترین مغازه‌ها، فروشگاه‌ها، نحوه نمایش محصولات و نورپردازی نمای بیرونی از اجزاء اصلی در روشنایی مکان‌های تجاری است. در این مکان‌ها انتخاب درست سیستم روشنایی و نورپردازی می‌تواند عامل اصلی بالا رفتن فروش و جذب مشتری باشد. نورپردازی صحیح می‌تواند با مشتری ارتباط برقرار کرده و او را به درون فضا دعوت کند. همچنین محصولات را  دیدنی و جذاب نشان داده و باعث رونق خرید و فروش شود. رنگ، کنتراست و تعادل مناسب بین سطوح نورپردازی شده از مهمترین ویژگی‌های نورپردازی مکان‌های تجاری است.
        </p>
        <Row style={{margin:"0",marginTop:"60px"}}>
          <Col md={5} className="ta-right pdr0">
          <p className="gTitle" style={{marginRight:"0px"}}>ثبت درخواست استعلام قیمت</p>
          <form className="serviceForm">
            <div className="cFormDiv">
           <span>نام و نام خانوادگی : </span><FaStar/>
           <input placeholder="نام و نام خانوادگی خود را وارد کنید" onChange={(event)=>setName(event.target.value)} value={name} required/>
            </div>
            <div className="cFormDiv">
           <span>نام شرکت : </span><FaStar/>
           <input onChange={(event)=>setCompany(event.target.value)} value={company} placeholder="نام شرکت خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv">
           <span>شماره تماس : </span><FaStar/>
           <input onChange={(event)=>setPhone(event.target.value)} value={phone} placeholder="شماره تماس خود را وارد کنید" required type="number"/>
            </div>
            <div className="cFormDiv">
           <span>شماره فکس : </span>
           <input onChange={(event)=>setFax(event.target.value)} value={fax} placeholder="شماره فکس خود را وارد کنید" type="number"/>
            </div>
            <div className="cFormDiv">
           <span>متن درخواست : </span><FaStar/>
           <textarea onChange={(event)=>setDes(event.target.value)} value={des} placeholder="توضیحات خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv ta-left" style={{marginBottom:"0"}}>
            <Button   onClick={sendReq} className="servicesButton" >
                   ثبت درخواست
               </Button>
            </div>
          </form>

          </Col>
          <Col md={7} className="ta-center">
           <Khadamat3 style={{marginTop:"100px"}}/>
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
export default DarkhastPrice;