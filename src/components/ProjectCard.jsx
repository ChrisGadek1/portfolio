import React from "react";
import '../css/ProjectCard.css'

const ProjectCard = ({imgSrc}) => {
    return(
        <div className="card project-card col-sm-10 col-md-6 col-lg-4 col-10">
            <img src={imgSrc} className="card-img-top" alt="no image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default ProjectCard;