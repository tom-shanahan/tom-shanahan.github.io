import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";

function StockStreamer(){
    return (
        <div className="container">
            <div className="project-detail align-items-center">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="StockStreamer: Streaming Data Pipeline"
                    next_page="trip_origin"
                    prev_page="recommendation_engine"
                    tools="Python, Spark, Kafka, Cassandra, Grafana, & Docker"
                    html_location="/StockStreamer.html"
                    description=""
                />

            </div>
        </div>
    );
}
export default StockStreamer;
