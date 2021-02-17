import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function DigitRecogPage(){
    return (
        <div className="container">
            <div className="project-detail align-items-center">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Digit Recognizer"
                    next_page="area_bump"
                    prev_page="facial_recog"
                    tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                    html_location="/digit_recognizer.html"
                    description=""
                />

            </div>
        </div>
    );
}
export default DigitRecogPage;
