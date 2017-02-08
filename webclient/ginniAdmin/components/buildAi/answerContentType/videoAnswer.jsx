import React from 'react';
import ReactDOM from 'react-dom';

import {Input, Form, Button, Icon} from 'semantic-ui-react';

export default class TextAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.getInputData = this.getInputData.bind(this);
        this.addNewAnswer = this.addNewAnswer.bind(this);
    }
    getInputData(e,data) {
        console.log(data);
        this.props.handlerForSaveAnswerToParentState('video',data.value,data.id);
    }
    addNewAnswer(){
      console.log(this.props);
      this.props.handlerForSaveAnswerToParentState('video','',this.props.videos.length);
    }
    render() {
      console.log(this.props.videos.length);
      let inputs = this.props.videos.map((input,index)=>{
        console.log(input);
        return <Input type='url' style={{'width':'90%','margin-bottom': '8px'}}  id={index} value={input}  onChange={this.getInputData} placeholder='enter a video url for the question ' autoHeight />
      })
        return (
            <div>
                {inputs}
                <Button onClick={this.addNewAnswer} icon><Icon name='plus'/></Button>
            </div>
        );
    }
}
