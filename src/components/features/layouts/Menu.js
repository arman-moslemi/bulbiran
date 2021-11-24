import React,{useState,useEffect,ReactDOM} from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import { Link, useHistory } from "react-router-dom";
import {Container,Row,Col,Button,Dropdown,} from 'react-bootstrap'
import { FaCaretDown } from 'react-icons/fa';
import ReactMegaMenu from "react-mega-menu"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Lamp from '../assets/img/lamp.png';
import Lampd from '../assets/img/l4.jpg';
import Lamp2 from '../assets/img/l2.jpg';
import Lamp3 from '../assets/img/l3.jpg';
import Lamp1 from '../assets/img/l1.jpg';
import LogoLarge from '../assets/img/logo-large.png'
import B2 from '../assets/img/b2.png';
import B3 from '../assets/img/b3.jpeg';
import B4 from '../assets/img/b4.png';
import B5 from '../assets/img/b5.png';
import B6 from '../assets/img/b6.png';
import B7 from '../assets/img/b7.png';
import B8 from '../assets/img/b8.png';
import B9 from '../assets/img/b9.png';
import c1 from '../assets/img/c1.png';
import c2 from '../assets/img/c2.png';
import c3 from '../assets/img/c3.png';
import c4 from '../assets/img/c4.png';
import c5 from '../assets/img/c5.png';
import c6 from '../assets/img/c6.png';
import c7 from '../assets/img/c7.png';
import c8 from '../assets/img/c8.png';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";


import { required } from 'glamor';
import ResponsiveMenu from '../layouts/ResponsiveMenu';
const Menu = () => {
    const history = useHistory();
    const [pic,setpic]=useState(Lamp)
    const [brand,setBrand]=useState([])
    const [group,setGroup]=useState([])
    const [greenGroup,setGreenGroup]=useState([])
    //   const [pic,setpic]=useState("../assets/img/lamp.png")
    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .get(apiUrl + "AllBrandProduct")
          .then(function (response) {
            if (response.data.result == "true") {

                setBrand(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "AllRoles")
      .then(function (response) {
        if (response.data.result == "true") {

            setGroup(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
          axios
          .get(apiUrl + "AllGreenGroup")
      .then(function (response) {
        if (response.data.result == "true") {

            setGreenGroup(response.data.Data)

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
    const LampM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
       لامپ
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
       <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a  onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>
               {/* <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/3")}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/5")}>لامپ گازی</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/6")}>لامپ هالوژنی</a>
               </li> */}
               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>
               {/* <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/3")}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/5")}>لامپ گازی</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/6")}>لامپ هالوژنی</a>
               </li> */}
               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>
               {/* <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/3")}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/5")}>لامپ گازی</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/bulbiranshop/6")}>لامپ هالوژنی</a>
               </li> */}
               </>
:null

                    );

            })
          }
           </ul>
       </Col>
   </Row>
        </div>

      }
      const DakheliM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
      روشنایی داخلی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const KharejiM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
     روشنایی خارجی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
  </Row>
        </div>

      }
      const TazeinM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
      روشنایی تزئینی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
  </Row>
        </div>

      }
      const KhasM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
      روشنایی خاص
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const JanebiM = () => {
        return <div className="whiteMega">
    <div className="whiteMegaTitle">
      لوازم جانبی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
   <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {group.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }

      //greenshop
      const LampLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
       لامپ
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
   </Row>
        </div>

      }
      const PanelLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
      پنل
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const NoorafkanLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
     نورافکن
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup == 3)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const RiseLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
    ریسه
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

    </Row>
        </div>

      }
      const CheraghLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
      چراغ
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const AvizLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
      آویز
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const JanebiLED = () => {
        return <div className="whiteMega hc1">
    <div className="whiteMegaTitle">
      لوازم جانبی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
   <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==7)?.map((item, i) => {
               return (
                  i<4?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==7)?.map((item, i) => {
               return (
                i>3 &&  i<8?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>
       <Col md={3}>
           <ul className="megaUl">
           {greenGroup.filter(t=>t.BiggerGroup==7)?.map((item, i) => {
               return (
               i>7?
                      <>
               <li>
                   <a   onMouseEnter={()=>setpic(apiAsset+item.Photo)} onMouseOut={()=>setpic(apiAsset+item.Photo)} onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>{item.SmallerGroup}</a>
               </li>

               </>
:null

                    );

            })
          }
           </ul>
       </Col>

   </Row>
        </div>

      }
      const DesignMega = () => {
        return <div className="whiteMega hc2">
    <div className="whiteMegaTitle">
    ریسه
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
       <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={4}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/design")}>دیزاین و طراحی</a>
               </li>
               <li>
                   <a  onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a  onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)}>لامپ گازی</a>
               </li>


           </ul>
       </Col>
       <Col md={5}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)}>لامپ رشته ای</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ فلورسنت</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ فیلامنتی</a>
               </li>


           </ul>
       </Col>
   </Row>
        </div>

      }
      const GaranteeMega = () => {
        return <div className="whiteMega hc2">
    <div className="whiteMegaTitle">
      چراغ
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
       <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={4}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/garanty")}>گارانتی</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ گازی</a>
               </li>


           </ul>
       </Col>
       <Col md={5}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ رشته ای</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)}>لامپ فلورسنت</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ فیلامنتی</a>
               </li>


           </ul>
       </Col>
   </Row>
        </div>

      }
      const RepairMega = () => {
        return <div className="whiteMega hc2">
    <div className="whiteMegaTitle">
      آویز
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
       <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={4}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/repairs")}>تعمیرات</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ گازی</a>
               </li>

           </ul>
       </Col>
       <Col md={5}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ رشته ای</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp3)} onMouseOut={()=>setpic(Lamp)}>لامپ فلورسنت</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ فیلامنتی</a>
               </li>


           </ul>
       </Col>
   </Row>
        </div>

      }
      const YadakiMega = () => {
        return <div className="whiteMega hc2">
    <div className="whiteMegaTitle">
      لوازم جانبی
    </div>
   <Row style={{marginRight:"0px",marginLeft:"0px"}}>
       <Col md={3}>
        <img src={pic} className="megaMenuImg"/>
       </Col>
       <Col md={4}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)} onClick={()=>  history.push("/lavazemyadaki")}>لوازم یدکی</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ کم مصرف</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ گازی</a>
               </li>


           </ul>
       </Col>
       <Col md={5}>
           <ul className="megaUl">
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp1)} onMouseOut={()=>setpic(Lamp)}>لامپ رشته ای</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lamp2)} onMouseOut={()=>setpic(Lamp)}>لامپ فلورسنت</a>
               </li>
               <li>
                   <a   onMouseEnter={()=>setpic(Lampd)} onMouseOut={()=>setpic(Lamp)}>لامپ فیلامنتی</a>
               </li>


           </ul>
       </Col>
   </Row>
        </div>

      }
      const data = [
        {
          label: 'لامپ', key: 1, items: <LampM />
        },
        {
          label: 'روشنایی داخلی', key: 2, items: <DakheliM />
        },
        {
          label: 'روشنایی خارجی', key: 3,items:<KharejiM/>
        },
        {
            label: 'روشنایی تزئینی', key: 4,items:<TazeinM/>
          },
          {
            label: 'روشنایی خاص', key: 5,items:<KhasM/>
          },
          {
            label: 'لوازم جانبی', key:6,items:<JanebiM/>
          },
      ]
      const data2 = [
        {
          label: 'لامپ', key: 1, items: <LampLED/>
        },
        {
          label: 'پنل', key: 2, items: <PanelLED />
        },
        {
          label: 'نورافکن', key: 3,items:<NoorafkanLED/>
        },
        {
            label: 'ریسه', key: 4,items:<RiseLED/>
          },
          {
            label: 'چراغ', key: 5,items:<CheraghLED/>
          },
          {
            label: 'آویز لوستر', key: 6,items:<AvizLED/>
          },
          ,
          {
            label: 'لوازم جانبی', key: 7,items:<JanebiLED/>
          },
      ]
      const data3 = [
        {
          label: 'طراحی و دیزاین', key: 1, items: <DesignMega/>
        },
        {
          label: 'گارانتی و خدمات پس از فروش', key: 2, items: <GaranteeMega />
        },
        {
          label: 'تعمیرات', key: 3,items:<RepairMega/>
        },
        {
            label: 'لوازم یدکی', key: 4,items:<YadakiMega/>
          },


      ]
      const styleConf = {
        menuProps: {
          style: {
            backgroundColor:"#fff",
            height: "20em",
            width: "160px",
            padding: "2px",
            margin: "0"
          }
        },
        contentProps: {
          style: {

          }
        },
        menuItemProps: {
          style: {

            padding: "2px",
            height: "2em"
          }
        },
        menuItemSelectedProps: {
          style: {

            padding: "2px",
            height: "2em",
            backgroundColor: "grey"
          }
        },
        containerProps: {
          style: {

            padding: "2px"
          }
        }
      }

    return (
      <>
      <Container fluid>

         <Row className="menu-row responsiveNone">
              <Col md="auto" xs="2" className="ta-center flex-1">
              {/*  */}
      <Dropdown>
        <Dropdown.Toggle className="menuDropDown">
        <p className="menu-items d-inline-block" >فروشگاه بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
        </Dropdown.Toggle>
        <Dropdown.Menu className="MegamenuDropList">
        <div className="bMega">
        <ReactMegaMenu
        direction="right"
        data={data}
        styleConfig={styleConf}
      />
         </div>
        </Dropdown.Menu>
        </Dropdown>

              </Col>
              <Col md="auto" xs="2" className="ta-center flex-1">
              <Dropdown>
        <Dropdown.Toggle className="menuDropDown">
        <p className="menu-items d-inline-block">بازار روشنایی</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
        </Dropdown.Toggle>
        <Dropdown.Menu className="MegamenuDropList">
        <div className="megaBrand">
           <Row className="mBrandRow">
               <Col md={3}>
               {

brand?.map((item, i) => {
  return (
      i<4?
          <>


<div className="bMegaLi">
                    <img src={apiAsset+item.BrandLogo}/>
                    <a onClick={()=>  history.push("/brandsecond/"+item.BrandID)}>{item.BrandName}</a>
                </div>
          </>
          :null
        );

})
}
                {/* <div className="bMegaLi">
                    <img src={B3}/>
                    <a onClick={()=>  history.push("/brandsecond")}>گروه صنعتی شعاع</a>
                </div> */}


               </Col>
               <Col md={3}>
               {            brand?.map((item, i) => {
  return (
     i<9&&  i>4?
          <>


<div className="bMegaLi">
                    <img src={apiAsset+item.BrandLogo}/>
                    <a onClick={()=>  history.push("/brandsecond/4")}>{item.BrandName}</a>
                </div>
          </>
          :null
        );

})
}
               </Col>
               <Col md={3}>
           {    brand?.map((item, i) => {
  return (
      i>9?
          <>


<div className="bMegaLi">
                    <img src={apiAsset+item.BrandLogo}/>
                    <a onClick={()=>  history.push("/brandsecond/"+item.BrandID)}>{item.BrandName}</a>
                </div>
          </>
          :null
        );

})
}
<div className="bMegaLi">
                   <Button className="seeAllB" onClick={()=>  history.push("/brandshop")}> مشاهده همه برندها</Button>
                </div>

               </Col>

           </Row>
        </div>
        </Dropdown.Menu>
        </Dropdown>

             </Col>
              <Col md="auto" xs="2" className="ta-center flex-1">
              <Dropdown>
        <Dropdown.Toggle className="menuDropDown">
        <p className="menu-items d-inline-block">فروشگاه سبز</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
        </Dropdown.Toggle>
        <Dropdown.Menu className="MegamenuDropList">
        <div className="bMega">
        <ReactMegaMenu
        direction="right"
        data={data2}
        styleConfig={styleConf}
      />
         </div>
        </Dropdown.Menu>
        </Dropdown>

             </Col>
              <Col md="auto" xs="2" className="ta-center flex-1">
              <Dropdown>
        <Dropdown.Toggle className="menuDropDown">
        <p className="menu-items d-inline-block">لامپ یاب</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
        </Dropdown.Toggle>
        <Dropdown.Menu className="bulbyabMenu">
        <Row style={{margin:"0px"}}>
            <Col md={3} className="pd0">
                <div className="RightCmenu">
                    <img src={LogoLarge} className="w100"/>
                    <p>
                    ما بیش از 3000 لامپ برای
انتخاب داریم و شما احتمالاً
فقط به دنبال یک لامپ
هستید. استفاده از لامپ یاب
ما به شما کمک می کند
لامپ صحیحی را پیدا کنید.
                    </p>
                </div>
            </Col>
            <Col md={9} className="pd0">
            <div className="whiteMegaTitle ta-right" style={{marginTop:"20px",marginRight:"10px"}}>
            برای شروع دسته بندی مورد نظر خود را انتخاب نمایید
    </div>
    <Row style={{margin:"0px"}} >
        <Col md={3} className="ta-center" >
        <img src={c1} className="kl1"/>
            <a   className="kl10" onClick={()=>  history.push("/bulbfinderstart")}>دسته یک</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c2} className="kl1"/>
            <a   className="kl10" onClick={()=>  history.push("/bulbfinderstart")}>دسته دو</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c3} className="kl1"/>
            <a   className="kl10" onClick={()=>  history.push("/bulbfinderstart")}>دسته سه</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c4} className="kl1"/>
            <a   className="kl10" onClick={()=>  history.push("/bulbfinderstart")}>دسته چهار</a>
        </Col>
    </Row>
    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
        <Col md={3} className="ta-center">
        <img src={c5} className="kl1"/>
            <a   className="kl10">دسته پنج</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c6} className="kl1"/>
            <a   className="kl10">دسته شش</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c7} className="kl1"/>
            <a   className="kl10">دسته هفت</a>
        </Col>
        <Col md={3} className="ta-center">
        <img src={c8} className="kl1"/>
            <a   className="kl10">دسته هشت</a>
        </Col>
    </Row>
            </Col>
        </Row>
        </Dropdown.Menu>
        </Dropdown> </Col>
              <Col md="auto"  xs="2" className="ta-center flex-1">
              <Dropdown>
        <Dropdown.Toggle className="menuDropDown">
        <p className="menu-items d-inline-block">خدمات بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
        </Dropdown.Toggle>
        {/* <Dropdown.Menu className="MegamenuDropList"> */}
        <Dropdown.Menu className="menuDropList">
        {/* <div className="bMega ko1">
        <ReactMegaMenu
        direction="right"
        data={data3}
        styleConfig={styleConf}
      />
         </div> */}
           <Dropdown.Item  onClick={()=>  history.push("/design")}>طراحی و دیزاین</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/Garanty")}>گارانتی و خدمات پس از فروش</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/repairs")}>تعمیرات</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/LavazemYadaki")}>لوازم یدکی</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
             </Col>
              <Col md="auto" xs="2" className="ta-center flex-1">
              <Dropdown>
  <Dropdown.Toggle className="menuDropDown">
  <p className="menu-items d-inline-block">مجله بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
  </Dropdown.Toggle>

  <Dropdown.Menu className="menuDropList">

    <Dropdown.Item  onClick={()=>  history.push("/news")}>آخرین اخبار</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/news")}>مقالات علمی</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/news")}>تکنولوژی روز</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>نور</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>آخرین تخفیف ها(جشنواره)</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>بهینه سازی روشنایی</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>ساخت و تولید</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>طراحی روشنایی</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>رویدادهای روشنایی</Dropdown.Item>
    <Dropdown.Item    onClick={()=>  history.push("/news")}>تبلیغات</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </Col>
              <Col md="auto" xs="2"  className="ta-center flex-1">
              <Dropdown>
  <Dropdown.Toggle className="menuDropDown">
  <p className="menu-items d-inline-block">پیشنهادات بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
  </Dropdown.Toggle>

  <Dropdown.Menu className="menuDropList">

    <Dropdown.Item  onClick={()=>  history.push("/shegeftangiz")}>کالای شگفت انگیز</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/ShegeftGreen")}>شگفت انگیز فروشگاه سبز</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/pishnahadvijhe")}>فروش ویژه</Dropdown.Item>
    <Dropdown.Item  onClick={()=>  history.push("/pishnahadvijhe")}>پرفروش ترین</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>

              </Col>
              <Col md="auto" xs="2" className="ta-center flex-1">
              <Dropdown>
  <Dropdown.Toggle className="menuDropDown">
  <p className="menu-items d-inline-block">استعلام قیمت</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
  </Dropdown.Toggle>

  <Dropdown.Menu className="menuDropList">

    <Dropdown.Item  onClick={()=>  history.push("/pricebrand")}>لیست قیمت</Dropdown.Item>
    <Dropdown.Item onClick={()=>  history.push("/darkhastprice")}>درخواست استعلام قیمت</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
            </Col>
          </Row>


      </Container>

      </>

    );


};
    export default Menu