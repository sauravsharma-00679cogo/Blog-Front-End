import React from "react";
import blog1 from "../img/blog1.jpeg"
import blog2 from "../img/blog2.jpeg"
import blog3 from "../img/blog3.jpeg"
import blog4 from "../img/blog4.jpeg"
import blog5 from "../img/blog5.jpeg"
import Navbar from "./Navbar";
import Home from "./Home";
export default function Blog(props) {
  function deleteBlog(id) {
    fetch
  }
  return (
    
    <>

      <div className="blogMainContainer">
        <div className="container">
          <div className="blogTitleImg">
            <div className="titleDet">
            <div className="author">{props.auth}</div>
                <div className="blogTitle">
                {props.title}
                </div>
                <div className="blogDescript">
                {props.desc}
                </div>
            </div>
            <img src={props.src} alt="blog1" />
            <button onClick={()=>deleteBlog(id)}></button>
          </div>
        </div>
        
      </div>
    </>
  );
}
