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
  var settings2 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:false,

  };

  return (
    <>
    <Slider {...settings} className="amazingSlider responsiveNone">
                  {
data?.map((item, i) => {
    var ss=((item.Cost-item.SpecialCost)/item.Cost)*100

    var mm=parseInt(data.length/2)

  return (

       data.length>3?
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
          <p className="price d-inline-block"> {item.SpecialCost}</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>

      </div>
      </Link>
      :
      <>
      {
      i<parseInt(data.length/2)?
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
          <p className="price d-inline-block"> {item.SpecialCost}</p>
          <p className="vahed d-inline-block">تومان</p>
      </div>

      </div>
      </Link>
:
null
}
      </>
      // <Link
      //     to={`/singleProduct/${item.ProductID}`}
      //   >
      // <div className="sliderCard">
      // <img src={apiAsset+item.Pic1}/>
      // <p className="productNameSlider">
      //  {item.ProductName}

      // </p>
      // {/* <div className="amazingPrice ta-left">
      //     <p className="strokeOutPrice d-inline-block">
      //     {item.Cost} تومان
      //     </p>
      //     <p className="percentPrice d-inline-block">
      //     {parseInt(ss) }%
      //     </p>
      // </div> */}
      // <div className="amazingPrice2 ta-left">
      //     <p className="price d-inline-block"> {item.Cost}</p>
      //     <p className="vahed d-inline-block">تومان</p>
      // </div>

      // </div>
      // </Link>


        );

})
}
    </Slider>
   <Slider {...settings2} className="amazingSlider desktopNone">
   {
data?.map((item, i) => {
var ss=((item.Cost-item.SpecialCost)/item.Cost)*100

var mm=parseInt(data.length/2)

return (

data.length>3?
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
<p className="price d-inline-block"> {item.SpecialCost}</p>
<p className="vahed d-inline-block">تومان</p>
</div>

</div>
</Link>
:
<>
{
i<parseInt(data.length/2)?
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
<p className="price d-inline-block"> {item.SpecialCost}</p>
<p className="vahed d-inline-block">تومان</p>
</div>

</div>
</Link>
:
null
}
</>
// <Link
//     to={`/singleProduct/${item.ProductID}`}
//   >
// <div className="sliderCard">
// <img src={apiAsset+item.Pic1}/>
// <p className="productNameSlider">
//  {item.ProductName}

// </p>
// {/* <div className="amazingPrice ta-left">
//     <p className="strokeOutPrice d-inline-block">
//     {item.Cost} تومان
//     </p>
//     <p className="percentPrice d-inline-block">
//     {parseInt(ss) }%
//     </p>
// </div> */}
// <div className="amazingPrice2 ta-left">
//     <p className="price d-inline-block"> {item.Cost}</p>
//     <p className="vahed d-inline-block">تومان</p>
// </div>

// </div>
// </Link>


);

})
}
</Slider>

  </>
 );
}