import React from 'react';
import ReactDOM from 'react-dom';

import {Input, Form} from 'semantic-ui-react';

export default class VideoAnswer extends React.Component{
  constructor(props){
    super(props);
    // function to send input value and type to this.props.handlerForSaveAnswer(this will make an ajax call and save it to server)
    this.getInputData=this.getInputData.bind(this);
  }
  // to get video url form the text box
  getInputData(e){
    e.preventDefault();
    let answer = ReactDOM.findDOMNode(this.refs.videoUrl).value;
    this.props.handlerForSaveAnswer(answer,'videoAnswer');
  }
  render(){
    return(
      <Form onSubmit={this.getInputData}>
          <Form.Field>
              <input autoComplete="off" type='text' name='answer' ref='videoUrl' style={{
                  width: '100%',
                  'margin-bottom': '8px'
              }} placeholder='Enter video url and press enter'/>
          </Form.Field>
      </Form>
    );
  }
}
