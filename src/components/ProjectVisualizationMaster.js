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
        height: 140,
    },
});

export default class ProjectVisualizationMaster extends Component {
    render() {
        return(
            <Card className={useStyles.root} shadow={5} style={{width: '100%', margin: 'auto'}} data-aos="zoom-in">
                <div style={{'buffer-top':'50px'}}>
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
                <Grid container
                      spacing={0}
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    <Grid item xs>
                        {this.props.visualizationComponent}
                    </Grid>
                    <Grid item xs style={{'margin':'25px'}}>
                        <h2 className=".viz-div">
                            {this.props.title}
                        </h2>
                        <b>
                            Created with {this.props.tools}
                        </b>
                        <div>
                            {/*Note:html allows for links*/}
                            <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                        </div>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

AOS.init({
    duration: 600
});
