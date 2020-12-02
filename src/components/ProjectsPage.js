import {Card, Grid, Typography} from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHammer, faHardHat} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsPage(){
    return (
        <div className="vertical-center" style={{marginTop:'40px',marginBottom:'40px'}} data-aos="fade-up">
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
                                project_page="/tv_voronoi"
                                img='/images/tv_corr.PNG'
                                tools="React & D3.js"
                                code_link="tom-shanahan.github.io/blob/master/src/components/VoronoiGraph.js"
                                data_link="https://colab.research.google.com/drive/1JNnXVkwvR1CrOsiIdwod2ZwVKtGYaWqt?usp=sharing"
                                shortDescription="Exploring a television show recommendation engine using a dynamic Voronoi Graph.
                                Visualizing complex, high-dimensional data can often be challenging. This graphic helps bring to
                                life the many correlations between individual shows viewership. "
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Visualizing Data with Stream Graph"
                                project_page="stream_graph"
                                img='/images/stream.png'
                                tools="React & D3.js"
                                code_link="tom-shanahan.github.io/blob/master/src/components/StreamGraph.js"
                                data_link="https://colab.research.google.com/drive/1lRCAhOrRBCW8YIJZ4jkjv4A4K1JK5m2s?usp=sharing"
                                shortDescription="
                                This dynamic graphic utilizes the D3.js library to track country-level COVID-19 cases and fatality rates over time.
                                The visualization allows for user interaction to explore and understand the data.
                                "
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Visualizing Data with Area Bump Chart"
                                project_page="area_bump"
                                img='/images/bump.png'
                                tools="React & D3.js"
                                code_link="tom-shanahan.github.io/blob/master/src/components/AreaBumpGraph.js"
                                data_link='https://colab.research.google.com/drive/1BYTmrtlquchTl7eTeBpWeYPnctlUDsjg?usp=sharing'
                                shortDescription="
                                This dynamic graphic utilizes the D3.js library to track the global share of COVID-19 cases and fatalities by country.
                                The visualization allows for user interaction to explore and understand the data.
                                "
                            />
                        </Grid>
                        {/*<Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">*/}
                        {/*    <ProjectCard*/}
                        {/*        title="Machine Learning"*/}
                        {/*        project_page="/facial_recog"*/}
                        {/*        img='/images/machine_learning.png'*/}
                        {/*        tools="React & D3.js"*/}
                        {/*        code_link="Machine-Learning-Projects"*/}
                        {/*        data_link="None"*/}
                        {/*        shortDescription="Collection of machine learning projects utilizing Pandas, NumPy, Scikit-Learn, and more."*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="MapReduce Implementation"
                                project_page="/map_reduce"
                                img='/images/mapReduce.png'
                                tools="C/C++"
                                code_link="MapReduce-Implementation"
                                data_link='None'
                                shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Recognizing Faces"
                                project_page="facial_recog"
                                img='/images/facial_recog.png'
                                tools="Python, Numpy, Scikit-learn, SciPy, & Matplotlib"
                                code_link="None"
                                data_link="None"
                                shortDescription="
                                This project utilized the Eigenface method for recognizing human faces. Eigenfaces utilize
                                the power of the Singular Value Decomposition to more efficiently represent high dimensional
                                face images.
                                "
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Recognizing Digits"
                                project_page="digit_recog"
                                img='/images/digit_recog.png'
                                tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                                code_link="None"
                                data_link="None"
                                shortDescription="
                                In this project, I used a k-nearest neighbors algorithm to classify digits. Utilizing 3-fold cross-validation on the
                                K-NN classifier, I achieved an accuracy of 97%. To evaluate my results, I used an ROC curve and confusion matrix.
                                "
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="Approximating Images with Random Forests"
                                project_page="forest_image"
                                img='/images/forest_image.png'
                                tools="Python, Pandas, Matplotlib, Numpy, & Scikit-learn"
                                code_link="None"
                                data_link="None"
                                shortDescription="
                                This project uses random forest regression to approximate an image by learning a function that takes image coordinates and outputs pixel brightness. It learns to approximate areas of the image that it has not seen before.
                                "

                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <ProjectCard
                                title="TV Show Recommendation Engine"
                                project_page="recommendation_engine"
                                img='/images/machine_learning.png'
                                tools="Python, Pandas, Matplotlib, Numpy, SciPy, & Scikit-learn"
                                code_link="None"
                                data_link="None"
                                shortDescription="
                                This project utilizes collaborative filtering to create user-user and show-show recommendation
                                engines for television shows.
                                "
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <Card shadow={3} style={{'max-width':'325px', margin: 'auto', height:'510px'}}>
                                <br/><br/><br/><br/><br/><br/><br/>
                                <div style={{color:"darkslateblue",fontSize:'40px',display:'flex','justify-content':'center'}}>
                                    <FontAwesomeIcon style={{margin:'5px'}} icon={faHardHat}/>
                                    <FontAwesomeIcon style={{margin:'5px'}} icon={faHammer}/>
                                </div>
                                <br/>
                                <Typography gutterBottom variant="h5" component="h2" align={'center'}>
                                    And More in Progress!
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
export default ProjectsPage;

AOS.init({
    duration: 600
});
