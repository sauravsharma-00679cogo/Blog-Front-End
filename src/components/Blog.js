import React from "react";
import blog1 from "../img/blog1.jpeg"
import blog2 from "../img/blog2.jpeg"
import blog3 from "../img/blog3.jpeg"
import blog4 from "../img/blog4.jpeg"
import blog5 from "../img/blog5.jpeg"
import Navbar from "./Navbar";
import Home from "./Home";
export default function Blog(props) {
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
          </div>
        </div>
        {/* <div className="container">
          <div className="blogTitleImg">
            <div className="titleDet">
            <div className="author">James</div>
                <div className="blogTitle">
                Letting Go of Our Emotional Baggage is Crucial, but Also Really Hard
                </div>
                <div className="blogDescript">
                Here’s How to Make it Easier
                </div>
            </div>
            <img src={blog2} alt="blog1" />
          </div>
        </div>
        <div className="container">
          <div className="blogTitleImg">
            <div className="titleDet">
            <div className="author">James</div>
                <div className="blogTitle">
                Answering Your Questions About Getting Kids Vaccinated Against Covid
                </div>
                <div className="blogDescript">
                What parents should know
                </div>
            </div>
            <img src={blog3} alt="blog1" />
          </div>
        </div>
        <div className="container">
          <div className="blogTitleImg">
            <div className="titleDet">
            <div className="author">James</div>
                <div className="blogTitle">
                Prison Commissary: Privilege, Punishment and Price Gouging
                </div>
                <div className="blogDescript">
                Caffeine Comparisons: How Much You Really Consume
                </div>
            </div>
            <img src={blog4} alt="blog1" />
          </div>
        </div>
        <div className="container">
          <div className="blogTitleImg">
            <div className="titleDet">
            <div className="author">James</div>
                <div className="blogTitle">
                Caffeine Comparisons: How Much You Really Consume
                </div>
                <div className="blogDescript">
                Bet you’ve got no clue how much is in your coffee, tea, soda, energy drinks, chocolate or medications
                </div>
            </div>
            <img src={blog5} alt="blog1" />
          </div>
        </div> */}
      </div>
    </>
  );
}
