import React from "react";
import '../css/Eductation.css'
import EducationCarousel from "./EducationCarousel";

const Education = () => {
    return(
        <div className="education-container" id="education">
            <div className="education-container-blur d-flex align-items-center">
                <EducationCarousel />
            </div>
        </div>
    )
}

export default Education;