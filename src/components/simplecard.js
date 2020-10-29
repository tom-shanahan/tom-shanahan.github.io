import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-mdl';

class SimpleCard extends Component {
  render() {
    return(
      <Card shadow={3} style={{width: '100%', margin: 'auto'}}>
        <CardTitle className='simple-card-title' style={{color: '#000', height: '100px'}}>
          {this.props.title}
        </CardTitle>
        <CardText>
          {"web3.js, d3.js, Blaze, MeteorJS"}
        </CardText>
      </Card>
    )
  }
}

export default SimpleCard;
