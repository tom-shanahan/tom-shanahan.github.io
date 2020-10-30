import React, { Component } from 'react';
import {Card, Grid, IconButton, makeStyles} from '@material-ui/core';

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
        document.getElementById("page-top").scrollIntoView({behavior: "smooth", block: 'end'});
    }
    render() {
        return(
            <Card className={useStyles.root} shadow={3} style={{width: '100%', margin: 'auto'}}>
                <Grid container id={this.props.id} spacing={0}>
                    <Grid item xs>
                        {this.props.visualizationComponent}
                    </Grid>
                    <Grid item xs>
                        <h2>{this.props.title}
                            {/*<IconButton className="keyboard_arrow_u" onClick={this.scrollUp} name="keyboard_arrow_up" />*/}
                        </h2>
                        <div>
                            {/*html allows for links*/}
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
