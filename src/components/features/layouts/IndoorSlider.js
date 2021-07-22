import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/img/Indoor.png';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="bigSlider bb2">
      <div>
      <img src={Slide1}/>
      </div>
      <div>
      <img src={Slide1}/>
      </div>
     
    </Slider>
  );
}