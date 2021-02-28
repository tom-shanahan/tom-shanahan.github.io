import React, { Component } from 'react';
import {Card, CardContent, CardActions, Button, CardMedia,CardActionArea, Typography, Grid} from '@material-ui/core';
import {Link} from "react-router-dom";

export default class ProjectCard extends Component {
    render() {
        let dataButton = <div/>;
        if (this.props.data_link !== "None") {
            dataButton =
                <form target='_blank' action={`${this.props.data_link}`}>
                    <Button class="card-button" type='submit'>
                        Data
                    </Button>
                </form>
        }

        let codeButton = <div/>;
        let projectButtonName = "Project/Code";
        if (this.props.code_link !== "None") {
            codeButton =
                <form target='_blank' action={`https://github.com/tom-shanahan/${this.props.code_link}`}>
                    <Button class="card-button" type='submit'>
                        Code
                    </Button>
                </form>
            projectButtonName = "Project"
        }

        return (
            <Card shadow={3} style={{'max-width':'325px', margin: 'auto', height:'510px'}}>
                <CardActionArea>
                    <Link to={{pathname: this.props.project_page}}>
                        <CardMedia
                            style={{ display:'flex', justifyContent:'center'}}>
                            <img
                                src={this.props.img}
                                alt={this.props.title}
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
                            <p className="half-line"></p>
                            <Typography variant="subtitle2" color="textSecondary" align={'center'}>
                                Created with {this.props.tools}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item>
                            <Link to={{pathname: this.props.project_page}}>
                                <Button colored class="card-button">
                                    <span>{projectButtonName}</span>
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            {codeButton}
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
