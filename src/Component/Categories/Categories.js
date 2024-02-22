import React from "react";
import './Categories.css';

function Categories(){
    return(
        <div className="categories_detail">
            <div className="categories-title">Categories</div>
            <button className="neet">NEET</button>
            <button className="jee">IIT-JEE</button>
            <button className="boards">BOARDS</button>
            <button className="ntse">NTSE</button>
            <button className="foundation">FOUNDATION</button>
            <button className="prefoundation">PRE-FOUNDATION</button>
            <div className="line"></div>
        </div>
    )
}

export default Categories;