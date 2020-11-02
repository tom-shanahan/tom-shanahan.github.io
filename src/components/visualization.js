import React, { Component } from 'react';
import {Card, Grid, IconButton, makeStyles} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee,faChevronUp)

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
//
// import '../vendor/fontawesome.js'

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
            <Card className={useStyles.root} shadow={3} style={{width: '100%', margin: 'auto'}}>
                <Grid container id={this.props.id} spacing={0}>
                    <Grid item xs>
                        {this.props.visualizationComponent}
                    </Grid>
                    <Grid item xs>
                        <h2 className=".viz-div">{this.props.title}
                            <button id="to-top"
                                    className="mdc-icon-button keyboard_arrow_up"
                                    onClick={this.scrollUp}>
                                {/*<i className="fa-chevron-up"></i>*/}
                                {/*<i className="fachevronup"></i>*/}
                                <FontAwesomeIcon icon={faChevronUp} />
                            </button>
                        </h2>
                        <div>
                            {/*TODO:html allows for links*/}
                            <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                        </div>
                        <div className='tips'>
                            <strong>Tip: </strong>
                            {this.props.tip}
                        </div>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default Visualization;
