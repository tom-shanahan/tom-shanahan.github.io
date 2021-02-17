import React from "react";
import ProjectVisualizationMaster from "../ProjectVisualizationMaster";
import StreamGraph from "../D3_graphs/StreamGraph";

function StreamGraphPage(){
    return (
        <div className="container">
            <div className="project-detail align-items-center">
                <ProjectVisualizationMaster
                    // TODO: Update recovered data
                    title="Ordered Stream Graph"
                    next_page="area_bump"
                    prev_page="tv_voronoi"
                    tools="React & D3.js"
                    tip="Toggle between logarithmic and linear y-axis scales, hover over the graph for country and date specific information"
                    visualizationComponent=<StreamGraph size={[500,500]}/>
                description=
                "When first confronted with the COVID-19 outbreak, one of my first reactions was to seek out and
                dig into data about the pandemic. Much of this early data was confused and contradictory. However,
                gradually a clearly picture emerged of the scale and scope of COVID-19.
                <br/><br/>
                The accompanying visualization shows the path of COVID-19. The chart plots current cases
                (confirmed but not recovered or deceased) by country. The coloration of each country band
                represents the case fatality rate (CFR). Early in the pandemic testing of rare and often only
                serious cases were tested, resulting in an elevated CFR. As testing became more
                prevalent, the CFR declined."
                />
            </div>
        </div>
    );
}
export default StreamGraphPage;
