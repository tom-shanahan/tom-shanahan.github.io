import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function RecommendEnginePage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Recommendation Engine"
                    tools="Python, Pandas, Matplotlib, Numpy, SciPy, & Scikit-learn"
                    html_location="/recommendation_engine.html"
                    description=
                        "TEMP"
                />

            </div>
        </div>
    );
}
export default RecommendEnginePage;
