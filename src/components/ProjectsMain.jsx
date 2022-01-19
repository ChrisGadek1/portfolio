import React from "react";
import '../css/ProjectsMain.css'
import ProjectCard from "./ProjectCard";

const ProjectsMain = () => {
    return(
        <div className="projects-main-container text-start d-flex justify-content-center gap-5 flex-wrap">
            <ProjectCard
                imgSrc="railways_project.png"
                projectTitle="Web application for Railways (PL)"
                technologies="TypeScript, React.js, Redux, HTML, CSS"
                description="This web application provides most of functionalities for railways passengers.
                             It shows map for all stations and connections, lists all stations and connections
                             and computes fastest connection between stations with Dijkstra's algorithm. Stations and
                             lines were arbitrary chosen by me, but they can be also fetched from some API."
                codeLink="https://github.com/ChrisGadek1/Railways-connections"
                liveLink="https://chrisgadek1.github.io/Railways-connections/"

            />
            <ProjectCard
                imgSrc="bot_project.png"
                projectTitle="Chat bot for arranging meetings (PL)"
                technologies="Dialog flow, Ruby on Rails, PostgreSQL"
                description="This application was a project for the AI course at the AGH UST. This bot can arrange
                             meetings for a small company and store them in the database. If you want to try it, here
                             is a <a href='sprawozdanie-krzysztof-gadek.pdf' download>link to the small documentation</a> of it (in polish language)."
                liveLink="https://bot.dialogflow.com/bc36146f-f346-4f32-9374-42197015efe9"
                codeLink="https://github.com/ChrisGadek1/psi-lab3-dialogflow-backend"

            />
            <ProjectCard
                imgSrc="hphob_project.png"
                projectTitle="Web application for HPHOB Computation (EN)"
                technologies="Ruby on Rails, JavaScript, HTML, CSS"
                description="This application was written by myself (in 90%) during my internship in the Sano Centre for Computational Medicine.
                             It's integrated with the PDB database and used by scientist to compute Hydrophobicity of proteins or proteins parts.
                             With help from this application, scientists <a href='https://www.mdpi.com/1422-0067/22/24/13494' target='_blank'>published at least one thesis</a> yet, but I hope in future it will be more!"
                liveLink="https://hphob.sano.science/"

            />
            <ProjectCard
                imgSrc="messanger_project.png"
                projectTitle="Instant Messenger (EN)"
                technologies="Ruby on Rails, PostgreSQL, React.js, JavaScript, HTML, CSS"
                description="This application isn't ready yet. Coming soon ;)"
                codeLink="https://github.com/ChrisGadek1/instant-messanger"

            />
            <ProjectCard
                imgSrc="snake_project.png"
                projectTitle="Snake game (PL)"
                technologies="JavaScript, HTML, CSS"
                description="This game is my very old project. I decided to add it here to show You how my journey with web development began a few years ago. It's a game
                            written in a pure JS, working only on desktop. It has 3 difficulty levels."
                liveLink="https://gra-waz.herokuapp.com/"
                codeLink="https://github.com/ChrisGadek1/snake_game"

            />
        </div>
    )
}

export default ProjectsMain;