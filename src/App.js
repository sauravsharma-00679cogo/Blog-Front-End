
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import SingleBlog from './components/SingleBlog';


function App() {
  let [Blogs, setBlogs] = useState([]);
  // const getBlogRequest = async () => {
	// 	const url = "http://127.0.0.1:3000/articles";
  //   //const url_encode = encodeURI(url);
 
	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();
 
	// 	if (responseJson) {
	// 		setBlogs(responseJson);
	// 	}
	// };
  const getBlogRequest = async () => {
		const url = "http://127.0.0.1:3000/articles";
    //const url_encode = encodeURI(url);
 
		const response = await fetch(url);
		const responseJson = await response.json();
 
		if (responseJson) {
			setBlogs(responseJson);
		}
	};
 
  useEffect(()=> {
  
    getBlogRequest();
    
  }, [Blogs])
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route exact path="/articles/:id" element={<SingleBlog />} />
      <Route exact path="/blog" element={ Blogs &&Blogs.map((bl) =>{
          return < Blog  id={bl.id} name={bl.author_name} title ={bl.title} desc ={bl.description} content={bl.content} src={bl.url}/>
         })} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/articles/editblog/:id" element={<EditBlog/>}/>
      <Route exact path="/addBlog" element={<AddBlog />} />
          
    </Routes>
  </BrowserRouter>
      
      
    </>
  );
}

export default App;
