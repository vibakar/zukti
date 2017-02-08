import React from 'react';
import ReactDOM from 'react-dom';

import {TextArea, Form, Button, Icon} from 'semantic-ui-react';

export default class TextAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.getInputData = this.getInputData.bind(this);
        this.addNewAnswer = this.addNewAnswer.bind(this);
    }
    getInputData(e,data) {
        console.log(data);
        this.props.handlerForSaveAnswerToParentState('text',data.value,data.id);
    }
    addNewAnswer(){
      console.log(this.props);
      this.props.handlerForSaveAnswerToParentState('text','',this.props.texts.length);
    }
    render() {
      console.log(this.props.texts.length);
      let inputs = this.props.texts.map((input,index)=>{
        console.log(input);
        return <TextArea style={{'width':'90%','margin-bottom': '8px'}} value={input} id={index} onChange={this.getInputData} placeholder='enter a text answer' autoHeight />
      })
        return (
            <div>
              <Form>
                {inputs}
                <Button onClick={this.addNewAnswer} icon><Icon name='plus'/></Button>
              </Form>

            </div>
        );
    }
}
