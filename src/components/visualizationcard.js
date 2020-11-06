import React, { Component } from 'react';
import {Card, CardHeader, CardContent, CardActions, Button, IconButton, CardMedia,CardActionArea, Typography, makeStyles, Grid} from '@material-ui/core';
// import '../App.css'

class VisualizationCard extends Component {
    constructor(props) {
        super(props)
        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown() {
        console.log("scrollDown", this.props.id, window)
        document.getElementById(this.props.id).scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <Card shadow={3} style={{'max-width':'325px', margin: 'auto'}}>
                <CardActionArea onClick={this.scrollDown}>
                    <CardMedia
                        style={{ display:'flex', justifyContent:'center'}}>
                        <img
                            src={this.props.img}
                            alt={this.props.title}
                            // style={{height:'200px',width:'300px'}}
                            style={{'max-height':'200px','max-width':'325px','height':'auto','width':'auto','margin':0,'buffer':0}}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align={'center'}>
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item>
                            {/*<a className="primary_btn2" href="#project-header"><span>Check Out My Work</span></a>*/}
                            <Button colored onClick={this.scrollDown} class="card-button">
                                <span>Project</span>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button class="card-button">
                                Code
                                <a href={`https://github.com/tom-shanahan/tom-shanahan.github.io/blob/master/src/components/${this.props.link}`}
                                   target="_blank" rel="noopener noreferrer">
                                </a>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button class="card-button">
                                Data
                                {/*    TODO: insert Colab link*/}
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}
export default VisualizationCard;
