import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Form} from 'semantic-ui-react';

export default class VideoAnswer extends React.Component{
  constructor(props){
    super(props);
    // function to send input value and type to this.props.handlerForSaveAnswer(this will make an ajax call and save it to server)
    this.getInputData=this.getInputData.bind(this);
  }
  // to get blog url form the text box
  getInputData(e){
    e.preventDefault();
    let answer = ReactDOM.findDOMNode(this.refs.blogUrl).value;
    this.props.handlerForSaveAnswer(answer,'blogAnswer');
  }
  render(){
    return(
      <Form onSubmit={this.getInputData}>
          <Form.Field>
              <input autoComplete="off" type='text' name='answer' ref='blogUrl' style={{
                  width: '100%',
                  'margin-bottom': '8px'
              }} placeholder='Enter blog url and press enter'/>
          </Form.Field>
      </Form>
    );
  }
}
