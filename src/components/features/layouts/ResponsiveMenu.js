import React,{useState,useEffect,ReactDOM} from 'react'

import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

export default function App() {
  const [brand,setBrand]=useState([])
  const [group,setGroups]=useState([])
  const [greenGroup,setGreenGroup]=useState([])
  const history = useHistory();

  const mainSlider=()=>{
    // const [pic,setpic]=useState(Lamp)
    const axios = require("axios");
    axios
    .get(apiUrl + "AllRoles")
.then(function (response) {
  if (response.data.result == "true") {

      setGroups(response.data.Data)
      console.log(1235689)
      console.log(response.data.Data)

}
else{
  console.log(response.data.result)

}})
.catch(function (error) {
  console.log(error);
});
      axios
          .get(apiUrl + "AllBrandProduct")
      .then(function (response) {
        if (response.data.result == "true") {

            setBrand(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
   
      axios
      .get(apiUrl + "AllGreenGroup")
  .then(function (response) {
    if (response.data.result == "true") {

        setGreenGroup(response.data.Data)

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

    }, []);
  return (
    <Navbar collapseOnSelect expand={false}  variant="light">

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="myPd">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="closeNav" />
        <NavDropdown title="فروشگاه بالبیران" id="collasible-nav-dropdown">
        <NavDropdown title="لامپ" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>
          <NavDropdown title="روشنایی داخلی" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>
          <NavDropdown title="روشنایی خارجی" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>
          <NavDropdown title="روشنایی تزئینی" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>

          <NavDropdown title="روشنایی خاص" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>

          <NavDropdown title="لوازم جانبی" id="collasible-nav-dropdown">
        {group.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
            <NavDropdown.Item  onClick={()=>  history.push("/bulbiranshop/"+item.GroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>

                 );

})
}
          </NavDropdown>
          </NavDropdown>

          <NavDropdown title="بازار روشنایی" id="collasible-nav-dropdown">
        {/* <NavDropdown title="لامپ" id="collasible-nav-dropdown"> */}
        {    brand?.map((item, i) => {
  return (
            <NavDropdown.Item onClick={()=>  history.push("/brandsecond/"+item.BrandID)}>{item.BrandName}</NavDropdown.Item>

   );

})
}
          </NavDropdown>

          {/* </NavDropdown> */}
          <NavDropdown title="فروشگاه سبز" id="collasible-nav-dropdown">
        <NavDropdown title="لامپ" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==1)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
          
          </NavDropdown>
          <NavDropdown title="پنل" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==2)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
          
          </NavDropdown>
          <NavDropdown title="نورافکن" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==3)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
          
          </NavDropdown>
          <NavDropdown title="ریسه" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==4)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
          
          </NavDropdown>
          <NavDropdown title="چراغ" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==5)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
           
          </NavDropdown>
          <NavDropdown title="آویز" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==6)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
           
          </NavDropdown>
          <NavDropdown title="لوازم جانبی" id="collasible-nav-dropdown">
        {greenGroup.filter(t=>t.BiggerGroup==7)?.map((item, i) => {
               return (
                <NavDropdown.Item  onClick={()=>  history.push("/GreenShop/"+item.GreenGroupID)}>
{item.SmallerGroup}
            </NavDropdown.Item>
                  );

})
}
          
          </NavDropdown>

          </NavDropdown>
           <Nav.Link onClick={()=>  history.push("/bulbfinderstart")}>
               لامپ یاب
           </Nav.Link>
           <NavDropdown title="خدمات بالبیران" id="collasible-nav-dropdown">

            <NavDropdown.Item onClick={()=>  history.push("/design")}>طراحی و دیزاین</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/Garanty")}>
              گارانتی و خدمات پس از فروش
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/repairs")}>تعمیرات</NavDropdown.Item>

            <NavDropdown.Item  onClick={()=>  history.push("/LavazemYadaki")}>
              لوازم یدکی
            </NavDropdown.Item>


          </NavDropdown>
          <NavDropdown title="مجله بالبیران" id="collasible-nav-dropdown">

            <NavDropdown.Item onClick={()=>  history.push("/news")}>آخرین اخبار</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
             مقالات علمی
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>تکنولوژی روز</NavDropdown.Item>

            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              نور
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              آخرین تخفیف ها (جشنواره)
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              بهینه سازی روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              ساخت و تولید
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              طراحی روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
              رویدادهای روشنایی
            </NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/news")}>
             تبلیغات
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="پیشنهادات بالبیران" id="collasible-nav-dropdown">

            <NavDropdown.Item onClick={()=>  history.push("/shegeftangiz")}>کالای شگفت انگیز</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>  history.push("/ShegeftGreen")}>
             شگفت انگیز فروشگاه سبز
            </NavDropdown.Item>
            <NavDropdown.Item  onClick={()=>  history.push("/pishnahadvijhe")}>فروش ویژه</NavDropdown.Item>

            <NavDropdown.Item onClick={()=>  history.push("/pishnahadvijhe")}>
             پرفروش ترین
            </NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="استعلام قیمت" id="collasible-nav-dropdown">

        <NavDropdown.Item onClick={()=>  history.push("/pricebrand")}>لیست قیمت</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>  history.push("/darkhastprice")}>
          درخواست استعلام قیمت
        </NavDropdown.Item>

      </NavDropdown>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}
