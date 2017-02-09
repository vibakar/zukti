import React from 'react';
import {Feed,Popup,Icon} from 'semantic-ui-react';
import Axios from 'axios';
export default class AssistantGinniOptions extends React.Component{
  constructor(props){
    super(props);
  ///  this.saveForReference = this.saveForReference.bind(this);
    this.state={
      upvote:true,
      color:'blue',
      likeStatus:'like',
      likeSize:'mini'
    }
    this.upvoteAnswer = this.upvoteAnswer.bind(this);
  }
  upvoteAnswer(type,value){
    if(this.state.likeStatus=='like'){      
      console.log('inside upvoteAnswer');
      Axios.post('/qa/upvoteAnswer',{type:this.props.type,value:this.props.value}).
      then((response)=>{
        console.log(response);
      }).
      catch((error)=>{
        console.log(error);
      });
      this.setState({upvote:false,color:'red',likeStatus:'liked',likeSize:'small'});
    }
  }
  render(){
    return(
      <Feed.Meta>
          <Popup trigger={<Icon circular name = 'flag' color = 'purple' />} content='Flag' size='mini'/>
          <Popup trigger={<Icon circular name = 'save' color = 'green'/>}   content='save this message' size='mini'/>
          <Popup trigger={<Icon circular disabled={this.state.upvote} name = 'like outline' color = {this.state.color} onClick={this.upvoteAnswer} />} content={this.state.likeStatus} size={this.state.likeSize}/>
          <Popup trigger={<Icon circular name = 'dislike outline' color = 'blue' />} content='Dislike' size='mini'/>
      </Feed.Meta>
    )
  }
}
