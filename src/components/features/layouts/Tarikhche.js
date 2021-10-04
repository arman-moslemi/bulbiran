import React , {useState} from 'react'
import {Container,Row,Col,Button, Table} from 'react-bootstrap'
import { FaRegStar, FaStar, FaAlignRight} from 'react-icons/fa';
import Modal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import Lamp1 from '../assets/img/lamp1.png';
import SaveMini from '../assets/icons/SaveMini';
import GaranteeMini from '../assets/icons/GaranteeMini';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

  const Tarikhche=({data}) => {
console.log(data)
      return(

      <>
        {data?.map((item, i) => {
  return (

<div className="pardazeshBox">
            <Row className="topRow">
                <Col md={6} className="ta-right">
                <span className="sefareshDate">
                    تاریخ ثبت سفارش : {item[i]?.Date}
                </span>
                </Col>
                <Col md={6} className="ta-left">
                <p className="pardazeshPrice">مبلغ کل : {item[i]?.TotalCost} تومان</p>

                </Col>
            </Row>
            <Row className="pardazeshProductRow">
            {item?.map((items, i) => {
  return (
                <Col md={1} xs={6}>
                    <div className="pardazeshProductDiv">
                        <img src={apiAsset+items.Pic1}/>
                        <p>{items.ProductName}</p>
                    </div>
              </Col>
             );

})
}
           </Row>
            {/* <Row className="factorRow">
                <Col md={12} className="ta-left">
                    <Button className="factorBTN">مشاهده فاکتور</Button>
                </Col>

            </Row> */}
        </div>



    );

            })
          }
        {/* <div className="pardazeshBox">
            <Row className="topRow">
                <Col md={6} className="ta-right">
                <span className="sefareshDate">
                    تاریخ ثبت سفارش : 25/02/00
                </span>
                </Col>
                <Col md={6} className="ta-left">
                <p className="pardazeshPrice">مبلغ کل : 120000 تومان</p>

                </Col>
            </Row>
            <Row className="pardazeshProductRow">
                <Col md={1}>
                    <div className="pardazeshProductDiv">
                        <img src={Lamp1}/>
                        <p>لامپ ال ای دی 54 وات اسرام مدل Parathom HQL led 280 پایه E27</p>
                    </div>
              </Col>
              <Col md={1}>
                    <div className="pardazeshProductDiv">
                        <img src={Lamp1}/>
                        <p>لامپ ال ای دی 54 وات اسرام مدل Parathom HQL led 280 پایه E27</p>
                    </div>
              </Col>
              <Col md={1}>
                    <div className="pardazeshProductDiv">
                        <img src={Lamp1}/>
                        <p>لامپ ال ای دی 54 وات اسرام مدل Parathom HQL led 280 پایه E27</p>
                    </div>
              </Col>
              <Col md={1}>
                    <div className="pardazeshProductDiv">
                        <img src={Lamp1}/>
                        <p>لامپ ال ای دی 54 وات اسرام مدل Parathom HQL led 280 پایه E27</p>
                    </div>
              </Col>
            </Row>
            <Row className="factorRow">
                <Col md={12} className="ta-left">
                    <Button className="factorBTN">مشاهده فاکتور</Button>
                </Col>

            </Row>
        </div>
         */}
      </>);

    };
    export default Tarikhche;