import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Janebi from './assets/icons/Janebi'
import Khadamat5 from './assets/icons/Khadamat5'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar} from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";

import Lamp from './assets/img/lamp.png';
import Cheragh from './assets/img/cheragh.png';
import Panel from './assets/img/panel.png';
import Loster from './assets/img/loster.png';
import Janebii from './assets/img/janebi.png';
import rise from './assets/img/rise.png';
import Img4 from './assets/img/Image 4.png';
import Img5 from './assets/img/Image 5.png';
import Img6 from './assets/img/Image 6.png';
import Img7 from './assets/img/Image 7.png';
import Noorafkan from './assets/img/noorafkan.png';
import Chain from './assets/img/chain.png';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";
const Lavazem = () => {
    const [product,setProduct]=useState([])
    const [group,setGroup]=useState([])
    const params = useParams().id;
    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .get(apiUrl + "ProductbySpare/"+params)
          .then(function (response) {
            if (response.data.result == "true") {

                setProduct(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });

      }
      const mainCat=(id)=>{
        const axios = require("axios");
        console.log(486)
        console.log(id)
        axios
        .get(apiUrl + "SubGroupProduct/"+id)
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(response.data)

          setProduct(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    // console.log(159876)
      }
        useEffect(() => {
          mainSlider();
// alert(val)
        }, []);
    return (
    <>
          <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
    <div className="whiteBox">
        <Row>
            <Col md={6}>
            <div className="ta-right">
            <Janebi className="d-inline-block"/>
            <p className="gTitle">لوازم یدکی</p>
        </div>
        <p className="brandShopDescription w100" style={{color:"#18206b"}}>
        در پروژه‌های تجاری دو بخش روشنایی عمومی و نورپردازی ویژه بخصوص در نمای ساختمان حائز اهمیت می‌باشد. ویترین مغازه‌ها، فروشگاه‌ها، نحوه نمایش محصولات و نورپردازی نمای بیرونی از اجزاء اصلی در روشنایی مکان‌های تجاری است. در این مکان‌ها انتخاب درست سیستم روشنایی و نورپردازی می‌تواند عامل اصلی بالا رفتن فروش و جذب مشتری باشد. نورپردازی صحیح می‌تواند با مشتری ارتباط برقرار کرده و او را به درون فضا دعوت کند. همچنین محصولات را  دیدنی و جذاب نشان داده و باعث رونق خرید و فروش شود. رنگ، کنتراست و تعادل مناسب بین سطوح نورپردازی شده از مهمترین ویژگی‌های نورپردازی مکان‌های تجاری است.
        </p>
            </Col>
            <Col md={6}>
            <Khadamat5/>
          </Col>
        </Row>


   </div>
   {/* <Row style={{margin:"0px"}}>
        <Col md={12} className="pd0">
            <div className="categoryBox2 mgt20" style={{borderRadius:"5"}}>
            <h4 className="circumstanceTitle ta-right">دسته بندی ها</h4>
            <div className="cateInner ta-center">
                <div>
                    <img src={Lamp}/>
                    <p>لامپ</p>
                </div>
                <div>
                    <img src={Panel}/>
                    <p>پنل</p>
                </div>
                <div>
                    <img src={Noorafkan}/>
                    <p>نورافکن</p>
                </div>
                <div>
                    <img src={Chain} id="chain"/>
                    <p>ریسه</p>
                </div>
                <div>
                    <img src={Cheragh}/>
                    <p>چراغ</p>
                </div>
                <div>
                    <img src={Loster}/>
                    <p>آویز لوستر</p>
                </div>

            </div>
            </div>
        </Col>

    </Row> */}
    <Row style={{margin:"0px"}}>
        <Col md={12} className="pd0 mg20">
        <div className="tabRow bSh mgt20">
            <FaAlignRight className="sortIcon"/>
            <span>مرتب سازی بر اساس : </span>
            <ul>
              <li>
                  <Button className="sortBtn">پر بازدید ترین</Button>
              </li>
              <li>
                  <Button className="sortBtn">پر فروش ترین</Button>
              </li>
              <li>
                  <Button className="sortBtn">جدید ترین</Button>
              </li>
              <li>
                  <Button className="sortBtn">ارزان ترین</Button>
              </li>
              <li>
                  <Button className="sortBtn">گران ترین</Button>
              </li>
            </ul>

            </div>

        </Col>
        </Row>
        <Row className="mgt20" style={{marginRight:"0",marginLeft:"0"}}>
        {

product?.map((item, i) => {
  return (
          <>
                            <Col md={3} className="pd0">
             <Link
          to={`/singleProduct/${item.ProductID}`}
        >
                <div className="whiteCard">
                        <img src={apiAsset+item.Pic1}/>
                        <p>{item.ProductName}</p>
                        <span>{item.Cost} تومان</span>
                    </div>
                </Link>
                </Col>
                </>

                );

})
}

            </Row>



  </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Lavazem;