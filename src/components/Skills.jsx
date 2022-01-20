import React from "react";
import '../css/Skills.css'
import SkillsPart from "./SkillsPart";

const Skills = () => {

    const skills = {
        programmingSkills: [
            {
                name: "Ruby",
                progress: "50"
            },
            {
                name: "Rails Framework",
                progress: "50"
            },
            {
                name: "Rspec Framework",
                progress: "45"
            },
            {
                name: "Java Script",
                progress: "55"
            },            {
                name: "Type Script",
                progress: "50"
            },
            ,
            {
                name: "React.js",
                progress: "50"
            },
            {
                name: "Stimulus.js",
                progress: "30"
            },
            {
                name: "HTML5",
                progress: "55"
            },
            {
                name: "CSS",
                progress: "35"
            },
            {
                name: "Python",
                progress: "30"
            },            {
                name: "Java",
                progress: "40"
            },
        ],
        otherCSSkills: [
            {
                name: "SQL",
                progress: "60"
            },
            {
                name: "Heroku deployment",
                progress: "45"
            },
            {
                name: "Linux/Bash",
                progress: "35"
            },
            {
                name: "HTTP/Networking",
                progress: "50"
            },
            {
                name: "Design Patterns",
                progress: "45"
            },
            {
                name: "Algorithms/Data Structures",
                progress: "45"
            }
        ],
        languageSkills: [
            {
                name: "Polish",
                progress: "100"
            },
            {
                name: "English",
                progress: "68"
            },
            {
                name: "Russian",
                progress: "42"
            }
        ]
    }

    const legends = {
        hardSkills: [
            {
                name: "Junior",
                progress: "40",
                color: "#4c73f5"
            },
            {
                name: "Mid",
                progress: "30",
                color: "#3cba55"
            },
            {
                name: "Senior/Expert",
                progress: "30",
                color: "#349fb3"
            }
        ],
        languageSkills: [
            {
                name: "A1",
                progress: "20",
                color: "#4c73f5"
            },
            {
                name: "A2",
                progress: "20",
                color: "#a6c229"
            },
            {
                name: "B1",
                progress: "20",
                color: "#3cba55"
            },
            {
                name: "B2",
                progress: "20",
                color: "#c94738"
            },
            {
                name: "C1/C2",
                progress: "20",
                color: "#349fb3"
            },
        ]
    }

    return(
        <div className="skills-section" id="skills">
            <div className="skills-section-blur d-flex align-items-start justify-content-center flex-wrap gap-5">
                    <SkillsPart
                        title="Programming Skills"
                        showLegend="true"
                        legend={legends.hardSkills}
                        skills={skills.programmingSkills} />
                    <SkillsPart
                        title="Other skills related to CS"
                        showLegend="true"
                        legend={legends.hardSkills}
                        skills={skills.otherCSSkills} />
                    <SkillsPart
                        title="Language Skills"
                        showLegend="true"
                        legend={legends.languageSkills}
                        skills={skills.languageSkills} />

            </div>
        </div>
    )
}

export default Skills;