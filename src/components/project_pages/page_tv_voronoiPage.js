import React from "react";
import ProjectVisualizationMaster from "../ProjectVisualizationMaster";
import VoronoiGraph from "../D3_graphs/VoronoiGraph";

function TVVoronoiPage(){
    return (
        <div className="container">
            <div id="voronoi-div" className="row project-detail">
                <ProjectVisualizationMaster
                    title="VoronoiGraph Diagram"
                    next_page="/stream_graph"
                    prev_page="/recommendation_engine"
                    tools="React & D3.js"
                    visualizationComponent=<VoronoiGraph size={[500,500]}/>
                description=
                "This graphic is part of a project I did on the preferences of television viewers. Utilizing over five
                million viewer data points, I developed two recommendation engines: one based on viewer similarity;
                the other based on show similarity. While performing this analysis, I wanted to create a visualization
                to clearly convey the relationships in the high dimensional show-show correlation matrix. I used
                dimensionality reduction to translate the n-dimensional correlation matrix into a 2D representation.
                To achieve this I used <a href='https://colah.github.io/posts/2014-10-Visualizing-MNIST/' target='_blank' rel='noopener noreferrer'>
                t-SNE </a>.
                <br/><br/>
                In the visualization, television shows are represented as dots, and their proximities
                indicate similarity of user preference. However dimensionality reduction is imperfect and results in information loss.
                The coloration is a VoronoiGraph diagram which shows the correlations between shows. Shows which are greener have more
                similar user preference. Interestingly, this coloration allows us to see where dimensionality reduction has maintained
                relative relations and where it has disrupted these.
                <br/><br/>
                <strong><i>Click on chart</i> to toggle between genres and correlations. <i>Hover</i> to see show title and genre.</strong>"
                />
            </div>
        </div>
    );
}
export default TVVoronoiPage;
