import React, { Component } from 'react';
import {Button, Card, Grid, IconButton, makeStyles} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas,faChevronUp,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import VisualizationCard from "./visualizationcard";
import {Link} from "react-router-dom";
library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp,faChevronLeft,faChevronRight)

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default class Visualization extends Component {
    constructor(props){
        super(props)
        this.scrollUp = this.scrollUp.bind(this);
    }
    scrollUp(){
        document.getElementById("project-header").scrollIntoView({behavior: "smooth", block: 'start'});
    }
    render() {
        return(
            <Card className={useStyles.root} shadow={5} style={{width: '100%', margin: 'auto'}}>
                <div style={{'buffer-top':'50px'}}>
                    <button className="mdc-icon-button keyboard_arrow_up card-button"
                            onClick={this.scrollUp}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>

                    <Link to={{pathname: '/projects'}}>
                        <button className="mdc-icon-button keyboard_arrow_up card-button">
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>
                    </Link>

                    <button className="mdc-icon-button keyboard_arrow_up card-button"
                            onClick={this.scrollUp}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
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
                        <h2
                            className=".viz-div">{this.props.title}
                        </h2>
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
