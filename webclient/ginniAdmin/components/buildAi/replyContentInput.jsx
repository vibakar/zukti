import React from 'react';
import Axios from 'axios';
import TextAnswer from './answerContentType/textAnswer';
import VideoAnswer from './answerContentType/videoAnswer';
import BlogAnswer from './answerContentType/blogAnswer';
import CodeSnippetAnswer from './answerContentType/codeSnippetAnswer';
import Config from '../../../../config/url';

export default class ReplyContentInput extends React.Component {
    constructor(props) {
        super(props);
        // function to save question set response to the database
        // it is passed and an props to respective Answer Content type component and will save the response according to  response type
        this.saveAnswer=this.saveAnswer.bind(this);
    }
    // will be indirectly called from respective anwer content type
    saveAnswer(answer,type){
      // endpoint to add answer to a specific questionsAnswerSet
      let url=Config.url+'/qa/addAnswer';
      // node id where the answer will be saved
      let questionsAnswerSetID=this.props.questionsAnswerSetID;
      //ajax call to above endpoint
      //type variable to indentify text video blog code snippet answer
      Axios.post(url,{id:questionsAnswerSetID, answer:answer,type:type}).
      then((response)=>{
        alert('Answer added succesfully');
      }).
      catch((error)=>{
        alert(error);
      });
    }
    render() {
        switch (this.props.replyContentType) {
            case 'text':
                {
                    return <TextAnswer handlerForSaveAnswer={this.saveAnswer} />
                }
            case 'video':
                {
                    return <VideoAnswer handlerForSaveAnswer={this.saveAnswer}/>
                }
            case 'blog':
                {
                  return <BlogAnswer handlerForSaveAnswer={this.saveAnswer}/>
                }
            case 'codeSnippet':
                {
                  return <CodeSnippetAnswer handlerForSaveAnswer={this.saveAnswer}/>
                }
        }
    }
}
