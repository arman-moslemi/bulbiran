import React,{useState} from "react";
import { MDBCol} from 'mdbreact';
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const SearchPage = () => {
  const [search,setSearch]=useState('')
  const location = useLocation();
console.log(location.pathname)
  return (
    <MDBCol md="12">
      <div className="input-group md-form form-sm form-1 pl-0 search-bar">
      <input className="form-control my-0 py-1 search-form" onChange={(event)=>setSearch(event.target.value)} type="text" placeholder="جستجو کنید ..." aria-label="Search" />
      <Link
          to={`/searchresult/${search}`}
           onClick={() =>location.pathname.split('/')[1]=="searchresult"? window.location.reload():null}
        >
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3 search-icon" id="basic-text1">

          <FaSearch color="#ffd200"/>
          </span>
        </div>
        </Link>
   </div>
    </MDBCol>
  );
}

export default SearchPage;