import React , {useState} from 'react'
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
import img1 from './assets/img/Image 4.png'
import Ersal from './assets/icons/Ersal';
import Zemanat from './assets/icons/zemanat';
import Garantee from './assets/icons/Garantee';
import Moshavere from './assets/icons/Moshavere';
import Pardakht from './assets/icons/Pardakht';
import Price from './assets/icons/Price';
import BGarantee from './assets/icons/BGarantee';
import Save from './assets/icons/Save';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const images = [
    {
        original: 'https://dkstatics-public.digikala.com/digikala-products/f84556d54d4bb6ba8acd9cc89ab99e90fb98b9b9_1613471623.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
        thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/f84556d54d4bb6ba8acd9cc89ab99e90fb98b9b9_1613471623.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
      },
    {
      original: 'https://dkstatics-public.digikala.com/digikala-products/ccd1f31c1c5d457c6a5ecc11d92251b6166b8151_1613471627.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
      thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/ccd1f31c1c5d457c6a5ecc11d92251b6166b8151_1613471627.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    },
   
    {
        original: 'https://dkstatics-public.digikala.com/digikala-products/4db64af2b0c2e2b756463832b67514eee93f9e67_1613471624.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
        thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/4db64af2b0c2e2b756463832b67514eee93f9e67_1613471624.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
      },
      {
        original: 'https://dkstatics-public.digikala.com/digikala-products/8df22cf09a20ad4af87e49582f7a5768f4026a03_1613471626.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
        thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/8df22cf09a20ad4af87e49582f7a5768f4026a03_1613471626.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
      },
  ];
  const SingleProduct=() => {
    const options=[
        'one',
        'two',
        'three'
      ]
      const defaultOption = options[0];
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
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      return(
        
      <>
   
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
     <div className="singleBox"> 
        <Row>
            <Col md={3} className="imgBoxS">
                <ImageGallery items={images} showBullets={false} showPlayButton={false} showNav={false} showFullscreenButton={false}/>
            </Col>
            <Col md={6}>
                <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <span className="breadCrumbs">بروکس</span>
                        <span className="breadCrumbs">/</span>
                        <span className="breadCrumbs">لامپ</span>
                    </Col>
                </Row>
                <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <p className="singleProductName">
                        لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                        </p>
                    </Col>
                </Row>
                <Row style={{margin:"0",borderBottomColor:"#ececec",borderBottomWidth:"2px",borderBottomStyle:"solid",paddingBottom:"10px"}}>
                    <Col md={12} className="ta-right pd0">
                        <span className="breadCrumbs" style={{marginLeft:"5px"}}>
                            امتیاز این کالا از دید کاربران : 
                        </span>
                        <span className="breadCrumbs" >
                            2
                        </span>
                        <div className="rateStar">
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/>
                        </div>
                        <span className="breadCrumbs" style={{marginRight:"5px"}}>
                           12 نظر
                        </span>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={12} className="pd0 ta-right">
                        <span className="vijhegiTitle">ویژگی های این کالا</span>
                        <ul className="vijhegiList">
                            <li>
                                شکل ظاهری : حبابی
                            </li>
                <li>
                    بازه توان مصرفی : 10 تا 12 وات
                </li>
                <li>
                    نوع پایه : E27
                    </li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={12} className="pd0 ta-right">
                        <span className="vijhegiTitle">رنگ محصول : </span>
                        <ul className="colorUl">
                            <li>
                                <Button id="color1"></Button>
                                </li>
                                <li>
                                <Button id="color2"></Button>
                                </li>
                                <li>
                                <Button id="color3"></Button>
                                </li>
                                <li>
                                <Button id="color4"></Button>
                                </li>    
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col md={3}>
                <div className="grayBox2">
                    <div>
                        <BGarantee/>
                        <span>گارانتی شش ماهه بروکس</span>
                    </div>
                    <div>
                        <Save/>
                        <span>موجود در انبار فروشنده</span>
                    </div>
                    <div style={{paddingBottom:"30px"}}>
                        <span>قیمت این کالا</span>
                        <br/>
                        <span className="singlePrice">
                            125000 تومان
                        </span>
                    </div>
                    <div>
                    <span className="tedad">
                            تعداد :
                        </span>
                        
                    </div>
                    <Button className="addToCart">
                        افزودن به سبد خرید
                    </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={3}></Col>
            <Col md={9}>
                <hr className="line"></hr>
            </Col>
        </Row>
        <Row style={{margin:"auto",alignItems:"center"}}>
            <Col md={2} className="ta-center">
                <div className="a1">
                    <Moshavere/>
                    <span>مشاوره رایگان</span>
                </div>
                </Col>
                <Col md={2} className="ta-center">

                <div className="a1">
                    <Pardakht/>
                    <span>پرداخت امن و آسان</span>
                </div>
                </Col>
                <Col md={2} className="ta-center">
                  <div className="a1">
                    <Zemanat/>
                    <span>ضمانت اصل بودن کالا</span>
                </div>   
                </Col>
               
                <Col md={2} className="ta-center">
                <div className="a1">
                    <Ersal/>
                    <span>ارسال و پیگیری</span>
                </div>
                </Col>
               <Col md={2} className="ta-center">
               <div className="a1">
                    <Garantee/>
                    <span>خدمات پس از فروش</span>
                </div>
               </Col>
               <Col md={2} className="ta-center">
               <div className="a1">
                    <Price/>
                    <span>قیمت کارخانه</span>
                </div>
               </Col>
            
        </Row>

     </div>
      <div className="singleBox mgt40">
        <div dir="rtl">
        <Tabs dir={'rtl'}>
    <TabList className="cTabList">
      <Tab>نقد و بررسی</Tab>
      <Tab>مشخصات کالا</Tab>
      <Tab>نظرات کاربران</Tab>
    </TabList>

    <TabPanel>
    <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <p className="singleProductName">
                       نقد و بررسی اجمالی
                        </p>
                        <p className="pNameMini">
                        لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                        </p>
                    </Col>
                </Row>
    <Row style={{margin:"0"}}>
        <Col md={9} className="pd0">
            <p className="productDetail">
            لامپ ال‌ای‌دی فوق یکی از محصولات تولیدی شرکت «بروکس» (Burux) است که تحت عنوان مدل «A60-5322» به بازار عرضه می‌شود. این لامپ راندمان بالایی دارد و بیشترین مقدار انرژی مصرفی را صرف تولید نور می‌کند؛ ازاین‌رو حرارت تولیدی کمی دارد. این محصول توانسته در رده‌ی انرژی A+ قرار گیرد و در کنار این راندمان مناسب، از طول عمر بالایی برخوردار است. طول عمر این محصول 35000 ساعت بوده و کیفیت ساخت مناسبی دارد. از دیگر مشخصات این لامپ می‌توان به پایه‌ی E27 آن اشاره کرد که برای نصب روی سرپیچ‌های E27 مناسب است. حباب قرارگرفته روی این لامپ مقاومت بالایی در برابر ضربه دارد و می‌توان آن را در مکان‌هایی که احتمال برخورد ضربه با لامپ وجود دارد، استفاده کرد. این محصول موفق به اخذ استاندارد RoHS شده و دلیل آن استفاده‌نکردن از عناصر مضر سرب و جیوه در ساخت لامپ است. نور خروجی این محصول معادل یک لامپ 75 وات رشته‌ای اندازه‌گیری شده است.
            </p>
        </Col>
        <Col md={3}>
            <div className="productTable">
               <Row style={{margin:"0"}} className="bb">
                   <Col md={12} className="ta-right pd0">
                   <span className="tableSub">ویژگی های اصلی</span>
                   </Col>
               </Row>
                <Row style={{margin:"0"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                            روشنایی
                        </span>
                    </Col>
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            800 Lums
                        </span>
                    </Col>
                </Row>
                <Row style={{margin:"0"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                           برآورد هزینه ی سالانه انرژی
                        </span>
                    </Col>
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            1200 تومان
                        </span>
                    </Col>
                </Row>
                <Row style={{margin:"0"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                           عمر این کالا
                        </span>
                    </Col>
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            12 ماه
                        </span>
                    </Col>
                </Row>
                <Row style={{margin:"0"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                           میزان روشنایی
                        </span>
                    </Col>
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            12 ماه
                        </span>
                    </Col>
                </Row>
                <Row style={{margin:"0",border:"none"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                          مصرف انرژی
                        </span>
                    </Col>
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            100 وات
                        </span>
                    </Col>
                </Row>
            </div>
        </Col>
        </Row>                
    </TabPanel>
    <TabPanel>
      <div>
      <p className="singleProductName d-inline-block">
                      مشخصات کالا
                        </p>
                        <p className="pNameMini">
                        لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                        </p>
                     
      </div>
      <Row className="mgt20" style={{margin:"0"}}>
          <Col md={4}>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        شکل ظاهری
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        حبابی
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       توان
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        ده وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        بازه توانی مصرفی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        5 تا 10 وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       میزان روشنایی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        820 لومن
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ولتاژ 
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        220 ولت
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ابعاد
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        6 * 1.2 * 1 سانتی متر
                    </span>
                    </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        شکل ظاهری
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        حبابی
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       توان
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        ده وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        بازه توانی مصرفی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        5 تا 10 وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       میزان روشنایی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        820 لومن
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ولتاژ 
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        220 ولت
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ابعاد
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        6 * 1.2 * 1 سانتی متر
                    </span>
                    </Col>
            </Row>
          </Col>
         
          <Col md={4}>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        شکل ظاهری
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        حبابی
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       توان
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        ده وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        بازه توانی مصرفی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        5 تا 10 وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       میزان روشنایی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        820 لومن
                    </span>
                    </Col>
            </Row>
       
          </Col>
         
      </Row>
    <Row style={{margin:"0"}}>
        <Col md={12} className="pd0">
           
        </Col>
    </Row>
    </TabPanel>
    <TabPanel>
    <div>
      <p className="singleProductName d-inline-block">
                     امتیاز و دیدگاه کاربران
                        </p>
                        <p className="pNameMini">
                        لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                        </p>
                     
      </div>
      <Row style={{margin:"0"}}>
          <Col md={3}>
            <div className="cWhiteBox mgt20">
                <div className="ta-center">
                    <span className="boldScore d-inline-block">3.7</span>
                    <span className="thinScore d-inline-block">از 5</span>
                </div>
                <Row style={{marginRight:"0",marginLeft:"0",marginTop:"10"}}>
                    <Col md={12} className="ta-center pd0">
                    <div className="rateStar">
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/>
                        </div>
                        <span className="breadCrumbs" style={{marginRight:"10px"}}>
                            از مجموع 15 امتیاز
                        </span>
                     
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            طراحی
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            1
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w25">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            کیفیت ساخت
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            4
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w75">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            راندمان مصرف انرژی
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            3
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w50">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            ارزش خرید نسبت به قیمت
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            5
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w100">

                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="vBox mgt20">
            <span className="scoreSpan mgt20">
                دیدگاه خود را درباره این کالا بیان کنید.
            </span>
      <button onClick={openModal} className="openModal">افزودن دیدگاه</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
      
        
      </Modal>
    </div>
            </div>
          </Col>
          <Col md={9}>
          <Row style={{margin:"0px"}}>
        <Col md={12} className="pd0 mg20">
        <div className="tabRow bSh mgt20" id="cBoxShadow">
            <FaAlignRight className="sortIcon"/>
            <span>مرتب سازی دیدگاه ها بر اساس : </span>
            <ul>
              <li>
                  <Button className="sortBtn">جدید ترین دیدگاه ها</Button>
              </li>
              <li>
                  <Button className="sortBtn">قدیمی ترین دیدگاه ها</Button>
              </li>
            
            </ul>

            </div>
     
        </Col>
        </Row>
          <div className="commentBox">
              <div className="bBottom">
                  <span className="commenterName d-inline-block">احمدرضا عابدزاده</span>
                  <div className="rateStar d-inline-block">
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/>
                        </div>
                        <span className="commentDate d-inline-block">
                            14 اردیبهشت 1400
                        </span>
              </div>
              <p className="commentText">
              من برای چراغ مطالعه خریده بودم که زیاد مناسب نبود چون نورش زیاده تا حدی که کل اتاقو روشن میکنه قیمت مناسبی داشت شرکت هم که تو تبلیغات خیلی از کیفیت می گه امیدوارم در عمل هم کیفیت ببینم­
              </p>
              <div className="bBottom mgt40">
                  <span className="commenterName d-inline-block">احمدرضا عابدزاده</span>
                  <div className="rateStar d-inline-block">
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/>
                        </div>
                        <span className="commentDate d-inline-block">
                            14 اردیبهشت 1400
                        </span>
              </div>
              <p className="commentText">
              من برای چراغ مطالعه خریده بودم که زیاد مناسب نبود چون نورش زیاده تا حدی که کل اتاقو روشن میکنه قیمت مناسبی داشت شرکت هم که تو تبلیغات خیلی از کیفیت می گه امیدوارم در عمل هم کیفیت ببینم­
              </p>
              <div className="bBottom mgt40">
                  <span className="commenterName d-inline-block">احمدرضا عابدزاده</span>
                  <div className="rateStar d-inline-block">
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/>
                        </div>
                        <span className="commentDate d-inline-block">
                            14 اردیبهشت 1400
                        </span>
              </div>
              <p className="commentText">
              من برای چراغ مطالعه خریده بودم که زیاد مناسب نبود چون نورش زیاده تا حدی که کل اتاقو روشن میکنه قیمت مناسبی داشت شرکت هم که تو تبلیغات خیلی از کیفیت می گه امیدوارم در عمل هم کیفیت ببینم­
              </p>
          </div>
          </Col>
      </Row>
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
    export default SingleProduct;