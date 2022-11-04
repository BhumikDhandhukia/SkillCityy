import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Online</option>
              <option value="Cameras & Lenses">Offline</option>
              <option value="Computers & Laptops">Dual</option>
              <option value="Mobile Phones">One On One</option>
              <option value="Motorcycles">Group Tutoring</option>
              <option value="Tablets">Test Series Only</option>
            </select>
          </div>
          {/* <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")} >Chats</span>
            <span onClick={()=>setCategory("Cameras & Lenses")} ></span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div> */}
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.jpg" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
