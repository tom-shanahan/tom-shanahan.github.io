import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function TripOrigin(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Geodata Analysis: Calculating Trip Counts"
                    next_page="forest_image"
                    prev_page="recommendation_engine"
                    tools="Python, Pandas, & Geopandas"
                    html_location="/trip_origin.html"
                    description=""
                />

            </div>
        </div>
    );
}
export default TripOrigin;
