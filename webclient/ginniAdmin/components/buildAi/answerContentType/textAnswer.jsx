import React from 'react';
import ReactDOM from 'react-dom';

import {Input, Form} from 'semantic-ui-react';

export default class TextAnswer extends React.Component{
  constructor(props){
    super(props);
    // function to send input value and type to this.props.handlerForSaveAnswer(this will make an ajax call and save it to server)
    this.getInputData=this.getInputData.bind(this);
  }
  getInputData(e){
    e.preventDefault();
    let answer = ReactDOM.findDOMNode(this.refs.answer).value;
    this.props.handlerForSaveAnswer(answer,'textAnswer');
  }
  render(){
    return(
      <div>
      <Form onSubmit={this.getInputData}>
          <Form.Field>
              <input autoComplete="off" type='text' name='answer' ref='answer' style={{
                  width: '100%',
                  'margin-bottom': '8px'
              }} placeholder='Enter answer and press enter'/>
          </Form.Field>
      </Form>
      <div>
      </div>
    </div>
    );
  }
}
