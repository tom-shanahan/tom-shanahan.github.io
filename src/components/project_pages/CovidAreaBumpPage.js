import React from "react";
import ProjectVisualizationMaster from "../ProjectVisualizationMaster";
import AreaBump from "../D3_graphs/AreaBumpGraph";

function AreaBumpPage(){
    return (
        <div className="container">
            <div id="bump-div" className="row project-detail">
                <ProjectVisualizationMaster
                    style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Area Bump Chart"
                    next_page="map_reduce"
                    prev_page="digit_recog"
                    tools="React & D3.js"
                    visualizationComponent=<AreaBump size={[500,500]}/>
                description=
                "This visualization shows the changing geographic patterns of the COVID-19 pandemic. It
                plots cumulative cases and fatalities as a share of the global total. The top ten countries
                are broken out, with the remainder aggregated into the 'All Other' category. The stacking
                of countries shows their relative counts, with the larger appearing on top.
                <br/><br/>
                <strong><i>Use buttons</i> below plot to toggle cases and fatalities. <i>Hover</i> to see country info.</strong>"
                />
            </div>
        </div>
    );
}
export default AreaBumpPage;
