import React from "react";
import '../css/ExperienceCard.css'

const ExperienceCard = ({imgSrc, companyName, time, description, positionName, technologies}) => {
    return(

            <div className="card experience-part" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgSrc} className="img-fluid rounded-start" alt="image unavailable"/>
                    </div>
                    <div className="col-md-8 text-start">
                        <div className="card-body">
                            <h5 className="card-title">{positionName}</h5>
                            <small className="card-text text-muted">{time}</small>
                            <div className="card-text">{companyName}</div>
                            <div className="card-text">Technologies: {technologies}</div>
                            <hr/>
                            <div className="card-text"><small className="text-muted" dangerouslySetInnerHTML={{ __html: description }}></small></div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ExperienceCard;