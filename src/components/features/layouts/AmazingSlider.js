import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/img/slide1.jpg';
import Slide2 from '../assets/img/b1.png';
import Lamp1 from '../assets/img/lamp1.png'
import {FaClock} from 'react-icons/fa'
export default function AmazingSlider() {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    
  };

          
  return (
    <Slider {...settings} className="amazingSlider">
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      <div className="sliderCard">
      <img src={Lamp1}/>
      <p className="productNameSlider">
      لامپ کم مصرف 40 وات نور مدل 
NES-FS-40W پایه E27
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              125000 تومان
          </p>
          <p className="percentPrice d-inline-block">
              4%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">125,000</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          07:05:20
          </div>
          <div className="clockIcon d-inline-block">
        
          <FaClock/>
          </div>
      </div>
      </div>
      
    </Slider>
  );
}