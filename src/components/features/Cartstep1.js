import React,{useEffect,useState} from 'react'
import { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import ProductSlider from './layouts/Productslider';
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaTrashAlt} from 'react-icons/fa';
import Img4 from './assets/img/Image 4.png';
import Img5 from './assets/img/Image 5.png';
import Img6 from './assets/img/Image 6.png';
import Img7 from './assets/img/Image 7.png';
import {useParams } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const CartStep1=() => {

    const [count,setCount]=useState(0)
	const params = useParams().id;
    const [product,setProduct]=useState([])
    const [userdata,setUserData]=useState([])
    const [total,setTotal]=useState(0)
    const history = useHistory();

   const increment = (id,num) => {
    InserBasket(id,num+1)

      }

      const   decrement = (id,num) => {
        InserBasket(id,num-1)

      }

      const mainSlider=()=>{
        const axios = require("axios");
console.log(444)
console.log(params)
          axios
              .post(apiUrl + "ShopBasket",{CustomerID:params})
          .then(function (response) {
            if (response.data.result == "true") {
var ss=0
                setProduct(response.data.Data)
                response.data.Data?.map((item, i) => {

ss+=(item.Cost*item.Number)
                })
                setTotal(ss)
                }
          else{
            console.log(response.data.result)
          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "GetCustomer/"+params)
      .then(function (response) {
        if (response.data.result == "true") {

            setUserData(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      }
      const InserBasket=(id,num)=>{
        const axios = require("axios");
        const UserID= localStorage.getItem("user_id");
        console.log(22)
        console.log(UserID)
               if(UserID==null ||UserID=="" ){
alert("ابتدا وارد شوید")               }
else{
    console.log(55)

    const totals=product.SpecialCost?product.SpecialCost:product.Cost;

          axios.post(apiUrl + "InsertShopBasket",{CustomerID:UserID,ProductID:id,Number:num,Cost:totals})
        //   .get(apiUrl + "Blog")
          .then(function (response) {
              console.log(475)
              console.log(response)
            if (response.data.result == "true") {
             console.log(44)
             console.log(response.data.result)
             setProduct(response.data?.Data)
             var ss=0;
             response.data.Data?.map((item, i) => {

                ss+=(item.Cost*item.Number)
            })
                                setTotal(ss)
             alert("محصول با موفقیت به سبد خرید اضافه شد.")

}})
          .catch(function (error) {
            console.log(error);
          });
        }
      }
      const DeleteBasket=(id)=>{
        const axios = require("axios");
        const UserID= localStorage.getItem("user_id");
        console.log(22)
        console.log(UserID)
               if(UserID==null ||UserID=="" ){
alert("ابتدا وارد شوید")               }
else{
    console.log(55)


          axios.post(apiUrl + "DeleteShopBasket",{CustomerID:UserID,ProductID:id})
        //   .get(apiUrl + "Blog")
          .then(function (response) {
              console.log(475)
              console.log(response)
            if (response.data.result == "true") {
             console.log(44)
             console.log(response.data.result)
             console.log(response.data.Data)
             setProduct(response.data?.Data)
             var ss=0;
             response.data.Data?.map((item, i) => {

                ss+=(item.Cost*item.Number)
            })
                                setTotal(ss)
             alert("محصول با موفقیت حذف شد.")

}})
          .catch(function (error) {
            console.log(error);
          });
        }
      }
      useEffect(() => {
       const UserID= localStorage.getItem("user_id");
       if(UserID==null ||UserID == "" ){
           alert("ابتدا وارد شوید")
history.push("/Login")
       }
console.log(UserID)

        mainSlider();
// alert(val)
      }, []);
    return (
        <>
              <TopBar/>
          <Header/>

        <Container fluid className="bulbiranContainer">
            <Row style={{marginLeft:"0px",marginRight:"0px"}}>
                <Col md={9}>
                <div className="tableWhiteBox" style={{marginTop:"40px"}}>
            <div className="tableBorder">
                <Row style={{marginRight:"0px",marginLeft:"0px",paddingTop:"15px",paddingBottom:"15px"}} className="bBottomC">
                    <Col md={1} className="ta-center">
                        <span className="tableHeader">ردیف</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tableHeader">تصویر محصول</span>
                    </Col>
                    <Col md={3} className="ta-right">
                        <span className="tableHeader">نام محصول</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tableHeader">قیمت تکی</span>
                    </Col>
                    <Col md={1} className="ta-center">
                        <span className="tableHeader">تعداد</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tableHeader">قیمت باکس</span>
                    </Col>
                    <Col md={1} className="ta-center">
                        <span className="tableHeader">حذف</span>
                    </Col>
                </Row>
                {product?.map((item, i) => {
  return (
                <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
                    <Col md={1} className="ta-center">
                        <span className="tableHeader">{i+1}</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <img src={apiAsset+item.Pic1} className="cImgT"/>
                    </Col>
                    <Col md={3} className="ta-right">
                        <span className="tablePName">{item.ProductName}{item.BrandName}</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tablePries">{item.Cost} تومان</span>
                    </Col>
                    <Col md={1} className="ta-center pd0">
                    <div className="counterDiv">
              <button onClick={()=>decrement(item.ProductID,item.Number)} className="decBTN">-</button>
              <span>{item.Number}</span>
              <button onClick={()=>increment(item.ProductID,item.Number)} className="inBTN">+</button>
            </div>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tablePries">{item.CostMajor} تومان</span>
                    </Col>
                    <Col md={1} className="ta-center">
                        <Button onClick={()=>DeleteBasket(item.ProductID)} className="trashBTN">
                            <FaTrashAlt/>
                        </Button>
                    </Col>
                </Row>
                                    );

})
}
                {/* <Row style={{marginRight:"0px",marginLeft:"0px"}} className="bBottomC">
                    <Col md={1} className="ta-center">
                        <span className="tableHeader">1</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <img src={Img4} className="cImgT"/>
                    </Col>
                    <Col md={3} className="ta-right">
                        <span className="tablePName">لامپ بروکس</span>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tablePries">12000 تومان</span>
                    </Col>
                    <Col md={1} className="ta-center pd0">
                    <div className="counterDiv">
              <button onClick={this.decrement} className="decBTN">-</button>
              <span>{this.state.count}</span>
              <button onClick={this.increment} className="inBTN">+</button>
            </div>
                    </Col>
                    <Col md={2} className="ta-center">
                        <span className="tablePries">12500 تومان</span>
                    </Col>
                    <Col md={1} className="ta-center">
                        <Button className="trashBTN">
                            <FaTrashAlt/>
                        </Button>
                    </Col>
                </Row>
          */}
            </div>
        </div>
        <div className="tableWhiteBox" style={{marginTop:"40px"}}>
            <h3 className="ersalWay">انتخاب آدرس</h3>

            <div className="eAddBox">

                {userdata.Address?
            <div className="pardazeshBox">
                  <Row style={{margin:"0px",padding:"15px"}}>
                <Col md={9}>
                    <p className="uAddress ta-right">{userdata.Address}</p>
                </Col>
                <Col md={3} className="ta-left">
                <Button className="factorBTN">ویرایش آدرس</Button>
                <Button className="factorBTN" id="dAddress">حذف</Button>

                </Col>
            </Row>
            <Row style={{margin:"0px",padding:"15px"}}>
                <Col md={4} className="ta-right">
                    <p className="adddetail">کد پستی : 1669148569</p>
                </Col>
                <Col md={4} className="ta-center">
                <p className="adddetail">نام گیرنده : {userdata.NameFamily}</p>
                    </Col>
                    <Col md={4} className="ta-left">
                    <p className="adddetail">شماره تماس گیرنده : {userdata.Mobile}</p>
                    </Col>
                </Row>

      </div>
                :
                null
                }

      <Row style={{margin:"0px",padding:"15px"}}>
                   <Col md={12} className="ta-left">
                       <Button className="addressadd">+ افزودن آدرس جدید</Button>
                   </Col>
                    </Row>
            </div>

          </div>

                </Col>
                <Col md={3}>
                <div className="grayBox2" style={{backgroundColor:"#fff"}}>


                        <div style={{paddingBottom:"30px"}}>
                            <span>مجموع قیمت کالاها : </span>

                            <span className="singlePrice">
                                {total} تومان
                            </span>
                        </div>
                        <div>
                       <Row style={{padding:"0px",border:"none",margin:"0px",marginBottom:"15px"}}>
                       <Col md={12} style={{padding:"0px",border:"none",marginBottom:"20px"}}>
                       <span className="singlePrice ta-right" style={{float:"right"}}>
                                نحوه ارسال
                            </span>
                           </Col>
                           <Col md={6} style={{padding:"0px",border:"none"}}>
                           <input type="radio" id="post" name="sendA" value="post"/>
<label for="post" className="sendLabel">ارسال از طریق پست</label>

                           </Col>
                           <Col md={6} style={{padding:"0px",border:"none"}}>
                           <span className="singlePrice">
                                {total} تومان
                            </span>
                           </Col>
                       </Row>
                       <Row style={{padding:"0px",border:"none",margin:"0px"}}>
                           <Col md={7} style={{padding:"0px",border:"none"}}>

<input type="radio" id="tipax" name="sendA" value="tipax"/>
<label for="tipax" className="sendLabel">ارسال از طریق تیپاکس</label>

                           </Col>
                           <Col md={5} style={{padding:"0px",border:"none"}}>
                           <span className="singlePrice">
                                12000 تومان
                            </span>
                           </Col>
                       </Row>
                        </div>

                       <div>
                           <p className="bDes">
                           هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال
    انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد
                           </p>
                       </div>
                       <div style={{paddingBottom:"30px"}}>
                            <span>مجموع مبلغ قابل پرداخت : </span>

                            <span className="singlePrice">
                            {total} تومان
                            </span>
                        </div>
                        <Button className="addToCart">
                            ادامه فرایند خرید
                        </Button>
                    </div>

                </Col>
            </Row>

        </Container>

        <SocialRow/>
        <IconRow/>
        <Footer/>
        </>
 )
    }
export default CartStep1;