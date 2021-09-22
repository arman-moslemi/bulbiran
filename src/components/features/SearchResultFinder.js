import React,{useEffect,useState} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Checkbox from "react-custom-checkbox";
import ReactPaginate from 'react-paginate';
import 'react-accessible-accordion/dist/fancy-example.css';
import { FaAngleLeft,FaAlignRight ,FaCheck } from 'react-icons/fa';
import Sh1 from './assets/img/sh1.jpg';
import Sh2 from './assets/img/sh2.jpg';
import Sh3 from './assets/img/sh3.jpg';
import rise from './assets/img/rise.png';
import Img4 from './assets/img/Image 4.png';
import Img5 from './assets/img/Image 5.png';
import Img6 from './assets/img/Image 6.png';
import Img7 from './assets/img/Image 7.png';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const SearchResult = () => {
    const {id,base,tech,color,light,hobab} = useParams();
    const [img1,setimg1]=useState('')
    const [img2,setimg2]=useState('')
    const [img3,setimg3]=useState('')
    const [product,setProduct]=useState([])

    const expensive=()=>{


      console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setProduct([...product].sort((a, b) => (a.Cost < b.Cost) ? 1 : -1))
console.log(product)

}
const viewset=()=>{


console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setProduct([...product].sort((a, b) => (a.Viewer < b.Viewer) ? 1 : -1))
console.log(product)

}
const cheap=()=>{



setProduct([...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1))
console.log(product)

}
const newest=()=>{



setProduct([...product].sort((a, b) => (a.ProductID < b.ProductID) ? 1 : -1))
console.log(product)

}
    const mainSlider=()=>{
      const axios = require("axios");
      axios
      .post(apiUrl + "ProductByFinder",{BulbFindBaseID:base,BulbFindGroupID:id,Technology:tech,Color:color,Lighting:light,Hobab:hobab})
  .then(function (response) {
    if (response.data.result == "true") {
      console.log(response.data)
      console.log(response.data.Data.length)
      console.log(id)
      console.log(base)
      console.log(color)
      console.log(tech)
      console.log(light)
      console.log(hobab)

        setProduct(response.data.Data)

  }
  else{
    console.log(response.data.result)

  }})
  .catch(function (error) {
    console.log(error);
  });


          axios
          // .post(apiUrl + "RequestPhotos",{RequestID:params})
          .get(apiUrl + "FirstPage")
          .then(function (response) {
            if (response.data.result == "true") {
             console.log(123456)
             console.log(response.data.Data[4].Pic)
             setimg1(response.data.Data[4].Pic)
             setimg2(response.data.Data[4].Pic2)
             setimg3(response.data.Data[4].Pic3)

             console.log(img1)
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

        }, []);
    return (
    <>
          <TopBar/>
      <Header/>

    <Container fluid className="bulbiranContainer">
    <Row className="mgt20">
        <Col md={8} className="pdl0">
        <img src={apiAsset+img1} className="w100 h100"/>
       </Col>
        <Col md={4} className="ta-left">
       <div>
       <div className="firstBanner brt" style={{paddingTop:"0px"}}>
       <img src={apiAsset+img2}  className="w100"/>
         </div>
       </div>
          <div className="secondBanner brt">
          <img src={apiAsset+img3}  className="w100"/>
            </div>
        </Col>
      </Row>
      <Row className="mgt20">
          <Col md={12}>
          <div className="tabRow">
            <FaAlignRight className="sortIcon"/>
            <span>مرتب سازی بر اساس : </span>
            <ul>
              <li>
                  <Button onClick={()=>viewset()} className="sortBtn">پر بازدید ترین</Button>
              </li>
              {/* <li>
                  <Button className="sortBtn">پر فروش ترین</Button>
              </li> */}
              <li>
                  <Button onClick={()=>newest()} className="sortBtn">جدید ترین</Button>
              </li>
              <li>
                  <Button onClick={()=>cheap()} className="sortBtn">ارزان ترین</Button>
              </li>
              <li>
                  <Button onClick={()=>expensive()} className="sortBtn">گران ترین</Button>
              </li>
            </ul>

            </div>
            <Row style={{margin:"-5px"}}>
            {

product?.map((item, i) => {
  return (
          <>
                <Col md={2} className="pd0">
              <Link
          to={`/singleProduct/${item.ProductID}`}
        >
                    <div className="whiteCard">
                        <img src={apiAsset+item.Pic1}/>
                        <p>{item.ProductName}</p>
                        <span>{item.Cost} تومان</span>
                    </div>
                </Link>
                </Col>
                </>
                    );

            })
          }
            </Row>

          </Col>
      </Row>

     </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default SearchResult;