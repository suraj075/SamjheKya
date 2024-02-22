import React from "react";
import Ad from "../Ad/Ad";
import Categories from "../Categories/Categories";
import Cover from "../Cover/Cover";
import Program from "../Program/Program";



function Front(){
    return(
        <div>
            <Ad/>
            <Categories/>
            <Cover/>
            <Program/>
        </div>
    )
}

export default Front;