import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function ForestImagePage(){
    return (
        <div className="container">
            <div className="project-detail align-items-center">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Random forests for image approximation"
                    next_page="tv_voronoi"
                    prev_page="recommendation_engine"
                    tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                    html_location="/forest_image.html"
                    description=
                        "Description: In this problem, we used random forest regression to approximate an image by learning a function that takes image (x, y) coordinates as input and outputs pixel brightness. This way, the function learns to approximate areas of the image that it has not seen before.
Tasks:
    To build your 'training set' uniformly sample 5,000 random (x, y) coordinate locations.
    To build the final image, for each pixel of the output, feed the pixel coordinate through the random forest and color the resulting pixel with the output prediction.
    Repeat the experiment for a random forest containing a single decision tree, but with depths 1, 2, 3, 5, 10, and 15.
    Repeat the experiment for a random forest of depth 7, but with number of trees equal to 1, 3, 5, 10, and 100.
    Experiment with different pruning strategies of your choice.
"
                />

            </div>
        </div>
    );
}
export default ForestImagePage;
