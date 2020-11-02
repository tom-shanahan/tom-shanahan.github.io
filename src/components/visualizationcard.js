import React, { Component } from 'react';
import {Card, CardHeader, CardContent, CardActions, Button, IconButton, CardMedia,CardActionArea, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

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
            <Card className={useStyles.root} shadow={3} style={{width: '100%', margin: 'auto'}}>
                <CardActionArea onClick={this.scrollDown}>
                    <CardMedia
                        className={useStyles.media}
                        style={{ display:'flex', justifyContent:'center', 'margin-top':'10px'}}>
                        <img
                            src={this.props.img}
                            alt={this.props.title}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button colored onClick={this.scrollDown} color="primary">
                        Check out Project
                    </Button>
                    <Button color="primary">
                        Code
                        <a href={`https://github.com/tom-shanahan/tom-shanahan.github.io/blob/master/src/components/${this.props.link}`}
                           target="_blank" rel="noopener noreferrer">
                        </a>
                    </Button>
                    <Button color="primary">
                        Data Prep
                        {/*    TODO: insert Colab link*/}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
export default VisualizationCard;
