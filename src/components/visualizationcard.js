import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class VisualizationCard extends Component {
  constructor(props){
    super(props)
    this.scrollDown = this.scrollDown.bind(this);
  }
  scrollDown(){
    console.log("scrollDown",this.props.id,window)
    document.getElementById(this.props.id).scrollIntoView({behavior: "smooth"});

  }
  render() {
    return(
      <Card shadow={3} style={{width: '100%', margin: 'auto'}}>
        <CardTitle className='card-title' style={{color: '#000', height: '200px', background: `url(${this.props.img}) center / cover`}}>
          {this.props.title}
        </CardTitle>
        <CardText>
          {this.props.shortDescription}
        </CardText>
        <CardActions border>
            <Button colored onClick={this.scrollDown}>See Project</Button>
        </CardActions>
        <CardMenu>
            {/*TODO: change link*/}
          <a href={`https://github.com/adrianturcato/portfolio/blob/master/src/components/${this.props.link}`} target="_blank" rel="noopener noreferrer">
            <IconButton style={{color: '#000'}} name="code" />
          </a>
        </CardMenu>
       </Card>
    )
  }
}

export default VisualizationCard;
