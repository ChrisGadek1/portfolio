import React from "react";
import '../css/Projects.css'
import ProjectsMain from "./ProjectsMain";

const Projects = () => {
    return(
        <div className="projects-section" id="projects">
            <div className="projects-section-blur">
                <ProjectsMain />
            </div>
        </div>
    )
}

export default Projects;