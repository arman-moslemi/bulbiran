import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft,FaAlignRight ,FaCheck } from 'react-icons/fa';
import BulbFinder from './assets/icons/BulbFinder';
import c1 from './assets/img/c1.png';
import c2 from './assets/img/c2.png';
import c3 from './assets/img/c3.png';
import c4 from './assets/img/c4.png';
import c5 from './assets/img/c5.png';
import c6 from './assets/img/c6.png';
import c7 from './assets/img/c7.png';
import c8 from './assets/img/c8.png';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

const BulbFinderStart = () => {
    const history = useNavigate();
    const [group,setGroup]=useState([])

    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .get(apiUrl + "BulbFindGroup")
          .then(function (response) {
            if (response.data.result == "true") {
                console.log(response.data.Data)

                setGroup(response.data.Data)


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
    <div className="bulbFinderWBox">
        <Row style={{marginRight:"0px",marginLeft:"0px",alignItems:"center"}}>
            <Col md={2}>
                <BulbFinder className="w100"/>
            </Col>
            <Col md={2} className="ta-right">
                <span className="finderTitle">لامپ یاب</span>
            </Col>
            <Col md={8} className="ta-right">
                <p className="finderText">
                ما بیش از 3000 لامپ برای انتخاب داریم و شما احتمالاً فقط به دنبال یک لامپ هستید. استفاده از لامپ یاب ما به شما کمک می کند لامپ صحیحی را پیدا کنید.
                </p>
            </Col>
        </Row>
    </div>
    <div className="bulbFinderWBox mgt40 ta-right paddingC">
        <span className="bFinderTitle">برای شروع دسته بندی مورد نظر خود را انتخاب کنید : </span>
        <div className="bulbFinder1">
        {group?.map((item, i) => {
  return (
            <div>
            <img src={apiAsset+item.Photo} className="kl1"/>
            <a     onClick={()=>  history("/bulbfinder/"+item.BulbFindGroupID)}>{item.Title}</a>
            </div>
                                  );

})
}
          </div>

    </div>
   </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default BulbFinderStart;