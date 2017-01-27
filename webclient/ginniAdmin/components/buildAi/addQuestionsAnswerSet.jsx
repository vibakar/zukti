import React  from 'react';
import Axios from 'axios';
import {Button,Icon} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class AddQuestionsAnswerSet extends React.Component{
  constructor(props){
    super(props);
    this.createQuestionSetBlock=this.createQuestionSetBlock.bind(this);
  }
  createQuestionSetBlock() {
      let url =Config.url+'/qa/addQuestionAnswerSet';
      console.log(url);
      Axios.post(url).
      then((response)=>{
        this.props.handlerNewQuestionsAnswerSet(response.data.id)
      }).
      catch((error)=>{
        alert(error)
      });
//      this.state.questionSetBlock.push(<QuestionsAnswer questionSetID={this.state.questionSetBlock.index} removeRuleBlockHandler={this.removeQuestionSetBlock}/>);
//      this.setState({rulesBLock: this.state.rulesBlock});
  }
  render(){
    return(
      <div>
          <Button onClick={this.createQuestionSetBlock} color='red'><Icon name='plus'/>Add Questions Answer Set</Button>
      </div>
    );
  }
}
