import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/img/slide1.jpg';
import Slide2 from '../assets/img/b1.png';
import Lamp1 from '../assets/img/lamp1.png';
import {FaClock} from 'react-icons/fa';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";

export default function AmazingSlider({data}) {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,

  };


  return (
    <Slider {...settings} className="amazingSlider">
          {

data?.map((item, i) => {
  var ss=((item.Cost-item.CostMajor)/item.Cost)*100
  return (
          <>
          {
            item.CostMajor?
            <Link
          to={`/singleProduct/${item.ProductID}`}
        >
     <div className="sliderCard">
      <img src={apiAsset+item.Pic1}/>
      <p className="productNameSlider">
     {item.ProductName}
      </p>
      <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              {item.Cost} تومان
          </p>

          <p className="percentPrice d-inline-block">
          {parseInt(ss) }%
          </p>
      </div>
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">  {item.CostMajor}</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          {/* 07:05:20 */}
          </div>
          <div className="clockIcon d-inline-block">

          <FaClock/>
          </div>
      </div>
      </div>
    </Link>
      :
      <Link
          to={`/singleProduct/${item.ProductID}`}
        >
      <div className="sliderCard">
      <img  src={apiAsset+item.Pic1}/>
      <p className="productNameSlider">
     {item.ProductName}
      </p>
      {/* <div className="amazingPrice ta-left">
          <p className="strokeOutPrice d-inline-block">
              {item.Cost} تومان
          </p>

          <p className="percentPrice d-inline-block">
          %
          </p>
      </div> */}
      <div className="amazingPrice2 ta-left">
          <p className="price d-inline-block">  {item.Cost}</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>
      <div>
          <div className="amazingTime d-inline-block">
          {/* 07:05:20 */}
          </div>
          <div className="clockIcon d-inline-block">

          <FaClock/>
          </div>
      </div>
      </div>
      </Link>
          }
          </>
        );

})
}

    </Slider>
  );
}