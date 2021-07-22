import React from "react";

// import { Input } from 'react-native-elements';
import GoogleMapReact from 'google-map-react';
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft, FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import Contact from './assets/icons/Contact';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
  <>
  <TopBar/>
  <Header/>
  <Container fluid className="bulbiranContainer">
    <div className="whiteBox">
        <Row>
            <Col md={6}>
                <p className="brandShopTitle">تماس با بالبیران</p>
                <p className="brandShopDescription">بیایید با هم درباره پروژه شما حرف بزنیم.
                با استفاده از روش های زیر میتوانید با بالبیران در تماس باشید
                بالبیران اولین مرکز روشنایی در ایران</p>
            </Col>
            <Col md={6}>
                <Contact/>
            </Col>
        </Row>
    </div>
    <div className="mgt40">
        <Row>
            <Col md={6}>
           <div className="whiteBox pd0">
           <div style={{ height: '360px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            <div className="pd30">
            <p className="contactTitle">فروشگاه مرکزی</p>
            <div className="ta-right mgt20">
                <FaMapMarkerAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">آدرس : </p>
                <p className="contactText d-inline-block">تهران،میدان امام خمینی،خیابان ناصر خسرو،مجتمع تجاری ناصر خسرو</p>
            </div>
            <div className="ta-right mgt20">
                <FaPhoneAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن ثابت : </p>
                <p className="contactText d-inline-block">+982133904900</p>
            </div>
            <div className="ta-right mgt20">
                <FaMobileAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن همراه : </p>
                <p className="contactText d-inline-block">+989357500057</p>
            </div>
            <div className="ta-right mgt20">
                <FaEnvelope className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">پست الکترونیک : </p>
                <p className="contactText d-inline-block">info@bulbiran.com</p>
            </div>
            <div className="ta-right mgt20">
                <FaTelegramPlane className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلگرام : </p>
                <p className="contactText d-inline-block"> @telegram_id </p>
            </div>
            <div className="ta-right mgt20">
                <FaWhatsapp className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">واتساپ : </p>
                <p className="contactText d-inline-block">+982133904900</p>
            </div>
            <div className="ta-right mgt20">
                <FaLinkedin className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">لینکدین : </p>
                <p className="contactText d-inline-block"> @telegram_id </p>
            </div>
            <div className="ta-right mgt20">
                <FaInstagram className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">اینستاگرام : </p>
                <p className="contactText d-inline-block"> @instagram </p>
            </div>
            </div>
           </div>
           </Col>
            <Col md={6}>
            <div className="whiteBox pd0">
           <div style={{ height: '360px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            <div className="pd30">
            <p className="contactTitle">فروشگاه مرکزی</p>
            <div className="ta-right mgt20">
                <FaMapMarkerAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">آدرس : </p>
                <p className="contactText d-inline-block">تهران،میدان امام خمینی،خیابان ناصر خسرو،مجتمع تجاری ناصر خسرو</p>
            </div>
            <div className="ta-right mgt20">
                <FaPhoneAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن ثابت : </p>
                <p className="contactText d-inline-block">+982133904900</p>
            </div>
           </div>
</div>
          <div className="whiteBox mgt15">
              <p className="contactDescription">
              اگر سوالی دارید، یک مشکل در وب‌سایت پیدا کرده‌اید و می‌خواهید به ما 
اطلاع دهید، برای بالبیران پیشنهادی دارید، اگر حتی فقط قصد آشنا شدن با ما را دارید، 
یک لحظه هم درنگ نکنید! همین حالا با ما تماس بگیرید‌ 
توجه: وارد کردن اطلاعات تماس در فرم زیر اختیاری است. با داشتن اطلاعات تماس، 
بهتر با شما در تماس خواهیم بود!
            </p>
            <form className="contactUsForm">
              <input placeholder="ایمیل" className="contactUsInput"></input>
              <textarea placeholder="پیام شما" className="contactUsTextarea"></textarea>
           <button type="submit" className="contactBtn">ارسال پیام ! </button>
            </form>
            
          </div>
            </Col>
        </Row>
    </div>
  
  </Container>
  <SocialRow/>
  <IconRow/>
  <Footer/>
  </>
  );
}