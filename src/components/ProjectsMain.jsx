import React from "react";
import '../css/ProjectsMain.css'
import ProjectCard from "./ProjectCard";

const ProjectsMain = () => {
    return(
        <div className="projects-main-container  d-flex justify-content-center gap-5">
            <ProjectCard
                imgSrc="railways_project.png"
            />
            <ProjectCard
                imgSrc="railways_project.png"
            />
        </div>
    )
}

export default ProjectsMain;