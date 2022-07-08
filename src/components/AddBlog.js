import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddBlog() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');

  let add = async () => {
    const res = await axios.post("http://127.0.0.1:3000/articles", {
        author_name: name,
        title: title,
        description: description,
        content: content,
        url: url,
        users_id: 1
    })

    navigate('/blog')
    //redirect page using react
    console.log(res);
  
  }
    
    
  return (

    <>
    
    <div class="infoContainer ">
        <h1 className="BlogHeading">Add a Blog</h1>
                        <div class="form">
                            
                                <input type="text" placeholder="Author Name" id = "author_name" onChange={(e) => setName(e.target.value)}/>
                                <input type="text" placeholder="Title of Blog" id="title" onChange={(e) => setTitle(e.target.value)}/>
                                <input type="text" placeholder="Description" id="description" onChange={(e) => setDescription(e.target.value)}/>
                                
                                <textarea name="message" id="content" cols="30" rows="5" placeholder="Blog Content" onChange={(e) => setContent(e.target.value)}></textarea>

                                <input type="text" class="btn" onChange={(e) => setUrl(e.target.value)} placeholder="Upload Image"/>
                                <input type="submit" onClick={() => add()}/>
                            
                        </div>
                        </div>
    </>
    
  );
}

