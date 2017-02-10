import React from 'react';
import ReactDOM from 'react-dom';

import {TextArea, Form, Button, Icon} from 'semantic-ui-react';

export default class TextAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          emptyInput:false
        }
        this.getInputData = this.getInputData.bind(this);
        this.addNewAnswer = this.addNewAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);

    }
    getInputData(e,data) {
        console.log(data);
        this.setState({emptyInput:false})
        this.props.handlerForSaveAnswerToParentState('text',data.value,data.id);
    }
    removeAnswer(e,data){
      let index = data.id;
      this.props.handlerRemoveAnswer('text',index);
    }
    addNewAnswer(){
      console.log(this.props.texts);
      if(this.props.texts[this.props.texts.length-1].trim()==''){
        this.setState({emptyInput:true});
      }
      else{
        this.setState({emptyInput:false});
        this.props.handlerForSaveAnswerToParentState('text','',this.props.texts.length);
      }
    }
    render() {
      console.log(this.props.texts.length);
      let inputs = this.props.texts.map((input,index)=>{
        console.log(input);
        console.log(index+'index');
        return (
          <div>
          <TextArea style={{'width':'90%','margin-bottom': '8px'}} value={input} id={index} onChange={this.getInputData} placeholder='enter a text answer' autoHeight />
          {this.props.texts.length==1?'':<Button id={index} onClick={this.removeAnswer}><Icon name='minus'/></Button>}
          </div>
        )
      })
        return (
            <div>
              <Form>
                {inputs}
              </Form>
              <Button onClick={this.addNewAnswer} icon><Icon name='plus'/></Button>
              {this.state.emptyInput?<p>Fill the above input field first</p>:''}
            </div>
        );
    }
}
