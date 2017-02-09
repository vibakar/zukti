import React from 'react';
import {Feed, Popup, Icon, Label} from 'semantic-ui-react';
import Axios from 'axios';
export default class AssistantGinniOptions extends React.Component {
    constructor(props) {
        super(props);
        ///  this.saveForReference = this.saveForReference.bind(this);
        this.state = {
            likeEnabled: true,
            dislikeEnabled: true,
            likeDislikeMsg: ' '
        }
        this.upvoteAnswer = this.upvoteAnswer.bind(this);
        this.downVoteAnswer = this.downVoteAnswer.bind(this);
        this.savedQuery = this.savedQuery.bind(this);
    }
    upvoteAnswer(type, value) {
        console.log('inside upvoteAnswer');
        if (this.state.likeEnabled) {
            Axios.post('/qa/rateAnswer', {
                liked: true,
                type: this.props.type,
                value: this.props.value
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        this.setState({likeEnabled: false, likeDislikeMsg: 'Liked'});
    }
    downVoteAnswer(type, value) {
        if (this.state.disliked) {
            Axios.post('/qa/rateAnswer', {
                liked: false,
                type: this.props.type,
                value: this.props.value
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        this.setState({dislikeEnabled: false, likeDislikeMsg: 'Disliked'});
    }

    savedQuery(message)
    {
      console.log(this.props.value);
      console.log(this.props.question);
      let question = this.props.question;
      let savedResponse = this.props.value;
      let responseType = this.props.type;
      let date = new Date().toLocaleString();
      Axios.post('/bookmarks',{question:question,savedResponse:savedResponse,responseType:responseType,date:date}).
      then((response)=>{
        console.log(response);
      }).
      catch((error)=>{
        console.log(error);
      });
    }
    render() {
        let likeDislikeMsg = this.state.likeDislikeMsg;
        console.log(likeDislikeMsg);
        return (

            <Feed.Meta>
                <Popup trigger={< Icon circular name = 'flag' color = 'purple' />} content='Flag' size='mini'/>
                <Popup trigger={< Icon circular name = 'save' color = 'green' onClick={this.savedQuery} />} content='save this message' size='mini'/>
                 {this.state.likeEnabled && this.state.dislikeEnabled
                    ? <Popup trigger={< Icon circular name = 'like outline' color = 'blue' onClick = {
                            this.upvoteAnswer
                        } />} content='like' size='mini'/>
                    : ''}
                {this.state.likeEnabled && this.state.dislikeEnabled
                    ? <Popup trigger={< Icon circular name = 'dislike outline' color = 'blue' onClick = {
                            this.downVoteAnswer
                        } />} content='dislike' size='mini'/>
                    : ''}
                {!this.state.likeEnabled || !this.state.dislikeEnabled
                    ? <Label as='a'>{likeDislikeMsg}</Label>
                    : ''}
            </Feed.Meta>
        )
    }
}
