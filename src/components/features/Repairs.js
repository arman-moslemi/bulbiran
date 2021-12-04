import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Repair from './assets/icons/Repair'
import Khadamat4 from './assets/icons/Khadamat4'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar} from 'react-icons/fa';
import b1 from './assets/img/b1.png';
import b2 from './assets/img/b2.png';
import b3 from './assets/img/b3.jpeg';
import b4 from './assets/img/b4.png';
import b5 from './assets/img/b5.png';
import b6 from './assets/img/b6.png';
import b7 from './assets/img/b7.png';
import b8 from './assets/img/b8.png';
import b9 from './assets/img/b9.png';
import b10 from './assets/img/b10.png';
import b11 from './assets/img/b11.png';
import b12 from './assets/img/b12.png';
import FormIcon from './assets/icons/FormIcon'
import ContactMail from './assets/icons/ContactMail'
import MailForm from './assets/img/MailForm.png'
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const Repairs = () => {
  const [product,setProduct]=useState([])
  const [name,setName]=useState('')
  const [productname,setProductName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [subject,setSubject]=useState('')
  const [des,setDes]=useState('')

    const sendReq=()=>{
      const axios = require("axios");
      // console.log(name)
      // console.log(phone)
      // console.log(productname)
      // console.log(des)
      // console.log(subject)
      if(name!=""&&productname!=""&&phone!=""&&des!=""){
        axios
        .post(apiUrl + "InsertRepair",{NameFamily:name,ProductName:productname,Mobile:phone,Email:email,Title:subject,Text:des})
    .then(function (response) {
      if (response.data.result == "true") {
          console.log(22)
          // console.log(response.data.Data)
alert("با موفقیت انجام شد")
      setName("")
      setProductName("")
      setDes("")
      setEmail("")
      setPhone("")
      setSubject("")

          // setProduct(response.data.Data)

    }
    else{
      console.log(response.data.result)
      alert("عملیات با خطا رویرو شد")

    }})
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
            <Repair className="d-inline-block"/>
            <p className="gTitle">تعمیرات کالاهای آسیب دیده خارج از گارانتی</p>
        </div>
        <p className="brandShopDescription w100" style={{color:"#18206b"}}>
        در مرکز تعمیرات بالبیران ، خدمات و سرویس انواع محصولات روشنایی انجام می شود. تعمیرگاه مجاز با سرلوحه قرار دادن هدف کسب رضایت مشتری و احترام به حقوق ایشان به فعالیت می پردازد . از این رو مرکز تعمیرات به تدوین و تهیه ی قوانین و مقررات تعمیرگاه مجاز روشنایی ، همت گماشته است.
        <br/>
        کاربران ارجمند نمایندگی بالبیران مستحضر هستند که حضور نظم برای قرار گرفتن یک نهاد و سازمان در موقعیتی رفیع و والا امری است بسیار ضروری . بدیهی است قوانین و مقررات تعمیرگاه مجاز بالبیران موجبات اعتماد مشتریان به این مرکز را فراهم می نماید. واضح و مبرهن است مخاطبان مجموعه با مطالعه ی این مطلب می توانند اطلاعات کامل و جامعی در حوزه ی فعالیت های تعمیراتی این مرکز به دست آورند .
      <br/>
      امید است از طریق ارائه ی قوانین و مقررات تعمیرگاه مجاز گوشی توانسته باشیم آنگونه که درخور کاربران گرامی است ، به معرفی شرکت بپردازیم . نمایندگی گوشی مطابق با آخرین متد روز دنیا به ریکاوری و تعمیر دستگاه معیوب کاربران می پردازد .
       </p>
        <Row className="mgt40">
          <Col md={6} className="ta-right">
            <p className="gTitle">مواردی که شامل تعمیرات می شوند</p>
            <ul className="garanteList">
              <li>
                <p className="">محصول سوخته</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
              <li>
                <p>محصول دارای اعتبار تاریخ ضمانت (بر روی بدنه محصول یا روی جعبه).</p>
              </li>
              <li>
                <p>عیوب فیزیکی و خسارت‌های مکانیکی مانند وارد آمدن ضربه به قسمت‌های مختلف محصول که باعث فرورفتگی، شکستگی و یا سوراخ شدن بدنه محصول می‌گردد..</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
              <li>
                <p>عیوب فیزیکی و خسارت‌های مکانیکی مانند وارد آمدن ضربه به قسمت‌های مختلف محصول که باعث فرورفتگی، شکستگی و یا سوراخ شدن بدنه محصول می‌گردد.</p>
              </li>
              <li>
                <p>محصولی که به دلیل استفاده در محیط و قاب‌های بسته که تبادل حرارتی در آن به درستی صورت نمی‌گیرد و معیوب شده باشد.</p>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Khadamat4 className="wRes100"/>
          </Col>
        </Row>
       <Row className="mgt20">
          <Col md={12} className="ta-right">
          <p className="gTitle">برندهای طرف قرارداد با بالبیران</p>
         <Row className="mgt20">
           <Col md={12} className="cP">
           <div     className="brandIconBox">
            <img src={b10}/>
          </div>
          <div     className="brandIconBox">
            <img src={b2}/>
          </div>
          <div     className="brandIconBox">
            <img src={b3}/>
          </div>
          <div     className="brandIconBox">
            <img src={b4}/>
          </div>
          <div     className="brandIconBox">
            <img src={b5}/>
          </div>
          <div     className="brandIconBox">
            <img src={b6}/>
          </div>
          <div     className="brandIconBox">
            <img src={b7}/>
          </div>
          <div     className="brandIconBox">
            <img src={b10}/>
          </div>
          <div     className="brandIconBox">
            <img src={b2}/>
          </div>
          <div     className="brandIconBox">
            <img src={b3}/>
          </div>
          <div     className="brandIconBox">
            <img src={b4}/>
          </div>
          <div     className="brandIconBox">
            <img src={b5}/>
          </div>
          <div     className="brandIconBox">
            <img src={b6}/>
          </div>
          <div     className="brandIconBox">
            <img src={b7}/>
          </div>
          <div     className="brandIconBox">
            <img src={b2}/>
          </div>
          <div     className="brandIconBox">
            <img src={b3}/>
          </div>
          <div     className="brandIconBox">
            <img src={b4}/>
          </div>
          <div     className="brandIconBox">
            <img src={b5}/>
          </div>
          <div     className="brandIconBox">
            <img src={b6}/>
          </div>
          <div     className="brandIconBox">
            <img src={b7}/>
          </div>
           </Col>
         </Row>
            </Col>
            </Row>
    </div>
    <div className="whiteBox" style={{paddingTop:'5',paddingRight:'0',paddingLeft:'0'}}>
      <Row>
        <Col md={1} xs={3} >
          <FormIcon/>
        </Col>
        <Col md={11}  xs={9} className="ta-right pd0">
        <p className="gTitle" style={{marginRight:'0',marginTop:'5'}} >فرم درخواست تعمیرات کالا</p>
      <p className="shortDescription">برای آگاهی از شرایط تعمیرات کالا فرم زیر را تکمیل نمایید</p>
        </Col>
        </Row>
        <hr></hr>
        <Row style={{margin:"0"}}>
          <Col md={5} className="ta-right" id="secondOrder">
          <form className="serviceForm">
            <div className="cFormDiv">
           <span>نام و نام خانوادگی</span><FaStar/>
           <input onChange={(event)=>setName(event.target.value)} value={name} placeholder="نام و نام خانوادگی خود را وارد کنید" type='text' required/>
            </div>
            <div className="cFormDiv">
           <span>نام محصول</span><FaStar/>
           <input onChange={(event)=>setProductName(event.target.value)} value={productname} placeholder="نام محصول خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv">
           <span>شماره تماس</span><FaStar/>
           <input onChange={(event)=>setPhone(event.target.value)} value={phone} placeholder="شماره تماس خود را وارد کنید" required type="number"/>
            </div>
            <div className="cFormDiv">
           <span>پست الکترونیکی</span>
           <input onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="پست الکترونیکی خود را وارد کنید" type="email"/>
            </div>
            <div className="cFormDiv">
           <span>موضوع درخواست </span>
           <input onChange={(event)=>setSubject(event.target.value)} value={subject} placeholder="موضوع درخواست را وارد کنید"/>
            </div>
            <div className="cFormDiv">
           <span>توضیحات</span><FaStar/>
           <textarea onChange={(event)=>setDes(event.target.value)} value={des} placeholder="توضیحات خود را وارد کنید" required/>
            </div>
            <div className="cFormDiv ta-left" style={{marginBottom:"0"}}>
            <Button
             onClick={()=>sendReq()}
              className="servicesButton" type="submit">
                   ثبت درخواست
               </Button>
            </div>
          </form>

          </Col>
          <Col md={7} className="ta-center" id="firstOrder">
            <img src={MailForm} className="w90"/>
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
export default Repairs;