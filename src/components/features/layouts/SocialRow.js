import React  ,{ useRef,useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import Linkdin from '../assets/icons/Linkdin';
import Whatsapp from '../assets/icons/WhatsApp';
import Telegram from '../assets/icons/Telegram';
import Instagram from '../assets/icons/Instagram';
import {Container,Row,Col,Button} from 'react-bootstrap'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { FaSearch,FaMapMarkerAlt } from 'react-icons/fa';

const SocialRow = () => {
    const [mobile,setMobile]=useState('')
    const [pass,setPass]=useState('')

    const loginto=()=>{
        console.log(mobile)
        console.log(pass)
        const axios = require("axios");
        if(mobile!="")
        {axios
        .post(apiUrl + "InsertCustomer",{Mobile:mobile.toString()})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(response.data.Data)
alert("شماره شما با موفقیت اضافه شد")
    } else if (response.data.result == "duplicate"){
      alert("این شماره موبایل وجود دارد")
    }
     else{
      console.log(response.data.result)
      alert("عملیات با خطا روبرو شد")

    }})
    .catch(function (error) {
      console.log(error);
    });}
    else{

    }
    // console.log(159876)
      }
    return (
      <>
     <Container fluid className="social-row">
         <Row>
             <Col md={6} className="ta-right resTaCenter">
             <p className="email-title">بالبیران را در شبکه های اجتماعی دنبال کنید</p>
             <div className="d-inline-block socialIcons">
                 <Instagram></Instagram>
                 </div>
                 <div className="d-inline-block socialIcons">
                 <Telegram></Telegram>
                 </div>
                 <div className="d-inline-block socialIcons">
                 <Whatsapp></Whatsapp>
                 </div>
                 <div className="d-inline-block socialIcons">
                 <Linkdin></Linkdin>
                 </div>
             </Col>
             <Col md={6} className="ta-left resTaCenter">
                 <p className="email-title">جهت آگاهی از تخفیف های ویژه،عضو باشگاه مشتریان شوید</p>
                <div className="emailBox">
                    {/* <form> */}
                        <input className="mobileInput" type="text" onChange={(event)=>setMobile(event.target.value)} name="phonenumber" placeholder="شماره تلفن همراه خود را وارد کنید"></input>
                        <Button className="mobileSubmit yellowBTN"  type="submit" onClick={()=>loginto()}   >عضویت</Button>
                    {/* </form> */}
                </div>
             </Col>
         </Row>
     </Container>
      </>
      );
    };
    export default SocialRow;