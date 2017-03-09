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
    /* @yuvashree: added function to play video on clicking the button */
    playVideo() {
        let videoUrl = this.props.data.video[0].value;
        this.props.handleGinniReply([< VideoPlayer url = {
                videoUrl
            } />]);
    }
    render() {
      let text = '';
      /* @yuvashree: edited code for text view */
      if(this.props.data.text) {
        text = this.props.data.text[0].value;
        return (
              <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Summary> {text} </Feed.Summary>
                      <Feed.Extra>
                        <hr/>
                        <p>
                        Hope my answer helped you.
                        You can also view blogs and videos on it</p>
                         <Label.Group>
                             {this.props.data.blog
                                 ? <Label onClick={this.displayBlogs}
                                   basic color='orange' id='cursor'>Blogs</Label>
                                 : ''}
                             {this.props.data.video
                                 ? <Label onClick={this.displayVideos}
                                   basic color='orange' id='cursor'>Videos</Label>
                                 : ''}
                                 <AssistantGinniOptions question={this.props.question}
                                   type='text' value={text}/>
                         </Label.Group>
                     </Feed.Extra>
                        <Feed.Extra id='assistantViewUserDate'>
                            {this.props.data.time}
                        </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
        );
      }
      /* @threkashri: edited code for displaying image */
    else if (this.props.data.image) {
      // text = this.props.data.image[0].value;
      let imageURL = this.props.data.image[0].value;
      console.log(imageURL);
      text = <img src={imageURL}></img>
      return (
        <Feed id="ginniview">
        <Feed.Event>
            <Feed.Content id = 'ginniviewKeyword'>
                <Feed.Summary> {text} </Feed.Summary>
                <AssistantGinniOptions question={this.props.question}
                  type='text' value={text}/>
                  <Feed.Extra id='assistantViewUserDate'>
                      {this.props.data.time}
                  </Feed.Extra>
            </Feed.Content>
        </Feed.Event>
      </Feed>
      );
    }
    /* @yuvashree: edited code for displaying blogs */
      let blog = '';
      if(this.props.data.blog) {
        blog = this.props.data.blog[0].value;
        console.log(blog);
      return (
            <Feed id="ginniview">
            <Feed.Event>
                <Feed.Content id = 'ginniviewKeyword'>
                  <Feed.Extra>
                    <UnfurlLink url ={blog}/>
                </Feed.Extra>
                <Feed.Extra>
                    <Label.Group>
                        {this.props.data.blog.length - 1 > 0
                            ? <Label onClick={this.displayBlogs}
                              basic color='orange' id='cursor'>Blogs</Label>
                            : ''}
                            <AssistantGinniOptions question={this.props.question}
                              type='text' value={text}/>
                    </Label.Group>
                  </Feed.Extra>
                      <Feed.Extra id='assistantViewUserDate'>
                          {this.props.data.time}
                      </Feed.Extra>
                </Feed.Content>
            </Feed.Event>
          </Feed>
      );
    }
    /* @yuvashree: edited code for displaying videos */
    let video = '';
    if(this.props.data.video) {
      video = this.props.data.video[0].value;
      console.log(video);
    return (
          <Feed id="ginniview">
          <Feed.Event>
              <Feed.Content id = 'ginniviewKeyword'>
                <Feed.Extra>
                  <UnfurlLink url ={video}/>
              </Feed.Extra>
              <Feed.Extra>
                  <Label.Group>
                      {this.props.data.video.length - 1 > 0
                          ? <Label onClick={this.displayVideos}
                            basic color='orange' id='cursor'>Videos</Label>
                          : ''}
                          {/* @yuvashree: added button to play video */}
                            <Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label>
                            <AssistantGinniOptions question={this.props.question}
                              type='text' value={text}/>
                  </Label.Group>
              </Feed.Extra>
                    <Feed.Extra id='assistantViewUserDate'>
                        {this.props.data.time}
                    </Feed.Extra>
              </Feed.Content>
          </Feed.Event>
        </Feed>
    );
  }
      }
}
