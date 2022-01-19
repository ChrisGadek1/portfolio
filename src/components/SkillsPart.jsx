import React from "react";
import SkillsOne from "./SkillsOne";
import SkillsLegend from "./SkillsLegend";

const SkillsPart = ({title, skills, showLegend, legend}) => {
    return(
        <div className="card col-sm-10 col-md-6 col-lg-4 col-10">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {showLegend ? <div>
                    <SkillsLegend legendBars={legend} />
                    <hr/>
                </div>: null}
                {skills.map(skill => <SkillsOne key={skill.name+skill.progress} legend={legend} skillName={skill.name} progress={skill.progress} />)}
            </div>
        </div>
    )
}

export default SkillsPart;