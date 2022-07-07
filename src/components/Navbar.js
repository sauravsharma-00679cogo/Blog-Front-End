import React from 'react'
import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header class="header" id="header">
      <div class="logo">
        <img
          src={logo}
          alt="logo img"
        />
      </div>
      <div class="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">My Blogs</Link></li>
          
          <li><Link to="#contact">Contact Us</Link></li>
          <li><Link to="/addBlog">Add Blog</Link></li>
        </ul>
       
      </div>
      
    </header>
    <hr className='navbarHr'/>
    </>
  )
}
