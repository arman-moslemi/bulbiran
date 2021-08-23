import React , {useState} from 'react'
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
import { Link, useHistory } from "react-router-dom";
const BulbFinderStart = () => {
    const history = useHistory();
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
            <div>
            <img src={c1} className="kl1"/>
            <a href="#" onClick={()=>  history.push("/bulbfinder")}>دسته یک</a>
            </div>
            <div>
            <img src={c2} className="kl1"/>
            <a href="#">دسته دو</a>
            </div>
            <div>
            <img src={c3} className="kl1"/>
            <a href="#">دسته سه</a>
            </div>
            <div>
            <img src={c4} className="kl1"/>
            <a href="#">دسته چهار</a>
            </div>
            <div>
            <img src={c5} className="kl1"/>
            <a href="#">دسته پنج</a>
            </div>
            <div>
            <img src={c6} className="kl1"/>
            <a href="#">دسته شش</a>
            </div>
            <div>
            <img src={c7} className="kl1"/>
            <a href="#">دسته هفت</a>
            </div>
            <div>
            <img src={c8} className="kl1"/>
            <a href="#">دسته هشت</a>
            </div>
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