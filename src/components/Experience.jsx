import React from "react";
import '../css/Experience.css'
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return(
        <div className="experience-container" id="experience">
            <div className="experience-container-blur d-flex align-items-center justify-content-center">
                <div className="mb-3 col-10 col-sm-8">
                    <ExperienceCard
                        imgSrc="sano.jpg"
                        companyName="Sano Centre for Computational Medicine"
                        time="07.2021 - 10.2021"
                        positionName="Intern Ruby on Rails Developer"
                        technologies="Ruby on Rails; Java Script (pure); HTML; CSS; bash (for deployment)"
                        description="I was responsible for development of web application in Ruby on Rails. This application computes FOD algorithm for protein molecules and was an important part of this science thesis <a href='https://www.mdpi.com/1422-0067/22/24/13494' target='_blank'>https://www.mdpi.com/1422-0067/22/24/13494</a>. Link to the application: <a href='https://hphob.sano.science' target='_blank'>https://hphob.sano.science/</a>"
                    />
                    <ExperienceCard
                        imgSrc="sano.jpg"
                        companyName="Sano Centre for Computational Medicine"
                        time="11.2021 - now"
                        positionName="Junior Ruby on Rails Developer"
                        technologies="Ruby on Rails; Java Script with Stimulus.js, HTML, CSS, Bootstrap"
                        description="At this time, I was working on a big web application developed in Ruby on Rails. I was dealing with big tasks, like
                         creation a new, complex feature, but also with small, like writing stimuls.js controllers or view changes."
                    />
                </div>

            </div>
        </div>
    )
}

export default Experience;