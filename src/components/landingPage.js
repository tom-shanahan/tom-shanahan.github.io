import React, { Component } from 'react';
import VisualizationCard from './visualizationcard';
import AreaBump from './areabump';
import Voronoi from './voronoi';
import StreamGraph from './streamgraph';
import { Grid, Cell } from 'react-mdl';
import Visualization from './visualization';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '90%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <div id="intro" style={{width: '80%', margin: 'auto'}}>
                        <Grid className="projects-grid">
                            <Cell col={12}>
                                <h2 className="section-titles">About Me</h2>
                                <p>I am a data-focused software engineer with a background in government, finance, and consulting. I have nearly 10 years of experience wrangling and gleaning insights from large, complex datasets. I have experience with data visualization, web development, and data science.</p>
                                <p>I recently completed a Masters in Computer Science at Cornell Tech, focused on the intersection of data and engineering. I studied Algorithms, Machine Learning, Data Science, and Distributed. I’m experienced working with Python, JavaScript, React, HTML, SQL, Scikit-Learn, Pandas, NumPy, Spark, Tableau, and more.</p>
                            </Cell>
                            <Cell col={12}>
                                <h2 className="section-titles">Projects</h2>
                            </Cell>
                            <Cell col={4}>
                                <VisualizationCard
                                    title="Voronoi Diagram"
                                    id="voronoi-div"
                                    img={require('../../public/images/tv_corr.PNG')}
                                    link="voronoi.js"
                                    shortDescription="Exploring a tv show recommendation engine using a Voronoi diagram."
                                />
                            </Cell>
                            <Cell col={4}>
                                <VisualizationCard
                                    title="Ordered Stream Graph"
                                    id="stream-div"
                                    link="streamgraph.js"
                                    img={require('../../public/images/stream.png')}
                                    shortDescription="Tracking global outstanding COVID cases with an area stream graph."
                                />
                            </Cell>
                            <Cell col={4}>
                                <VisualizationCard
                                    title="Area Bump Chart"
                                    id="bump-div"
                                    img={require('../../public/images/bump.png')}
                                    link="areabump.js"
                                    shortDescription="Tracking total global outstanding COVID cases as percent of world total."
                                />
                            </Cell>
                        </Grid>
                    </div>
                    <Visualization
                        title="Area Bump Chart"
                        // tip="TEMP"
                        id="bump-div"
                        visualizationComponent=<AreaBump size={[800,500]}/>
                        description="TEMP"
                    />
                    <Visualization
                        title="Voronoi Tesselation"
                        // tip="Click on chart to toggle between showing genres and film correlations as voronoi underlay, hover to see film information"
                        id="voronoi-div"
                        visualizationComponent=<Voronoi size={[800,500]}/>
                        description="TEMP"
                    />
                    <Visualization
                        title="Ordered Stream Graph"
                        // tip="Toggle between logarithmic and linear y-axis scales, hover over the graph for country and date specific information"
                        id="stream-div"
                        visualizationComponent=<StreamGraph size={[800,500]}/>
                        description="TEMP"
                    />
                </Grid>
            </div>
        )
    }
}
export default LandingPage;
