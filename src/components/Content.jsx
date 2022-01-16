import React from "react";
import MainSite from "./MainSite";
import Education from "./Education";
import '../css/Content.css'
import Experience from "./Experience";

const Content = () => {
    return(
        <div className="container-fluid main-container m-0 p-0">
            <MainSite/>
            <Education />
            <Experience />
        </div>
    )
}

export default Content