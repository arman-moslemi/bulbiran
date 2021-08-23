import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import RulesSvg from './assets/icons/RulesSvg';
import IndoorSlider from './layouts/IndoorSlider';
import Saghfi from './assets/img/Saghfi.png';
import MiniIcon from './assets/icons/MiniIcon.js';
import AmazingSlider from './layouts/AmazingSlider';
import BulbsImg from './assets/img/bulbs.png';
import SliderImg from './assets/icons/SliderImg';
import { Link, useHistory } from "react-router-dom";
const Indoor = () => {
   const history = useHistory();
    return (
      <>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
        <IndoorSlider/>
        <Row style={{margin:"0px"}}>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ سقفی</span>
          <Button onClick={()=>  history.push("/indoorsecond")}>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ دیواری</span>
          <Button onClick={()=>  history.push("/indoorsecond")}>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ آویز</span>
          <Button onClick={()=>  history.push("/indoorsecond")}>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ ایستاده</span>
          <Button onClick={()=>  history.push("/indoorsecond")}>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ رومیزی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ مخفی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ زیرکابینتی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ دکوراتیو</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع لوازم جانبی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ پارکتی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ دستی</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        <Col md={4}>
       <div className="miniBox">
          <img className="w100" src={Saghfi}/>
          <div className="indoorBox">
          <MiniIcon className="fRight"/>
          <span className="fRight">انواع چراغ اضطراری</span>
          <Button>خرید محصولات</Button>
          </div>
          
       </div>
        </Col>
        </Row>
        
     </Container>
     <Container fluid className="pd0">
   <div className="amazingSliderBody" id="greencolor">
    <Row>
      <Col md={3}>
      <div className="innerSlider ta-center">
      <SliderImg/>
       </div>
      </Col>
      <Col md={9}>
        <AmazingSlider className="amazingSlider"/>
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
export default Indoor;