import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import ImageGallery from 'react-image-gallery';
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight,FaEyeSlash} from 'react-icons/fa';
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
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    const customStyles2 = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function openModal2() {
      setIsOpen2(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }
    function closeModal2() {
      setIsOpen2(false);
    }
    const [product,setProduct]=useState([])
    const [support,setSupport]=useState([])
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
              var ss=0;
              response.data.Data?.map((item, i) => {

ss+=(item.Cost*item.Number)
              })
              setTotal(ss)
                // setTotal( response.data.Data[0].TotalCost);

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
      .post(apiUrl + "GetSupport",{CustomerID:params})
  .then(function (response) {
    if (response.data.result == "true") {

        setSupport(response.data.Data)

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
alert("ابتدا وارد شوید")
       }
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
                <Poshtibani className="wRes100 mresbottom20"/>
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
                <Button className="factorBTN" onClick={openModal} >ویرایش آدرس</Button>
                <Modal
        isOpen={modalIsOpen}
      className="commentModal"
        style={customStyles}

        contentLabel="Example Modal"
      >


      <Row style={{margin:"0px"}}>
          <Col md={12}>
          <div className="cFormDiv3 ta-right" style={{margin:"0px !important"}}>
           <span>آدرس خود را وارد کنید : </span>
           <br/>
           <input placeholder="آدرس ..." type='text' style={{float:"right !important",width:"100% !important",height:"100px",margin:"10px 0px"}} className="w100"/>
            </div>
          </Col>
      </Row>
      <Button className="modalSubmit">ویرایش آدرس</Button>

        <Button onClick={closeModal} className="closeModal">بستن</Button>


      </Modal>

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

                       <Button className="addressadd" onClick={openModal} >+ افزودن آدرس جدید</Button>
                <Modal
        isOpen={modalIsOpen}
      className="commentModal"
        style={customStyles}

        contentLabel="Example Modal"
      >

 <Row style={{margin:"0px"}}>
        <Col md={6}>
        <div className="serviceForm pd0">
            <div className="cFormDiv3 ta-right">
           <span>کد پستی : </span>

           <input placeholder="کد پستی خود را وارد کنید" type='text' style={{float:"right !important"}}/>
            </div>
            </div>
        </Col>

        <Col md={6}>
        <div className="serviceForm pd0">
            <div className="cFormDiv3 ta-right">
           <span>شماره تماس : </span>

           <input placeholder="شماره تماس را وارد کنید" type='text' style={{float:"right !important"}}/>
            </div>
            </div>
        </Col>
        <Col md={6} style={{margin:"20px !important"}}>
        <div className="serviceForm pd0">
            <div className="cFormDiv3 ta-right"  style={{marginTop:"20px"}}>
           <span>نام تحویل گیرنده : </span>

           <input placeholder="نام تحویل گیرنده را وارد کنید" type='text' style={{float:"right !important"}}/>
            </div>
            </div>
        </Col>
        </Row>
      <Row style={{margin:"0px",marginTop:"20px !important"}}>
          <Col md={12} style={{marginTop:"20px"}}>
          <div className="cFormDiv3 ta-right" style={{margin:"20px !important"}}>
           <span style={{margin:"20px !important"}}>آدرس خود را وارد کنید : </span>
           <br/>
           <input placeholder="آدرس ..." type='text' style={{float:"right !important",width:"100% !important",height:"100px",margin:"10px 0px"}} className="w100"/>
            </div>
          </Col>
      </Row>
      <Button className="modalSubmit">ویرایش آدرس</Button>

        <Button onClick={closeModal} className="closeModal">بستن</Button>


      </Modal>

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
        <TabPanel>
        <div className="pardazeshBox">
          <Row style={{margin:"0px"}}>
          <Col md={6} className="ta-right">
              <p className="pardazeshPrice" style={{marginTop:"20px",marginRight:"10%"}}>پیام های من</p>
          </Col>
          <Col md={6} className="ta-left k2">
          <Button type="button" className="" style={{marginLeft:"10%",marginTop:"20px"}} onClick={openModal} >+ پیام جدید</Button>
          <Modal
        isOpen={modalIsOpen}
      className="commentModal"
        style={customStyles}

        contentLabel="Example Modal"
      >

 <Row style={{margin:"0px"}}>



      <Col md={12} style={{margin:"20px !important"}}>
        <div className="serviceForm pd0">
            <div className="cFormDiv3 ta-right"  style={{marginTop:"20px"}}>
           <span>عنوان پیام : </span>

           <input placeholder="عنوان پیام خود را وارد کنید" type='text' style={{float:"right !important"}}/>
            </div>
            </div>
        </Col>
        </Row>
      <Row style={{margin:"0px",marginTop:"20px !important"}}>
          <Col md={12} style={{marginTop:"20px"}}>
          <div className="cFormDiv3 ta-right" style={{margin:"20px !important"}}>
           <span style={{margin:"20px !important"}}>متن پیام : </span>

           <input placeholder="متن پیام خود را وارد کنید" type='text' style={{float:"right !important",width:"100% !important",height:"100px",margin:"10px 0px"}} className="w100"/>
            </div>
          </Col>
      </Row>
      <Button className="modalSubmit">ارسال پیام</Button>

        <Button onClick={closeModal} className="closeModal">بستن</Button>


      </Modal>

          </Col>
          </Row>
          <div className="ticketBox">
              <Row style={{margin:"0px"}}>
                <Col md={2}>
                  <p className="row-title">بخش</p>
                </Col>
                <Col md={4}>
                <p className="row-title">موضوع</p>
                </Col>
                <Col md={3}>
                <p className="row-title">وضعیت</p>
                </Col>
                <Col md={2}>
                <p className="row-title">آخرین به روز رسانی</p>
                </Col>
                <Col md={1}>
                <p className="row-title">مشاهده</p>
                </Col>
              </Row>
              {/* <div className="addIn">
              <Row style={{margin:"0px"}}>
                <Col md={2}>
                  <p className="row-title">پشتیبانی فنی</p>
                </Col>
                <Col md={4}>
                <p className="row-title">عدم توانایی در برداشت وجه</p>
                </Col>
                <Col md={3}>
                <p className="row-title bastenashode">فعال</p>
                </Col>
                <Col md={2}>
                <p className="row-title">22/03/1400 (12:30)</p>
                </Col>
                <Col md={1}>
                <p className="row-title">مشاهده</p>
                </Col>
              </Row>
                </div>

                <div className="addIn">
              <Row style={{margin:"0px"}}>
                <Col md={2}>
                  <p className="row-title">پشتیبانی فنی</p>
                </Col>
                <Col md={4}>
                <p className="row-title">عدم توانایی در برداشت وجه</p>
                </Col>
                <Col md={3}>
                <p className="row-title baste-shode">بسته شده</p>
                </Col>
                <Col md={2}>
                <p className="row-title">22/03/1400 (12:30)</p>
                </Col>
                <Col md={1}>
                <p className="row-title">مشاهده</p>
                </Col>
              </Row>
                </div>
               */}
                 { support?.map((item, i) => {
             return (
                <div className="addIn">
              <Row style={{margin:"0px"}}>
                <Col md={2}>
                  <p className="row-title">پشتیبانی فنی</p>
                </Col>
                <Col md={4}>
                <p className="row-title">{item.Title}</p>
                </Col>
                <Col md={3}>
                  {item.Status==1?

                  <p className="row-title bastenashode">فعال</p>
                  :
                  <p className="row-title baste-shode">بسته شده</p>
                }


                {/* <p className="row-title etela">اطلاعیه</p> */}
                </Col>
                <Col md={2}>
                <p className="row-title">{item.Date} {item.Time}</p>
                </Col>
                <Col md={1}>
                <Button type="button" className="moshahede" style={{marginLeft:"10%",marginTop:"20px"}} onClick={openModal2} >مشاهده</Button>
          <Modal
        isOpen={modalIsOpen2}
      className="commentModal w801"
        style={customStyles2}

        contentLabel="Example Modal"
      >


        <Row style={{margin:"0px"}}>



       <Col md={12} style={{margin:"20px !important"}} className="ta-right">
       <div class="ticket-box pd0" id="question-box">
       <Row className="b-box" style={{margin:"0px !important"}}>

       <Col md={6} className="ticket-title">کارشناس فنی شماره یک</Col>
       <Col md={6} className="ticket-data">(21:30) 1399/05/12</Col>
       </Row>
       <Row>
                     <Col md={12}>
                       <p class="ticket-text">
                      g
                       </p>
                     </Col>

                   </Row>
 </div>

         </Col>

         </Row>

         <Row style={{margin:"0px"}}>



       <Col md={12} style={{margin:"20px !important"}} className="ta-right">
       <div class="ticket-box pd0" id="answer-box">
       <Row className="b-box2" style={{margin:"0px !important"}}>

       <Col md={6} className="ticket-title">کارشناس فنی شماره یک</Col>
       <Col md={6} className="ticket-data">(21:30) 1399/05/12</Col>
       </Row>
       <Row >
                     <Col md={12}>
                     <input placeholder="آدرس ..." type='text' style={{float:"right !important",width:"90% !important",height:"100px",margin:"10px 0px"}} className="w100"/>

                     </Col>

                   </Row>
 </div>

         </Col>

         </Row>
      <Button className="modalSubmit">ارسال پیام</Button>

        <Button onClick={closeModal2} className="closeModal">بستن</Button>


      </Modal>

                </Col>
              </Row>
                </div>

        );

                                })
                            }
        </div>
          </div>
       </TabPanel>
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