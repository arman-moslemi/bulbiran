import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/img/slide1.jpg';
import Slide2 from '../assets/img/b1.png';
import { apiUrl,apiAsset } from "../../../commons/inFormTypes";


export default function SimpleSlider({img1,img2,img3,img4,img5,img6}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="bigSlider">
      {/* <div>
      <img src={Slide1}/>
      </div>
      <div>
      <img src={Slide1}/>
      </div> */}
     {
       img1?
   <div>
       <img src={apiAsset+img1}/>
      </div>
       :
       null
      }

     {
       img2?
      <div>
       <img src={apiAsset+img2}/>
      </div>
       :
       null
      }
     {
       img3?
       <div>
       <img src={apiAsset+img3}/>
      </div>
       :
       null
      }
     {
       img4?
        <div>
       <img src={apiAsset+img4}/>
      </div>
       :
       null
      }
     {
       img5?
      <div>
       <img src={apiAsset+img5}/>
      </div>
       :
       null
      }
     {
       img6?
        <div>
       <img src={apiAsset+img6}/>
      </div>
       :
       null
      }
    </Slider>
  );
}