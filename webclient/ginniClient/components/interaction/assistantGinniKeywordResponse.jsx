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
    playVideo() {
        let videoUrl = this.props.data.video[0].value;
        this.props.handleGinniReply([< VideoPlayer url = {
                videoUrl
            } />]);
    }
    render() {
      if(this.props.data.blog === undefined)
      {
        let video = this.props.data.video[0];
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                        <Feed.Extra >
                            <UnfurlLink url ={video}/>
                        </Feed.Extra>
                        <Feed.Extra>
                            <Label.Group>
                                {this.props.data.video.length - 1 > 0
                                    ? <Label onClick={this.displayVideos}
                                      basic color='orange' id='cursor'>Videos</Label>
                                    : ''}
                                {this.props.data.blog
                                    ? <Label onClick={this.displayBlogs}
                                      basic color='orange' id='cursor'>Blogs</Label>
                                    : ''}
                            </Label.Group>
                        </Feed.Extra>
                        <Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label>
                        <AssistantGinniOptions question={this.props.question}
                          type='video' value={video}/>
                    </Feed.Content>
                </Feed.Event>
              </Feed>
            );
            }
            else {
              let blog = this.props.data.blog[0];
              return (
                  <Feed id="ginniview">
                      <Feed.Event>
                          <Feed.Label image='../../images/geniebot.jpg'/>
                          <Feed.Content>
                              <Feed.Summary date={this.props.data.time} user={CodeAssistant.Interaction.name}/>
                              <Feed.Extra >
                                  <UnfurlLink url ={blog}/>
                              </Feed.Extra>
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
                                  </Label.Group>
                              </Feed.Extra>
                              <AssistantGinniOptions question={this.props.question}
                                type='blog' value={blog}/>
                          </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  );
            }
    }
}
