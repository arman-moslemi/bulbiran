import React , {useState,useRef}from 'react'
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import Modal from 'react-modal';
import Checkbox from "react-custom-checkbox";
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import 'react-tabs/style/react-tabs.css';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";


  const UserData=({data}) => {
    let inputRef = useRef();
    const showIcon = () =><FaEye></FaEye>;
    const hideIcon = () => <FaEyeSlash></FaEyeSlash>;
    const [name,setName]=useState('')
    const [productname,setProductName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [pass,setPass]=useState('')
    const [passAgain,setPassAgain]=useState('')
    const sendReq=()=>{
      const axios = require("axios");
      // console.log(name)
      // console.log(phone)
      // console.log(productname)
      // console.log(des)
      // console.log(subject)
      if(pass==passAgain){
      if(name!=""&&productname!=""&&phone!=""&&pass!=""){
        axios
        .post(apiUrl + "EditCustomerFull",{NameFamily:name,ProductName:productname,Mobile:phone,Email:email,Password:pass})
    .then(function (response) {
      if (response.data.result == "true") {
          console.log(22)
          // console.log(response.data.Data)
alert("با موفقیت انجام شد")


          // setProduct(response.data.Data)

    }
    else{
      console.log(response.data.result)
      alert("عملیات با خطا رویرو شد")

    }})
    .catch(function (error) {
      console.log(error);
    });
  }

  else{
      alert("لطفا فیلدهای ستاره دار را کامل کنید")
  }
}
else{
  alert("رمز یا تکرار آن نادرست می باشد")

}
    }

      return(

      <>
       <div className="pardazeshBox">
           <Row className="userRow">
               <Col md={6}>
             <div className="mgt20">
             <label className="c2Label d-inline-block">نام و نام خانوادگی : </label>
            <input value={data.NameFamily} onChange={(event)=>setName(event.target.value)}  className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="نام و نام خانوادگی خود را وارد کنید" type="text" ></input>
             </div>
             <div className="mgt20">
             <label className="c2Label d-inline-block">ایمیل : </label>
            <input value={data.Email} onChange={(event)=>setEmail(event.target.value)} className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="ایمیل خود را وارد کنید" type="email" ></input>
             </div>
             <div className="mgt20">
             <label className="c2Label d-inline-block">شماره تلفن همراه  : </label>
            <input value={data.Mobile} onChange={(event)=>setPhone(event.target.value)} className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="شماره تلفن همراه خود را وارد کنید" type="number" ></input>
             </div>
             <div className="mgt10 checkC">
          <Checkbox
        icon={<FaCheck color="#ffb921" size={14} />}
        name="my-input"
        checked={false}
        onChange={(value) => {

        }}
        borderColor="#000"
        borderWidth="1px"
        style={{ cursor: "pointer",fontFamily:'IRANYekan' }}
        labelStyle={{ marginLeft: 20, userSelect: "none" }}

        label="علاقه مند به عضویت در خبرنامه بالبیران هستم"
      />

          </div>
               </Col>
               <Col md={6}>
              <div className="mgt20 k1">
              <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
               <label className="c2Label d-inline-block">رمز عبور : </label>
           <input onChange={(event)=>setPass(event.target.value)} className="cInput mgt10 d-inline-block w70 fLeft" ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon
              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
            </div>

              </div>
              <div className="mgt20 k1">
              <div className="col fa" style={{position:"relative",display:"block",padding:"0px"}}>
               <label className="c2Label d-inline-block">تکرار رمز عبور : </label>
           <input onChange={(event)=>setPassAgain(event.target.value)} className="cInput mgt10 d-inline-block w70 fLeft" ref={inputRef} type="password" placeholder="رمز عبور"></input>

            <ReactPasswordToggleIcon

              inputRef={inputRef}
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
            </div>

              </div>
              <div className="mgt20 k2">
                  <Button onClick={()=>sendReq()}>ذخیره تغییرات</Button>
              </div>
               </Col>
           </Row>
       </div>
      </>);

    };
    export default UserData;