import React from 'react';
import ReactDOM from 'react-dom';

import {Input, Form, Button, Icon} from 'semantic-ui-react';

export default class TextAnswer extends React.Component {
    constructor(props) {
        super(props);
        // function to send input value and type to this.props.handlerForSaveAnswer(this will make an ajax call and save it to server)
        this.getInputData = this.getInputData.bind(this);
        this.addNewAnswer = this.addNewAnswer.bind(this);
    }
    getInputData(e,data) {
        console.log(data);
        this.props.handlerForSaveAnswerToParentState('blog',data.value,data.id);
    }
    addNewAnswer(){
      console.log(this.props);
      this.props.handlerForSaveAnswerToParentState('blog','',this.props.blogs.length);
    }
    render() {
      console.log(this.props.blogs.length);
      let inputs = this.props.blogs.map((input,index)=>{
        return <Input type='url'  id={index} style={{'width':'90%', 'margin-bottom': '8px'}} value={input}  onChange={this.getInputData} placeholder='enter a blog url for the question ' autoHeight />
      })
        return (
            <div>
                {inputs}
                <Button onClick={this.addNewAnswer} icon><Icon name='plus'/></Button>
            </div>
        );
    }
}
