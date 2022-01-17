import React from "react";

const SkillsLegend = ({legendBars}) => {
    return(
        <div>
            <div>Legend</div>
            <div className="progress">
                {legendBars.map(legendBar => (
                    <div className="progress-bar"
                         role="progressbar"
                         style={{width: `${legendBar.progress}%`, backgroundColor: `${legendBar.color}`}}
                         aria-valuenow="40"
                         ria-valuemin="0"
                         aria-valuemax="100"
                         key={`${legendBar.progress+legendBar.name+legendBar.color}`}>{legendBar.name}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsLegend;