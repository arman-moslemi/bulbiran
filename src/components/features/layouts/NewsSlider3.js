import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News1 from '../assets/img/news1.jpg';
import News2 from '../assets/img/news2.jpg';
import { Overlay } from 'react-bootstrap';
import NewsImg from '../assets/img/bulding.jpg'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle, FaRegClock} from 'react-icons/fa';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="newsSliderClass2">
   <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                  
                </div>
            </div>
            <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                    
                </div>
            </div>
            <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                  
                </div>
            </div>
            <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag" id="colorEight">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                
                </div>
            </div>
            <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag" id="colorSix">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                
                </div>
            </div>
            <div className="newsBox2">
                <img src={NewsImg}/>
                <span className="imageTag" id="colorFive">
                    مقاله
                </span>
                <a href="#">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </a>
                <div className="ta-left dq">
                <span>27 فروردین 1400</span>
                    <FaRegClock className="d-inline-block"/>
                
                </div>
            </div>
   
    </Slider>
  );
}