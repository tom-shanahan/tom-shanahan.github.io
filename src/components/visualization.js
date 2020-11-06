import React, { Component } from 'react';
import {Card, Grid, IconButton, makeStyles} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas,faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp)

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class Visualization extends Component {
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
                        <FontAwesomeIcon icon={faChevronUp}/>
                    </button>
                </div>
                <Grid container
                      // id={this.props.id}
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
                            {/*TODO:html allows for links*/}
                            <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                        </div>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default Visualization;
