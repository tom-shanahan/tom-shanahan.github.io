import React, { Component } from 'react';
import {Card, CardHeader, CardContent, CardActions, Button, IconButton, CardMedia,CardActionArea, Typography, makeStyles, Grid} from '@material-ui/core';
import {Link} from "react-router-dom";

export default class VisualizationCard extends Component {
    // constructor(props) {
    //     super(props)
    //     this.scrollDown = this.scrollDown.bind(this);
    // }

    // scrollDown() {
    //     console.log("scrollDown", this.props.id, window)
    //     document.getElementById(this.props.id).scrollIntoView({behavior: "smooth"});
    // }

    render() {
        const isData = this.props.data;
        const pageLink = this.props.id;

        let dataButton = <div/>;
        let projectButton = <div/>;
        let cardLink =
            <CardMedia
                style={{ display:'flex', justifyContent:'center'}}>
                <img
                    src={this.props.img}
                    alt={this.props.title}
                    style={{'max-height':'200px','max-width':'325px','height':'auto','width':'auto','margin':0,'buffer':0}}
                />
            </CardMedia>

        if (pageLink !== "None") {
            projectButton =
                <Link to={{pathname: pageLink}}>
                    <Button colored class="card-button">
                        <span>Project</span>
                    </Button>
                </Link>

                // <Button colored onClick={this.scrollDown} class="card-button">
                //     <span>Project</span>
                // </Button>

            cardLink =
                <Link to={{pathname: pageLink}}>
                    <CardMedia
                        style={{ display:'flex', justifyContent:'center'}}>
                        <img
                            src={this.props.img}
                            alt={this.props.title}
                            style={{'max-height':'200px','max-width':'325px','height':'auto','width':'auto','margin':0,'buffer':0}}
                        />
                    </CardMedia>
                </Link>

        }
        if (isData !== "None") {
            dataButton =
                <form target='_blank' action={`${this.props.data}`}>
                    <Button class="card-button" type='submit'>
                        Data
                    </Button>
                </form>
        }


        return (
            <Card shadow={3} style={{'max-width':'325px', margin: 'auto'}}>
                <CardActionArea>
                    {cardLink}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align={'center'}>
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.shortDescription}
                        </Typography>
                        <p className="half-line"></p>
                        <Typography variant="subtitle2" color="textSecondary" align={'center'}>
                            Created with {this.props.tools}
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
                            {projectButton}
                        </Grid>
                        <Grid item>
                            <form target='_blank' action={`https://github.com/tom-shanahan/${this.props.link}`}>
                                <Button class="card-button" type='submit'>
                                    Code
                                </Button>
                            </form>
                        </Grid>
                        <Grid item>
                            {dataButton}
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}
