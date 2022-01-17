import React from "react";

const SkillsOne = ({skillName, progress, legend}) => {

    const createLegend = () => {
        const bars = [];
        let progressFromProps = progress;
        legend.forEach(legendElement => {
            const legendProgress = parseInt(legendElement.progress)
            bars.push(
                <div className="progress-bar"
                     role="progressbar"
                     style={{width: `${progressFromProps > legendProgress ? legendProgress : progressFromProps}%`, backgroundColor: `${legendElement.color}`}}
                     aria-valuenow={progressFromProps > legendProgress ? legendProgress : progressFromProps}
                     aria-valuemin="0"
                     aria-valuemax="100"
                     key={`${skillName}+${progress}+${legendElement.name}`}>
                </div>
            )
            progressFromProps = progressFromProps - legendProgress > 0 ? progressFromProps - legendProgress: 0;
        })
        return bars;
    }

    return(
        <div className="text-start m-4">
            <div>{skillName}: {progress}%</div>
            <div className="progress">
                {createLegend()}
            </div>
        </div>
    )
}

export default SkillsOne;