import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import axios from 'axios';
import {Menu, Segment, Card, Popup, Comment} from 'semantic-ui-react'
export default class AssistantGinniTextReply extends React.Component{
  constructor()
  {
    super();

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

  render(){
    return(
      <Feed id="ginniview">
          <Feed.Event>
              <Feed.Label image='https://unnecessarynewsfromearth.files.wordpress.com/2016/11/computer-bot.jpg?w=700'/>
              <Feed.Content>
                  <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                  <Feed.Extra text>
                  {this.props.text}
                  </Feed.Extra>
                  <Feed.Meta>
                      <Popup trigger={< Icon circular name = 'flag' color = 'green' />} content='Flag' size='mini'/>
                      <Popup trigger={< Icon circular name = 'star' color = 'yellow' onClick={()=>{this.savedquery(this.props.text)}}/>} content='star this message' size='mini'/>
                       <Popup trigger={< Icon circular name = 'like outline' color = 'blue' />} content='Like' size='mini'/>
                      <Popup trigger={< Icon circular name = 'dislike outline' color = 'blue' />} content='Dislike' size='mini'/>
                      <Popup trigger={< Icon circular name = 'delete' color = 'red' />} content='Delete' size='mini'/>
                      <Comment.Action>Reply</Comment.Action>
                  </Feed.Meta>
              </Feed.Content>
          </Feed.Event>
      </Feed>

    )
  }
}
