import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaCaretDown } from 'react-icons/fa';
const Menu = () => {
    return (
      <>
      <Container fluid>
          <Row className="menu-row">
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">فروشگاه بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">بازار روشنایی</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">فروشگاه سبز</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">لامپ یاب</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">خدمات بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">مجله بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">پیشنهادات بالبیران</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
              <Col md="auto" className="ta-center flex-1">
                  <p className="menu-items d-inline-block">استعلام قیمت</p>
                  <FaCaretDown display="inline-block" color="ffd200" fontSize="2rem"></FaCaretDown>
              </Col>
          </Row>
      </Container>
      </>
    );};
    export default Menu