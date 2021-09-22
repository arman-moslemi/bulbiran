import React,{useEffect,useState,useRef} from 'react'
import { Link, useHistory } from "react-router-dom";
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
import CircumstanceB from './assets/icons/CircumstanceB';
import LedButton from './assets/icons/LedButton';
import Pool from './assets/icons/Pool';
import Lamp from './assets/img/lamp.png';
import Cheragh from './assets/img/cheragh.png';
import Panel from './assets/img/panel.png';
import Loster from './assets/img/loster.png';
import Janebi from './assets/img/janebi.png';

import Noorafkan from './assets/img/noorafkan.png';
import Chain from './assets/img/chain.png';
import GreenShopLogo from './assets/icons/GreenShopLogo';
import ShopLogo from './assets/icons/ShopLogo';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";

const check=[];
const BulbiranShop = () => {
    const [product,setProduct]=useState([])
    const [group,setGroup]=useState([])
    const [property,setProperty]=useState([])
    const [propertySel,setPropertySel]=useState([])
    const swiper = useRef(null);
    const [val,setVal]=useState(0)
    const params = useParams().id;
    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .get(apiUrl + "CategoryProduct/"+params)
          .then(function (response) {
            if (response.data.result == "true") {

                setProduct(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });
          axios
          .get(apiUrl + "SubGroup/"+params)
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
      .get(apiUrl + "SubGroupProperty/"+params)
  .then(function (response) {
    if (response.data.result == "true") {

        setProperty(response.data.Data)

  }
  else{
    console.log(response.data.result)

  }})
  .catch(function (error) {
    console.log(error);
  });
      }
      const mainCat=(id)=>{
        const axios = require("axios");
        console.log(486)
        console.log(id)
        axios
        .get(apiUrl + "SubGroupProduct/"+id)
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(response.data)

          setProduct(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    // console.log(159876)
      }
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
  const setPropertyid=(id,value)=>{
    const axios = require("axios");
    console.log(48956)
    var gg=""
    if( value==true){
      //  check = check.concat(id+",");
      check.push(id+",")
      console.log(check)
      // setPropertySel(check)
      // setPropertySel([propertySel?propertySel:null,id+","])
      // setPropertySel(oldArray => [...oldArray,id+","] );
    // console.log(propertySel)
// document.getElementById("my-input")
// propertySel.map((item, i) => {
//   gg+=item
// })
   }
   else{
    // setPropertySel(propertySel.filter(c => c != id));
    check.map((item, i) => {
      if(item.split(',')[0]==id)
      check.splice(i, 1)

    })
   }
// if (check.includes(id)) {
//   check.splice(check.indexOf(id), 1);
// } else {
//   check.push(id);
// }
// console.log(check)
      axios
          .post(apiUrl + "GetProductPropertyFilter",{id:check.toString()})
      .then(function (response) {
        if (response.data.result == "true") {

            setProduct(response.data.Data)

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
      <Container fluid className="pd0">
          <div className="yellowBack">
          <Row style={{margin:"0px"}}>
        <Col md={12}>
            <div className="whiteBand">
           <div className="cTitle">
               <p>فروشگاه بالبیران</p>
           </div>
           <RadioGroup horizontal
             onChange={ss=>mainCat(ss)}
            // value="1"
           className="radioB">
            { group?.map((item, i) => {
  return (

  <RadioButton value={item.SubGroupID.toString()} rootColor="transparent"
//    onChange={()=>mainCat(1)}
    pointColor="#ffb921">
  {item.Title}
  </RadioButton>

                    );

            })
          }
  {/* <RadioButton value="2" rootColor="transparent" pointColor="#ffb921">
   روشنایی داخلی
  </RadioButton> */}
  {/* <RadioButton value="3" rootColor="transparent"  pointColor="#ffb921">
 روشنایی خارجی
  </RadioButton> */}


</RadioGroup>
            </div>
        </Col>
    </Row>
    <div className="gRow">
    <div>
    <ShopLogo className="d-block ledbuttonIcon mgr30"/>
    </div>
    <div>
        <span className="gTitle">فروشگاه بالبیران</span>
    </div>
    <div>
        <span className="gTitle2">انواع محصولات </span>
    </div>
    </div>
          </div>
      </Container>
    <Container fluid className="bulbiranContainer">
    <Row style={{margin:"0px",marginTop:"-7%"}}>
        <Col md={12}>
            <div className="categoryBox2">
            <h4 className="circumstanceTitle ta-right">دسته بندی ها</h4>
            <div className="cateInner ta-center">
            { group?.map((item, i) => {
  return (
                  <Link onClick={()=>mainCat(item.SubGroupID)}>
    <div>
                    <img src={apiAsset+item.Photo}/>
                    <p>{item.Title}</p>
                </div>
                </Link>
                      );

})
}
                {/* <Link onClick={()=>mainCat(2)}>

                <div>
                    <img src={Panel}/>
                    <p>روشنایی داخلی</p>
                </div>
                </Link>
          */}

            </div>
            </div>
        </Col>
    </Row>
    <Row style={{marginRight:"0px",marginLeft:"0px",marginTop:"20px"}}>
        <Col md={3}>
        <Accordion allowMultipleExpanded={true} className="cAcc">
          {property.map((item, i) => {
  return (
            <AccordionItem className="accItem">
                <AccordionItemHeading className="accHeading">
                    <AccordionItemButton className="accBtn">
                        {item[0].MainTitle}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accItempannel">
                   <ul>
                   {item.map((items, i) => {
  return (
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        value={items.SubGroupPropertyID}
        checked={false}
        onChange={(value) => {
          setPropertyid(items.SubGroupPropertyID,value)


        }}
        // reference={() => {
        //   setPropertyid(swiper)              }}

        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label={items.Title}
      />

                       </li>
                                    );

})
}
                       {/* <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label="100 وات"
      />

                       </li> */}

                   </ul>
                </AccordionItemPanel>
            </AccordionItem>
                  );

})
}
            {/* <AccordionItem className="accItem">
                <AccordionItemHeading className="accHeading">
                    <AccordionItemButton className="accBtn">
                        نوع لامپ
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accItempannel">
                   <ul>
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label="100 وات"
      />

                       </li>
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label="100 وات"
      />

                       </li>
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none" ,marginRight:10}}
        label="100 وات"
      />

                       </li>
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label="100 وات"
      />

                       </li>
                       <li>
                       <Checkbox
        icon={<FaCheck color="#cf1e22" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#cf1e22"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none",marginRight:10 }}
        label="100 وات"
      />

                       </li>
                   </ul>
                </AccordionItemPanel>
            </AccordionItem>
          */}
           </Accordion>
        </Col>
        <Col md={9}>
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
                <Col md={3} className="pd0">
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
                {/* <Col md={3} className="pd0">
                    <div className="whiteCard">
                        <img src={Img4}/>
                        <p>لامپ ال ای دی45 مدل Parathom HQL led 280 پایه E27</p>
                        <span>125000 تومان</span>
                    </div>
                </Col> */}
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
export default BulbiranShop;