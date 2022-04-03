
import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import APlus from './assets/icons/APlus'
import Clock from './assets/icons/Clock'
import Degree from './assets/icons/Degree'
import Garanteewhite from './assets/icons/GaranteeWhite'
import LED from './assets/icons/LED'
import SaveEnergy from './assets/icons/SaveEnergy'
import Standard from './assets/icons/Standard'
import UvFree from './assets/icons/UvFree'
import LedButton from './assets/icons/LedButton'
import Roshd from './assets/icons/Roshd';
import Morghdari from './assets/icons/Morghdari'
import Hospital from './assets/icons/Hospital'
import SmartHome from './assets/icons/SmartHome'
import Industry from './assets/icons/Industry'
import Conference from './assets/icons/Conference'
import Gas from './assets/icons/Gas';
import Florecent from './assets/icons/Florecent'
import Reshte from './assets/icons/Reshte'
import Halogyn from './assets/icons/Halogyn'
import Emergency from './assets/icons/Emergency'
import Dimer from './assets/icons/Dimer'
import Tazein from './assets/icons/Tazein'
import Decorative from './assets/icons/Decorative'
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";
const MasarefLED = () => {
    const history = useNavigate();

  return (
    <>
      <TopBar/>
      <Header/>
    <Container fluid className="bulbiranContainer">
    <Row className="heroBanner">
        <Col md={10}  sm={12}>
          <div >
            <p className="heroText">عمر بیشتر ، نور بیشتر مصرف کمتر با محصولات LED</p>
         <Row className="resMargin0">
           <Col md={12} className="ta-right resTaCenter">
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="degree">

               <Degree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="uv">
             <p className="iconInner"></p>
               <UvFree className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="clock">

               <Clock className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="garanteeW">

               <Garanteewhite className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="saveE">

               <SaveEnergy className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="standard">

               <Standard className="degree"/>
             </div>
             </div>
             <div className="whiteBorder d-inline-block">
             <div className="heroIcons ta-center" id="aplus">

               <APlus className="degree"/>
             </div>
             </div>
             <div className="d-inline-block">
               <LED className="ledLabel dResNone"/>
             </div>
           </Col>

         </Row>
          </div>

        </Col>
      <Col md={2} xs={12} className="resTaCenter">
      <LedButton className="d-block ledbuttonIcon"></LedButton>
      <Button onClick={()=>  history("/GreenShop")} className="ledButton d-block">فروشگاه سبز</Button>
      </Col>
    
      </Row>
    
   <div className="ledWBox mgt20">
        <span className="ledTitle">مصارف نوین لامپ های LED</span>

        <Row className="">
            <Col md={4} className="ta-center">
                <div className="masrafBox" id="red1" onClick={()=>  history("/LEDmasarefdakheli/27")}>
                    <Row>
                        <Col md={5}>
                                <Roshd/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">رشد گیاه</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={4} className="ta-center">
                <div className="masrafBox" id="orange1" onClick={()=>  history("/LEDmasarefdakheli/28")}>
                    <Row>

                        <Col md={5}>
                                <Morghdari/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">مرغداری</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col md={4} className="ta-center">
                <div className="masrafBox" id="red1" onClick={()=>  history("/LEDmasarefdakheli/29")}>
                    <Row>
                        <Col md={5}>
                                <Hospital/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">بیمارستان</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={4} className="ta-center">
                <div className="masrafBox" id="orange1" onClick={()=>  history("/LEDmasarefdakheli/30")}>
                    <Row>
                        <Col md={5}>
                                <SmartHome/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">خانه هوشمند</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={4} className="ta-center">
                <div className="masrafBox" id="red1" onClick={()=>  history("/LEDmasarefdakheli/31")}>
                    <Row>
                        <Col md={5}>
                                <Industry/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">صنعت</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={4} className="ta-center">
                <div className="masrafBox" id="orange1" onClick={()=>  history("/LEDmasarefdakheli/32")}>
                    <Row>
                        <Col md={5}>
                                <Conference/>
                        </Col>
                        <Col md={7} className="ta-justify">
                            <span className="masrafTitle">سالن اجتماعات</span>
                            <p className="masrafDes">
                            این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
ای از کارآمدی بالاتری نسبت به دیگر
لامپ‌های فلورسنت برخوردارند.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>

        </Row>
   </div>
   <div className="ledWBox mgt20">
        <span className="ledTitle" >تکنولوژی های نوین LED</span>
        <Row>
            <Col md={3}>
                <div className="techWhite" onClick={()=>  history("/LEDtechnology/1")}>
                    <Row>
                        <Col md={3} className="pd0">
                            <Reshte className="imgReshte"/>
                        </Col>
                        <Col md={9} className="pdr0">
                        <span className="techY">LED</span> <span className="techWT">جایگزین لامپ های رشته ای</span>
                        <p className="techP">این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
 </p>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col md={3}>
                <div className="techWhite" onClick={()=>  history("/LEDtechnology/2")}>
                    <Row>
                        <Col md={3} className="pd0">
                            <Florecent className="imgReshte"/>
                        </Col>
                        <Col md={9} className="pdr0">
                        <span className="techY">LED</span> <span className="techWT">جایگزین لامپ های فلورسنت</span>
                        <p className="techP">این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
 </p>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col md={3}>
                <div className="techWhite" onClick={()=>  history("/LEDtechnology/3")}>
                    <Row>
                        <Col md={3} className="pd0">
                            <Halogyn className="imgReshte"/>
                        </Col>
                        <Col md={9} className="pdr0">
                        <span className="techY">LED</span> <span className="techWT">جایگزین لامپ های هالوژنی</span>
                        <p className="techP">این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
 </p>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col md={3}>
                <div className="techWhite" onClick={()=>  history("/LEDtechnology/4")}>
                    <Row>
                        <Col md={3} className="pd0">
                            <Gas className="imgReshte"/>
                        </Col>
                        <Col md={9} className="pdr0">
                        <span className="techY">LED</span> <span className="techWT">جایگزین لامپ های گازی</span>
                        <p className="techP">این لامپ‌ها دارای کارایی و طول عمر و
بازده انرژی بالا چند برابر لامپ‌های
رشته‌ای هستند و به شکل قابل ملاحظه
 </p>
                        </Col>
                    </Row>
                </div>
            </Col>

        </Row>
</div>
<div className="ledWBox mgt20">
        <span className="ledTitle">دسته بندی محصولات LED</span>
        <Row>
            <Col md={3}>
            <div className="techWhite h10">
            <Row className="alignCenter">
                <Col md={6} xs={6} className="ta-center" onClick={()=>  history("/greenshop/1")}>
                    <span className="desP">دکوراتیو</span>
                </Col>
                <Col md={6} xs={6}>
                    <Decorative/>
                </Col>
            </Row>
            </div>
            </Col>
            <Col md={3}>
            <div className="techWhite h10">
            <Row className="alignCenter">
                <Col md={6} xs={6} className="ta-center"  onClick={()=>  history("/greenshop/1")}>
                    <span className="desP">تزئینی</span>
                </Col>
                <Col md={6} xs={6}>
                    <Tazein/>
                </Col>
            </Row>
            </div>
            </Col>
            <Col md={3}>
            <div className="techWhite h10" onClick={()=>  history("/greenshop/1")}>
            <Row className="alignCenter">
                <Col md={6} xs={6} className="ta-center">
                    <span className="desP">دیمرپذیر</span>
                </Col>
                <Col md={6} xs={6}>
                    <Dimer/>
                </Col>
            </Row>
            </div>
            </Col>
            <Col md={3}>
            <div className="techWhite h10" onClick={()=>  history("/greenshop/1")}>
            <Row className="alignCenter">
                <Col md={6} xs={6} className="ta-center">
                    <span className="desP">اضطراری</span>
                </Col>
                <Col md={6} xs={6}>
                    <Emergency/>
                </Col>
            </Row>
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
export default MasarefLED;
