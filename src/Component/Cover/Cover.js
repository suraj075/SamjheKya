import React from "react";
import './Cover.css';
// import cover from "../Assets/cover.png";

function Cover(){
    return(
        <div className="cover-box">
            <div className="left-side">
                <div className="line1">Best Place For Students</div>
                <div className="line2">Guidance | Mentor</div>
                <div className="line3">for classes 8-12 | NTSE | JEE | NEET</div>
                <div className="content">College Councelling , Motivation , Mentoring and many more..</div>
            </div>
            <div className="right-side">
                {/* <img src ={cover} alt=""/> */}
            </div>
            
        </div>
    )
}

export default Cover;