
import * as React from 'react';
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";

import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaTimes,FaAngleDoubleLeft} from 'react-icons/fa';
import Checkbox from "react-custom-checkbox";

import BulbFinder from './assets/icons/BulbFinder';
import F1 from './assets/icons/f1.js';
import F2 from './assets/icons/f2.js';
import F3 from './assets/icons/f3.js';
import F4 from './assets/icons/f4.js';
import F5 from './assets/icons/f5.js';
import F6 from './assets/icons/f6.js';
import T1 from './assets/icons/T1.js';
import T2 from './assets/icons/T2.js';
import T3 from './assets/icons/T3.js';
import T4 from './assets/icons/T4.js';
import T5 from './assets/icons/T5.js';
import P1 from './assets/img/p1.png';
import P2 from './assets/img/p2.png';
import P3 from './assets/img/p3.png';
import P4 from './assets/img/p4.png';
import P5 from './assets/img/p5.png';
import Room from './assets/img/room.png';
import Shafaf from './assets/img/shafaf.png';
import Mate from './assets/img/mate.png';
import Mirror from './assets/img/mirror.png';
import Table from './assets/img/table.png';
import { Link, useHistory } from "react-router-dom";
const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const BulbFinders=() =>{
  const history = useHistory();
    const [values, setValues] = React.useState([50]);
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
    <div className="bRow">
        <div className="bRowDiv" id="ff1">
            <F1 className="bRowDivIcon"/>
            <span className="bRowDvText">حبابی</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <div className="bRowDiv mgr5" >
            <F2 className="bRowDivIcon"/>
            <span className="bRowDvText">پایه</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <div className="bRowDiv mgr5">
            <F3 className="bRowDivIcon"/>
            <span className="bRowDvText">رنگ</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <div className="bRowDiv mgr5" >
            <F4 className="bRowDivIcon"/>
            <span className="bRowDvText">روشنایی</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <div className="bRowDiv mgr5" >
            <F5 className="bRowDivIcon"/>
            <span className="bRowDvText">حباب</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <div className="bRowDiv mgr5" >
            <F6 className="bRowDivIcon"/>
            <span className="bRowDvText">تکنولوژی</span>
            <Button className="bRowBtn">
                <FaTimes/>
            </Button>
        </div>
        <Button className="deleteRow">
            پاک کردن
        </Button>
    </div>
    <div className="bulbFinderWBox mgt40 ta-right paddingC">
    <Tabs dir={'rtl'}>
    <TabList className="bFinderTab">
      <Tab>
          <T1 className="Tblock"/>
          <span className="tabspan">
              پایه
          </span>
      </Tab>
      <Tab>
          <T2 className="Tblock"/>
          <span className="tabspan">
              رنگ
          </span>
      </Tab>
      <Tab>
          <T3 className="Tblock"/>
          <span className="tabspan">
              روشنایی
          </span>
      </Tab>
      <Tab>
          <T4 className="Tblock"/>
          <span className="tabspan">
             حباب
          </span>
      </Tab>
       <Tab>
           <T5 className="Tblock"/>
           <span className="tabspan">
              تکنولوژی
          </span>
       </Tab>
    </TabList>
    <div className="nn">
        <div>
            <span className="natije">123 لامپ پیدا شد</span>
            <a href="#" className="moshahedeN" onClick={()=>  history.push("/searchresult")}>مشاهده نتیاج <FaAngleDoubleLeft/></a>
            <p className="moshahedeP">این فرایند را ادامه دهید تا نتایج بهتر را مشاهده کنید</p>
        </div>
    </div>
        <TabPanel>
        <p className="tabFDes">
        پایه ای را انتخاب کنید که متناسب با وسیله شما باشد یا با لامپ شما مطابقت داشته باشد. برای مشاهده جزئیات بیشتر ، ماوس را روی تصویر ببرید
        </p>
        <div className="bulbFinder2">
            <a href="#">
            <img src={P1} className="kl1"/>
            <span>پایه یک</span>
            </a>
            <a href="#">
            <img src={P2} className="kl1"/>
            <span>پایه دو</span>
            </a>
            <a href="#">
            <img src={P3} className="kl1"/>
            <span>پایه سه</span>
            </a>
            <a href="#">
            <img src={P4} className="kl1"/>
            <span>پایه چهار</span>
            </a>
            <a href="#">
            <img src={P5} className="kl1"/>
            <span>پایه پنج</span>
            </a>
        </div>
        <Row>
            <Col md={12} className="ta-center">
                <Button className="clearBtn">
                    پاک کردن
                </Button>
            </Col>
        </Row>
        </TabPanel>
        <TabPanel>
        <p className="tabFDes">
        دمای رنگ در کلوین اندازه گیری می شود. نشانگر زیر را بکشید و هنگامی که ظاهر مورد نظر خود را پیدا کردید روی گزینه کلیک کنید.
        <a href="#">رد کردن این مرحله</a>
         </p>
         <Row>
             <Col md={12} className="ta-center">
                 <img src={Room} className="roomImg"/>
             </Col>
         </Row>
  <Row>
      <Col md={12} className="ta-center">
          <p className="rangeTitle">
              کلوین
          </p>
          <div className="opp">
          <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={true}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
            className="op"
              ref={props.ref}
              style={{
                height: '30px',
                width: '100%',
                borderRadius: '4px',
                border: '0px solid #0d41a5',
                background: getTrackBackground({
                  values,
                  colors: ['#ffb921', '#fff','#fff','#37a7b7'],
                  min: MIN,
                  max: MAX,
              direction:"rtl"
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div className="op2"
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '15px',
              borderRadius: '4px',
             
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            
              opacity: 0.5
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#000' : '#CCC'
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: '10px' }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
    <div className="op3"> 
          <div className="ta-right">
              <span>سرد تر</span>
          </div>
          <div className="ta-left">
              <span>گرم تر</span>
          </div>
      </div>
          </div>
      
      </Col>
  </Row>
  <Row>
            <Col md={12} className="ta-center">
                <Button className="selectBtn">
                   انتخاب
                </Button>
            </Col>
        </Row>
    </TabPanel>
    <TabPanel>
        <p className="tabFDes">
        دمای رنگ در کلوین اندازه گیری می شود. نشانگر زیر را بکشید و هنگامی که ظاهر مورد نظر خود را پیدا کردید روی گزینه کلیک کنید.
        <a href="#">رد کردن این مرحله</a>
         </p>
         <Row>
             <Col md={12} className="ta-center">
                 <img src={Room} className="roomImg"/>
             </Col>
         </Row>
  <Row>
      <Col md={12} className="ta-center">
          <p className="rangeTitle">
              کلوین
          </p>
          <div className="opp">
          <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={true}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
            className="op4"
              ref={props.ref}
              style={{
                height: '30px',
                width: '100%',
                borderRadius: '4px',
                border: '0px solid #0d41a5',
                background: getTrackBackground({
                  values,
                  colors: ['#ffb921', '#fff','#fff','#37a7b7'],
                  min: MIN,
                  max: MAX,
              direction:"rtl"
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div className="op2"
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '15px',
              borderRadius: '4px',
             
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            
              opacity: 0.5
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#000' : '#CCC'
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: '10px' }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
    <div className="op3"> 
          <div className="ta-right">
              <span>روشن تر</span>
          </div>
          <div className="ta-left">
              <span>تیره تر</span>
          </div>
      </div>
          </div>
      
      </Col>
  </Row>
  <Row className="borderbb">
            <Col md={12} className="ta-center">
                <Button className="selectBtn">
                   انتخاب
                </Button>
            </Col>
        </Row>
        <p className="tabFDes mgt40">
     جدول زیر می تواند به شما کمک کند  </p>
     <img src={Table}/>
    </TabPanel>
    
        <TabPanel>
        <p className="tabFDes">
        مات ، شفاف ، آینه ای یا مات - لایه ی نهایی مورد نظر را برای لامپ خود انتخاب کنید <a href="#">رد کردن این مرحله</a>
         </p>
         <div className="bulbFinder2">
            <a href="#">
            <img src={Shafaf} className="kl1"/>
            <span>شفاف</span>
            </a>
            <a href="#">
            <img src={Mirror} className="kl1"/>
            <span>آینه ای</span>
            </a>
            <a href="#">
            <img src={Mate} className="kl1"/>
            <span>مات</span>
            </a>
         
        </div>
     
        </TabPanel>
        <TabPanel>
        <p className="tabFDes">
        پیشرفت در فناوری عمر طولانی تر و کاهش مصرف انرژی را به همراه دارد. برای مقایسه گزینه های خود از بین هر یک از گزینه های زیر انتخاب کنید. </p>
        <table border={1} style={{marginRight:"auto",marginLeft:"auto",marginTop:"40px"}}>

<thead className="fftable">

  <tr>

    <th>
    
    </th>
              <th>
                  <span>تکنولوژی</span>
              </th>
              <th>
                  <span>
                      بهره وری انرژی
                  </span>
              </th>
              <th>
                  <span>
                     دقت رنگ
                  </span>
              </th>
              <th>
                  <span>
                     عمر متوسط
                  </span>
              </th>
  </tr>

</thead>

<tbody className="frtable">

  <tr>

    <td>
    <div className="mgt10 checkB">
          <Checkbox
        icon={<FaCheck color="#ffb921" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value) => {
        
        }}
        borderColor="#18206b"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none" }}
    
      />
          
          </div>
    </td>
    <td>لامپ رشته ای</td>
    <td>80%</td>
    <td>15%</td>
    <td>2 سال</td>
  </tr>
  <tr>

<td>
<div className="mgt10 checkB">
      <Checkbox
    icon={<FaCheck color="#ffb921" size={14} />}
    name="my-input"
    checked={true}
    onChange={(value) => {
    
    }}
    borderColor="#18206b"
    borderWidth="1px"
    style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
    labelStyle={{ marginLeft: 20, userSelect: "none" }}

  />
      
      </div>
</td>
<td>لامپ رشته ای</td>
<td>80%</td>
<td>15%</td>
<td>2 سال</td>
</tr>

</tbody>

</table>
<Row>
            <Col md={12} className="ta-center">
                <Button className="selectBtn">
                   انتخاب
                </Button>
            </Col>
        </Row>
        </TabPanel>
 </Tabs>
     

    </div>
   </Container>
    <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default BulbFinders;