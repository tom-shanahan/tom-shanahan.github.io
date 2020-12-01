import {Grid, Typography} from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHammer, faHardHat} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectDescriptionMaster from "./ProjectDescriptionMaster";

function ProjectsPage(){
    return (
        // <section className="services_area" style={{marginTop:'100px'}}>
        <div className="vertical-center" style={{marginTop:'50px'}}>
        {/*<span id="project-header" className="anchor" ></span>*/}
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <p className="top_text">Projects <span></span></p>
                            <h2> Things that <br></br>I have built </h2>
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
                            <ProjectCard
                                title="Visualizing Correlations"
                                id="tv_voronoi"
                                img='/images/tv_corr.PNG'
                                tools="React & D3.js"
                                link="tom-shanahan.github.io/blob/master/src/components/VoronoiGraph.js"
                                data="https://colab.research.google.com/drive/1JNnXVkwvR1CrOsiIdwod2ZwVKtGYaWqt?usp=sharing"
                                shortDescription="Exploring a television recommendation engine using a dynamic VoronoiGraph diagram. Facilitates the understanding of complex multi-dimensional data."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Stream Graph"
                                id="stream_graph"
                                img='/images/stream.png'
                                tools="React & D3.js"
                                link="tom-shanahan.github.io/blob/master/src/components/StreamGraph.js"
                                data="https://colab.research.google.com/drive/1lRCAhOrRBCW8YIJZ4jkjv4A4K1JK5m2s?usp=sharing"
                                shortDescription="Tracking country-level COVID-19 cases and fatality rate over time. Toggleable axis improves useability."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Area Bump Chart"
                                id="/area_bump"
                                img='/images/bump.png'
                                tools="React & D3.js"
                                link="tom-shanahan.github.io/blob/master/src/components/AreaBumpGraph.js"
                                data='https://colab.research.google.com/drive/1BYTmrtlquchTl7eTeBpWeYPnctlUDsjg?usp=sharing'
                                shortDescription="Tracking global share of COVID-19 cases and fatalities by country. Toggle allows easy switching between datasets."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Machine Learning"
                                id="/facial_recog"
                                img='/images/machine_learning.png'
                                tools="React & D3.js"
                                link="Machine-Learning-Projects"
                                data="None"
                                shortDescription="Collection of machine learning projects utilizing Pandas, NumPy, Scikit-Learn, and more."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="MapReduce Implementation"
                                id="/map_reduce"
                                img='/images/mapReduce.png'
                                tools="C/C++"
                                link="MapReduce-Implementation"
                                data='None'
                                shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Facial Recognition"
                                id="facial_recog"
                                img='/images/facial_recog.png'
                                tools="Python, Numpy, Scikit-learn, SciPy, & Matplotlib"
                                // link="MapReduce-Implementation"
                                data='None'
                                shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Digit Recognition"
                                id="digit_recog"
                                img='/images/digit_recog.png'
                                tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                                // link="MapReduce-Implementation"
                                data='None'
                                shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Random forests for image approximation"
                                id="forest_image"
                                img='/images/forest_image.png'
                                tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                                // link="MapReduce-Implementation"
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
            </div>
        </div>
    );
}
export default ProjectsPage;
