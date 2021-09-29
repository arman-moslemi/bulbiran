import React , {useState,useEffect} from 'react'
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight} from 'react-icons/fa';
import Modal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import Lamp1 from '../assets/img/lamp1.png';
import SaveMini from '../assets/icons/SaveMini';
import GaranteeMini from '../assets/icons/GaranteeMini';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

  const Pardazesh=({data,total,date}) => {
    // const [date,setDate]=useState('')
    // const [total,setTotal]=useState(0)

    //   console.log(data[0])
    // //  if( data.Length>0)
    // useEffect(() => {
    //     if( data.Length>0){
    //     console.log(data[0].Date)

    //     setDate( data[0]?.Date) ;
    //        setTotal(data[0]?.TotalCost)
    //     }
    //          }, [data]);
      return(

      <>
        <div className="pardazeshBox">
            <Row className="topRow">
                <Col md={6} className="ta-right">
                <span className="sefareshDate">
                    تاریخ ثبت سفارش : {date}
                </span>
                </Col>
                <Col md={6} className="ta-left">
                <p className="pardazeshPrice">مبلغ کل : {total} تومان</p>
                <p className="pardazeshErsal">هزینه ارسال : 13000 تومان</p>
                </Col>
            </Row>
            {data?.map((item, i) => {
  return (
          <>
            <Row className="pardazeshProductRow">
                <Col md={2}>
                <img src={apiAsset+item.Pic1} className="pishImage"/>
                </Col>
                <Col md={8} className="ta-right">
                <p className="pricePish">
              {item.ProductName}
                    </p>
                    <div style={{display:"flex",marginTop:"20px"}}>
                        <div className="pishColorCircle d-inline-block" id="color4"></div>
                        <span className="pishColor d-inline-block">رنگ </span>

                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <GaranteeMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">گارانتی 6 ماهه {item.BrandName}</span>
                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <SaveMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">موجود در انبار فروشنده</span>
                    </div>
                </Col>
                <Col md={2} className="ta-left">
                    <p className="pricePish">
                        {item.Cost} تومان
                    </p>
                    <br/>
                    <p>شماره فاکتور : {item.FactorNumber}</p>
                    <br/>
                    <p>تعداد : {item.Number}</p>

                </Col>
            </Row>


            </>
                    );

            })
          }
            {/* <Row className="pardazeshProductRow">
                <Col md={2}>
                <img src={Lamp1} className="pishImage"/>
                </Col>
                <Col md={8} className="ta-right">
                <p className="pricePish">
                لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                    </p>
                    <div style={{display:"flex",marginTop:"20px"}}>
                        <div className="pishColorCircle d-inline-block" id="color4"></div>
                        <span className="pishColor d-inline-block">رنگ : آفتابی</span>

                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <GaranteeMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">گارانتی 6 ماهه بروکس</span>
                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <SaveMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">موجود در انبار فروشنده</span>
                    </div>
                </Col>
                <Col md={2} className="ta-left">
                    <p className="pricePish">
                        12000 تومان
                    </p>

                </Col>
            </Row>

            <Row className="pardazeshProductRow">
                <Col md={2}>
                <img src={Lamp1} className="pishImage"/>
                </Col>
                <Col md={8} className="ta-right">
                <p className="pricePish">
                لامپ ال ای دی 10 وات بروکس مدل 5322-A60 پایه E27
                    </p>
                    <div style={{display:"flex",marginTop:"20px"}}>
                        <div className="pishColorCircle d-inline-block" id="color4"></div>
                        <span className="pishColor d-inline-block">رنگ : آفتابی</span>

                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <GaranteeMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">گارانتی 6 ماهه بروکس</span>
                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <SaveMini className="d-inline-block"/>
                    <span className="pishColor d-inline-block">موجود در انبار فروشنده</span>
                    </div>
                </Col>
                <Col md={2} className="ta-left">
                    <p className="pricePish">
                        12000 تومان
                    </p>

                </Col>
            </Row>
        */}
        </div>

      </>);

    };
    export default Pardazesh;