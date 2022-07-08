import React, { useEffect, useState } from "react";
import blog1 from "../img/blog1.jpeg"
import blog2 from "../img/blog2.jpeg"
import blog3 from "../img/blog3.jpeg"
import blog4 from "../img/blog4.jpeg"
import blog5 from "../img/blog5.jpeg"

import axios from 'axios';

import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Blog(props) {
   const params = useParams()
   console.log(params)
   const [id,setId] = useState(params.id)
   const deleteBlog = (id) => {
    
    console.log(id);
    
    axios.delete(`http://127.0.0.1:3000/articles/${id}` );
    
    }
    let [Blogs, setBlogs] = useState([]);
    useEffect(()=> {
      const getBlogRequest = async () => {
        const url = "http://127.0.0.1:3000/articles";
        //const url_encode = encodeURI(url);
     
        const response = await fetch(url);
        const responseJson = await response.json();
     
        if (responseJson) {
          setBlogs(responseJson);
        }
      };
        getBlogRequest();
        
      }, [])
  return (
    
    <>

      <div className="blogMainContainer">
        <div className="container">
          <div className="blogTitleImg">
          <Link to={`/articles/${props.id}`}>
            <div className="titleDet">
            <div className="author">{props.name}</div>
                <div className="blogTitle">

                {props.title}
                </div>
                <div className="blogDescript">
                {props.desc}
                </div>
            </div>
            <img src={props.src} alt="blog1" />
            </Link>
            <button className="btn" onClick={()=>deleteBlog(props.id)}>Delete the blog</button>
          </div>
        </div>
        
      </div>
    </>
  );
}
