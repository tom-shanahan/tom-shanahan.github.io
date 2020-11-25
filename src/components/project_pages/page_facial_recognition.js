import React from "react";
// import Iframe from 'react-iframe';
// import Page from '../facial_recog.html';

function FacialRecogPage(){
    return (
        <div className="container">
            <div id="stream-div" className="row project-detail">
                <iframe src="/facial_recog.html"/>
            </div>
        </div>
    );
}
export default FacialRecogPage;
