import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';
import axios from 'axios';

export default class AssistantGinniMixedReply extends React.Component {
    // props validation
    static propTypes = {
        handleGinniReply: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        // function to show videos url feteched from response
        this.displayVideoUrl = this.displayVideoUrl.bind(this);
        this.displayBlogUrl = this.displayBlogUrl.bind(this);
          this.savedquery=this.savedquery.bind(this);
    }
    savedquery(message)
      {
          alert(message);
            console.log(message);

            axios({
                url: ' http://localhost:8080/clientinformation',
                method: 'get'
            }).then(function(response) {
                console.log("email"+response.data[0].local.email);
                      axios({
                        url: 'http://localhost:8080/savequery/answeredquery',
                        method:'POST',
                        data: {email:response.data[0].local.email,
                              savedquery:{question:"",answer:message}}
                      }).then(function(msg) {
                          console.log(msg);
                      }).catch(function(err) {
                          console.log(err);
                      });

            }).catch(function(err) {
                // alert("bjhbj"+err);
            });
          }


    displayVideoUrl() {
        console.log(this.props.data);
        let ginniReply = [<AssistantGinniVideoDisplay message='Here are some videos' url={this.props.data.videoUrl}/>];
        this.props.handleGinniReply(ginniReply);
    }
    displayBlogUrl() {
        let ginniReply = [<AssistantGinniUrlDisplay message='Here are some blogs' url={this.props.data.blogUrl}/>];
        this.props.handleGinniReply(ginniReply);
    }
    render() {
        let text = this.props.data.textAnswer;
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='https://unnecessarynewsfromearth.files.wordpress.com/2016/11/computer-bot.jpg?w=700'/>
                    <Feed.Content>
                        <Feed.Summary date={this.props.data.time} user='Genie'/>
                        <Feed.Extra text>
                            {text}
                        </Feed.Extra>
                        <Feed.Extra>
                            <Label.Group color='blue'>
                                {this.props.data.blogUrl?<Label onClick={this.displayBlogUrl}>Blogs</Label>:''}
                                {this.props.data.videoUrl?<Label onClick={this.displayVideoUrl}>Videos</Label>:''}
                            </Label.Group>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Popup trigger={< Icon circular name = 'flag' color = 'green' />} content='Flag' size='mini'/>
                          <Popup trigger={< Icon circular name = 'star' color = 'yellow' onClick={()=>{this.savedquery(this.props.data.textAnswer)}}/>} content='star this message' size='mini'/>
                            <Popup trigger={< Icon circular name = 'like outline' color = 'blue' />} content='Like' size='mini'/>
                            <Popup trigger={< Icon circular name = 'dislike outline' color = 'blue' />} content='Dislike' size='mini'/>
                            <Popup trigger={< Icon circular name = 'delete' color = 'red' />} content='Delete' size='mini'/>
                            <Comment.Action>Reply</Comment.Action>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
