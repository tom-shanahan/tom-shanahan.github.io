import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function FacialRecogPage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Facial Recognition"
                    tools="Python, Numpy, Scikit-learn, SciPy, & Matplotlib"
                    html_location="/facial_recog.html"
                    description=
                "This visualization shows the changing geographic patterns of the COVID-19 pandemic. It
                plots cumulative cases and fatalities as a share of the global total. The top ten countries
                are broken out, with the remainder aggregated into the 'All Other' category. The stacking
                of countries shows their relative counts, with the larger appearing on top."
                />
            </div>
        </div>
    );
}
export default FacialRecogPage;
