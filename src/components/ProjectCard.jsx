import React from "react";
import '../css/ProjectCard.css'

const ProjectCard = ({imgSrc, projectTitle, technologies, description, liveLink, codeLink}) => {
    return(
        <div className="card project-card col-lg-4 col-10">
            <img src={imgSrc} className="card-img-top" alt="no image"/>
                <div className="card-body">
                    <h5 className="card-title">{projectTitle}</h5>
                    <p className="card-text">Technologies: {technologies}</p>
                    <small className="card-text" dangerouslySetInnerHTML={{ __html: description }}></small>
                    <div className="d-flex justify-content-center align-content-center gap-5">
                        {liveLink != null ? <div><a className="btn btn-light" href={liveLink} target="_blank">LIVE<i className="icon-search"></i></a></div>: null}
                        {codeLink != null ? <div><a className="btn btn-light" href={codeLink} target="_blank"><i className="icon-code"></i></a></div>: null}
                    </div>
                </div>
        </div>
    )
}

export default ProjectCard;