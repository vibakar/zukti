import React from 'react';
import ReactDOM from 'react-dom';

import {TextArea, Form} from 'semantic-ui-react';

export default class VideoAnswer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Form onSubmit={this.addAnswer}>
          <Form.Field>
            <TextArea   style={{
                width: '100%',
                height:'300px',
                'margin-bottom': '8px'
            }} placeholder='Enter code snippet and press enter'/>
          </Form.Field>
      </Form>
    );
  }
}
