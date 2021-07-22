import React from "react";
import { MDBCol} from 'mdbreact';
import { FaSearch } from 'react-icons/fa';
const SearchPage = () => {
  return (
    <MDBCol md="12">
      <div className="input-group md-form form-sm form-1 pl-0 search-bar">
      <input className="form-control my-0 py-1 search-form" type="text" placeholder="جستجو کنید ..." aria-label="Search" />
     
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3 search-icon" id="basic-text1">
          <FaSearch color="#ffd200"/>
          </span>
        </div>
   </div>
    </MDBCol>
  );
}

export default SearchPage;