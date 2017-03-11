import React from 'react';
import {Feed, Label} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';
import AssistantGinniOptions from './assistantGinniOptions';
import VideoPlayer from './videoPlayer';
import UnfurlLink from './unfurlLink';
import CodeAssistant from '../../../Multi_Lingual/Wordings.json';
export default class AssistantGinniMixedReply extends React.Component {
    constructor(props) {
        super(props);
        this.displayVideos = this.displayVideos.bind(this);
        this.displayBlogs = this.displayBlogs.bind(this);
        this.playVideo = this.playVideo.bind(this);
    }
    displayVideos() {
        let ginniReply = [];
        let videos = this.props.data.video.map((item, index)=>{
            return {value: item};
          });
        videos.shift();
        ginniReply.push(<AssistantGinniVideoDisplay
          question={this.props.question}
          handleGinniReply={this.props.handleGinniReply} videos={videos}/>);
        this.props.handleGinniReply(ginniReply);
    }
    displayBlogs() {
        let ginniReply = [];
        let blogs = this.props.data.blog.map((item, index)=>{
            return {value: item};
        });
        blogs.shift();
        ginniReply.push(<AssistantGinniUrlDisplay
          question={this.props.question} handleGinniReply={this.props.handleGinniReply}
          blogs={blogs}/>);
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
    let datelocal = this.props.data.time;
    let storedTime;
    if(datelocal[21] === 'M'){
      storedTime = datelocal[11]+datelocal[12]+datelocal[13]
      +datelocal[14]+datelocal[15]+datelocal[16]+datelocal[17]+datelocal[18]
      +datelocal[19]+datelocal[20]+datelocal[21];
      }
      else{
          storedTime = datelocal[11]+datelocal[12]+datelocal[13]
          +datelocal[14]+datelocal[15]+datelocal[16]+datelocal[17]+datelocal[18]
          +datelocal[19]+datelocal[20];
      }
      /* @yuvashree: edited code for displaying videos */
      if(this.props.data.blog === undefined)
      {
        let video = this.props.data.video[0];
        return (
          <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Summary> <UnfurlLink url ={video}/></Feed.Summary>
                      <Feed.Extra>
                          <Label.Group>
                              {this.props.data.video.length - 1 > 0
                                  ? <Label onClick={this.displayvideos}
                                    basic color='orange' id='cursor'>Videos</Label>
                                  : ''}
                              {this.props.data.blog
                                  ? <Label onClick={this.displayBlogs}
                                    basic color='orange' id='cursor'>Blogs</Label>
                                  : ''}
                                  <Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label>
                                  <AssistantGinniOptions question={this.props.question}
                                    type='blog' value={video}/>
                          </Label.Group>
                      </Feed.Extra>
                        <Feed.Extra id='assistantViewUserDate'>
                            {storedTime}
                        </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
            );
            }
            /* @yuvashree: edited code for displaying blogs */
            else {
              let blog = this.props.data.blog[0];
              return (
                <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Summary> <UnfurlLink url ={blog}/></Feed.Summary>
                      <Feed.Extra>
                          <Label.Group>
                              {this.props.data.blog.length - 1 > 0
                                  ? <Label onClick={this.displayBlogs}
                                    basic color='orange' id='cursor'>Blogs</Label>
                                  : ''}
                              {this.props.data.video
                                  ? <Label onClick={this.displayVideos}
                                    basic color='orange' id='cursor'>Videos</Label>
                                  : ''}
                                  <AssistantGinniOptions question={this.props.question}
                                    type='blog' value={blog}/>
                          </Label.Group>
                      </Feed.Extra>
                        <Feed.Extra id='assistantViewUserDate'>
                            {storedTime}
                        </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
                  );
            }
    }
}
