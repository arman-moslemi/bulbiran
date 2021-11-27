import React  ,{ useRef,useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import Instagram from '../assets/img/instagram.png'
import Whatsapp from '../assets/img/whatsapp.png'
import Telegram from '../assets/img/telegram.png'
import Linkedin from '../assets/img/linkedin.png'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { FaSearch,FaMapMarkerAlt } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'

const SocialRow = () => {
 
    const [mobile,setMobile]=useState('')
    const [pass,setPass]=useState('')

    const loginto=()=>{
        console.log(mobile)
        console.log(pass)
        const axios = require("axios");
        axios
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
    });
    // console.log(159876)
      }
    return (
      <>
     <Container fluid className="social-row">
         <Row>
             <Col md={6} className="ta-right resTaCenter">
             <p className="email-title">بالبیران را در شبکه های اجتماعی دنبال کنید</p>
             <a className="d-inline-block socialIcons" href="https://instagram.com/bulb_iran">
                 <img src={Instagram} />
                 
                 </a>
                 <a className="d-inline-block socialIcons" href="https://telegram.me/@bulbiran">
                 <img src={Telegram} />
                
                 </a>
                 <a className="d-inline-block socialIcons" href="https://wa.me/+989357500057">
                 <img src={Whatsapp} />
                
                 </a>
                 <a className="d-inline-block socialIcons" href="">
                 <img src={Linkedin} />
                
                 </a>
             </Col>
             <Col md={6} className="ta-left resTaCenter">
                 <p className="email-title">جهت آگاهی از تخفیف های ویژه،عضو باشگاه مشتریان شوید</p>
                <div className="emailBox">
                    <form>
                        <input className="mobileInput" type="text" onChange={(event)=>setMobile(event.target.value)} name="phonenumber" placeholder="شماره تلفن همراه خود را وارد کنید"></input>
                        <Button className="mobileSubmit yellowBTN"  type="submit" onClick={()=>loginto()}   >عضویت</Button>
                    </form>
                </div>
             </Col>
         </Row>
     </Container>
      </>
      );
    };
    export default SocialRow;