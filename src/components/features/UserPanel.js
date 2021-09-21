import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import ImageGallery from 'react-image-gallery';
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight} from 'react-icons/fa';
import Select from "react-dropdown-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import Poshtibani from './assets/icons/Poshtiban';
import Phone from './assets/icons/Phone';
import Email from './assets/icons/Email';
import { Link, useHistory } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Pardazesh from './layouts/Pardazesh';
import Tarikhche  from './layouts/Tarikhche';
import UserData from './layouts/UserData';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";
import { PanoramaFishEyeSharp } from '@material-ui/icons'
  const UserPanel=() => {
    const [product,setProduct]=useState([])
    const [total,setTotal]=useState(0)
    const [date,setDate]=useState(0)
    const params = useParams().id;
    const [group,setGroup]=useState([])
    const [userdata,setUserData]=useState([])
    const history = useHistory();

    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .post(apiUrl + "Factor",{CustomerID:params,Payment:false})
          .then(function (response) {
            if (response.data.result == "true") {
                setTotal( response.data.Data[0].TotalCost);
setDate( response.data.Data[0].Date);
                setProduct(response.data.Data)
          }
          else{
            console.log(response.data.result)
          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .post(apiUrl + "FactorGroup",{CustomerID:params,Payment:true})
      .then(function (response) {
        if (response.data.result == "true") {

            setGroup(response.data.Data)

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
      useEffect(() => {
       const UserID= localStorage.getItem("user_id");
       if(UserID==null ||UserID=="" ){
history.push("/Login")
       }
       alert("ابتدا وارد شوید")
console.log(UserID)
        mainSlider();
// alert(val)
      }, []);
      return(

      <>

        <TopBar/>
        <Header/>
      <Container fluid className="bulbiranContainer">
      <div className="singleBox">
        <Row style={{marginRight:"0px",marginLeft:"0px",alignItems:"center"}}>
            <Col md={2}>
                <Poshtibani/>
            </Col>
            <Col md={7} className="ta-right o1">
                <span className="poshtibaniTitle ta-right">
                    تماس با پشتیبانی
                </span>
                <p className="poshtibaniDescription ta-right">
                تیم متخصص بالبیران در خدمات مشتری همیشه در دسترس است تا در هر گونه سوال در مورد سفارش شما ، در دسترس بودن محصول ، اطلاعات قیمت گذاری و موارد دیگر به شما کمک کند. با هر گونه سوال در مورد روشنایی تماس بگیرید یا ایمیل بزنید.
                </p>
            </Col>
            <Col md={3} className="ta-right">
            <div className="poshtibanIconBox">
                <div>
                    <Phone/>
                    <span className="poshtibaniPhone">
                    021-33904900
                    </span>
                </div>
                <div>
                    <Email/>
                    <span className="poshtibaniPhone">
                    info@bulbiran.com
                    </span>
                </div>
            </div>
            </Col>
        </Row>
      </div>
     <div className="singleBox mgt40">
        <div dir="rtl">
        <Tabs dir={'rtl'}>
    <TabList className="cTabList">
      <Tab>سفارشات در حال پردازش</Tab>
      <Tab>تاریخچه سفارشات</Tab>
      <Tab>اطلاعات کاربری</Tab>
      <Tab>آدرس های من</Tab>
       <Tab>تیکت های پشتیبانی</Tab>
    </TabList>
        <TabPanel>
        <Pardazesh data={product}total={total} date={date}/>
        </TabPanel>
        <TabPanel>
            <Tarikhche data={group}/>
        </TabPanel>
        <TabPanel>
            <UserData data={userdata}/>
        </TabPanel>
        <TabPanel>
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
                <Row style={{margin:"0px",padding:"15px"}}>
                   <Col md={12} className="ta-left">
                       <Button className="addressadd">+ افزودن آدرس جدید</Button>
                   </Col>
                    </Row>
      </div>
      {userdata.Address2?
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
                <Row style={{margin:"0px",padding:"15px"}}>
                   <Col md={12} className="ta-left">
                       <Button className="addressadd">+ افزودن آدرس جدید</Button>
                   </Col>
                    </Row>
      </div>
:
null
    }

        </TabPanel>
        <TabPanel></TabPanel>
 </Tabs>
        </div>
      </div>
      </Container>
   <SocialRow/>
    <IconRow/>
    <Footer/>
      </>);

    };
    export default UserPanel;