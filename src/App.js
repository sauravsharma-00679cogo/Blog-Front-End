
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import AddBlog from './components/AddBlog';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  let [Blogs, setBlogs] = useState([]);
  const getBlogRequest = async () => {
		const url = "http://www.omdbapi.com/?s=HARRY POTTER&apikey=263d22d8";
    //const url_encode = encodeURI(url);
 
		const response = await fetch(url);
		const responseJson = await response.json();
 
		if (responseJson) {
			setBlogs(responseJson.Search);
		}
	};
 
  useEffect(()=> {
    getBlogRequest();
    
  }, [])
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={Blogs.map((bl) =>{
          return < Blog  auth = {bl.Title} title ={bl.Year} desc ={bl.Type} src={bl.Poster}/>
         })} />
      <Route path="/about" element={<About/>} />
      <Route path="/addBlog" element={<AddBlog/>} />
          
    </Routes>
  </BrowserRouter>
      
      
    </>
  );
}

export default App;
