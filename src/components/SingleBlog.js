import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import {useParams,useNavigate} from "react-router-dom"


export default function SingleBlog(props) {
    const [blog,setBlog] = useState({});
    const [errorMessage,setErrorMessage] = useState("");
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
useEffect(() => {
    const  getBlog= async(id) => {
        const response = await fetch(
            `http://127.0.0.1:3000/articles/${id}`
          );
      
          const result = await response.json();
      
          if (response.ok) {
            setBlog(result);
            
          } else {
            setErrorMessage(result.message);
          }
    }
    getBlog(id)
},[])
    function selectUser (myid){
        navigate(`/articles/editBlog/${myid}`)
    }
  return (

    <>
        <div className="singleBlog">
        <div className="authorName">
            {blog?.author_name}
        </div>
        <div className="BlogTitle">
            {blog?.title}
        </div>
        <div className="BlogImg">
            <img src={`${blog?.url}`} alt="askjdf" />
        </div>
        <div className="BlogContent">
            {blog?.content}
        </div>
        <div className="updateData">
            <button className="btn" onClick={()=>selectUser(blog?.id)}>Update Data</button>
        </div>
    </div>
 
    </>
  )
}
