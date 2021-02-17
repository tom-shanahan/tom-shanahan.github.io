import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function RecommendEnginePage(){
    return (
        <div className="container">
            <div className="project-detail align-items-center">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Recommendation Engine"
                    next_page="trip_origin"
                    prev_page="map_reduce"
                    tools="Python, Pandas, Matplotlib, Numpy, SciPy, & Scikit-learn"
                    html_location="/recommendation_engine.html"
                    description=""
                />
            </div>
        </div>
    );
}
export default RecommendEnginePage;
