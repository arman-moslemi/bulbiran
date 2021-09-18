import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/img/Indoor.png';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";


export default function SimpleSlider({img1,img2}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(456)
  console.log(img2)
  return (
    <Slider {...settings} className="bigSlider bb2">
      <div>
      <img src={apiAsset+img1}/>
      </div>
      <div>
      <img src={apiAsset+img2}/>
      </div>

    </Slider>
  );
}