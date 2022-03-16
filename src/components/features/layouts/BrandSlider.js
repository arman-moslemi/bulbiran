import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from '../assets/img/bimeh-novin@2x.png';
import c2 from '../assets/img/tehran-univer@2x.png';
import c3 from '../assets/img/vezarat-behdasht@2x.png';
import c4 from '../assets/img/vezarat-dadgostari@2x.png';
import c5 from '../assets/img/zibasazi@2x.png';
import c6 from '../assets/img/allameh-univer@2x.png';

import Lamp1 from '../assets/img/lamp1.png'

export default function AmazingSlider() {
  var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:false,

  };


  return (
    <Slider {...settings} className="amazingSlider">
    <div className="hamkarLogo">
        <img src={c1}/>
    </div>
    <div className="hamkarLogo">
        <img src={c2}/>
    </div>
    <div className="hamkarLogo">
        <img src={c3}/>
    </div>
    <div className="hamkarLogo">
        <img src={c4}/>
    </div>
    <div className="hamkarLogo">
        <img src={c5}/>
    </div>
    <div className="hamkarLogo">
        <img src={c4}/>
    </div> 
     <div className="hamkarLogo">
        <img src={c3}/>
    </div>
    <div className="hamkarLogo">
        <img src={c1}/>
    </div>
    <div className="hamkarLogo">
        <img src={c5}/>
    </div>
    </Slider>
  );
}