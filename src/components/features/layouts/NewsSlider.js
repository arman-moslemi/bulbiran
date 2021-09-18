import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News1 from '../assets/img/news1.jpg';
import News2 from '../assets/img/news2.jpg';
import { Overlay } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";


export default function SimpleSlider({img1,img2}) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="newsSliderClass">
      <div style={{position:"relative"}}>
      <img src={img1}/>
      <span className="sliderTag">
                   آخرین تخفیفات
                </span>

      <div className="yw"></div>
      <a className="kh1">خبر تخفیف اول</a>
      </div>
      <div>
      <img src={img2}/>
      <span className="sliderTag">
                   آخرین تخفیفات
                </span>

      <div className="yw"></div>
      <a className="kh1">خبر تخفیف اول</a>
      </div>

    </Slider>
  );
}