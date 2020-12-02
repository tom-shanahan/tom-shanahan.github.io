import React, { Component } from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faChevronUp,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";
import AOS from "aos";
library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp,faChevronLeft,faChevronRight)

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 40,
    },
});

export default class ProjectDescriptionMaster extends Component {
    render() {
        let html_frame = <div/>;
        if (this.props.html_location !== "None") {
            html_frame =
                <div id="stream-div" className="row project-detail">
                    <iframe
                        src={this.props.html_location}
                        width="100%"
                        height="600px"
                    />
                </div>
        }


        return(
            <Card className={useStyles.root} shadow={5} style={{width: '100%', margin: 'auto'}} data-aos="zoom-in">
                <div>
                    <Link to={this.props.next_page}>
                        <button className="mdc-icon-button keyboard_arrow_up card-button">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                    </Link>

                    <Link to={{pathname: '/projects'}}>
                        <button className="mdc-icon-button keyboard_arrow_up card-button">
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>
                    </Link>

                    <Link to={this.props.prev_page}>
                        <button className="mdc-icon-button keyboard_arrow_up card-button">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                    </Link>
                </div>
                <Grid item xs style={{'margin':'25px'}}>
                    <h2>
                        {this.props.title}
                    </h2>
                    <b>
                        Created with {this.props.tools}
                    </b>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                    </div>
                    {html_frame}
                </Grid>
            </Card>
        )
    }
}
AOS.init({
    duration: 600
});
