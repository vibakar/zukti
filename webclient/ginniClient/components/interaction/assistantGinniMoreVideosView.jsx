import React from 'react';
import {Feed, Label, Modal} from 'semantic-ui-react';
import UnfurlLink from './unfurlLink';
import AssistantGinniOptions from './assistantGinniOptions';
import VideoPlayer from './videoPlayer';
import CodeAssistant from '../../../Multi_Lingual/Wordings.json';
import ReactPlayer from 'react-player';
export default class AssistantGinniMoreVideosView extends React.Component {
    // props validation
    constructor(props) {
        super(props);
        this.playVideo = this.playVideo.bind(this);
    }
    playVideo() {
          let videoUrl = this.props.value;
          console.log('url'+videoUrl);

      }
    /* @threkashri: edited code for displaying more Videos */
    render() {
      return (
        <Feed id="ginniview">
            <Feed.Event>
                <Feed.Content id = 'ginniviewKeyword'>
                    <Feed.Summary><UnfurlLink url={this.props.value}/></Feed.Summary>
                    <AssistantGinniOptions question={this.props.question} type='video' value={this.props.value}/>
                    <Modal closeOnRootNodeClick={false} closeIcon='close' trigger = {<Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label>}> <Feed id='assistantView'>
                                                            <Feed.Event>
                                                                <Feed.Label image='../../images/geniebot.jpg'/>
                                                                <Feed.Content>
                                                                    <Feed.Summary date={new Date().toLocaleString()} user={CodeAssistant.Interaction.name}/>
                                                                    <Feed.Extra >
                                                                      <ReactPlayer height={455} width={810} url={this.props.value} playing={false} controls={true}/>
                                                                    </Feed.Extra>
                                                                </Feed.Content>
                                                            </Feed.Event>
                                                        </Feed></Modal>

                    {/* <Label onClick={this.playVideo} basic color='orange' id='cursor'>Play video</Label> */}
                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
    }
}
