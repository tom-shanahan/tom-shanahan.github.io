import React, { Component } from 'react';
import { Cell, Grid, IconButton } from 'react-mdl';

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
      <div className="viz-div" id={this.props.id} style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={12}>
            <h2>{this.props.title}
              <IconButton className="to-top-button" onClick={this.scrollUp} name="keyboard_arrow_up" />
            </h2>
            {/*<div className='tips'>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>*/}
            {/*  <strong>Tip: </strong>*/}
            {/*  {this.props.tip}*/}
            {/*</div>*/}
          </Cell>
          <Cell col={12}>
              {this.props.visualizationComponent}
          </Cell>
          <Cell col={12}>
            <p dangerouslySetInnerHTML={{__html: this.props.description}} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Visualization;
