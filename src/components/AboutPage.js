import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
    return (
        <div className="vertical-center">
            {/*<span id="about" className="anchor"></span>*/}
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="home_right_img">
                            <img className="img-fluid headshot-img"
                                 src={'/images/other_photo.JPG'}
                                 alt="avatar"
                            />
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <p className="top_text">About me <span></span></p>
                            <p style={{fontSize:16}}>
                                I am a data-focused software engineer with a background in government,
                                finance, and consulting. I have nearly 10 years of experience wrangling
                                and gleaning insights from large, complex datasets. I have experience with
                                data visualization, web development, and data science.
                            </p>
                            <p style={{fontSize:16}}>
                                I recently completed a Masters in Computer Science at Cornell Tech,
                                focused on the intersection of data and engineering. I studied Algorithms,
                                Machine Learning, Data Science, and Distributed. I’m experienced working
                                with Python, JavaScript, React, HTML, SQL, Scikit-Learn, Pandas, NumPy,
                                Spark, Tableau, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

AOS.init({
    duration: 600
});
