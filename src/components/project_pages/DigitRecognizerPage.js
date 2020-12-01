import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function DigitRecogPage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Digit Recognizer"
                    tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                    html_location="/digit_recognizer.html"
                    description=
                        "TEMP"
                />

            </div>
        </div>
    );
}
export default DigitRecogPage;
