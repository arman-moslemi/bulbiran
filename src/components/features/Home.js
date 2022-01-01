
import React,{useEffect,useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import Modal from 'react-modal';
import {Container,Row,Col,Button} from 'react-bootstrap'
import APlus from './assets/icons/APlus'
import Clock from './assets/icons/Clock'
import Degree from './assets/icons/Degree'
import Garanteewhite from './assets/icons/GaranteeWhite'
import LED from './assets/icons/LED'
import SaveEnergy from './assets/icons/SaveEnergy'
import Standard from './assets/icons/Standard'
import UvFree from './assets/icons/UvFree'
import LedButton from './assets/icons/LedButton'
import Slider from './layouts/Slider'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CircumstanceBanner from './assets/icons/CircumstanceBanner'
import LedBanner from './assets/icons/LedBanner'
import { FaAngleLeft ,FaSearch ,FaTimes} from 'react-icons/fa';
import Lamp from './assets/img/lamp.png';
import Rise from './assets/img/rise.png';
import Lavazem from './assets/img/lavazemjanebi.png';
import Inner from './assets/img/inner.png';
import Outdoor from './assets/img/outdoor.png';
import Tazein from './assets/img/tazein.png';

import Suggestion from './assets/icons/Suggestion';
import Services from './assets/icons/Services';
import Magazine from './assets/icons/Magazine';
import AmazingSlider from './layouts/AmazingSlider';
import BulbsImg from './assets/img/bulbs.png';
import ProductSlider from './layouts/Productslider';
import BrandSlider from './layouts/BrandSlider';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const options=[

    {value:1,label:'نوع یک'},
    {value:2,label:'نوع دو'},
    {value:3,label:'نوع سه'},
    {value:4,label:'نوع چهار'},
    {value:5,label:'نوع پنج'},
    {value:6,label:'نوع شش'},
    {value:7,label:'نوع هفت'},
    {value:8,label:'نوع هشت'},


]
const defaultOption = options[0];
const optionsBase=[

  {value:1,label:'پایه یک'},
  {value:2,label:'پایه دو'},
  {value:3,label:'پایه سه'},
  {value:4,label:'پایه چهار'},
  {value:5,label:'پایه پنج'}

]
const defaultOptionBase = optionsBase[0];
const optionsColor=[

  {value:1,label:'مهتابی'},
  {value:2,label:'آفتابی'},


]
const defaultOptionColor = optionsColor[0];
const Home = () => {
const [img1,setimg1]=useState('')
const [img2,setimg2]=useState('')
const [img3,setimg3]=useState('')
const [img4,setimg4]=useState('')
const [img5,setimg5]=useState('')
const [img6,setimg6]=useState('')
const [brand,setBrand]=useState([])
const [product,setProduct]=useState([])

const [amazing,setAmazing]=useState([])


const [base,setBase]=useState(0)
    const [tech,setTech]=useState(0)
    const [type,setType]=useState(0)
    const [color,setColor]=useState(0)
    const [light,setLight]=useState(0)
    const [count,setCount]=useState(0)
    const [hobab,setHobab]=useState(0)
    const [mobile,setMobile]=useState('')
    const [pass,setPass]=useState('')

    const loginto=()=>{
        // console.log(mobile)
        // console.log(pass)
        const axios = require("axios");
        axios
        .post(apiUrl + "InsertCustomer",{Mobile:mobile.toString()})
    .then(function (response) {
      if (response.data.result == "true") {
        // console.log(response.data.Data)
alert("شماره شما با موفقیت اضافه شد")
closeModal()

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
const mainSlider=()=>{
  const axios = require("axios");
  axios
    // .post(apiUrl + "RequestPhotos",{RequestID:params})
    .get(apiUrl + "FirstPage")
    .then(function (response) {
      if (response.data.result == "true") {

       setimg1(response.data.Data[0].Pic)
       setimg2(response.data.Data[0].Pic2)
       setimg3(response.data.Data[0].Pic3)
      //  setimg4(response.data.Data[0].Pic4)
      //  setimg5(response.data.Data[0].Pic5)
      //  setimg6(response.data.Data[0].Pic6)
    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    axios
        .get(apiUrl + "AllBrandProduct")
    .then(function (response) {
      if (response.data.result == "true") {

       setBrand(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
//     axios
//     .get(apiUrl + "AllProduct")
// .then(function (response) {
//   if (response.data.result == "true") {

//    setAmazing(response.data.Data)
//   //  console.log(response.data.Data)
// }
// else{
//   console.log(response.data.result)

// }})
// .catch(function (error) {
//   console.log(error);
// });
axios
.get(apiUrl + "AllProductSpecial")
.then(function (response) {
if (response.data.result == "true") {

setProduct(response.data.Data)
  // console.log(11)
  // console.log(response.data.Data[0])
}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});
axios
.get(apiUrl + "AllProductWonder")
.then(function (response) {
if (response.data.result == "true") {

setAmazing(response.data.Data)
//  console.log(response.data.Data)
}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});
}
  useEffect(() => {
    mainSlider();
    const UserID= localStorage.getItem("user_id");
    // const UserName= localStorage.getItem("user_name");
    if(UserID==null ||UserID=="" ){

    openModal();
    }
  }, []);

  const history = useHistory();
  const customStyles = {
    content: {

    },
  };



    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
      setIsOpen(false);
    }
  return (
    <>

      <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="PopUp"
      >

        <button onClick={closeModal} className="PopUpClose">
          <FaTimes/>
        </button>
        <p className="firstText">
          آیا مایل هستید
        </p>
        <p className="SecondText">اولین نفر</p>
        <p className="firstText">
          از تخفیف های بالبیران مطلع شوید؟</p>
          <input onChange={(event)=>setMobile(event.target.value)}   placeholder="شماره تلفن همراه خود را وارد نمایید" type='text' style={{float:"right !important"}}/>
               <Button  onClick={()=>loginto()} className="submitPopUp">عضویت</Button>
          <a onClick={closeModal}  >تمایلی به عضویت ندارم</a>
      </Modal>
      <Row className="heroBanner">
        <Col md={10}  sm={12}>
          <div >
            <p className="heroText">عمر بیشتر ، نور بیشتر مصرف کمتر با محصولات LED</p>
         <Row className="resMargin0">
           <Col md={12} className="ta-right resTaCenter">
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="degree">

               <Degree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="uv">
             <p className="iconInner"></p>
               <UvFree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="clock">

               <Clock className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="garanteeW">

               <Garanteewhite className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="saveE">

               <SaveEnergy className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="standard">

               <Standard className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="aplus">

               <APlus className="degree"/>
             </div>
             </div>
             <div className="d-inline-block">
               <LED className="ledLabel dResNone"/>
             </div>
           </Col>

         </Row>
          </div>

        </Col>
      <Col md={2} xs={12} className="resTaCenter">
      <LedButton className="d-block ledbuttonIcon"></LedButton>
      <Button onClick={()=>  history.push("/GreenShop/1")} className="ledButton d-block">فروشگاه سبز</Button>
      </Col>

      </Row>

      <Row className="mgt20">
        <Col md={8} className="pdl0">
        <Slider img1={img1}img2={img2}img3={img3}img4={img4}img5={img5}img6={img6}/>
       </Col>
        <Col md={4} className="ta-left">
       <div>
       <div className="firstBanner">
            <CircumstanceBanner/>
            <div className="bottomDiv">
              <Button onClick={()=>  history.push("/circumstance")}  className="bottomButton">مکان روشنایی

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
       </div>
          <div className="secondBanner">
            <LedBanner/>
            <div className="bottomDiv2">
              <Button className="bottomButton" onClick={()=>  history.push("/masarefLED")}   >مصارف LED

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
          </div>
        </Col>
      </Row>
    <Row className="mgt20 categoryRow">
      <Col md={2} xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/1")} >
      {/* <img src={Lamp}/> */}
      <img src={apiAsset+"lamp.png"}/>

      <p className="categoryName">لامپ</p>
        </a>
      </Col>

      <Col md={2} xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/2")} >
      {/* <img src={Inner}/> */}
      <img src={apiAsset+"inner.png"}/>

      <p className="categoryName">روشنایی داخلی</p>
        </a>
      </Col>
      <Col md={2} xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/3")} >
      {/* <img src={Outdoor}/> */}
      <img src={apiAsset+"outdoor.png"}/>

      <p className="categoryName">روشنایی بیرونی</p>
        </a>
      </Col>
      <Col md={2} xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/4")} >
      {/* <img src={Tazein}/> */}
      <img src={apiAsset+"tazein.png"}/>
      <p className="categoryName">روشنایی تزئینی</p>
        </a>
      </Col>
      <Col md={2}  xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/5")} >
      {/* <img src={Rise}/> */}
      <img src={apiAsset+"rise.png"}/>
      <p className="categoryName">روشنایی خاص</p>
        </a>
      </Col>
      <Col md={2} xs={6} className="pd10">
        <a     className="categoryBox" onClick={()=>  history.push("/indoorlighting/6")} >
      {/* <img src={Lavazem}/> */}
      <img src={apiAsset+"lavazemjanebi.png"}/>

      <p className="categoryName">لوازم جانبی</p>
        </a>
      </Col>
    </Row>
    <div className="whiteBox">
      <Row>
        <Col md={5}className="ta-right pd0">
          <p className="wBoxTitle">
            بازار روشنایی
          </p>
          <p className="wBoxDescription">
          بازار روشنایی بالبیران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود را دارا هستند.
          <br/>
          تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.
          </p>
          <Button className="readMoreBtn dResNone" onClick={()=>  history.push("/brandshop")}>بازار روشنایی</Button>
        </Col>
        <Col md={7}>
           {

            brand?.map((item, i) => {
              return (
                i<8?
                      <>

                                  <Link  onClick={()=>  history.push("/brandsecond/"+item.BrandID)}>

                     <div     className="brandIconBox">
            <img src={apiAsset+item.BrandLogo}/>
          </div>
</Link>
                      </>
                      :
                      null
                    );

            })
          }

        </Col>
      </Row>
      <Row className="disNone">
        <Col xs={12} className="ta-center">
        <Button className="readMoreBtn" onClick={()=>  history.push("/brandshop")}>بازار روشنایی</Button>

        </Col>
      </Row>
    </div>
  <div className="hSearchBar">
    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"40px"}}>
      <Col md={1} className="pd0">
      <div className="sIcon">
        <FaSearch/>
      </div>
      </Col>
      <Col md={9} className="pd0 ta-center">
      <div className="centerSearch">
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} onChange={(event)=>setType(event.value)}  placeholder="نوع" />

      </div>
     <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={optionsBase} onChange={(event)=>setBase(event.value)} placeholder="پایه" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={optionsColor} onChange={(event)=>setColor(event.value)} placeholder="رنگ" />

      </div>
      {/* <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div>
      <div className="centerSearch2">
      <Dropdown className="cInput mgt10" options={options} value={defaultOption} placeholder="Select an option" />

      </div> */}
      </div>
      </Col>
      <Col md={2} className="pd0">
      <div className="searchIBtn">
        <Button className="searchIBtn2" onClick={()=>  history.push("/searchresultFinder/"+base+"/"+type+"/"+tech+"/"+color+"/"+light+"/"+hobab)}> جستجو سریع</Button>
      </div>
      </Col>
    </Row>
  </div>
   <Row className="threeColRow">
     <Col md={4}>
       <div className="littleBanner" id="suggestionBanner">
     <Suggestion/>
       <div className="bottomDiv3">

              <Button className="bottomButton" onClick={()=>  history.push("/pishnahadvijhe")}>پیشنهادات ویژه بالبیران

              </Button>
              <FaAngleLeft className="leftArrow"></FaAngleLeft>
            </div>
       </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="servicesBanner">
         <Services/>
         <div className="bottomDiv3">

         <Button className="bottomButton" onClick={()=>  history.push("/services")}>خدمات بالبیران
         </Button>
         <FaAngleLeft className="leftArrow"></FaAngleLeft>
       </div>
         </div>
     </Col>
     <Col md={4}>
     <div className="littleBanner" id="magazineBanner">
         <Magazine/>
         <div className="bottomDiv3">

         <Button className="bottomButton"onClick={()=>  history.push("/news")}>مجله بالبیران

         </Button>
         <FaAngleLeft className="leftArrow"></FaAngleLeft>
       </div>
         </div>
     </Col>
   </Row>
    </Container>
   <Container fluid className="pd0">
   <div className="amazingSliderBody">
    <Row>
      <Col md={3}>
      <div className="innerSlider ta-center">
        <p >محصولات شگفت انگیز بالبیران</p>
        <img src={BulbsImg} className="responsiveNone"/>
        <Button onClick={()=>  history.push("/Shegeftangiz")} style={{marginBottom:"10px"}}>
          مشاهده ی همه
          <FaAngleLeft/>
        </Button>
      </div>
      </Col>
      <Col md={9}>
        <AmazingSlider
          data={amazing}
        className="amazingSlider"/>
      </Col>
    </Row>
   </div>
   </Container>
   <Container fluid className="bulbiranContainer">
     <div className="homeSlider dresNone" id="bulbSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه لامپ</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[0]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
     <div className="homeSlider dresNone" id="pannelSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه پنل</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[1]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
     <div className="homeSlider dresNone" id="avizSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه آویز</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[2]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
     <div className="homeSlider dresNone" id="riseSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه ریسه</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[3]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
     <div className="homeSlider dresNone" id="noorafkanSlider">
    <Row>
      <Col md={12}>
        <div>
        <p className="sliderTitle">فروش ویژه نورافکن</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
      <ProductSlider data={product[4]} className="bulbSliderBox"/>
        </div>


      </Col>

    </Row>
     </div>
   <div className="brandSliderBox">
   <div>
        <p className="sliderTitle2" id="hamkarTitle">مشتریان معتبر بالبیران</p>

        <div className="thickBorder">
       </div>
        <div className="lightBorder">

        </div>
        <div className="cPadding resCpadding">
        <BrandSlider/>
        </div>
        </div>

   </div>
   </Container>
     <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Home;
