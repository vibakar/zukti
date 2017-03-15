import React from 'react';
import {Feed, Label, Modal} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';
import AssistantGinniOptions from './assistantGinniOptions';
import UnfurlLink from './unfurlLink';
import CodeAssistant from '../../../Multi_Lingual/Wordings.json';
import AssistantGinniMoreVideosView from './assistantGinniMoreVideosView';
import ReactPlayer from 'react-player';
import BlogList from './assistantBlogList';


export default class AssistantGinniMixedReply extends React.Component {
    constructor(props) {
        super(props);


        this.displayVideos = this.displayVideos.bind(this);
        this.displayMoreVideos = this.displayMoreVideos.bind(this);
        this.displayBlogs = this.displayBlogs.bind(this);
        this.playVideo = this.playVideo.bind(this);
        // this.changeBlog = this.changeBlog.bind(this);
        //  this.state = {
        //    currentBlog: blog
        //  };
    }
    /* @sundaresan: video display */
    displayMoreVideos() {
        let ginniReply = [];
        let videosResponseArray = this.props.data.video;
        videosResponseArray.shift();
        videosResponseArray.forEach((video) => {
            ginniReply.push(<AssistantGinniMoreVideosView handleGinniReply={this.props.handleGinniReply} question={this.props.question} value={video}/>);
        });
        this.props.handleGinniReply(ginniReply);
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
        console.log(this.props.data.video[0]);
        let videoUrl = this.props.data.video[0];
        console.log(videoUrl);
    }
    // changeBlog(newBlog) {
    //   console.log('url changed: ', newBlog);
    //   this.setState({
    //     currentBlog: newBlog
    //   });
    // }
    render() {
      /* @yuvashree: edited code for displaying videos */
      if(this.props.data.blog === undefined)
      {
        let video = this.props.data.video[0];
        return (
          <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Extra>
                          <Label.Group>
                              {this.props.data.video.length - 1 > 0
                                  ? <Label onClick={this.displayvideos}
                                    basic color='orange' id='cursor'>Videos</Label>
                                  : ''}
                                  <Modal
                                    closeOnRootNodeClick={false}
                                    closeIcon='close'
                                    trigger={<Label onClick={this.playVideo} basic color = 'orange' id = 'cursor' > Play video </Label>}>
                                      <Feed id='assistantView'>
                                          <Feed.Event>
                                              <Feed.Label image='../../images/geniebot.jpg'/>
                                              <Feed.Content>
                                                  <Feed.Summary date={new Date().toLocaleString()} user={CodeAssistant.Interaction.name}/>
                                                  <Feed.Extra >

                                                      <ReactPlayer height={455} width={810} url={this.props.data.video[0]} playing={false} controls={true}/>
                                                  </Feed.Extra>
                                              </Feed.Content>
                                          </Feed.Event>
                                      </Feed>
                                  </Modal>
                                  <AssistantGinniOptions question={this.props.question}
                                    type='blog' value={video}/>
                          </Label.Group>
                      </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
            );
            }
            /* @yuvashree: edited code for displaying blogs */
            else {
                let blog = this.props.data.blog[0];
              let data = '';
        if(this.props.data.blog.length >1) {
          data = (
            <Modal closeIcon='close' closeOnRootNodeClick={false} trigger = {<Label
              basic color='orange' id='cursor'>Blogs</Label>}>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image='../../images/geniebot.jpg'/>
                                <Feed.Content>
                                    <Feed.Summary date={new Date().toLocaleString()} user={CodeAssistant.Interaction.name}/>
                                    <Modal.Description images>
                                  <UnfurlLink url ={blog}/>
                                    </Modal.Description>
                                    <Feed.Extra>
                                      <Modal.Content >
                                      <br></br><BlogList blogList= {this.props.data.blog} />
                                      </Modal.Content>
                                    </Feed.Extra>
                                    <br></br><AssistantGinniOptions  question={this.props.question}
                                      type='blog' value={blog}/>
                                </Feed.Content>
                            </Feed.Event>
                          </Feed>
                         </Modal>
          );
        }
              return (
                <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Summary>
                        {/* <UnfurlLink url ={blog}/> */}
                      </Feed.Summary>
                      <Feed.Extra>
                          <Label.Group>
                            {data}

                                  <AssistantGinniOptions question={this.props.question}
                                    type='blog' value={blog}/>
                          </Label.Group>
                      </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
            </Feed>
                  );
            }
    }
}
