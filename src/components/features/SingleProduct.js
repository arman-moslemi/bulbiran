import React , {useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import ImageGallery from 'react-image-gallery';
import {Container,Row,Col,Button} from 'react-bootstrap'
import Select from "react-dropdown-select";
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
      return(<>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
     <div className="singleBox">
        <Row>
            <Col md={3} className="imgBoxS">
                <ImageGallery items={images} showBullets={false} showPlayButton={false} showNav={false} showFullscreenButton={false}/>
            </Col>
            <Col md={6}></Col>
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
      </Container>
   <SocialRow/>
    <IconRow/>
    <Footer/>
      </>);
    
    };
    export default SingleProduct;