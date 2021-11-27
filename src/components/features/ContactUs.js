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
      lat: 35.68129,
      lng: 51.42302
    },
    zoom:15
  };
  const defaultProps2 = {
    center: {
      lat: 35.70741,
      lng: 51.40563
    },
    zoom:15
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
                <Contact className="wRes85 ruleImg"/>
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
          lat={35.68129}
          lng={51.42302}
          text="مجتمع تجاری ناصرخسرو"
          style={{fontFamily:'IRANYekan-Bold'}}
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
                <a className="contactText d-inline-block" href="tel:+982133904900">02133904900</a>
            </div>
            <div className="ta-right mgt20">
                <FaMobileAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن همراه : </p>
                <a className="contactText d-inline-block"  href="tel:+98935750057">09357500057</a>
                <a className="contactText d-inline-block" href="tel:+989912518500">- 09912518500</a>
            </div>
            <div className="ta-right mgt20">
                <FaEnvelope className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">پست الکترونیک : </p>
                <p className="contactText d-inline-block">info@bulbiran.com</p>
            </div>
            <div className="ta-right mgt20">
                <FaTelegramPlane className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">کانال تلگرام بالبیران :</p>
                <a className="contactText d-inline-block" href="https://telegram.me/@bulbiran">@bulbiran</a>
            </div>
            <div className="ta-right mgt20">
                <FaTelegramPlane className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">ارتباط از طریق تلگرام :</p>
                <a className="contactText d-inline-block" href="https://telegram.me/+989357500057">09357500057</a>
                <a className="contactText d-inline-block" href="https://telegram.me/+989912518500">- 09912518500</a>
            </div>
            <div className="ta-right mgt20">
                <FaWhatsapp className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">ارتباط از طریق واتساپ : </p>
                <a className="contactText d-inline-block" href="https://wa.me/+989357500057">09357500057</a>
                <a className="contactText d-inline-block" href="https://wa.me/+989912518500">- 09912518500</a>
            </div>
            <div className="ta-right mgt20">
                <FaLinkedin className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">لینکدین : </p>
                <p className="contactText d-inline-block"> @telegram_id </p>
            </div>
            <div className="ta-right mgt20">
                <FaInstagram className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">اینستاگرام : </p>
                <a className="contactText d-inline-block" href="https://instagram.com/bulb_iran"> @bulb_iran</a>
            </div>
            </div>
           </div>
           </Col>
            <Col md={6}>
            <div className="whiteBox pd0">
           <div style={{ height: '360px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps2.center}
        defaultZoom={defaultProps2.zoom}
      >
        <AnyReactComponent
          lat={35.70741}
          lng={51.40563}
          text="مجتمع اداری نور تهران"
        />
      </GoogleMapReact>
    </div>
            <div className="pd30">
            <p className="contactTitle">دفتر مرکزی :</p>
            <div className="ta-right mgt20">
                <FaMapMarkerAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">آدرس : </p>
                <p className="contactText d-inline-block">خیابان ولی عصر ، مجتمع اداری نور تهران ، واحد 1712 ، طبقه 5 اداری</p>
            </div>
            <div className="ta-right mgt20">
                <FaPhoneAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن ثابت : </p>
                <a className="contactText d-inline-block" href="tel:+982188227310">02188227310</a>
            </div>
            <div className="ta-right mgt20">
                <FaPhoneAlt className="contactIcons d-inline-block"/>
                <p className="boldText d-inline-block">تلفن ثابت : </p>
                <a className="contactText d-inline-block" href="tel:+98212188227311">02188227311</a>
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