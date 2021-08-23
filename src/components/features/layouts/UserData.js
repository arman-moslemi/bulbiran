import React , {useState,useRef}from 'react'
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight,FaEye,FaEyeSlash,FaCheck} from 'react-icons/fa';
import Modal from 'react-modal';
import Checkbox from "react-custom-checkbox";
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import 'react-tabs/style/react-tabs.css';


  const UserData=() => {
    let inputRef = useRef();
    const showIcon = () =><FaEye></FaEye>;
    const hideIcon = () => <FaEyeSlash></FaEyeSlash>;
   
      return(
        
      <>
       <div className="pardazeshBox">
           <Row className="userRow">
               <Col md={6}>
             <div className="mgt20">
             <label className="c2Label d-inline-block">نام و نام خانوادگی : </label>
            <input className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="نام و نام خانوادگی خود را وارد کنید" type="text" ></input>
             </div>
             <div className="mgt20">
             <label className="c2Label d-inline-block">ایمیل : </label>
            <input className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="ایمیل خود را وارد کنید" type="email" ></input>
             </div>
             <div className="mgt20">
             <label className="c2Label d-inline-block">شماره تلفن همراه  : </label>
            <input className="cInput mgt10 d-inline-block w70 fLeft"  placeholder="شماره تلفن همراه خود را وارد کنید" type="number" ></input>
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
           <input className="cInput mgt10 d-inline-block w70 fLeft" ref={inputRef} type="password" placeholder="رمز عبور"></input>
           
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
           <input className="cInput mgt10 d-inline-block w70 fLeft" ref={inputRef} type="password" placeholder="رمز عبور"></input>
           
            <ReactPasswordToggleIcon 
         
              inputRef={inputRef} 
              showIcon={showIcon}
              hideIcon={hideIcon}
            />
            </div>
              
              </div>
              <div className="mgt20 k2">
                  <Button>ذخیره تغییرات</Button>
              </div>
               </Col>
           </Row>
       </div>
      </>);
    
    };
    export default UserData;