import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";
import Gist from "react-gist";

function MapReducePage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    // style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                    title="Map Reduce"
                    tools="C/C++"
                    // html_location="https://github.com/tom-shanahan/MapReduce-Implementation/blob/master/mapreduce.c"
                    description=
                "This visualization shows the changing geographic patterns of the COVID-19 pandemic. It
                plots cumulative cases and fatalities as a share of the global total. The top ten countries
                are broken out, with the remainder aggregated into the 'All Other' category. The stacking
                of countries shows their relative counts, with the larger appearing on top."
                />
                <Gist id='2b4713dd4efb9f7b416c21fe01a43fc0' />
                <script src="http://gist-it.appspot.com/http://github.com/tom-shanahan/MapReduce-Implementation/blob/master/mapreduce.c"></script>
            </div>
            <div>TEST</div>
            <script src="http://gist-it.appspot.com/http://github.com/tom-shanahan/MapReduce-Implementation/blob/master/mapreduce.c"></script>
        </div>
    );
}
export default MapReducePage;
