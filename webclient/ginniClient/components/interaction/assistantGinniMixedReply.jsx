import React from 'react';
import {Feed, Label} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';
import AssistantGinniMoreTextDisplay from './assistantGinniMoreTextDisplay';
import AssistantGinniPlainText from './assistantGinniPlainText';
import AssistantGinniOptions from './assistantGinniOptions';
import AssistantGinniKeywordResponse from './assistantGinniKeywordResponse';
import VideoPlayer from './videoPlayer';
import UnfurlLink from './unfurlLink';
//import CodeAssistantConfig from '../../../config/codeAssistant.json'

import './chatcontainerstyle.css';
import CodeAssistant from '../../../Multi_Lingual/Wordings.json';

export default class AssistantGinniMixedReply extends React.Component {
    // props validation
    static propTypes = {
        handleGinniReply: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.displayMoreText = this.displayMoreText.bind(this);
        this.displayVideos = this.displayVideos.bind(this);
        this.displayBlogs = this.displayBlogs.bind(this);
        this.playVideo = this.playVideo.bind(this);
    }
    displayMoreText() {
        let textResponseArray = this.props.data.text;
        textResponseArray.shift();
        let ginniReply = textResponseArray.map((answer, index) => {
            return <AssistantGinniMoreTextDisplay
              question={this.props.question} textValue={answer.value}/>
        });
        this.props.handleGinniReply(ginniReply);
    }
    displayVideos() {
        let ginniReply = [<AssistantGinniPlainText value = 'Here is a top rated video for you' />];
        ginniReply.push(<AssistantGinniVideoDisplay
          question={this.props.question} handleGinniReply={this.props.handleGinniReply}
          videos={this.props.data.video}/>);
        this.props.handleGinniReply(ginniReply);
    }
    displayBlogs() {
        let ginniReply = [<AssistantGinniPlainText value = 'The most top rated blog for you is' />];
        ginniReply.push(<AssistantGinniUrlDisplay
          question={this.props.question} handleGinniReply={this.props.handleGinniReply}
          blogs={this.props.data.blog}/>);
        this.props.handleGinniReply(ginniReply);
    }
    playVideo() {
        let videoUrl = this.props.data.video[0].value;
        this.props.handleGinniReply([< VideoPlayer url = {
                videoUrl
            } />]);
    }
    render() {
      let text = '';
      if(this.props.data.text) {
        text = this.props.data.text[0].value;

        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                        <Feed.Extra extras>
                           {this.props.data.extras}
                         </Feed.Extra>
                        <Feed.Extra text>
                            {text}
                        </Feed.Extra>
                        <AssistantGinniOptions question={this.props.question}
                          type='text' value={text}/>
                    </Feed.Content>
                </Feed.Event>
              </Feed>
        );
      }

    else if (this.props.data.image) {
      // text = this.props.data.image[0].value;
      let imageURL = this.props.data.image[0].value;
      console.log(imageURL);
      text = <img src={imageURL}></img>
      return (
          <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Label image='../../images/geniebot.jpg' />
                  <Feed.Content>
                      <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                      <Feed.Extra extras>
                         {this.props.data.extras}
                       </Feed.Extra>
                      <Feed.Extra text>
                          <a title='click to open the image in new tab' href={imageURL} target='_blank'>{text}</a>
                      </Feed.Extra>
                      <AssistantGinniOptions question={this.props.question}
                        type='text' value={text}/>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
      );
    }
      let blog = '';
      if(this.props.data.blog) {
        blog = this.props.data.blog[0].value;
        console.log(blog);
      return (
          <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Label image='../../images/geniebot.jpg'/>
                  <Feed.Content>
                      <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                      <Feed.Extra>
                          <UnfurlLink url ={blog}/>
                      </Feed.Extra>
                      <AssistantGinniOptions question={this.props.question}
                        type='blog' value={blog}/>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
      );
    }
    let video = '';
    if(this.props.data.video) {
      video = this.props.data.video[0].value;
      console.log(video);
    return (
        <Feed id="ginniview">
            <Feed.Event>
                <Feed.Label image='../../images/geniebot.jpg'/>
                <Feed.Content>
                    <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                    <Feed.Extra>
                        <UnfurlLink url ={video}/>
                    </Feed.Extra>
                    <Feed.Extra>
                        <Label.Group>
                            {this.props.data.video.length - 1 > 0
                                ? <Label onClick={this.displayVideos}
                                  basic color='orange' id='cursor'>Videos</Label>
                                : ''}
                        </Label.Group>
                        <Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label>
                    </Feed.Extra>
                    <AssistantGinniOptions question={this.props.question}
                      type='video' value={video}/>
                </Feed.Content>
            </Feed.Event>
          </Feed>
    );
  }
      }
}
