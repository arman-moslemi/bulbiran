import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bulbiran.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Logo from '../assets/img/logo2.png';
import { FaSearch,FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";

const Header = () => {

    return (
      <>
      <Container fluid className="menuContainer">
        <Row className="menuBar">
        <Col md={2} className="pd0">
        <Link to={"/"}>

        <img src={Logo} className="logo"/>

        </Link>
        </Col>
        <Col md={5}>
            <SearchBar></SearchBar>
        </Col>
        <Col md={2}>
          <FaMapMarkerAlt color="#ffd200" fontSize="2rem"/>
        </Col>
        <Col md={3}>
      <p className="number-menu">021-33904900</p>
      <p className="number-detail">هر روز به جز ایام تعطیل</p>

        </Col>
        </Row>
      <Menu/>
      </Container>
      </>
      );
    };
    export default Header;