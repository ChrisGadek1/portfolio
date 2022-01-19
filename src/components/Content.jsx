import React from "react";
import MainSite from "./MainSite";
import Education from "./Education";
import '../css/Content.css'
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const Content = () => {
    return(
        <div className="container-fluid main-container m-0 p-0">
            <MainSite/>
            <Education />
            <Experience />
            <Skills />
            <Projects />
        </div>
    )
}

export default Content