import {Grid, Typography} from "@material-ui/core";
import VisualizationCard from "./visualizationcard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHammer, faHardHat} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ProjectsPage(){
    return (
        <section className="services_area">
            <span id="project-header" className="anchor" ></span>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <p className="top_text">Projects <span></span></p>
                            <h2> Things that <br></br>I have built </h2>
                        </div>
                    </div>
                </div>
                <Grid
                    container="True"
                    display="flex"
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="Voronoi Diagram"
                            id="tv_voronoi"
                            img='/images/tv_corr.PNG'
                            tools="React & D3.js"
                            link="tom-shanahan.github.io/blob/master/src/components/voronoi.js"
                            data="https://colab.research.google.com/drive/1JNnXVkwvR1CrOsiIdwod2ZwVKtGYaWqt?usp=sharing"
                            shortDescription="Exploring a television recommendation engine using a dynamic Voronoi diagram. Facilitates the understanding of complex multi-dimensional data."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="Stream Graph"
                            id="stream_graph"
                            img='/images/stream.png'
                            tools="React & D3.js"
                            link="tom-shanahan.github.io/blob/master/src/components/streamgraph.js"
                            data="https://colab.research.google.com/drive/1lRCAhOrRBCW8YIJZ4jkjv4A4K1JK5m2s?usp=sharing"
                            shortDescription="Tracking country-level COVID-19 cases and fatality rate over time. Toggleable axis improves useability."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="Area Bump Chart"
                            id="/area_bump"
                            img='/images/bump.png'
                            tools="React & D3.js"
                            link="tom-shanahan.github.io/blob/master/src/components/areabump.js"
                            data='https://colab.research.google.com/drive/1BYTmrtlquchTl7eTeBpWeYPnctlUDsjg?usp=sharing'
                            shortDescription="Tracking global share of COVID-19 cases and fatalities by country. Toggle allows easy switching between datasets."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="Machine Learning"
                            id="None"
                            img='/images/machine_learning.png'
                            tools="React & D3.js"
                            link="Machine-Learning-Projects"
                            data="None"
                            shortDescription="Collection of machine learning projects utilizing Pandas, NumPy, Scikit-Learn, and more."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="MapReduce Implementation"
                            id="None"
                            img='/images/mapReduce.png'
                            tools="C/C++"
                            link="MapReduce-Implementation"
                            data='None'
                            shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <VisualizationCard
                            title="Facial Recognition"
                            id="facial_recog"
                            img='/images/facial_recog.png'
                            tools="Python, Numpy, Scikit-learn, SciPy, & Matplotlib"
                            link="MapReduce-Implementation"
                            data='None'
                            shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                        />
                    </Grid>
                    <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <br/><br/><br/><br/><br/>
                        <div style={{color:"darkslateblue",fontSize:'40px',display:'flex','justify-content':'center'}}>
                            <FontAwesomeIcon style={{margin:'5px'}} icon={faHardHat}/>
                            <FontAwesomeIcon style={{margin:'5px'}} icon={faHammer}/>
                        </div>
                        <br/>
                        <Typography gutterBottom variant="h5" component="h2" align={'center'}>
                            And More in Progress!
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}
export default ProjectsPage;
