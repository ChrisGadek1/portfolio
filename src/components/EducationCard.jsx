import React from "react";
import '../css/EducationCard.css'

const EducationCard = ({title, years, fieldOfStudy, imgUrl, additionalInfo}) => {
    return(
        <div className="card education-card col-9 col-sm-5 m-auto">
            <img src={imgUrl} className="d-block w-100 educational-card-img" alt="image failed to download"/>
            <div className="card-body text-start">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{years}</div>
                <div className="card-text">{fieldOfStudy}</div>
                <hr className="m-2"/>
                <small className="card-text">{additionalInfo}</small>
            </div>
        </div>
    )
}

export default EducationCard;