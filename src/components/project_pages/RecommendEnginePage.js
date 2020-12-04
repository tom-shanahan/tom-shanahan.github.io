import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function RecommendEnginePage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Recommendation Engine"
                    next_page="forest_image"
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
