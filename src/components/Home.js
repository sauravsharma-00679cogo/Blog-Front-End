import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="homeSection">
        <div className="Hometitle">
            Stay Curious
        </div>
        <div className="homeDetail">
            Discover stories, thinking and Experties from writer on any topic.
        </div>
        <div >
            <button className="btn">Start Reading</button>
        </div>
    </div>
    </>
  )
}
