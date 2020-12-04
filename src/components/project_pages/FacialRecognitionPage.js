import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function FacialRecogPage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    title="Facial Recognition"
                    next_page="digit_recog"
                    prev_page="tv_voronoi"
                    tools="Python, Numpy, Scikit-learn, SciPy, & Matplotlib"
                    html_location="/facial_recog.html"
                    description=""
                />
            </div>
        </div>
    );
}
export default FacialRecogPage;
