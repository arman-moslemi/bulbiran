
import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import BrandShopSvg from './assets/icons/BrandShopSvg';
import b1 from './assets/img/b1.png';
import b2 from './assets/img/b2.png';
import b3 from './assets/img/b3.jpeg';
import b4 from './assets/img/b4.png';
import b5 from './assets/img/b5.png';
import b6 from './assets/img/b6.png';
import b7 from './assets/img/b7.png';
import b8 from './assets/img/b8.png';
import b9 from './assets/img/b9.png';
import b10 from './assets/img/b10.png';
import b11 from './assets/img/b11.png';
import b12 from './assets/img/b12.png';


const BrandShop = () => {
  return (
    <>
      <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <div className="whiteBox pdc">
        <Row>
            <Col md={8}>
                <h3 className="brandShopTitle">بازار روشنایی</h3>
                <p className="brandShopDescription">
                بازار روشنایی ایران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود را دارا هستند.
<br></br>
تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.
<br></br>
بازار روشنایی ایران شامل برندهای موجود در ایران اعم از تولید داخل یا خارج می باشد که هرکدام مزایا و معایب خاص خود را دارا هستند.
<br></br>
تولیدات گوناگون و سبدهای کالایی رنگارنگی در این بازار وجود دارد که بر اساس سازنده آن طبقه بندی شده است.

                </p>
            </Col>
            <Col md={4}>
            <BrandShopSvg/>
            </Col>
        </Row>
    </div>
    <div className="coloredBox" id="brandShopColoreBox">
        <h3 className="coloredBoxTitle">
            هر برند، یک فروشگاه
        </h3>
    </div>
    <div className="brandShopBox">
        <Row>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b1}/>
                    <div className="grayBox">
                        <p>میتره</p>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="whiteBrandBox">
                    <img src={b6}/>
                    <div className="grayBox">
                        <p>پارس شهاب</p>
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
export default BrandShop;
