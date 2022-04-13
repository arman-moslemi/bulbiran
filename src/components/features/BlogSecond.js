import React , {useState,useEffect} from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import NewsSlider from './layouts/NewsSlider';
import NewsSlider2 from './layouts/NewsSlider2';
import NewsSlider3 from './layouts/NewsSlider3';
import Designs from './assets/icons/CreativeDesign'
import NewsImg from './assets/img/bulding.jpg'
import { FaAngleLeft,FaAlignRight ,FaCheck ,FaStar, FaCircle, FaRegClock} from 'react-icons/fa';
import Tabligh from './assets/img/tabligh.png'
import News3 from './assets/img/news3.png';
import Banner1 from './assets/img/banner1.jpg';
import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {useParams } from "react-router-dom";

const BlogSecond = () => {
    const [product,setProduct]=useState([])
    const [val,setVal]=useState(0)
    const params = useParams().id;
    const [group,setGroup]=useState([])
    const history = useHistory();

    const mainSlider=()=>{
        const axios = require("axios");

          axios
              .post(apiUrl + "CategoryBlog",{Role:params})
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
    <Container fluid className="bulbiranContainer">

    <Row style={{marginRight:"0px",marginLeft:"0px"}}>
        <Col md={3}>
        <div className="pdr0 pdl0 w100 d-inline-block h100">
        <div className="whiteBox ta-right pd0 h100" style={{marginTop:"0px"}}>
           <div className="redBorder">
           <FaAlignRight className="d-inline-block"/>
            <span className="d-inline-block">
                دسته بندی
            </span>
           </div>
        <div className="newsList">
        <Link
          onClick={()=>{history.push("/blogsecond/1");window.location.reload()}}
          className="newsLista"
        >
            {/* <a className="newsLista" href="/BlogSecond/1"> */}
                آخرین اخبار
            {/* </a> */}
            </Link>
        </div>
        {/* <div className="newsList">
            <a className="newsLista"    >
                آخرین تخفیف ها
            </a>
        </div> */}
        <div className="newsList">
        <Link
        className="newsLista"
          // to={`/blogsecond/2`}
          onClick={()=>{history.push("/blogsecond/2");window.location.reload()}}
        >               مقالات علمی
</Link>
        </div>
        <div className="newsList">
        <Link
        className="newsLista"
        onClick={()=>{history.push("/blogsecond/3");window.location.reload()}}
        >               تکنولوژی روز
            </Link>
        </div>
        <div className="newsList">
        <Link
        className="newsLista"
        onClick={()=>{history.push("/blogsecond/5");window.location.reload()}}
        >                نور
            </Link>
        </div>
        <div className="newsList">
        <Link
        className="newsLista"
        onClick={()=>{history.push("/blogsecond/5");window.location.reload()}}
        >               مهندسی روشنایی
            </Link>
        </div>
        <div className="newsList">
        <Link

        className="newsLista"
        onClick={()=>{history.push("/blogsecond/6");window.location.reload()}}
        >               ساخت و تولید
            </Link>
        </div>
        <div className="newsList">
        <Link
        className="newsLista"
        onClick={()=>{history.push("/blogsecond/7");window.location.reload()}}
        >              طراحی روشنایی
            </Link>
        </div>
        <div className="newsList">
        <Link
        className="newsLista"
        onClick={()=>{history.push("/blogsecond/8");window.location.reload()}}
        >               رویدادهای مرتبط با روشنایی
            </Link>
        </div>
        {/* <div className="newsList">
            <a className="newsLista"    >
               تبلیغات
            </a>
        </div> */}
       </div>


        </div>
        </Col>
        <Col md={9}>
      <Row style={{margin:"0px",backgroundColor:"#fff",padding:"15px"}}>
      {product?.map((item, i) => {
          return (
      <Col md={4}>
          <div className="newsBox w100">
          <img src={apiAsset+item.Pic}/>
                <span className="imageTag">
                    مقاله
                </span>
                <a  onClick={()=>  history.push("/showblog/"+item.BlogID)}>
                                    {item.Title}
                                </a>
                <div className="ta-left dq">
                    <FaRegClock className="d-inline-block"/>
                    <span>{item.Date}</span>
                </div>
            </div>
          </Col>
                                   );

})}
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
export default BlogSecond;