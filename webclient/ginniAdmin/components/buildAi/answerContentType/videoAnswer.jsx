import React from 'react';
import ReactDOM from 'react-dom';

import {TextArea, Form, Button, Icon} from 'semantic-ui-react';

export default class videoAnswer extends React.Component {
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
        this.props.handlerForSaveAnswerToParentState('video',data.value,data.id);
    }
    removeAnswer(e,data){
      let index = data.id;
      this.props.handlerRemoveAnswer('video',index);
    }
    addNewAnswer(){
      console.log(this.props.videos);
      if(this.props.videos[this.props.videos.length-1].trim()==''){
        this.setState({emptyInput:true});
      }
      else{
        this.setState({emptyInput:false});
        this.props.handlerForSaveAnswerToParentState('video','',this.props.videos.length);
      }
    }
    render() {
      console.log(this.props.videos.length);
      let inputs = this.props.videos.map((input,index)=>{
        console.log(input);
        console.log(index+'index');
        return (
          <div>
          <TextArea style={{'width':'90%','margin-bottom': '8px'}} value={input} id={index} onChange={this.getInputData} placeholder='enter a video url' autoHeight />
          {this.props.videos.length==1?'':<Button id={index} onClick={this.removeAnswer}><Icon name='minus'/></Button>}
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
