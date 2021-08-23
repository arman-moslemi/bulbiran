import * as React from 'react';
import ReactDOM from "react-dom";

import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import H from './assets/img/h.jpg';
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaTimes,FaAngleDoubleLeft,FaRegClock} from 'react-icons/fa';


const ShowBlog=() =>{
    return (
    <>

          <TopBar/>
      <Header/> 
    <Container fluid className="bulbiranContainer"> 
    <Row style={{marginRight:"0px",marginLeft:"0px"}}>
        <Col md={3}>
        <div className="newsWhiteBox" style={{paddingBottom:"20px"}}>
            <span className="similarTitle">
                مقالات مرتبط
            </span>
            <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingTop:"15px",paddingBottom:"15px"}} className="mp">
                <Col md={4} className="ta-center">
                    <img src={H} className="similarImg"/>
                </Col>
                <Col md={8}>
                <div className="r7">
                       
                        <div className="r2 w100">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingTop:"15px",paddingBottom:"15px"}} className="mp">
                <Col md={4} className="ta-center">
                    <img src={H} className="similarImg"/>
                </Col>
                <Col md={8}>
                <div className="r7">
                       
                        <div className="r2 w100">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingTop:"15px",paddingBottom:"15px"}} className="mp">
                <Col md={4} className="ta-center">
                    <img src={H} className="similarImg"/>
                </Col>
                <Col md={8}>
                <div className="r7">
                       
                        <div className="r2 w100">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px",paddingTop:"15px",paddingBottom:"15px"}} className="mp">
                <Col md={4} className="ta-center">
                    <img src={H} className="similarImg"/>
                </Col>
                <Col md={8}>
                <div className="r7">
                       
                        <div className="r2 w100">
                            <span className="r3">
                                تجزیه و تحلیل بازار و روند توسعه ی جهانی
                            </span>
                            <div className="ta-left dq pd0" style={{marginTop:"30px"}}>
                    <FaRegClock className="d-inline-block"/>
                    <span>27 فروردین 1400</span>
                </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </Col>
        <Col md={9}>
            <div className="newsWhiteBox pd40">
                <span className="blogTitle">
                تجزیه و تحلیل وضعیت بازار و 
روند توسعه صنعت جهانی  
                </span>
                <div className="mgt20">
                    <FaRegClock className="blogt"/>
                    <span className="blogTime">
                        29 مرداد 1400
                    </span>
                </div>
                <Row className="mgt20" style={{marginRight:"0px",marginLeft:"0px"}}>
                    <Col md={12}>
                        <img src={H} className="blogImg1"/>
                        <p className="blogText">
                        این گیاه با ساقه‌های محکم و برگ‌های براق و زیبا یکی از گیاهان آپارتمانی محبوب و نسبتا مقاوم است. اگر پنجره‌ای رو به آفتاب دارید یا مثل خانه‌های قدیمی فضایی شبیه گلخانه دارید، این گیاه را می‌توانید بدون دردسر نگهداری کنید. کراسولا هر روز به حداقل ۴ ساعت نور آفتاب نیاز دارد در نتیجه پنجره‌ی روبه‌جنوب برای آن مناسب است. در ضمن کراسولا نوعی گیاه ساکولنت یا گیاه گوشتی است یعنی در برگ‌ها یا ساقه‌های خود می‌تواند آب را ذخیره کند. به همین‌ خاطر در برابر خشکی هم تحمل بالایی دارد.

هر زمان که خاک سطح گلدان خشک شد به گلدان آب بدهید. ریختن برگ‌های گیاه نشانه‌ی آب دادن بیش‌از اندازه است. کراسولا می‌تواند چندین دهه عمر کند و به‌آرامی در طول زمان رشد می‌کند. گلدان کراسولا باید زهکشی مناسبی داشته باشد تا آب داخل گلدان جمع نشود و بهتر است که در نور کامل آفتاب قرار بگیرد.
                        </p>
                        <p className="blogText">
                        این گیاه با ساقه‌های محکم و برگ‌های براق و زیبا یکی از گیاهان آپارتمانی محبوب و نسبتا مقاوم است. اگر پنجره‌ای رو به آفتاب دارید یا مثل خانه‌های قدیمی فضایی شبیه گلخانه دارید، این گیاه را می‌توانید بدون دردسر نگهداری کنید. کراسولا هر روز به حداقل ۴ ساعت نور آفتاب نیاز دارد در نتیجه پنجره‌ی روبه‌جنوب برای آن مناسب است. در ضمن کراسولا نوعی گیاه ساکولنت یا گیاه گوشتی است یعنی در برگ‌ها یا ساقه‌های خود می‌تواند آب را ذخیره کند. به همین‌ خاطر در برابر خشکی هم تحمل بالایی دارد.

هر زمان که خاک سطح گلدان خشک شد به گلدان آب بدهید. ریختن برگ‌های گیاه نشانه‌ی آب دادن بیش‌از اندازه است. کراسولا می‌تواند چندین دهه عمر کند و به‌آرامی در طول زمان رشد می‌کند. گلدان کراسولا باید زهکشی مناسبی داشته باشد تا آب داخل گلدان جمع نشود و بهتر است که در نور کامل آفتاب قرار بگیرد.
                        </p>
                        <p className="blogText">
                        این گیاه با ساقه‌های محکم و برگ‌های براق و زیبا یکی از گیاهان آپارتمانی محبوب و نسبتا مقاوم است. اگر پنجره‌ای رو به آفتاب دارید یا مثل خانه‌های قدیمی فضایی شبیه گلخانه دارید، این گیاه را می‌توانید بدون دردسر نگهداری کنید. کراسولا هر روز به حداقل ۴ ساعت نور آفتاب نیاز دارد در نتیجه پنجره‌ی روبه‌جنوب برای آن مناسب است. در ضمن کراسولا نوعی گیاه ساکولنت یا گیاه گوشتی است یعنی در برگ‌ها یا ساقه‌های خود می‌تواند آب را ذخیره کند. به همین‌ خاطر در برابر خشکی هم تحمل بالایی دارد.

هر زمان که خاک سطح گلدان خشک شد به گلدان آب بدهید. ریختن برگ‌های گیاه نشانه‌ی آب دادن بیش‌از اندازه است. کراسولا می‌تواند چندین دهه عمر کند و به‌آرامی در طول زمان رشد می‌کند. گلدان کراسولا باید زهکشی مناسبی داشته باشد تا آب داخل گلدان جمع نشود و بهتر است که در نور کامل آفتاب قرار بگیرد.
                        </p>
                        <img src={H} className="blogImg1"/>
                        <p className="blogText">
                        این گیاه با ساقه‌های محکم و برگ‌های براق و زیبا یکی از گیاهان آپارتمانی محبوب و نسبتا مقاوم است. اگر پنجره‌ای رو به آفتاب دارید یا مثل خانه‌های قدیمی فضایی شبیه گلخانه دارید، این گیاه را می‌توانید بدون دردسر نگهداری کنید. کراسولا هر روز به حداقل ۴ ساعت نور آفتاب نیاز دارد در نتیجه پنجره‌ی روبه‌جنوب برای آن مناسب است. در ضمن کراسولا نوعی گیاه ساکولنت یا گیاه گوشتی است یعنی در برگ‌ها یا ساقه‌های خود می‌تواند آب را ذخیره کند. به همین‌ خاطر در برابر خشکی هم تحمل بالایی دارد.

هر زمان که خاک سطح گلدان خشک شد به گلدان آب بدهید. ریختن برگ‌های گیاه نشانه‌ی آب دادن بیش‌از اندازه است. کراسولا می‌تواند چندین دهه عمر کند و به‌آرامی در طول زمان رشد می‌کند. گلدان کراسولا باید زهکشی مناسبی داشته باشد تا آب داخل گلدان جمع نشود و بهتر است که در نور کامل آفتاب قرار بگیرد.
                        </p>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
    </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default ShowBlog;