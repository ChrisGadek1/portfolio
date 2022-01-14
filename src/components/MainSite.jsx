import React from "react";
import '../css/MainSite.css'
import Hello from "./Hello";


const MainSite = () => {
    return(
        <div className="main-site-container">
            <Hello/>
            <div className="bg-image"></div>
            <div className="bg-higher"></div>

        </div>
    )
}

export default MainSite;