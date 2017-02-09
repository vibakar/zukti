import React from 'react';
import {Feed, Icon,Label} from 'semantic-ui-react';
import AssistantGinniMoreVideosView from './assistantGinniMoreVideosView';
import AssistantGinniOptions from './assistantGinniOptions';
import VideoPlayer from './videoPlayer';
import UnfurlLink from './UnfurlLink';
  export default class AssistantGinniMixedReply extends React.Component {
    constructor(props) {
        super(props);
        this.displayMoreVideos =this.displayMoreVideos.bind(this);
        this.playVideo =this.playVideo.bind(this);
    }
    playVideo(){
      let videoUrl = this.props.videos[0].value;
      this.props.handleGinniReply([<VideoPlayer url={videoUrl} />]);
    }
    displayMoreVideos(){
      let ginniReply = [];
      let videosResponseArray = this.props.videos;
      videosResponseArray.shift();
      videosResponseArray.forEach((video)=>{
        ginniReply.push(<AssistantGinniMoreVideosView value={video.value}/>)
      })
      this.props.handleGinniReply(ginniReply);
    }
      render() {
        let videoUrl = this.props.videos[0].value;
          return (
              <Feed id="ginniview">
                  <Feed.Event>
                      <Feed.Label image='../../images/geniebot.jpg'/>
                      <Feed.Content>
                          <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                          <Feed.Extra images>
                              <UnfurlLink url ={videoUrl}/>
                          </Feed.Extra>
                          <Feed.Extra>
                            <Label.Group color='blue'>
                                {this.props.videos.length > 1
                                    ? <Label onClick={this.displayMoreVideos}>View more videos</Label>
                                    : ''}
                                <Label onClick={this.playVideo}>Play video</Label>
                            </Label.Group>
                          </Feed.Extra>
                          <AssistantGinniOptions type='video' value={videoUrl}/>
                      </Feed.Content>
                  </Feed.Event>
              </Feed>
          );
      }
  }
