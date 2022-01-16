import React,{useEffect,useState} from 'react'
import ReactStars from "react-rating-stars-component";


import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import ImageGallery from 'react-image-gallery';
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight,FaStarHalfAlt} from 'react-icons/fa';
import Select from "react-dropdown-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import img1 from './assets/img/Image 4.png'
import Ersal from './assets/icons/Ersal';
import Zemanat from './assets/icons/zemanat';
import Garantee from './assets/icons/Garantee';
import Moshavere from './assets/icons/Moshavere';
import Pardakht from './assets/icons/Pardakht';
import Price from './assets/icons/Price';
import BGarantee from './assets/icons/BGarantee';
import Save from './assets/icons/Save';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ProductSlider from './layouts/Productslider';
import { Link, useHistory,useParams } from "react-router-dom";

// const images = [
    // {
    //     original: 'https://dkstatics-public.digikala.com/digikala-products/f84556d54d4bb6ba8acd9cc89ab99e90fb98b9b9_1613471623.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //     thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/f84556d54d4bb6ba8acd9cc89ab99e90fb98b9b9_1613471623.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //   },
    // {
    //   original: 'https://dkstatics-public.digikala.com/digikala-products/ccd1f31c1c5d457c6a5ecc11d92251b6166b8151_1613471627.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //   thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/ccd1f31c1c5d457c6a5ecc11d92251b6166b8151_1613471627.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    // },

    // {
    //     original: 'https://dkstatics-public.digikala.com/digikala-products/4db64af2b0c2e2b756463832b67514eee93f9e67_1613471624.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //     thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/4db64af2b0c2e2b756463832b67514eee93f9e67_1613471624.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //   },
    //   {
    //     original: 'https://dkstatics-public.digikala.com/digikala-products/8df22cf09a20ad4af87e49582f7a5768f4026a03_1613471626.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //     thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/8df22cf09a20ad4af87e49582f7a5768f4026a03_1613471626.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15',
    //   },
//   ];


  const SingleProduct=() => {
    const secondExample = {
        size: 25,
        count: 5,
        color: "#bebebe",
        activeColor: "#ffb921",
        value: 2.5,
        a11y: true,
        isHalf: true,

        emptyIcon: <FaRegStar/>,
        halfIcon: <FaStarHalfAlt/>,
        filledIcon: <FaStar/>,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }};
    const images = [];
    const  Colors=[];
    const [product,setProduct]=useState([])
    const [moshabeh,setMoshabeh]=useState([])
    const [allimg,setAllimg]=useState([])
    const [color,setColor]=useState([])
    const [colorSel,setColorSel]=useState("")
    const [brand,setBrand]=useState("")
    const [comments,setComment]=useState([])
    const [property,setProperty]=useState([])
    const [rate,setRate]=useState(0)
    const [rateCount,setRateCount]=useState(0)
    const [count,setCount]=useState(1)
	const params = useParams().id;
   const increment = () => {
    setCount(count+1)
    console.log(count)

      }

      const   decrement = () => {
        // this.setState({
        //   count: this.state.count - 1
        // });
        if(count!=0)
        setCount(count-1)
      }
    const getProduct=()=>{
        const axios = require("axios");

        axios
        .get(apiUrl + "CategoryGreenShop/"+1)
    .then(function (response) {
      if (response.data.result == "true") {

          setMoshabeh(response.data.Data)
          console.log(response.data.result)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
        axios
          .get(apiUrl + "Products/" + params)
        //   .get(apiUrl + "Blog")
          .then(function (response) {
            if (response.data.result == "true") {
             console.log(22)
             console.log(response.data.Data)
             setProduct(response.data.Data)
             if(response.data.Data.Pic1)
{
     images.push({original:apiAsset+response.data.Data.Pic1,thumbnail:apiAsset+response.data.Data.Pic1})
}    if(response.data.Data.Pic2)
{
     images.push({original:apiAsset+response.data.Data.Pic2,thumbnail:apiAsset+response.data.Data.Pic2})
    }
if(response.data.Data.Pic3)

{
     images.push({original:apiAsset+response.data.Data.Pic3,thumbnail:apiAsset+response.data.Data.Pic3}
        )
}
    if(response.data.Data.Pic4)

{    images.push({original:apiAsset+response.data.Data.Pic4,thumbnail:apiAsset+response.data.Data.Pic4})
}
// Colors=product.Color.split(',')[0];
for (let index = 0; index < response.data.Data?.Color?.split(',').length; index++) {
   if( response.data.Data?.Color?.split(',')[index] != "")
{
      Colors.push(response.data.Data?.Color?.split(',')[index])
    // setColor([...color,product?.Color?.split(',')[index]])
}

}
  console.log(77)
  console.log(response.data.Data?.Color)
  console.log(Colors)
  setBrand(response.data.Data?.BrandName)
  setColor(Colors)
    console.log(color)
    setAllimg(images)
          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "Comment/" + params)
        //   .get(apiUrl + "Blog")
          .then(function (response) {
            if (response.data.result == "true") {
             console.log(22)
             console.log(response.data.Data)
             setComment(response.data.Data)


}})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "ProductProperty/" + params)
        //   .get(apiUrl + "Blog")
          .then(function (response) {
            if (response.data.result == "true") {
             console.log(123456)
             console.log(response.data.Data)
             setProperty(response.data.Data)


}})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "ProductRate/" + params)
        //   .get(apiUrl + "Blog")
          .then(function (response) {
            if (response.data.result == "true") {
             console.log(423)
             console.log(response.data.Data)
             var ss=0;
             response.data.Data.forEach(element => {
                 ss+=element.Rate;
             });

             console.log(ss)
            if( response.data.Data.length != 0)
            { setRate(parseInt(ss/response.data.Data.length))
             setRateCount(parseInt(response.data.Data.length))}



}})
          .catch(function (error) {
            console.log(error);
          });
      }
      const InserBasket=()=>{
        const axios = require("axios");
        const UserID= localStorage.getItem("user_id");
        console.log(22)
        console.log(UserID)
               if(UserID==null ||UserID=="" ){
alert("ابتدا وارد شوید")               }
else{
    console.log(55)

    const total=product?.SpecialCost?product?.SpecialCost:product.Cost;
    console.log(total)
          axios.post(apiUrl + "InsertShopBasket",{CustomerID:UserID,ProductID:params,Cost:product.SpecialCost?product.SpecialCost:product.Cost,Number:count,TotalCost:total,Color:colorSel})
        //   .get(apiUrl + "Blog")
          .then(function (response) {
              console.log(475)
              console.log(response)
            if (response.data.result == "true") {
             console.log(44)
             console.log(response.data.result)
             alert("محصول با موفقیت به سبد خرید اضافه شد.")

}})
          .catch(function (error) {
            console.log(error);
          });
        }
      }
      useEffect(() => {
        getProduct();

      }, []);

    const options=[
        'one',
        'two',
        'three'
      ]
      const defaultOption = options[0];
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

      function closeModal() {
        setIsOpen(false);
      }
      const ratelist=(rate)=>{
           for (let index = 0; index < rate; index++) {
return(

    <FaRegStar className="s1"/>
)


           }
           for (let index = 0; index <5- rate; index++) {
                <FaStar className="s2"/>

                       }

      }
      return(

      <>

        <TopBar/>
        <Header/>
      <Container fluid className="bulbiranContainer">
     <div className="singleBox">
        <Row>
            <Col md={3} className="imgBoxS">
                <ImageGallery items={allimg} showBullets={false} showPlayButton={false} showNav={false} showFullscreenButton={false}/>
            </Col>
            <Col md={6}>
                <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <span className="breadCrumbs">{product.BrnadName}</span>
                        <span className="breadCrumbs">/</span>
                        <span className="breadCrumbs">لامپ</span>
                    </Col>
                </Row>
                <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <p className="singleProductName">
                        {/* لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27 */}
                        {product.ProductName}
                        </p>
                    </Col>
                </Row>
                <Row style={{margin:"0",borderBottomColor:"#ececec",borderBottomWidth:"2px",borderBottomStyle:"solid",paddingBottom:"10px"}}>
                    <Col md={12} className="ta-right pd0">
                        <span className="breadCrumbs" style={{marginLeft:"5px"}}>
                            امتیاز این کالا از دید کاربران :
                        </span>
                        <span className="breadCrumbs" >
                            {rate}
                        </span>
                        <div className="rateStar">
                            {/* <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/> */}
                             {
        Array(5-rate).fill(
            <FaRegStar className="s1"/>

        )
    }
{
    Array(rate).fill(
        <FaStar className="s2"/>

    )
}
                        </div>
                        <span className="breadCrumbs" style={{marginRight:"5px"}}>
                           {comments.length} نظر
                        </span>
                    </Col>
                </Row>
                {/* <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={12} className="pd0 ta-right">
                        <span className="vijhegiTitle">ویژگی های این کالا</span>
                        <ul className="vijhegiList">
                        { property?.map((item, i) => {
             return (
                 i<5?
          <>
           <span className="vijhegiTitle">{item[0].TitleMain}:</span>

                                {
                                    item?.map((items)=>{
                                        return (

<li>
 {items.Title}
                            </li>
                                        )
                                    })
                                }
            </>
:
null
                        );})}


                        </ul>

                    </Col>
                </Row> */}
                {color.length>0?
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={12} className="pd0 ta-right">
                        <span className="vijhegiTitle">رنگ نور : </span>
                        <ul className="colorUl">
                            {
                                color?.map((item)=>{
return(
    <>
 <li>
                                <Button onClick={()=>setColorSel(item)} style={{backgroundColor: "#"+item}} ></Button>
                                </li>
                      </>


);

                                })
                            }


                        </ul>
                    </Col>
                </Row>
                :
                null
                }

            </Col>
            <Col md={3}>
                <div className="grayBox2">
                    <div>
                        <BGarantee/>
                        <span>گارانتی 24 ماهه {brand}</span>
                    </div>
                    <div>
                        <Save/>
                        <span>موجود در انبار فروشنده</span>
                    </div>

                    {product.SpecialCost?
                     <div style={{paddingBottom:"0px"}}>
                        <span>قیمت تخفیف خورده :</span>
                        <br/>
                        <div class="amazingPrice ta-left borderNone pd0" style={{textAlign:"left"}}>

                        <div className="d-inline-block borderNone pd0">

                          <p class="strokeOutPrice d-inline-block pd0">{product.Cost} تومان</p>
                          <br/>
                          <span className="singlePrice" style={{marginLeft:"10px"}}>
                            {product.SpecialCost} تومان
                        </span>
                        </div>
                        <div className="d-inline-block borderNone pd0">
                          <p class="percentPrice d-inline-block">{((product.Cost-product.SpecialCost)/product.Cost)*100}%</p>

                        </div>

                        </div>

                    </div>

                    : <div style={{paddingBottom:"30px"}}>
                        <span>قیمت این کالا</span>
                        <br/>
                        <span className="singlePrice">
                            {product.Cost} تومان
                        </span>
                    </div>}
                    <div>
                    <span className="tedad d-inline-block" >
                            تعداد :
                        </span>
                        <div  className="ta-center pd0 d-inline-block" style={{borderBottom:"none"}}>
                    <div className="counterDiv pd5" style={{padding:"0px !important",marginRight:"10px"}}>
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
                    </div>

                    </div>
                    <Button onClick={()=>InserBasket()} className="addToCart">
                        افزودن به سبد خرید
                    </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={3}></Col>
            <Col md={9}>
                <hr className="line"></hr>
            </Col>
        </Row>
        <Row style={{margin:"auto",alignItems:"center"}}>
            <Col md={2} className="ta-center">
                <div className="a1">
                    <Moshavere/>
                    <span>مشاوره رایگان</span>
                </div>
                </Col>
                <Col md={2} className="ta-center">

                <div className="a1">
                    <Pardakht/>
                    <span>پرداخت امن و آسان</span>
                </div>
                </Col>
                <Col md={2} className="ta-center">
                  <div className="a1">
                    <Zemanat/>
                    <span>ضمانت اصل بودن کالا</span>
                </div>
                </Col>

                <Col md={2} className="ta-center">
                <div className="a1">
                    <Ersal/>
                    <span>ارسال و پیگیری</span>
                </div>
                </Col>
               <Col md={2} className="ta-center">
               <div className="a1">
                    <Garantee/>
                    <span>خدمات پس از فروش</span>
                </div>
               </Col>
               <Col md={2} className="ta-center">
               <div className="a1">
                    <Price/>
                    <span>قیمت کارخانه</span>
                </div>
               </Col>

        </Row>

     </div>
      <div className="singleBox mgt40">
        <div dir="rtl">
        <Tabs dir={'rtl'}>
    <TabList className="cTabList">
      <Tab>نقد و بررسی</Tab>
      <Tab>مشخصات کالا</Tab>
      <Tab>نظرات کاربران</Tab>
    </TabList>

    <TabPanel>
    <Row style={{margin:"0"}}>
                    <Col md={12} className="ta-right pd0">
                        <p className="singleProductName">
                       نقد و بررسی اجمالی
                        </p>
                        <p className="pNameMini">
{product.ProductName}
                     </p>
                    </Col>
                </Row>
    <Row style={{margin:"0"}}>
        <Col md={9} className="pd0">
            <p className="productDetail">
            {product.Text}             </p>
        </Col>
        <Col md={3}>
            <div className="productTable">
               <Row style={{margin:"0"}} className="bb">
                   <Col md={12} className="ta-right pd0">
                   <span className="tableSub">ویژگی های اصلی</span>
                   </Col>
               </Row>
               { property?.map((item, i) => {
             return (
                 i<4?
          <>

               <Row style={{margin:"0"}} className="tableRow">
                    <Col md={6} className="ta-right pd0">
                        <span className="tableSpan">
                        {item[0].TitleMain}:
                        </span>
                    </Col>
                    { item?.map((items)=>{
                        return(
                    <Col md={6} className="ta-left pd0">
                        <span className="tableSpan">
                            {items.Title}
                        </span>
                    </Col>
                       )   })}
                </Row>
                </>
:
null
                        );})}
             </div>
        </Col>
        </Row>

    </TabPanel>
    <TabPanel>
      <div>
      <p className="singleProductName d-inline-block">
                      مشخصات کالا
                        </p>
                        <p className="pNameMini">
                        {product.ProductName}
                        </p>

      </div>
      <Row className="mgt20" style={{margin:"0"}}>
          <Col md={4}>
         { property?.map((item, i) => {
             console.log(i)
             return (
                 i<4?
          <>

            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                      {item[0].TitleMain}
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                { item?.map((items,index)=>{
                        return(
                <span className="tableTH">
                    {
index!=item.length-1?
                 items.Title+"; "
                :

                items.Title
                }
                    </span>
                        )
                })}
                    </Col>
            </Row>
            </>
:
null
);

                                })
                            }
                                                                                             </Col>
                                                                                             <Col md={4}>


 { property?.map((item, i) => {
             console.log(i)
             return (

             i<8  &&  i>3 ?
                 <>


<Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                      {item[0].TitleMain}
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                { item?.map((items,index)=>{
                        return(
                <span className="tableTH">
                    {
index!=item.length-1?
                 items.Title+"; "
                :

                items.Title
                }
                    </span>
                        )
                })}
                    </Col>
            </Row>
            </>
            :
null
);

                                })
                            }
                                                                                                                         </Col>
                                                                                                                         <Col>
                                                      { property?.map((item, i) => {
             console.log(i)
             return (

           i>7 ?
                 <>


<Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                      {item[0].TitleMain}
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                { item?.map((items,index)=>{
                        return(
                <span className="tableTH">
                    {
index!=item.length-1?
                 items.Title+"; "
                :

                items.Title
                }
                    </span>
                        )
                })}
                    </Col>
            </Row>
            </>
            :
null
);

                                })
                            }
</Col>

          {/* <Col md={4}>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        شکل ظاهری
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        حبابی
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       توان
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        ده وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        بازه توانی مصرفی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        5 تا 10 وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       میزان روشنایی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        820 لومن
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ولتاژ
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        220 ولت
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       ابعاد
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        6 * 1.2 * 1 سانتی متر
                    </span>
                    </Col>
            </Row>
          </Col>

          <Col md={4}>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        شکل ظاهری
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        حبابی
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       توان
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        ده وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                        بازه توانی مصرفی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        5 تا 10 وات
                    </span>
                    </Col>
            </Row>
            <Row style={{margin:"0"}} className="pTableRow">
                <Col md={6} className="pd0 ta-right">
                    <span className="tableTR">
                       میزان روشنایی
                    </span>
                </Col>
                <Col md={6} className="pd0 ta-right">
                <span className="tableTH">
                        820 لومن
                    </span>
                    </Col>
            </Row>

          </Col> */}

      </Row>
    <Row style={{margin:"0"}}>
        <Col md={12} className="pd0">

        </Col>
    </Row>
    </TabPanel>
    <TabPanel>
    <div>
      <p className="singleProductName d-inline-block">
                     امتیاز و دیدگاه کاربران
                        </p>
                        <p className="pNameMini">
                        {product.ProductName}
                        </p>

      </div>
      <Row style={{margin:"0"}}>
          <Col md={3}>
            <div className="cWhiteBox mgt20">
                <div className="ta-center">
                    <span className="boldScore d-inline-block">{rate}</span>
                    <span className="thinScore d-inline-block">از 5</span>
                </div>
                <Row style={{marginRight:"0",marginLeft:"0",marginTop:"10"}}>
                    <Col md={12} className="ta-center pd0">
                    <div className="rateStar">
                    {
        Array(5-rate).fill(
            <FaRegStar className="s1"/>

        )
    }
{
    Array(rate).fill(
        <FaStar className="s2"/>

    )
}
                        </div>
                        <span className="breadCrumbs" style={{marginRight:"10px"}}>
                            از مجموع {rateCount} امتیاز
                        </span>

                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            طراحی
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            1
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w25">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            کیفیت ساخت
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            4
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w75">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            راندمان مصرف انرژی
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            3
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w50">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
                    <Col md={11} className="pd0">
                        <span className="scoreSpan">
                            ارزش خرید نسبت به قیمت
                        </span>
                    </Col>
                    <Col md={1} className="pd0">
                    <span className="scoreSpan">
                            5
                        </span>
                    </Col>
                    <Col md={12} className="pd0">
                        <div className="graySliderRange">
                            <div className="sliderRangeBlue" id="w100">

                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="vBox mgt20">
            <span className="scoreSpan mgt20">
                دیدگاه خود را درباره این کالا بیان کنید.
            </span>
      <button onClick={openModal} className="openModal">افزودن دیدگاه</button>
      <Modal
        isOpen={modalIsOpen}
      className="commentModal"
        style={customStyles}

        contentLabel="Example Modal"
      >

        <Row style={{margin:"0px"}}>
        <Col md={6}>
        <div className="serviceForm pd0">
            <div className="cFormDiv3 ta-right">
           <span>عنوان نظر : </span>
           <br/>
           <input placeholder="عنوان نظر خود را اینجا بنویسید" type='text' style={{float:"right !important"}}/>
            </div>
            </div>
        </Col>
        <Col md={6}>
        <div className="cFormDiv3 ta-right">
           <span>امتیاز شما : </span>
           <ReactStars {...secondExample} className="d-inline-block"/>
           </div>
        </Col>
      </Row>
      <Row style={{margin:"0px"}}>
          <Col md={12}>
          <div className="cFormDiv3 ta-right" style={{margin:"0px !important"}}>
           <span>متن نظر : </span>
           <br/>
           <input placeholder="متن نظر خود را اینجا بنویسید" type='text' style={{float:"right !important",width:"100% !important",height:"100px",margin:"10px 0px"}} className="w100"/>
            </div>
          </Col>
      </Row>
      <Button className="modalSubmit">ثبت نظر</Button>

        <Button onClick={closeModal} className="closeModal">بستن</Button>


      </Modal>
    </div>
            </div>
          </Col>
          <Col md={9}>
          <Row style={{margin:"0px"}}>
        <Col md={12} className="pd0 mg20">
        <div className="tabRow bSh mgt20" id="cBoxShadow">
            <FaAlignRight className="sortIcon"/>
            <span>مرتب سازی دیدگاه ها بر اساس : </span>
            <ul>
              <li>
                  <Button className="sortBtn">جدید ترین دیدگاه ها</Button>
              </li>
              <li>
                  <Button className="sortBtn">قدیمی ترین دیدگاه ها</Button>
              </li>

            </ul>

            </div>

        </Col>
        </Row>
          <div className="commentBox">
          {

comments?.map((item, i) => {
  return (
          <>
              <div className="bBottom">
                  <span className="commenterName d-inline-block">{item.NameFamily}</span>
                  <div className="rateStar d-inline-block">
                      {/* {
                          ratelist(item.rate)
                      } */}
    {
        Array(5-item.Rate).fill(
            <FaRegStar className="s1"/>

        )
    }
{
    Array(item.Rate).fill(
        <FaStar className="s2"/>

    )
}
                            {/* <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaRegStar className="s1"/>
                            <FaStar className="s2"/>
                            <FaStar className="s2"/> */}
                        </div>
                        <span className="commentDate d-inline-block">
{item.Date}
                        </span>
              </div>
              <p className="commentText">
{item.Text}
    </p>

              </>
                    );

            })
          }
        </div>
          </Col>
      </Row>
    </TabPanel>
  </Tabs>
        </div>
      </div>

      </Container>
      <Container fluid style={{padding:0,marginTop:20,marginBottom:20,backgroundColor:'#f4f4f4'}}>
     <div className="recently">
         <p className="recentlyView">محصولات مشابه</p>
     <ProductSlider style={{display:'block'}} data={moshabeh} className="bulbSliderBox ii"/>
     </div>
      </Container>
   <SocialRow/>
    <IconRow/>
    <Footer/>
      </>);

    };
    export default SingleProduct;