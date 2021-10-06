import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import NewsSlider from './layouts/NewsSlider';
import NewsSlider2 from './layouts/NewsSlider2';
import NewsSlider3 from './layouts/NewsSlider3';
import Designs from './assets/icons/CreativeDesign'
import NewsImg from './assets/img/bulding.jpg'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle, FaRegClock} from 'react-icons/fa';
import Tabligh from './assets/img/tabligh.png'
import News3 from './assets/img/news3.png';
import Banner1 from './assets/img/banner1.jpg';
import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const News = () => {
    const history = useHistory();
    const [product,setProduct]=useState([])
    const [news,setNews]=useState([])
    const [img1,setimg1]=useState('')
    const [img2,setimg2]=useState('')
    const [img3,setimg3]=useState('')
    const [img4,setimg4]=useState('')
    const [img5,setimg5]=useState('')
    const [img6,setimg6]=useState('')
    const mainSlider=()=>{
        const axios = require("axios");
        axios
        // .post(apiUrl + "RequestPhotos",{RequestID:params})
        .get(apiUrl + "FirstPage")
        .then(function (response) {
          if (response.data.result == "true") {
           console.log(123456)
           console.log(response.data.Data)
           console.log(response.data.Data[1].Pic)
           setimg1(response.data.Data[1].Pic)
           setimg2(response.data.Data[1].Pic2)
           setimg3(response.data.Data[1].Pic3)
           setimg4(response.data.Data[1].Pic4)
           setimg5(response.data.Data[1].Pic5)
           setimg6(response.data.Data[1].Pic6)
           console.log(img1)
        }
        else{
          console.log(response.data.result)

        }})
        .catch(function (error) {
          console.log(error);
        });
          axios
              .get(apiUrl + "Blog")
          .then(function (response) {
            if (response.data.result == "true") {
                console.log(11)
                console.log(response.data.Data)


                setProduct(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "BlogNews")
      .then(function (response) {
        if (response.data.result == "true") {
            console.log(11)
            console.log(response.data.Data)


            setNews(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });

      }
      useEffect(() => {
        mainSlider();
// alert(val)
      }, []);
    return (
    <>
          <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
 <div className="responsiveNone">
 <div style={{marginRight:"0px",marginLeft:"0px",marginTop:"0px",display:"flex",height:"470px"}} className="responsiveNews">
        <div className="pdr0 pdl0 w20 d-inline-block h100 responsiveNewsWhite">
        <div className="whiteBox ta-right pd0 h100" style={{marginTop:"0px"}}>
           <div className="redBorder">
           <FaAlignRight className="d-inline-block"/>
            <span className="d-inline-block">
                دسته بندی
            </span>
           </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/1">
                آخرین اخبار
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
                آخرین تخفیف ها
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/2">
               مقالات علمی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/3">
              تکنولوژی روز
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/4">
               نور
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/5">
              مهندسی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/6">
              ساخت و تولید
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/7">
             طراحی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista"href="/BlogSecond/8">
              رویدادهای مرتبط با روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
               تبلیغات
            </a>
        </div>
       </div>

        </div>
        <div className="w25 d-inline-block h100 nBoxW25 dresBlock" >
        {product?.map((item, i) => {
  return (
      i<2?
          <>
            <div className="newsBox">
                <img src={apiAsset+item.Pic}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  onClick={()=>  history.push("/showblog/"+item.BlogID)}>
                   {item.Title}
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
            </div>
                </>
                :
                null
                        );

})
}
            {/* <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#" onClick={()=>  history.push("/showblog")}>
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div> */}
        </div>
        <div className="w55 d-inline-block h100 dresBlock">
            <NewsSlider img1={apiAsset+img1} img2={apiAsset+img2}/>
        </div>
    </div>
    <div style={{display:"flex",height:"470px",marginTop:"40px"}} className="dresBlock">
        <div className="w80 h100">
            <div className="newsWhiteBox h100 w95">
            <span className="boldTitle2">
                برترین ها
            </span>
            <div className="m1">
            <NewsSlider2 data={product}/>
            </div>
            </div>
        </div>
        <div className="w20 h100">
            <div  className="positionR cHover h100">
            <img src={Tabligh} className="w100 h100"/>
            <div className="iOverlay h100">

            </div>
            <a className="spanOverlay">
                خبر تخفیف اول
            </a>
            </div>
        </div>
    </div>
  <div style={{display:"flex",height:"470px",marginTop:"40px"}} className="dresBlock">
  <div className="newsWhiteBox h100 w100">
            <span className="boldTitle2">
                مقالات
            </span>

            <Row style={{marginRight:"auto",marginLeft:"auto",width:"94%",marginTop:"20px"}}>
            {product?.map((item, i) => {
  return (
      i<product.length && i>product.length-5?
          <>
                <Col md={3}>
                <div  className="positionR cHover">
            <img src={apiAsset+item.Pic} className="w100 mPic"/>

            <span className="sliderTag left0" id="colorFive">
                   مقاله
                </span>
            <div className="iOverlay" id="colorOne">

            </div>
            <a className="spanOverlay2" onClick={()=>  history.push("/showblog/"+item.BlogID)}>
       {item.Title}
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
{item.Date}
            </span>
            </div>
                </Col>
                </>
                :
                null
                        );

})
}
                {/* <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorEight">
                   مقاله
                </span>
            <div className="iOverlay"id="colorFour">

            </div>
            <a className="spanOverlay2"onClick={()=>  history.push("/showblog")} >
            صنعت روشنایی در وضعیت
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
          */}
            </Row>
            </div>
  </div>
  <Row className="bannerRow">
      <Col md={12}>
          <img src={Banner1} className="bannerH100"/>
      </Col>
  </Row>
    <div style={{display:"flex",marginTop:"40px"}} className="dresBlock">
    <div className="w25 d-inline-block h100">
    {product?.map((item, i) => {
  return (
      i>2&& i<7?
          <>
            <div className="newsBox">
                <img src={apiAsset+item.Pic}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a onClick={()=>  history.push("/showblog/"+item.BlogID)}>
{item.Title}                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
            </div>
            </>
                :
                null
                        );

})
}
            {/* <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
       */}
        </div>
      <div className="w75 d-inline-block h100">
      <div style={{display:"flex",height:"566px"}} className="dresBlock">
  <div className="newsWhiteBox h100 w100">
            <span className="boldTitle2">
               نمایشگاه ها
            </span>
            <Row style={{marginRight:"auto",marginLeft:"auto",marginTop:"40px",width:"95%",display:"flex"}}>
                <Col md={7}>
                <div  className="positionR cHover">
            <img src={apiAsset+img4} className="w100 mPic" style={{height:"457px"}}/>

            <div className="iOverlay" id="colorTen">

            </div>
            <a className="kh1 w100" style={{right:"20px"}}>خبر تخفیف اول</a>

            </div>

                </Col>
                <Col md={5}>

                        {news?.map((item, i) => {
  return (
    i<4?
      <>
      <div className="r1">
                        <img src={apiAsset+item.Pic}/>
                        <div className="r2">
                            <span className="r3">
{item.Title}
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
                        </div>
                    </div>

      </>
                :
                null
                        );

}) }
                  {/* <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div> */}


                </Col>
            </Row>
</div>

</div>
 <div className="mgt20 w100 dresBlock" style={{display:"flex",height:"375px"}}>
            <div className="d-inline-block w75">
            <div  className="positionR cHover w93">
            <img src={apiAsset+img4} className="w100 mPic"/>

            <div className="iOverlay" id="colorTen">

            </div>
            <a className="kh1 w100" style={{right:"20px"}}>خبر تخفیف اول</a>

            </div>
            </div>
            <div className="d-inline-block w25">
            <div  className="positionR cHover h100">
            <img src={apiAsset+img6} className="w100 h100"/>
            <div className="iOverlay h100">

            </div>
            <a className="spanOverlay">
                خبر تخفیف اول
            </a>
            </div>
            </div>
        </div>
          </div>
    </div>
  <div className="mgt40">
  <div className="newsWhiteBox h100 w100 r5">
            <span className="boldTitle2">
               اخبار
            </span>
            <div className="m1">
            <NewsSlider3 data={news}/>
            </div>
            </div>
  </div>
 
 </div>
 <div className="desktopNone">
     <Row style={{margin:"0px"}}>
         <Col xs={12}>
         <div className="whiteBox ta-right pd0" style={{marginTop:"0px"}}>
           <div className="redBorder">
           <FaAlignRight className="d-inline-block"/>
            <span className="d-inline-block">
                دسته بندی
            </span>
           </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/1">
                آخرین اخبار
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
                آخرین تخفیف ها
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/2">
               مقالات علمی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/3">
              تکنولوژی روز
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/4">
               نور
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/5">
              مهندسی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/6">
              ساخت و تولید
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="/BlogSecond/7">
             طراحی روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista"href="/BlogSecond/8">
              رویدادهای مرتبط با روشنایی
            </a>
        </div>
        <div className="newsList">
            <a className="newsLista" href="#">
               تبلیغات
            </a>
        </div>
       </div>

         </Col>
         <Col xs={12}>
         <div className="w100 d-inline-block dresBlock" >
        {product?.map((item, i) => {
  return (
      i<2?
          <>
            <div className="newsBox">
                <img src={apiAsset+item.Pic}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  onClick={()=>  history.push("/showblog/"+item.BlogID)}>
                   {item.Title}
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
            </div>
                </>
                :
                null
                        );

})
}
            {/* <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#" onClick={()=>  history.push("/showblog")}>
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div> */}
        </div>
     
         </Col>
            <Col xs={12}>
            <div className="w100 d-inline-block h100 dresBlock">
            <NewsSlider img1={apiAsset+img1} img2={apiAsset+img2}/>
        </div>
            </Col>
    <Col xs={12}>
    <div style={{height:"470px",marginTop:"40px"}} className="dresBlock">
        <div className="w100 h100">
            <div className="newsWhiteBox w100">
            <span className="boldTitle2">
                برترین ها
            </span>
            <div className="m1">
            <NewsSlider2 data={product}/>
            </div>
            </div>
        </div>
     
    </div>
    </Col>
    <Col xs={12}>
    <div className="w100 h100">
            <div  className="positionR cHover h100">
            <img src={Tabligh} className="w100 h100"/>
            <div className="iOverlay h100">

            </div>
            <a className="spanOverlay">
                خبر تخفیف اول
            </a>
            </div>
        </div>
    </Col>
    <Col xs={12}>
    <div className="newsWhiteBox w100" style={{marginTop:"15px",marginBottom:"15px"}}>
            <span className="boldTitle2">
                مقالات
            </span>

            <Row style={{marginRight:"auto",marginLeft:"auto",width:"94%",marginTop:"20px"}}>
            {product?.map((item, i) => {
  return (
      i<product.length && i>product.length-5?
          <>
                <Col md={3} xs={6}>
                <div  className="positionR cHover" style={{marginBottom:"20px"}}>
            <img src={apiAsset+item.Pic} className="w100 mPic"/>

            <span className="sliderTag left0" id="colorFive">
                   مقاله
                </span>
            <div className="iOverlay" id="colorOne">

            </div>
            <a className="spanOverlay2" onClick={()=>  history.push("/showblog/"+item.BlogID)}>
       {item.Title}
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
{item.Date}
            </span>
            </div>
                </Col>
                </>
                :
                null
                        );

})
}
                {/* <Col md={3}>
                <div  className="positionR cHover">
            <img src={News3} className="w100 mPic"/>
            <span className="sliderTag left0" id="colorEight">
                   مقاله
                </span>
            <div className="iOverlay"id="colorFour">

            </div>
            <a className="spanOverlay2"onClick={()=>  history.push("/showblog")} >
            صنعت روشنایی در وضعیت
هشدار
            </a>
            <span className="dateOverlay">
                <FaRegClock/>
                21 فروردین 99
            </span>
            </div>
                </Col>
          */}
            </Row>
            </div>
    </Col>
    <Col xs={12}>
          <img src={Banner1} className="bannerH100" style={{marginTop:"15px",marginBottom:"15px"}}/>
      </Col>
      <Col xs={12}>
      <div className="w100 d-inline-block">
    {product?.map((item, i) => {
  return (
      i>2&& i<7?
          <>
            <div className="newsBox">
                <img src={apiAsset+item.Pic}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a onClick={()=>  history.push("/showblog/"+item.BlogID)}>
{item.Title}                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
            </div>
            </>
                :
                null
                        );

})
}
            {/* <div className="newsBox">
                <img src={NewsImg}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a href="#">
                    صنعت روشنایی در وضعیت هشدار
                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
            </div>
       */}
        </div>
      
      </Col>
      <Col xs={12}>
      <div className="newsWhiteBox h100 w100">
            <span className="boldTitle2">
               نمایشگاه ها
            </span>
            <Row style={{marginRight:"auto",marginLeft:"auto",marginTop:"40px",width:"95%",display:"flex"}}>
                <Col md={7}>
                <div  className="positionR cHover">
            <img src={apiAsset+img4} className="w100 mPic" style={{height:"457px"}}/>

            <div className="iOverlay" id="colorTen">

            </div>
            <a className="kh1 w100" style={{right:"20px"}}>خبر تخفیف اول</a>

            </div>

                </Col>
                <Col md={5}>

                        {news?.map((item, i) => {
  return (
    i<4?
      <>
      <div className="r1">
                        <img src={apiAsset+item.Pic}/>
                        <div className="r2">
                            <span className="r3">
{item.Title}
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
                        </div>
                    </div>

      </>
                :
                null
                        );

}) }
                  {/* <div className="r1">
                        <img src={News3}/>
                        <div className="r2">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div> */}


                </Col>
            </Row>
</div>

      </Col>
      <Col xs={12}>
      <div className="newsWhiteBox w100 r5" style={{marginTop:"15px",marginBottom:"15px"}}>
            <span className="boldTitle2">
               اخبار
            </span>
            <div className="m1">
            <NewsSlider3 data={news}/>
            </div>
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
};
export default News;