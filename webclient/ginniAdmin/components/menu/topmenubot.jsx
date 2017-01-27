import React from 'react';
import {Grid} from 'semantic-ui-react';

export default class TopMenuBot extends React.Component{
  render(){
    return(
      <Grid style={{width:'95%',margin:'auto'}}>
          <Grid.Row columns={1}>
              <div style={{width:'100%'}}>
                  <h1>React</h1>
              </div>
          </Grid.Row>
        </Grid>
    );
  }
}
