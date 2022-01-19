import React from "react";
import EducationCard from "./EducationCard";

const EducationCarousel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide w-100" data-interval="false">
            <div className="carousel-inner">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-item active"  data-interval="false">
                    <EducationCard title="AGH University of Science And Technology"
                                   years="2019-2023"
                                   fieldOfStudy="Field of study: Computer Science"
                                   additionalInfo="In each semester I had an average higher than 4.0. AGH UST is the best technical university in Poland."
                                   imgUrl="cs_agh_1.jpg"/>
                </div>
                <div className="carousel-item"  data-interval="false">
                    <EducationCard title="High School nr 4 in Olkusz"
                                   years="2015-2018"
                                   fieldOfStudy="Profile: Mathematical"
                                   additionalInfo="I received a result from mathematical part of Matura exam, that belonged to 0.1% of best results in Poland."
                                   imgUrl="IV_lo.jpg"/>
                </div>
                <div className="carousel-item"  data-interval="false">
                    <EducationCard title="Other Sources"
                                   years="2012 - now"
                                   fieldOfStudy="I also use other sources of knowledge to develop my skills."
                                   additionalInfo="I read books, like 'Thinking in Java' or 'Introduction to Algorithms'. I finished courses about Ruby on Rails and React on the Udemy Course Platform."
                                   imgUrl="udemy.jpg"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default EducationCarousel;