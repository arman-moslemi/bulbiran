import React from "react";

import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    
  return (
    <Navbar collapseOnSelect expand={false}  variant="light">
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="myPd">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="closeNav" />
        <NavDropdown title="فروشگاه بالبیران" id="collasible-nav-dropdown">
        <NavDropdown title="لامپ" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">استعلام قیمت</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              لیست استعلام قیمت
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">برند شاپ</NavDropdown.Item>
          
            <NavDropdown.Item href="#action/3.4">
              برند یک
            </NavDropdown.Item>
          </NavDropdown>
        
          </NavDropdown>
        
          <NavDropdown title="بازار روشنایی" id="collasible-nav-dropdown">
        <NavDropdown title="لامپ" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">برند یک</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             برند دو
            </NavDropdown.Item>
            
          </NavDropdown>
        
          </NavDropdown>
          <NavDropdown title="فروشگاه سبز" id="collasible-nav-dropdown">
        <NavDropdown title="لامپ" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">استعلام قیمت</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              لیست استعلام قیمت
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">برند شاپ</NavDropdown.Item>
          
            <NavDropdown.Item href="#action/3.4">
              برند یک
            </NavDropdown.Item>
          </NavDropdown>
        
          </NavDropdown>
           <Nav.Link>
               لامپ یاب
           </Nav.Link>
           <NavDropdown title="خدمات بالبیران" id="collasible-nav-dropdown">
       
            <NavDropdown.Item href="#action/3.1">طراحی و دیزاین</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              گارانتی و خدمات پس از فروش
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">تعمیرات</NavDropdown.Item>
          
            <NavDropdown.Item href="#action/3.4">
              لوازم یدکی
            </NavDropdown.Item>
      
        
          </NavDropdown>
          <NavDropdown title="مجله بالبیران" id="collasible-nav-dropdown">
        
            <NavDropdown.Item href="#action/3.1">آخرین اخبار</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             مقالات علمی
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">تکنولوژی روز</NavDropdown.Item>
          
            <NavDropdown.Item href="#action/3.4">
              نور
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              آخرین تخفیف ها (جشنواره)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              بهینه سازی روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              ساخت و تولید
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              طراحی روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              رویدادهای روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
             تبلیغات
            </NavDropdown.Item>
          </NavDropdown>
        
          <NavDropdown title="پیشنهادات بالبیران" id="collasible-nav-dropdown">
        
            <NavDropdown.Item href="#action/3.1">کالای شگفت انگیز</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             شگفت انگیز فروشگاه سبز
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">فروش ویژه</NavDropdown.Item>
          
            <NavDropdown.Item href="#action/3.4">
             پرفروش ترین
            </NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="استعلام قیمت" id="collasible-nav-dropdown">
        
        <NavDropdown.Item href="#action/3.1">لیست قیمت</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          درخواست استعلام قیمت
        </NavDropdown.Item>
        
      </NavDropdown>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
